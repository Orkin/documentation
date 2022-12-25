/*! For license information please see 8d146bfd.d104ef99.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{304:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return m}));var o=n(1),r=n(9),a=(n(0),n(442)),i=n(451),c=n(441),l=n(446),s={last_modified_on:"2022-12-25",$schema:"/.meta/.schemas/guides.json",title:"How To Use Lifecycle Job To Deploy Any Kind Of Resources",description:"Learn how to use Lifecycle Job to deploy any kind of resources with Qovery.",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","technology: qovery"],hide_pagination:!0},b={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"How To Use Lifecycle Job To Deploy Any Kind Of Resources",description:"Learn how to use Lifecycle Job to deploy any kind of resources with Qovery.",permalink:"/guides/tutorial/how-to-use-lifecycle-job-to-deploy-any-kind-of-resources",readingTime:"10 min read",source:"@site/guides/tutorial/how-to-use-lifecycle-job-to-deploy-any-kind-of-resources.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"How To Use Lifecycle Job To Deploy Any Kind Of Resources",truncated:!1,prevItem:{title:"How to use Github Organizations with Qovery",permalink:"/guides/tutorial/github-organization-repository-access"},nextItem:{title:"How to write a Dockerfile",permalink:"/guides/tutorial/how-to-write-a-dockerfile"}},u=[{value:"How to use Lifecycle Job (example with Terraform)",id:"how-to-use-lifecycle-job-example-with-terraform",children:[{value:"Execution Flow",id:"execution-flow",children:[]},{value:"Create a Lifecycle Job",id:"create-a-lifecycle-job",children:[]},{value:"Make your Terraform deployment multi-environments ready",id:"make-your-terraform-deployment-multi-environments-ready",children:[]},{value:"Deploy AWS RDS MySQL instance",id:"deploy-aws-rds-mysql-instance",children:[]},{value:"Get the MySQL RDS credentials from the Lifecycle Job",id:"get-the-mysql-rds-credentials-from-the-lifecycle-job",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"What happen if I delete my environment with your example?",id:"what-happen-if-i-delete-my-environment-with-your-example",children:[]},{value:"Can I use the Lifecycle Job to deploy my application?",id:"can-i-use-the-lifecycle-job-to-deploy-my-application",children:[]},{value:"What happen if I clone my Environment with the Lifecycle Job?",id:"what-happen-if-i-clone-my-environment-with-the-lifecycle-job",children:[]},{value:"What happen if I modify my Lifecycle Job after my Environment is deployed?",id:"what-happen-if-i-modify-my-lifecycle-job-after-my-environment-is-deployed",children:[]}]},{value:"Wrapping up",id:"wrapping-up",children:[]}],p={rightToc:u};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/lifecycle-job/"}),"Lifecycle Job")," is a powerful feature that allows you to run any kind of commands before or after your environment is deployed. It can be used to run database migrations, create a new database, or even to run a script that will create a new user."),Object(a.b)("p",null,"Some use cases:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Run Terraform, Pulumi, or any other infrastructure as code tool to create resources."),Object(a.b)("li",{parentName:"ul"},"You want to deploy SQS, SNS, Lambdas, or any other AWS resources."),Object(a.b)("li",{parentName:"ul"},"You want to deploy MongoDB Atlas, Google BigQuery, or any other cloud services."),Object(a.b)("li",{parentName:"ul"},"Seed your database when your environment is created.")),Object(a.b)(c.a,{type:"success",mdxType:"Alert"},Object(a.b)("p",null,"You can find some Lifecycle Jobs examples on our ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Qovery/lifecycle-job-examples"}),"GitHub"),".")),Object(a.b)("p",null,"In a more general way, you can see the Lifecycle Job as a way to create and destroy resources when your environment is deployed or deleted. Possibilities are endless."),Object(a.b)("h2",{id:"how-to-use-lifecycle-job-example-with-terraform"},"How to use Lifecycle Job (example with Terraform)"),Object(a.b)("p",null,"In this example, we will use Terraform to create a new AWS RDS MySQL instance. I will use ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Qovery/lifecycle-job-examples/tree/main/examples/aws-rds-with-terraform"}),"this example")," to schematize the process of using the Lifecycle Job. \u26a0\ufe0f Note that you can use any other tool to create your resources. Lifecycle Job is not limited to Terraform. However, Terraform is a great way to show the power of the Lifecycle Job since it requires a lot of configuration and can be used to create a lot of different resources."),Object(a.b)(c.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"In our example, we use S3 as a Terraform backend. You can use any other backend you want. However, if you want to use S3, you need to create a new bucket and a new IAM user with the right permissions. You can find more information about this in the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.terraform.io/docs/language/settings/backends/s3.html"}),"Terraform documentation"),".")),Object(a.b)("h3",{id:"execution-flow"},"Execution Flow"),Object(a.b)("p",null,"Here is the execution flow when my Environment is deployed:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Qovery builds my Lifecycle Job (and my others services)."),Object(a.b)("li",{parentName:"ol"},"Qovery runs my Lifecycle Job ",Object(a.b)("strong",{parentName:"li"},"Start Event")," (and my others services)."),Object(a.b)("li",{parentName:"ol"},"My Lifecycle Job creates a new AWS RDS MySQL instance."),Object(a.b)("li",{parentName:"ol"},"My Lifecycle Job injects the database credentials into a ",Object(a.b)("inlineCode",{parentName:"li"},"/qovery-output/qovery-output.json")," file."),Object(a.b)("li",{parentName:"ol"},"Qovery reads the ",Object(a.b)("inlineCode",{parentName:"li"},"/qovery-output/qovery-output.json")," file and injects the database credentials into my Environment Variables."),Object(a.b)("li",{parentName:"ol"},"My others services can access my database.")),Object(a.b)("p",null,"When my Environment is deleted:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Qovery runs my Lifecycle Job ",Object(a.b)("strong",{parentName:"li"},"Deleted Event")),Object(a.b)("li",{parentName:"ol"},"My Lifecycle Job destroys the AWS RDS MySQL instance."),Object(a.b)("li",{parentName:"ol"},"Qovery destroys my Environment and release all the resources.")),Object(a.b)("h3",{id:"create-a-lifecycle-job"},"Create a Lifecycle Job"),Object(a.b)(l.a,{mdxType:"Assumptions"},Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You have a ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://start.qovery.com"}),"Qovery account")),Object(a.b)("li",{parentName:"ul"},"You have an existing project and an existing environment."))),Object(a.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,"Fork ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Qovery/lifecycle-job-examples"}),"this repository"),".")),Object(a.b)("li",null,Object(a.b)("p",null,"Go inside your Environment, and add a ",Object(a.b)("strong",{parentName:"p"},"Lifecycle Job"),"."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/how-to-use-lifecycle-job/1.png",alt:""}))),Object(a.b)("li",null,Object(a.b)("p",null,"Give a name, description, pick your GitHub account, and select the repository of the Lifecycle Job. In our example, the root application path is ",Object(a.b)("inlineCode",{parentName:"p"},"/examples/aws-rds-with-terraform"),"."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/how-to-use-lifecycle-job/2.png",alt:""}))),Object(a.b)("li",null,Object(a.b)("p",null,"Since we are using Terraform, we want to make sure that our MySQL RDS instance is created when our Environment is deployed. So we select the ",Object(a.b)("strong",{parentName:"p"},"Start Event"),".\nWe also want to make sure that our MySQL RDS instance is destroyed when our Environment is deleted. So we select the ",Object(a.b)("strong",{parentName:"p"},"Deleted Event"),"."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/how-to-use-lifecycle-job/3.png",alt:""})),Object(a.b)("p",null,"If you look at our ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Qovery/lifecycle-job-examples/blob/main/examples/aws-rds-with-terraform/Dockerfile"}),"Dockerfile")," in the repository, you will see that we are using the official Terraform image. I have also inserted by default the ",Object(a.b)("inlineCode",{parentName:"p"},'ENTRYPOINT ["/bin/sh"]')," to simplify the Qovery Lifecycle Job configuration."),Object(a.b)("p",null,"For the ",Object(a.b)("strong",{parentName:"p"},"Start Event"),", we want to run the ",Object(a.b)("inlineCode",{parentName:"p"},"terraform apply -no-color -auto-approve")," command. We don't need to run the ",Object(a.b)("inlineCode",{parentName:"p"},"terraform init")," command since it is already done in the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Qovery/lifecycle-job-examples/blob/main/examples/aws-rds-with-terraform/Dockerfile#L14"}),"Dockerfile"),"."),Object(a.b)("p",null,"You will also notice that we are also using ",Object(a.b)("inlineCode",{parentName:"p"},"&& terraform output -json > /qovery-output/qovery-output.json")," to create a ",Object(a.b)("inlineCode",{parentName:"p"},"/qovery-output/qovery-output.json")," file. This file will be used by Qovery to inject the database credentials into our Environment Variables. We will cover this part later."),Object(a.b)("p",null,"For the ",Object(a.b)("strong",{parentName:"p"},"Deleted Event"),", we want to run the ",Object(a.b)("inlineCode",{parentName:"p"},"terraform destroy -no-color -auto-approve")," command."),Object(a.b)("p",null,"So for the ",Object(a.b)("strong",{parentName:"p"},"Start Event"),", we have: ",Object(a.b)("inlineCode",{parentName:"p"},'["-c","terraform apply -no-color -auto-approve && terraform output -json > /qovery-output/qovery-output.json"]')," and for the ",Object(a.b)("strong",{parentName:"p"},"Deleted Event"),", we have: ",Object(a.b)("inlineCode",{parentName:"p"},'["-c","terraform destroy -no-color -auto-approve"]'),". Feel free to copy/paste these commands."),Object(a.b)(c.a,{type:"warning",mdxType:"Alert"},Object(a.b)("p",null,"Yes the commands contains a comma. It is not a typo. It is a JSON array. You need to use a comma to separate the elements of the array."))),Object(a.b)("li",null,Object(a.b)("p",null,"I recommend setting the ",Object(a.b)("strong",{parentName:"p"},"Timeout")," to 1800 seconds (30 minutes). It is the maximum time your Lifecycle Job can run. If your Lifecycle Job takes more than 30 minutes to run it will be stopped by Qovery. In our case, it should take less than 10 minutes to create the AWS RDS MySQL instance. But let's be safe."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/how-to-use-lifecycle-job/4.png",alt:""})),Object(a.b)("p",null,"Click ",Object(a.b)("strong",{parentName:"p"},"Continue"),".")),Object(a.b)("li",null,Object(a.b)("p",null,"Now we need to set the vCPU and RAM required to run our Job. We can allocate 0.5 CPU and 256 MB of RAM. It's more than enough."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/how-to-use-lifecycle-job/5.png",alt:""}))),Object(a.b)("li",null,Object(a.b)("p",null,"We need to set the Environment Variables required by our Lifecycle Job. In our case, we need to set the AWS credentials and some other environment variables. If you look at our ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Qovery/lifecycle-job-examples/blob/main/examples/aws-rds-with-terraform/Dockerfile#L3-L7"}),"Dockerfile"),", you will find the declaration of all those environment variables. You can copy/paste them."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-Dockerfile",metastring:'title="Dockerfile"',title:'"Dockerfile"'}),"...\nARG TF_VAR_terraform_backend_bucket\nARG TF_VAR_aws_region\nARG TF_VAR_aws_access_key_id\nARG TF_VAR_aws_secret_access_key\nARG TF_VAR_qovery_environment_id\n...\n")),Object(a.b)("p",null,"Those are the ones that we need to set."),Object(a.b)(c.a,{type:"warning",mdxType:"Alert"},Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"We do not set here the ",Object(a.b)("inlineCode",{parentName:"li"},"TF_VAR_qovery_environment_id")," since we will create it in the next step."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"TF_VAR_terraform_backend_bucket")," is the name of the S3 bucket where Terraform will store the state of your infrastructure. You need to create this bucket on S3 before running the Lifecycle Job. You can use the same bucket for all your Lifecycle Jobs. It is not a problem. You will just need to make sure that the S3 object key is unique."))),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/how-to-use-lifecycle-job/6.png",alt:""})),Object(a.b)("p",null,"Click on ",Object(a.b)("strong",{parentName:"p"},"Continue"),".")),Object(a.b)("li",null,Object(a.b)("p",null,"Then click on ",Object(a.b)("strong",{parentName:"p"},"Create")," (and not ",Object(a.b)("strong",{parentName:"p"},"Create and Deploy"),")."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/how-to-use-lifecycle-job/7.png",alt:""}))),Object(a.b)("p",null,"Congrats, your Lifecycle Job is created. Now we just need to add the ",Object(a.b)("inlineCode",{parentName:"p"},"TF_VAR_qovery_environment_id")," environment variable before launching it."))),Object(a.b)("h3",{id:"make-your-terraform-deployment-multi-environments-ready"},"Make your Terraform deployment multi-environments ready"),Object(a.b)("p",null,"To support multiple environments, we need to make sure that the name of the S3 object key where Terraform will store the state of your infrastructure is unique. To do that, we will use the ",Object(a.b)("inlineCode",{parentName:"p"},"TF_VAR_qovery_environment_id")," environment variable. This environment variable is automatically created by Qovery and contains the ID of your Environment. We just need to create an environment variable alias."),Object(a.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,"Go inside your ",Object(a.b)("strong",{parentName:"p"},"MySQL RDS")," service, click on the ",Object(a.b)("strong",{parentName:"p"},"Variables")," tab."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/how-to-use-lifecycle-job/8.png",alt:""}))),Object(a.b)("li",null,Object(a.b)("p",null,"Search for ",Object(a.b)("inlineCode",{parentName:"p"},"QOVERY_ENVIRONMENT_ID")," built-in environment variable. Then click on ",Object(a.b)("strong",{parentName:"p"},"Creat alias")),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/how-to-use-lifecycle-job/9.png",alt:""}))),Object(a.b)("li",null,Object(a.b)("p",null,"Set the name of the environment variable to ",Object(a.b)("inlineCode",{parentName:"p"},"TF_VAR_qovery_environment_id")," with a ",Object(a.b)("strong",{parentName:"p"},"job")," scope and click on ",Object(a.b)("strong",{parentName:"p"},"Confirm"),"."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/how-to-use-lifecycle-job/10.png",alt:""}))))),Object(a.b)("h3",{id:"deploy-aws-rds-mysql-instance"},"Deploy AWS RDS MySQL instance"),Object(a.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,"Now you are ready to deploy your Lifecycle Job and see what happened."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/how-to-use-lifecycle-job/11.png",alt:""})),Object(a.b)("p",null,"The job execution will take approximately 3 to 10 minutes.")),Object(a.b)("li",null,Object(a.b)("p",null,"Follow the logs of the job execution by clicking on the ",Object(a.b)("strong",{parentName:"p"},"Logs")," button."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/how-to-use-lifecycle-job/12.png",alt:""})),Object(a.b)("p",null,"From the ",Object(a.b)("strong",{parentName:"p"},"Deployment logs")," tab you can see that your Lifecycle Job is built and that the ",Object(a.b)("inlineCode",{parentName:"p"},"terraform init")," command is executed."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/how-to-use-lifecycle-job/13.png",alt:""})),Object(a.b)("p",null,"From the ",Object(a.b)("strong",{parentName:"p"},"MySQL RDS")," tab you can see that the ",Object(a.b)("inlineCode",{parentName:"p"},"terraform apply -no-color -auto-approve")," command is executed. The creation of the AWS RDS MySQL instance is in progress."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/how-to-use-lifecycle-job/14.png",alt:""}))),Object(a.b)("li",null,Object(a.b)("p",null,"Once the deployment is done, you should see that the AWS RDS MySQL instance is green and completed."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/how-to-use-lifecycle-job/15.png",alt:""}))))),Object(a.b)("h3",{id:"get-the-mysql-rds-credentials-from-the-lifecycle-job"},"Get the MySQL RDS credentials from the Lifecycle Job"),Object(a.b)("p",null,"Now that the AWS RDS MySQL instance is created, we need to get the credentials to connect to it. We have use the ",Object(a.b)("inlineCode",{parentName:"p"},"terraform output -json > /qovery-output/qovery-output.json")," command to get the credentials. If you go back to the ",Object(a.b)("inlineCode",{parentName:"p"},"Variables")," tab of your MySQL RDS service, you will see that the ",Object(a.b)("inlineCode",{parentName:"p"},"QOVERY_OUTPUT_**")," environment variables are created."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/how-to-use-lifecycle-job/16.png",alt:""})),Object(a.b)("p",null,"By using ",Object(a.b)("inlineCode",{parentName:"p"},"terraform output -json > /qovery-output/qovery-output.json")," Qovery automatically create those environment variables for you. You can use them in your application to connect to the AWS RDS MySQL instance. ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/lifecycle-job/#job-output"}),"Learn more on how Lifecycle Job output...")),Object(a.b)(c.a,{type:"success",mdxType:"Alert"},Object(a.b)("p",null,"Job output is a powerful feature that allows you to get the output of your Lifecycle Job and use it in your application. You can use it to get the credentials of your database, the URL of your S3 bucket, the URL of your CDN, etc...")),Object(a.b)("h2",{id:"faq"},"FAQ"),Object(a.b)("h3",{id:"what-happen-if-i-delete-my-environment-with-your-example"},"What happen if I delete my environment with your example?"),Object(a.b)("p",null,"If you delete your environment, the AWS RDS MySQL instance will be deleted too. You can see that in the ",Object(a.b)("strong",{parentName:"p"},"MySQL RDS")," service logs. You will see that the ",Object(a.b)("inlineCode",{parentName:"p"},"terraform destroy -no-color -auto-approve")," command is executed."),Object(a.b)("h3",{id:"can-i-use-the-lifecycle-job-to-deploy-my-application"},"Can I use the Lifecycle Job to deploy my application?"),Object(a.b)("p",null,"Some users ask us if they can use the Lifecycle Job to deploy their application. The answer is yes!. The Lifecycle Job is designed to deploy all type of resources. However, we recommend using the official Qovery way to deploy applications. ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application/"}),"Learn more on how to deploy your application...")),Object(a.b)("h3",{id:"what-happen-if-i-clone-my-environment-with-the-lifecycle-job"},"What happen if I clone my Environment with the Lifecycle Job?"),Object(a.b)("p",null,"If you clone an Environment with the Lifecycle Job, the Lifecycle Job will be cloned too. In our example we have set the ",Object(a.b)("inlineCode",{parentName:"p"},"TF_VAR_qovery_environment_id")," environment variable to the ",Object(a.b)("inlineCode",{parentName:"p"},"QOVERY_ENVIRONMENT_ID")," built-in environment variable. So when you clone your Environment, the ",Object(a.b)("inlineCode",{parentName:"p"},"QOVERY_ENVIRONMENT_ID")," built-in environment variable will be different. That's why you need to create a new alias environment variable for the ",Object(a.b)("inlineCode",{parentName:"p"},"QOVERY_ENVIRONMENT_ID")," built-in environment variable. ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/#clone-environment"}),"Learn more on how to clone an Environment...")),Object(a.b)("h3",{id:"what-happen-if-i-modify-my-lifecycle-job-after-my-environment-is-deployed"},"What happen if I modify my Lifecycle Job after my Environment is deployed?"),Object(a.b)("p",null,"If you modify your Lifecycle Job after your Environment is deployed, the Lifecycle Job will be redeployed. In our example, since the state of our AWS RDS MySQL instance is stored in the S3 bucket, the AWS RDS MySQL instance will not be recreated. However, if you modify the ",Object(a.b)("inlineCode",{parentName:"p"},"main.tf")," file, the AWS RDS MySQL instance will be updated."),Object(a.b)("h2",{id:"wrapping-up"},"Wrapping up"),Object(a.b)("p",null,"In this guide, we have seen how to use the Lifecycle Job to create an AWS RDS MySQL instance with Terraform. We have also seen how to get the credentials of the AWS RDS MySQL instance to connect to it from our application. To learn more about the Lifecycle Job, you can read the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/lifecycle-job/"}),"Lifecycle Job documentation"),". To get more examples, check out the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Qovery/lifecycle-job-examples"}),"Qovery Lifecycle Examples repository"),"."))}m.isMDXComponent=!0},440:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var i=r.apply(null,o);i&&e.push(i)}else if("object"===a)for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},441:function(e,t,n){"use strict";n(445);var o=n(0),r=n.n(o),a=n(440),i=n.n(a);n(132);t.a=function(e){var t=e.children,n=e.classNames,o=e.fill,a=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":o,"alert--icon":!1!==a}),role:"alert"},!1!==a&&r.a.createElement("i",{className:i()("feather","icon-"+(a||l))}),t)}},442:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=o,y=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return n?r.a.createElement(y,c({ref:t},s,{components:n})):r.a.createElement(y,c({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},444:function(e,t,n){var o=n(26).f,r=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in r||n(10)&&o(r,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},445:function(e,t,n){var o=n(12);o(o.P,"Array",{fill:n(449)}),n(74)("fill")},446:function(e,t,n){"use strict";n(444);var o=n(0),r=n.n(o),a=n(441);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},449:function(e,t,n){"use strict";var o=n(28),r=n(75),a=n(27);e.exports=function(e){for(var t=o(this),n=a(t.length),i=arguments.length,c=r(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,s=void 0===l?n:r(l,n);s>c;)t[c++]=e;return t}},450:function(e,t,n){"use strict";var o=n(452),r=n(51);function a(e,t){return t.encode?t.strict?o(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,o){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===o[e]&&(o[e]={}),o[e][t[1]]=n):o[e]=n};case"bracket":return function(e,n,o){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==o[e]?o[e]=[].concat(o[e],n):o[e]=[n]:o[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=r({arrayFormat:"none"},t)),o=Object.create(null);return"string"!=typeof e?o:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),n(decodeURIComponent(r),a,o)})),Object.keys(o).sort().reduce((function(e,t){var n=o[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):o},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,o){return null===n?[a(t,e),"[",o,"]"].join(""):[a(t,e),"[",a(o,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(o){var r=e[o];if(void 0===r)return"";if(null===r)return a(o,t);if(Array.isArray(r)){var i=[];return r.slice().forEach((function(e){void 0!==e&&i.push(n(o,e,i.length))})),i.join("&")}return a(o,t)+"="+a(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},451:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=(n(440),n(450)),i=n.n(a);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,a=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(l),b=Object(o.useState)(null),u=b[0],p=b[1];return r.a.createElement("div",{className:"steps steps--h"+n},t,!a&&!u&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==u&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},452:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);