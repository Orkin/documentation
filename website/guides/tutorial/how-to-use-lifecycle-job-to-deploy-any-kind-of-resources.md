---
last_modified_on: "2022-12-25"
$schema: "/.meta/.schemas/guides.json"
title: How To Use Lifecycle Job To Deploy Any Kind Of Resources
description: Learn how to use Lifecycle Job to deploy any kind of resources with Qovery.
author_github: https://github.com/evoxmusic
tags: ["type: tutorial", "technology: qovery"]
hide_pagination: true
---

import Steps from '@site/src/components/Steps';
import Alert from '@site/src/components/Alert';
import Assumptions from '@site/src/components/Assumptions';

The [Lifecycle Job][docs.using-qovery.configuration.lifecycle-job] is a powerful feature that allows you to run any kind of commands before or after your environment is deployed. It can be used to run database migrations, create a new database, or even to run a script that will create a new user.

Some use cases:

- Run Terraform, Pulumi, or any other infrastructure as code tool to create resources.
- You want to deploy SQS, SNS, Lambdas, or any other AWS resources.
- You want to deploy MongoDB Atlas, Google BigQuery, or any other cloud services.
- Seed your database when your environment is created.

<Alert type="success">

You can find some Lifecycle Jobs examples on our [GitHub](https://github.com/Qovery/lifecycle-job-examples).

</Alert>

In a more general way, you can see the Lifecycle Job as a way to create and destroy resources when your environment is deployed or deleted. Possibilities are endless.

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/guides/tutorial/how-to-use-lifecycle-job-to-deploy-any-kind-of-resources.md.erb
-->

## How to use Lifecycle Job (example with Terraform)

In this example, we will use Terraform to create a new AWS RDS MySQL instance. I will use [this example](https://github.com/Qovery/lifecycle-job-examples/tree/main/examples/aws-rds-with-terraform) to schematize the process of using the Lifecycle Job. ⚠️ Note that you can use any other tool to create your resources. Lifecycle Job is not limited to Terraform. However, Terraform is a great way to show the power of the Lifecycle Job since it requires a lot of configuration and can be used to create a lot of different resources.

<Alert type="info">

In our example, we use S3 as a Terraform backend. You can use any other backend you want. However, if you want to use S3, you need to create a new bucket and a new IAM user with the right permissions. You can find more information about this in the [Terraform documentation](https://www.terraform.io/docs/language/settings/backends/s3.html).

</Alert>

### Execution Flow

Here is the execution flow when my Environment is deployed:

1. Qovery builds my Lifecycle Job (and my others services).
2. Qovery runs my Lifecycle Job **Start Event** (and my others services).
3. My Lifecycle Job creates a new AWS RDS MySQL instance.
4. My Lifecycle Job injects the database credentials into a `/qovery-output/qovery-output.json` file.
5. Qovery reads the `/qovery-output/qovery-output.json` file and injects the database credentials into my Environment Variables.
6. My others services can access my database.

When my Environment is deleted:

1. Qovery runs my Lifecycle Job **Deleted Event**
2. My Lifecycle Job destroys the AWS RDS MySQL instance.
3. Qovery destroys my Environment and release all the resources.

### Create a Lifecycle Job

<Assumptions>

- You have a [Qovery account][urls.start_qovery]
- You have an existing project and an existing environment.

</Assumptions>

<Steps headingDepth={3}>
<ol>

<li>

Fork [this repository](https://github.com/Qovery/lifecycle-job-examples).

</li>
<li>

Go inside your Environment, and add a **Lifecycle Job**.

<p align="center">
  <img src="/img/how-to-use-lifecycle-job/1.png" alt="" />
</p>

</li>
<li>

Give a name, description, pick your GitHub account, and select the repository of the Lifecycle Job. In our example, the root application path is `/examples/aws-rds-with-terraform`.

<p align="center">
  <img src="/img/how-to-use-lifecycle-job/2.png" alt="" />
</p>

</li>

<li>

Since we are using Terraform, we want to make sure that our MySQL RDS instance is created when our Environment is deployed. So we select the **Start Event**.
We also want to make sure that our MySQL RDS instance is destroyed when our Environment is deleted. So we select the **Deleted Event**.

<p align="center">
  <img src="/img/how-to-use-lifecycle-job/3.png" alt="" />
</p>

If you look at our [Dockerfile](https://github.com/Qovery/lifecycle-job-examples/blob/main/examples/aws-rds-with-terraform/Dockerfile) in the repository, you will see that we are using the official Terraform image. I have also inserted by default the `ENTRYPOINT ["/bin/sh"]` to simplify the Qovery Lifecycle Job configuration.

For the **Start Event**, we want to run the `terraform apply -no-color -auto-approve` command. We don't need to run the `terraform init` command since it is already done in the [Dockerfile](https://github.com/Qovery/lifecycle-job-examples/blob/main/examples/aws-rds-with-terraform/Dockerfile#L14).

You will also notice that we are also using `&& terraform output -json > /qovery-output/qovery-output.json` to create a `/qovery-output/qovery-output.json` file. This file will be used by Qovery to inject the database credentials into our Environment Variables. We will cover this part later.

For the **Deleted Event**, we want to run the `terraform destroy -no-color -auto-approve` command.

So for the **Start Event**, we have: `["-c","terraform apply -no-color -auto-approve && terraform output -json > /qovery-output/qovery-output.json"]` and for the **Deleted Event**, we have: `["-c","terraform destroy -no-color -auto-approve"]`. Feel free to copy/paste these commands.

<Alert type="warning">

Yes the commands contains a comma. It is not a typo. It is a JSON array. You need to use a comma to separate the elements of the array.

</Alert>

</li>

<li>

I recommend setting the **Timeout** to 1800 seconds (30 minutes). It is the maximum time your Lifecycle Job can run. If your Lifecycle Job takes more than 30 minutes to run it will be stopped by Qovery. In our case, it should take less than 10 minutes to create the AWS RDS MySQL instance. But let's be safe.

<p align="center">
  <img src="/img/how-to-use-lifecycle-job/4.png" alt="" />
</p>

Click **Continue**.

</li>

<li>

Now we need to set the vCPU and RAM required to run our Job. We can allocate 0.5 CPU and 256 MB of RAM. It's more than enough.

<p align="center">
  <img src="/img/how-to-use-lifecycle-job/5.png" alt="" />
</p>

</li>

<li>

We need to set the Environment Variables required by our Lifecycle Job. In our case, we need to set the AWS credentials and some other environment variables. If you look at our [Dockerfile](https://github.com/Qovery/lifecycle-job-examples/blob/main/examples/aws-rds-with-terraform/Dockerfile#L3-L7), you will find the declaration of all those environment variables. You can copy/paste them.

```Dockerfile title="Dockerfile"
...
ARG TF_VAR_terraform_backend_bucket
ARG TF_VAR_aws_region
ARG TF_VAR_aws_access_key_id
ARG TF_VAR_aws_secret_access_key
ARG TF_VAR_qovery_environment_id
...
```

Those are the ones that we need to set.

<Alert type="warning">

1. We do not set here the `TF_VAR_qovery_environment_id` since we will create it in the next step.
2. `TF_VAR_terraform_backend_bucket` is the name of the S3 bucket where Terraform will store the state of your infrastructure. You need to create this bucket on S3 before running the Lifecycle Job. You can use the same bucket for all your Lifecycle Jobs. It is not a problem. You will just need to make sure that the S3 object key is unique.

</Alert>

<p align="center">
  <img src="/img/how-to-use-lifecycle-job/6.png" alt="" />
</p>

Click on **Continue**.

</li>

<li>

Then click on **Create** (and not **Create and Deploy**).

<p align="center">
  <img src="/img/how-to-use-lifecycle-job/7.png" alt="" />
</p>

</li>

Congrats, your Lifecycle Job is created. Now we just need to add the `TF_VAR_qovery_environment_id` environment variable before launching it.

</ol>
</Steps>

### Make your Terraform deployment multi-environments ready

To support multiple environments, we need to make sure that the name of the S3 object key where Terraform will store the state of your infrastructure is unique. To do that, we will use the `TF_VAR_qovery_environment_id` environment variable. This environment variable is automatically created by Qovery and contains the ID of your Environment. We just need to create an environment variable alias.

<Steps headingDepth={3}>
<ol>

<li>

Go inside your **MySQL RDS** service, click on the **Variables** tab.

<p align="center">
  <img src="/img/how-to-use-lifecycle-job/8.png" alt="" />
</p>

</li>

<li>

Search for `QOVERY_ENVIRONMENT_ID` built-in environment variable. Then click on **Creat alias**

<p align="center">
  <img src="/img/how-to-use-lifecycle-job/9.png" alt="" />
</p>

</li>

<li>

Set the name of the environment variable to `TF_VAR_qovery_environment_id` with a **job** scope and click on **Confirm**.

<p align="center">
  <img src="/img/how-to-use-lifecycle-job/10.png" alt="" />
</p>

</li>

</ol>
</Steps>

### Deploy AWS RDS MySQL instance

<Steps headingDepth={3}>
<ol>

<li>

Now you are ready to deploy your Lifecycle Job and see what happened.

<p align="center">
  <img src="/img/how-to-use-lifecycle-job/11.png" alt="" />
</p>

The job execution will take approximately 3 to 10 minutes.

</li>

<li>

Follow the logs of the job execution by clicking on the **Logs** button.

<p align="center">
  <img src="/img/how-to-use-lifecycle-job/12.png" alt="" />
</p>

From the **Deployment logs** tab you can see that your Lifecycle Job is built and that the `terraform init` command is executed.

<p align="center">
  <img src="/img/how-to-use-lifecycle-job/13.png" alt="" />
</p>

From the **MySQL RDS** tab you can see that the `terraform apply -no-color -auto-approve` command is executed. The creation of the AWS RDS MySQL instance is in progress.

<p align="center">
  <img src="/img/how-to-use-lifecycle-job/14.png" alt="" />
</p>

</li>

<li>

Once the deployment is done, you should see that the AWS RDS MySQL instance is green and completed.

<p align="center">
  <img src="/img/how-to-use-lifecycle-job/15.png" alt="" />
</p>

</li>

</ol>
</Steps>

### Get the MySQL RDS credentials from the Lifecycle Job

Now that the AWS RDS MySQL instance is created, we need to get the credentials to connect to it. We have use the `terraform output -json > /qovery-output/qovery-output.json` command to get the credentials. If you go back to the `Variables` tab of your MySQL RDS service, you will see that the `QOVERY_OUTPUT_**` environment variables are created.

<p align="center">
  <img src="/img/how-to-use-lifecycle-job/16.png" alt="" />
</p>

By using `terraform output -json > /qovery-output/qovery-output.json` Qovery automatically create those environment variables for you. You can use them in your application to connect to the AWS RDS MySQL instance. [Learn more on how Lifecycle Job output...][docs.using-qovery.configuration.lifecycle-job#job-output]

<Alert type="success">

Job output is a powerful feature that allows you to get the output of your Lifecycle Job and use it in your application. You can use it to get the credentials of your database, the URL of your S3 bucket, the URL of your CDN, etc...

</Alert>

## FAQ

### What happen if I delete my environment with your example?

If you delete your environment, the AWS RDS MySQL instance will be deleted too. You can see that in the **MySQL RDS** service logs. You will see that the `terraform destroy -no-color -auto-approve` command is executed.

### Can I use the Lifecycle Job to deploy my application?

Some users ask us if they can use the Lifecycle Job to deploy their application. The answer is yes!. The Lifecycle Job is designed to deploy all type of resources. However, we recommend using the official Qovery way to deploy applications. [Learn more on how to deploy your application...][docs.using-qovery.configuration.application]

### What happen if I clone my Environment with the Lifecycle Job?

If you clone an Environment with the Lifecycle Job, the Lifecycle Job will be cloned too. In our example we have set the `TF_VAR_qovery_environment_id` environment variable to the `QOVERY_ENVIRONMENT_ID` built-in environment variable. So when you clone your Environment, the `QOVERY_ENVIRONMENT_ID` built-in environment variable will be different. That's why you need to create a new alias environment variable for the `QOVERY_ENVIRONMENT_ID` built-in environment variable. [Learn more on how to clone an Environment...][docs.using-qovery.configuration.environment#clone-environment]

### What happen if I modify my Lifecycle Job after my Environment is deployed?

If you modify your Lifecycle Job after your Environment is deployed, the Lifecycle Job will be redeployed. In our example, since the state of our AWS RDS MySQL instance is stored in the S3 bucket, the AWS RDS MySQL instance will not be recreated. However, if you modify the `main.tf` file, the AWS RDS MySQL instance will be updated.

## Wrapping up

In this guide, we have seen how to use the Lifecycle Job to create an AWS RDS MySQL instance with Terraform. We have also seen how to get the credentials of the AWS RDS MySQL instance to connect to it from our application. To learn more about the Lifecycle Job, you can read the [Lifecycle Job documentation][docs.using-qovery.configuration.lifecycle-job]. To get more examples, check out the [Qovery Lifecycle Examples repository](https://github.com/Qovery/lifecycle-job-examples).


[docs.using-qovery.configuration.application]: /docs/using-qovery/configuration/application/
[docs.using-qovery.configuration.environment#clone-environment]: /docs/using-qovery/configuration/environment/#clone-environment
[docs.using-qovery.configuration.lifecycle-job#job-output]: /docs/using-qovery/configuration/lifecycle-job/#job-output
[docs.using-qovery.configuration.lifecycle-job]: /docs/using-qovery/configuration/lifecycle-job/
[urls.start_qovery]: https://start.qovery.com
