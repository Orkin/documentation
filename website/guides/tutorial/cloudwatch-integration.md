---
last_modified_on: "2022-11-16"
$schema: "/.meta/.schemas/guides.json"
title: "Integrate your application logs to Cloudwatch"
description: "Add Kubernetes pod logs into Cloudwatch to perform full text search"
author_github: https://github.com/deimosfr
tags: ["type: tutorial", "technology: qovery"]
hide_pagination: true
---
import Jump from '@site/src/components/Jump';
import Alert from '@site/src/components/Alert';
import Assumptions from '@site/src/components/Assumptions';

Qovery provides by default an easy way to get access to your logs through the Console or the CLI. For statistics, debugging or security reasons, you may want to access all logs and perform a full-text search inside them.

Qovery implementation is based on [Loki](https://grafana.com/oss/loki/) for performance and cost-effective reasons. However, Loki is not a full-text search engine. It is a log aggregation system. It is not designed to be queried directly.

<Alert type="info">

Why Qovery does not provides current Loki access?

1. As mentioned Loki is not a full-text search and results may not reflect what you are looking for.
2. Loki is configured to answer usage from Qovery Console and CLI. Using it directly may impact Qovery Console and CLI performances or worst, lose logs and make it irresponsive.

</Alert>

Serveral solutions exists, with and without 3rd parties. We will cover here a solution without a third party. But if you're interrested, you can take a look at [Datadog integration][guides.tutorial.kubernetes-observability-and-monitoring-with-datadog].

Note: in this tutorial, we are using Fluent-bit with proposed solutions above. However, if none of those solutions suits your needs, feel free to look at supported solution on the official website.

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/guides/tutorial/cloudwatch-integration.md.erb
-->

## AWS permissions for Cloudwatch

We will create a dedicated service account (note: STS account can be used, but for simplicity reasons, we will use a dedicated service account).

On IAM create a policy with the following permissions, and name this policy `fluent-bit-write-policy`:

<p Valign="center">
  <img src="/img/aws-cloudwatch/fluent-bit-policy-content.png" alt="policy content" />
</p>

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "CloudWatchLogs",
            "Effect": "Allow",
            "Action": [
                "logs:CreateLogGroup",
                "logs:CreateLogStream",
                "logs:PutRetentionPolicy",
                "logs:PutLogEvents"
            ],
            "Resource": "arn:aws:logs:*:*:*"
        }
    ]
}
```

<p Valign="center">
  <img src="/img/aws-cloudwatch/fluent-bit-policy-create.png" alt="policy create" />
</p>

<Alert type="info">

You can enforce this policy by cluster if you need, by updating the `Resource` content. But we want to keep it simple in this tutorial, so we will apply it to all clusters (so you can reuse the same service account if you want for other clusters).

</Alert>

Once done, let's create a user and attach the policy to it:

<p Valign="center">
  <img src="/img/aws-cloudwatch/fluent-bit-user-create.png" alt="User create" />
</p>

<p Valign="center">
  <img src="/img/aws-cloudwatch/fluent-bit-cloudwatch-permissions.png" alt="User permissions" />
</p>

Finish the user creation and keep credentials for the coming section.

## Helm

Ensure you have the following elements before going ahead:

1. Helm should be installed on your machine. If you don't have it, you can follow the [official documentation](https://helm.sh/docs/intro/install/).
2. You need Kubeconfig configuration file and permissions to access the cluster. You can use the same documentation as kubectl to [get the kubeconfig file][guides.tutorial.how-to-connect-to-your-eks-cluster-with-kubectl].

We will use [AWS fluent-bit Helm Chart](https://artifacthub.io/packages/helm/aws/aws-for-fluent-bit) to setup logs streaming:

```bash
helm repo add eks https://aws.github.io/eks-charts
```

Create on your workstation a `values.yaml` file to setup your custom configuration and adapt required fields:

```yaml
cloudWatch:
  enabled: true
  region: "<enter your cluster region>"
  logGroupName: "/aws/eks/fluentbit-<enter your cluster region>/logs"
  logRetentionDays: 7

env:
  - name: "AWS_ACCESS_KEY_ID"
    value: "<your access key>"
  - name: "AWS_SECRET_ACCESS_KEY"
    value: "<your secret access key>"

firehose:
  enabled: false

kinesis:
  enabled: false

elasticsearch:
  enabled: false
```

You can take a look at additional configuration options on the [AWS provided chart](https://artifacthub.io/packages/helm/aws/aws-for-fluent-bit) 

Then deploy fluent-bit with the following command:

```bash
helm upgrade --install aws-for-fluent-bit -f values.yaml --namespace fluent-bit --create-namespace eks/aws-for-fluent-bit --version 0.1.21
```

You should start seeing fluent-bit pods. Take a look at the logs to ensure there is no configuration issue.

## Cloudwatch usage

You can now use Cloudwatch to look at your logs. Connect to Cloudwatch, go into the `Logs insight` section, then you can perform queries:

<p Valign="center">
  <img src="/img/aws-cloudwatch/cloudwatch-search.png" alt="cloudwatch search" />
</p>

1. Select the fluent-bit group of logs
2. Create a query ([syntax examples](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html))
3. Run your query
4. See the result and expand to filter on other elements


[guides.tutorial.how-to-connect-to-your-eks-cluster-with-kubectl]: /guides/tutorial/how-to-connect-to-your-eks-cluster-with-kubectl/
[guides.tutorial.kubernetes-observability-and-monitoring-with-datadog]: /guides/tutorial/kubernetes-observability-and-monitoring-with-datadog/
