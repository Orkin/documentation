/*! For license information please see 43a5f55b.be9fba7c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{209:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(9),o=(a(0),a(365)),c=a(374),i=a(364),l=a(369),b={last_modified_on:"2021-10-08",title:"Amazon Web Services (AWS)",description:"Learn how to configure and plug your Amazon Web Services (AWS) account"},s={id:"using-qovery/configuration/cloud-service-provider/amazon-web-services",title:"Amazon Web Services (AWS)",description:"Learn how to configure and plug your Amazon Web Services (AWS) account",source:"@site/docs/using-qovery/configuration/cloud-service-provider/amazon-web-services.md",permalink:"/docs/using-qovery/configuration/cloud-service-provider/amazon-web-services",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/cloud-service-provider/amazon-web-services.md",sidebar:"docs",previous:{title:"Cloud Service Provider",permalink:"/docs/using-qovery/configuration/cloud-service-provider"},next:{title:"Microsoft Azure",permalink:"/docs/using-qovery/configuration/cloud-service-provider/microsoft-azure"}},u=[{value:"Getting started",id:"getting-started",children:[{value:"Connect your AWS account",id:"connect-your-aws-account",children:[]},{value:"Remove your AWS account",id:"remove-your-aws-account",children:[]},{value:"Delete Qovery from your AWS account",id:"delete-qovery-from-your-aws-account",children:[]},{value:"IAM permissions",id:"iam-permissions",children:[]}]},{value:"Regions",id:"regions",children:[]},{value:"How Qovery works on AWS",id:"how-qovery-works-on-aws",children:[{value:"Kubernetes",id:"kubernetes",children:[]},{value:"Managed services",id:"managed-services",children:[]},{value:"Security and compliance",id:"security-and-compliance",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"How to choose a region?",id:"how-to-choose-a-region",children:[]},{value:"I don&#39;t find a region that is provided by AWS",id:"i-dont-find-a-region-that-is-provided-by-aws",children:[]},{value:"Migrate between Cloud providers and regions",id:"migrate-between-cloud-providers-and-regions",children:[]}]}],p={rightToc:u};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Qovery lets you quickly deploy applications to your ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com"}),"Amazon Web Services (AWS)")," account. No knowledge needed, and it takes less than 20 minutes to install Qovery on your AWS account."),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Do you want to know more about how Qovery works on your AWS account? ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/useful-resources/faq/#how-qovery-works-under-the-hood"}),"Here")," is explained how Qovery works under the hood.")),Object(o.b)("h2",{id:"getting-started"},"Getting started"),Object(o.b)(l.a,{mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/using-qovery/interface/"}),"Qovery")," account"),Object(o.b)("li",{parentName:"ul"},"You have created an ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/organization/"}),"Organization")),Object(o.b)("li",{parentName:"ul"},"You have an AWS account"))),Object(o.b)("h3",{id:"connect-your-aws-account"},"Connect your AWS account"),Object(o.b)("p",null,"To link your AWS account to Qovery you need to provide an AWS ",Object(o.b)("inlineCode",{parentName:"p"},"access key id")," and ",Object(o.b)("inlineCode",{parentName:"p"},"secret access key")," with the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/cloud-service-provider/amazon-web-services/"}),"required IAM permissions"),"."),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"You can link more than one AWS account. Qovery also support multiple Cloud providers within the same Organization. Meaning, you can balance your workload on different Cloud providers. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/advanced/"}),"Read more"),".")),Object(o.b)("h4",{id:"create-your-aws-credentials---access-key-id-and-secret-access-key"},"Create your AWS credentials - ",Object(o.b)("inlineCode",{parentName:"h4"},"access key id")," and ",Object(o.b)("inlineCode",{parentName:"h4"},"secret access key")),Object(o.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://console.aws.amazon.com"}),"Connect to your AWS console"))),Object(o.b)("li",null,Object(o.b)("p",null,"Go to ",Object(o.b)("inlineCode",{parentName:"p"},"My Security Credentials")),Object(o.b)("img",{src:"/img/aws-my-security-credentials.png"})),Object(o.b)("li",null,Object(o.b)("p",null,"Create ",Object(o.b)("inlineCode",{parentName:"p"},"Admins")," group ",Object(o.b)("strong",{parentName:"p"},"without any permissions")),Object(o.b)(i.a,{type:"warning",mdxType:"Alert"},Object(o.b)("p",null,"The name of the group MUST be Admins. If you use another name, this will not work")),Object(o.b)("img",{src:"/img/aws-create-group-1.jpg"}),Object(o.b)("img",{src:"/img/aws-create-group-2.jpg"}),Object(o.b)("img",{src:"/img/aws-create-group-3.jpg"}),Object(o.b)("img",{src:"/img/aws-create-group-4.jpg"})),Object(o.b)("li",null,Object(o.b)("p",null,"Create one IAM user called ",Object(o.b)("inlineCode",{parentName:"p"},"qovery"),"."),Object(o.b)("img",{src:"/img/aws-create-user-1.jpg"}),Object(o.b)("img",{src:"/img/aws-create-user-2.jpg"}),Object(o.b)("img",{src:"/img/aws-create-user-3.jpg"}),Object(o.b)("p",null,"Go to the last step and copy your ",Object(o.b)("inlineCode",{parentName:"p"},"access key id")," and ",Object(o.b)("inlineCode",{parentName:"p"},"secret access key"),"."),Object(o.b)("img",{src:"/img/aws-create-user-4.jpg"})),Object(o.b)("li",null,Object(o.b)("p",null,"Setup",Object(o.b)("a",{href:"/files/qovery-iam-aws.json"}," IAM permissions")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"qovery")," user."),Object(o.b)(i.a,{type:"warning",mdxType:"Alert"},Object(o.b)("a",{href:"/files/qovery-iam-aws.json"},"Download IAM permissions JSON"),Object(o.b)("hr",null),Object(o.b)("p",null,"Or copy it from below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": [\n                "iam:*",\n                "s3:*",\n                "cloudwatch:*",\n                "autoscaling:*",\n                "application-autoscaling:*",\n                "elasticloadbalancing:*",\n                "organizations:DescribeAccount",\n                "organizations:DescribeOrganization",\n                "organizations:DescribeOrganizationalUnit",\n                "organizations:DescribePolicy",\n                "organizations:ListChildren",\n                "organizations:ListParents",\n                "organizations:ListPoliciesForTarget",\n                "organizations:ListRoots",\n                "organizations:ListPolicies",\n                "organizations:ListTargetsForPolicy",\n                "dynamodb:*",\n                "ecr:*",\n                "ec2:*",\n                "elasticache:*",\n                "cloudtrail:LookupEvents",\n                "kms:DescribeKey",\n                "kms:ListAliases",\n                "dynamodb:*",\n                "tag:GetResources",\n                "rds:*",\n                "ecs:*",\n                "eks:*",\n                "logs:*",\n                "events:DescribeRule",\n                "events:DeleteRule",\n                "events:ListRuleNamesByTarget",\n                "events:ListTargetsByRule",\n                "events:PutRule",\n                "events:PutTargets",\n                "es:AddTags",\n                "es:RemoveTags",\n                "es:ListTags",\n                "es:DeleteElasticsearchDomain",\n                "es:DescribeElasticsearchDomain",\n                "es:CreateElasticsearchDomain",\n                "events:RemoveTargets",\n                "kms:*"\n            ],\n            "Resource": "*"\n        }\n    ]\n}\n'))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Then, follow the arrows in AWS console to create AWS credentials with required IAM permissions:")),Object(o.b)("img",{src:"/img/aws-add-policy-1.jpg"}),Object(o.b)("img",{src:"/img/aws-add-policy-2.jpg"}),Object(o.b)("img",{src:"/img/aws-add-policy-3.jpg"}),Object(o.b)("img",{src:"/img/aws-add-policy-4.jpg"})))),Object(o.b)("p",null,"Well done!! You now have your AWS ",Object(o.b)("inlineCode",{parentName:"p"},"access key id")," and ",Object(o.b)("inlineCode",{parentName:"p"},"secret access key")," and your permissions are setups; It's time to connect Qovery to your AWS account."),Object(o.b)("h4",{id:"use-aws-credentials-with-qovery"},"Use AWS credentials with Qovery"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"this section is under development - ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://discord.qovery.com"}),"join us")," and be part of the first to try it")),Object(o.b)("h3",{id:"remove-your-aws-account"},"Remove your AWS account"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"this section is under development - ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://discord.qovery.com"}),"join us")," and be part of the first to try it")),Object(o.b)("h3",{id:"delete-qovery-from-your-aws-account"},"Delete Qovery from your AWS account"),Object(o.b)(i.a,{type:"warning",mdxType:"Alert"},Object(o.b)("p",null,"Your applications and your data will be deleted.")),Object(o.b)("p",null,"To delete Qovery from your AWS account you must be the owner of the Organization.\nOnce your AWS account removed from Qovery, everything configured (VPC, Kubernetes, ...) by Qovery will be deleted forever."),Object(o.b)("h3",{id:"iam-permissions"},"IAM permissions"),Object(o.b)("p",null,"Qovery required IAM permissions to create, update and managed the infrastructure."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"IAM is used to create IAM roles"),Object(o.b)("li",{parentName:"ul"},"S3 is used to store our generated configuration files"),Object(o.b)("li",{parentName:"ul"},"Cloudwatch, for creating a group stream for each Kubernetes clusters"),Object(o.b)("li",{parentName:"ul"},"Autoscaling for RDS and autoscaling rules for the Kubernetes cluster"),Object(o.b)("li",{parentName:"ul"},"Elastic load-balancing for ELB / ALB / NLB."),Object(o.b)("li",{parentName:"ul"},"DynamoDB to have a distributed lock on infrastructure deployment."),Object(o.b)("li",{parentName:"ul"},"ECR for managing the container registry, create/update/delete repository."),Object(o.b)("li",{parentName:"ul"},"KMS to load and store keys (RDS, SSH, \u2026)"),Object(o.b)("li",{parentName:"ul"},"EKS to create and update the Kubernetes cluster.")),Object(o.b)("h2",{id:"regions"},"Regions"),Object(o.b)("p",null,"Qovery supports the following AWS regions:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"supported"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddfa\ud83c\uddf8"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"us-west-2"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"US West (Oregon)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddfa\ud83c\uddf8"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"us-east-2"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"US East (Ohio)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddfa\ud83c\uddf8"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"us-east-1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"US East (N. Virginia)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddfa\ud83c\uddf8"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"us-west-1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"US West (N. California)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No (Only 2 Availability Zone)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddff\ud83c\udde6"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"af-south-1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Africa (Cape Town)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udded\ud83c\uddf0"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ap-east-1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Hong Kong)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddee\ud83c\uddf3"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ap-south-1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Mumbai)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddef\ud83c\uddf5"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ap-northeast-1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Tokyo)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddf0\ud83c\uddf7"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ap-northeast-2"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Seoul)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddef\ud83c\uddf5"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ap-northeast-3"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Osaka)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddf8\ud83c\uddec"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ap-southeast-1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Singapore)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde6\ud83c\uddfa"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ap-southeast-2"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Sydney)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde8\ud83c\udde6"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ca-central-1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Canada (Toronto)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde8\ud83c\uddf3"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cn-north-1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"China (Beijing)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde8\ud83c\uddf3"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cn-northwest-1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"China (Ningxia)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde9\ud83c\uddea"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"eu-central-1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (Frankfurt)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddee\ud83c\uddea"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"eu-west-1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (Ireland)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"eu-west-2"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (London)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddeb\ud83c\uddf7"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"eu-west-3"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (Paris)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddee\ud83c\uddf9"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"eu-south-1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (Milan)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddf8\ud83c\uddea"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"eu-north-1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (Stockholm)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde7\ud83c\udded"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"me-south-1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Middle East (Bahrain)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde7\ud83c\uddf7"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sa-east-1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"South America (S\xe3o Paulo)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(o.b)("p",null,"Qovery supports regions where ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/eks"}),"Amazon EKS")," is supported."),Object(o.b)("h2",{id:"how-qovery-works-on-aws"},"How Qovery works on AWS"),Object(o.b)("p",null,"Qovery is an abstraction layer on top of AWS and Kubernetes. Qovery manages the configuration of AWS account, and helps your to deploy production ready apps in seconds.\nTo make it works, Qovery rely on Kubernetes for stateless apps (containers), and  AWS for stateful apps (databases, storage...)."),Object(o.b)("h3",{id:"kubernetes"},"Kubernetes"),Object(o.b)("p",null,"The first time you set up your AWS account, Qovery creates a Kubernetes cluster in your chosen region. Qovery managed it for you - no action required. It takes ~15 minutes to configure and bootstrap a Kubernetes cluster. Once bootstrapped, your Kubernetes cluster runs the Qovery app and is ready to deploy your applications."),Object(o.b)("h3",{id:"managed-services"},"Managed services"),Object(o.b)("p",null,"AWS provides managed services for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/database/postgresql/"}),"PostgreSQL"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/database/mysql/"}),"MySQL"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/database/redis/"}),"Redis"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/database/mongodb/"}),"MongoDB"),". Qovery gives you access to those services when you set the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/deployment-rule/#environment-deployment-rules"}),"environment mode")," to ",Object(o.b)("inlineCode",{parentName:"p"},"Production"),". In ",Object(o.b)("inlineCode",{parentName:"p"},"Development")," mode, Qovery provides containers equivalent, which is cheaper and faster to start."),Object(o.b)("h3",{id:"security-and-compliance"},"Security and compliance"),Object(o.b)("p",null,"Qovery runs your Kubernetes cluster and is autonomous to manage your applications, which means:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Your configuration are stored on your AWS account."),Object(o.b)("li",{parentName:"ul"},"Your configuration is encrypted on your AWS account."),Object(o.b)("li",{parentName:"ul"},"Qovery can't access to your data.")),Object(o.b)("h2",{id:"faq"},"FAQ"),Object(o.b)("h3",{id:"how-to-choose-a-region"},"How to choose a region?"),Object(o.b)("p",null,"Different datacenters are located in different geographic areas, and you may want to keep your site physically close to the bulk of your user base for reduced latency."),Object(o.b)("h3",{id:"i-dont-find-a-region-that-is-provided-by-aws"},"I don't find a region that is provided by AWS"),Object(o.b)("p",null,"We are probably testing the support of this region, please ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.qovery.com/contact"}),"contact us")," to know what's the status"),Object(o.b)("h3",{id:"migrate-between-cloud-providers-and-regions"},"Migrate between Cloud providers and regions"),Object(o.b)("p",null,"Today, you can't migrate an environment from one region to another after it has been created. Vote ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://roadmap.qovery.com/"}),"here")," if you need this feature."))}d.isMDXComponent=!0},363:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},364:function(e,t,a){"use strict";a(368);var n=a(0),r=a.n(n),o=a(363),c=a.n(o);a(131);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,o=e.icon,i=e.type,l=null;switch(i){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:c()(a,"alert","alert--"+i,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:c()("feather","icon-"+(o||l))}),t)}},365:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return a?r.a.createElement(m,i({ref:t},b,{components:a})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},367:function(e,t,a){var n=a(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},368:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(373)}),a(74)("fill")},369:function(e,t,a){"use strict";a(367);var n=a(0),r=a.n(n),o=a(364);t.a=function(e){var t=e.children,a=e.name;return r.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},372:function(e,t,a){"use strict";var n=a(376),r=a(51);function o(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var a=function(e){var t;switch(e.arrayFormat){case"index":return function(e,a,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=a):n[e]=a};case"bracket":return function(e,a,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=[a]:n[e]=a};default:return function(e,t,a){void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=t}}}(t=r({arrayFormat:"none"},t)),n=Object.create(null);return"string"!=typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),a(decodeURIComponent(r),o,n)})),Object.keys(n).sort().reduce((function(e,t){var a=n[t];return Boolean(a)&&"object"==typeof a&&!Array.isArray(a)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(a):e[t]=a,e}),Object.create(null))):n},t.stringify=function(e,t){var a=function(e){switch(e.arrayFormat){case"index":return function(t,a,n){return null===a?[o(t,e),"[",n,"]"].join(""):[o(t,e),"[",o(n,e),"]=",o(a,e)].join("")};case"bracket":return function(t,a){return null===a?o(t,e):[o(t,e),"[]=",o(a,e)].join("")};default:return function(t,a){return null===a?o(t,e):[o(t,e),"=",o(a,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(n){var r=e[n];if(void 0===r)return"";if(null===r)return o(n,t);if(Array.isArray(r)){var c=[];return r.slice().forEach((function(e){void 0!==e&&c.push(a(n,e,c.length))})),c.join("&")}return o(n,t)+"="+o(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},373:function(e,t,a){"use strict";var n=a(27),r=a(75),o=a(26);e.exports=function(e){for(var t=n(this),a=o(t.length),c=arguments.length,i=r(c>1?arguments[1]:void 0,a),l=c>2?arguments[2]:void 0,b=void 0===l?a:r(l,a);b>i;)t[i++]=e;return t}},374:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(363),a(372)),c=a.n(o);a(133);t.a=function(e){var t=e.children,a=e.headingDepth,o=e.hideFeedbackQuestion,i="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+i+" failed",body:"The tutorial on:\n\n"+i+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},b="https://github.com/qovery/documentation/issues/new?"+c.a.stringify(l),s=Object(n.useState)(null),u=s[0],p=s[1];return r.a.createElement("div",{className:"steps steps--h"+a},t,!o&&!u&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:b,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==u&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},376:function(e,t,a){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);