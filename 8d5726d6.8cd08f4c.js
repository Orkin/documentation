/*! For license information please see 8d5726d6.8cd08f4c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{298:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(1),i=n(9),r=(n(0),n(435)),o=n(444),c=(n(441),n(434)),l=n(439),b={last_modified_on:"2022-05-20",title:"Application",description:"Learn how to configure your Application on Qovery"},s={id:"using-qovery/configuration/application",title:"Application",description:"Learn how to configure your Application on Qovery",source:"@site/docs/using-qovery/configuration/application.md",permalink:"/docs/using-qovery/configuration/application",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/application.md",sidebar:"docs",previous:{title:"Clusters",permalink:"/docs/using-qovery/configuration/clusters"},next:{title:"Databases",permalink:"/docs/using-qovery/configuration/database"}},p=[{value:"Create an Application",id:"create-an-application",children:[]},{value:"Configuration",id:"configuration",children:[{value:"General",id:"general",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Storage",id:"storage",children:[]},{value:"Ports",id:"ports",children:[]},{value:"Domains",id:"domains",children:[]},{value:"Database",id:"database",children:[]},{value:"Network",id:"network",children:[]}]},{value:"Advanced Settings",id:"advanced-settings",children:[]},{value:"Environment Variable",id:"environment-variable",children:[]},{value:"Secrets",id:"secrets",children:[]},{value:"Logs",id:"logs",children:[]},{value:"SSH",id:"ssh",children:[]},{value:"Update and Rollback",id:"update-and-rollback",children:[]},{value:"Delete an Application",id:"delete-an-application",children:[]}],u={rightToc:p};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l.a,{name:"documentation",mdxType:"Assumptions"},Object(r.b)("p",null,"You have created an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"Environment"),".")),Object(r.b)("p",null,"An ",Object(r.b)("strong",{parentName:"p"},"application")," is part of a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/project/"}),"Project")," within an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"Environment")," and is a container unit. Multiple applications can be part of the same ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"Environment"),", be connected to a set of dependencies (databases and other services), and can communicate with other applications within the same Environment."),Object(r.b)("h2",{id:"create-an-application"},"Create an Application"),Object(r.b)(c.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"Check out ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/getting-started/deploy-your-first-application/"}),"this video guide")," to create and deploy your first application")),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("h3",{id:"general"},"General"),Object(r.b)("p",null,"General settings allow you to set up your application name, git repository and build mode."),Object(r.b)("h4",{id:"git-repository"},"Git Repository"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Configure your repository URL (it can be hosted on GitHub, GitLab or Bitbucket)."),Object(r.b)("li",{parentName:"ul"},"Select branch that Qovery should use for builds in this environment"),Object(r.b)("li",{parentName:"ul"},"Select ",Object(r.b)("inlineCode",{parentName:"li"},"Root Application Path")," - base folder in which the application resides in your repository")),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/configuration/application/app-17.png",alt:"CPU"})),Object(r.b)(c.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"Qovery supports mono repositories, you can deploy multiple apps using a single repository. ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/advanced/monorepository/"}),"For details, see our advanced guide."))),Object(r.b)(c.a,{type:"warning",mdxType:"Alert"},Object(r.b)("p",null,"If your repository contains private submodules using SSH protocol, you will need to add a secret beginning with GIT",Object(r.b)("em",{parentName:"p"},"SSH_KEY"),", containing a private SSH key with access rights to your sumbodules repositories."),Object(r.b)("p",null,"Secret names examples:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"GIT_SSH_KEY_GITHUB"),Object(r.b)("li",{parentName:"ul"},"GIT_SSH_KEY_GITLAB"),Object(r.b)("li",{parentName:"ul"},"GIT_SSH_KEY_MYAPP"))),Object(r.b)("h4",{id:"build-mode"},"Build Mode"),Object(r.b)("h4",{id:"option-1-buildpacks"},"Option 1: Buildpacks"),Object(r.b)("p",null,"To simplify the application build for the developer, Qovery supports ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://buildpacks.io"}),"Buildpacks")," out of the box. Buildpacks determine the build process for an app and which assets and runtimes should be made available to your code at runtime. If your complex apps are running multiple languages, you can also use multiple buildpacks within a single app.\nMeaning, as a developer, you don't need to write a ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile")," to build and run your app. Qovery Buildpacks takes care of everything for you."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Supported languages")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"language"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"version"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Node.JS"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Clojure"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Python"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Java"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Gradle"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"JVM"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Grails"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Scala"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Play"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"PHP"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Go"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")))),Object(r.b)("p",null,"You don't find a cool language? ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://roadmap.qovery.com/"}),"Suggest us to support it")),Object(r.b)("h4",{id:"option-2-dockerfile"},"Option 2: Dockerfile"),Object(r.b)("p",null,"Qovery runs your application within the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.docker.com/resources/what-container"}),"Container technology"),". To build and run your application, you need to provide a valid ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/builder"}),"Dockerfile"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Dockerfile",metastring:'title="Valid NodeJS Dockerfile"',title:'"Valid',NodeJS:!0,'Dockerfile"':!0}),"FROM node:13-alpine\nRUN mkdir -p /usr/src/app\nWORKDIR /usr/src/app\nCOPY . .\nRUN npm install\nEXPOSE 3000\nCMD node ./bin/www\n")),Object(r.b)("p",null,"After creating a Dockerfile, specify the location of your Dockerfile in ",Object(r.b)("inlineCode",{parentName:"p"},"Dockefile path")," field."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/configuration/application/app-18.png",alt:"Dockerfile"})),Object(r.b)("p",null,"Configuration from above will make Qovery look for the Dockerfile in ",Object(r.b)("inlineCode",{parentName:"p"},"/timescale/Dockerfile")," path of your repository (",Object(r.b)("inlineCode",{parentName:"p"},"Root Application Path")," + ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile Path"),")."),Object(r.b)("h3",{id:"resources"},"Resources"),Object(r.b)("h4",{id:"cpu"},"CPU"),Object(r.b)("p",null,"To configure the number of CPUs that your app needs, adjust the setting in the ",Object(r.b)("inlineCode",{parentName:"p"},"Resources")," section of the application configuration."),Object(r.b)(c.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"Default is 256m. The maximum you can set is 1CPU in ",Object(r.b)("strong",{parentName:"p"},"Community")," version and unlimited in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.qovery.com/pricing"}),"paid plans"),".")),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/configuration/application/app-13.png",alt:"CPU"})),Object(r.b)("h4",{id:"ram"},"RAM"),Object(r.b)("p",null,"To configure the amount of RAM that your app needs, adjust the setting in ",Object(r.b)("inlineCode",{parentName:"p"},"Resources")," section of the application configuration."),Object(r.b)(c.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"Default is 256MB, maximum you can set is 512MB in ",Object(r.b)("strong",{parentName:"p"},"Community")," version, and unlimited in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.qovery.com/pricing"}),"paid plans"),".")),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/configuration/application/app-14.png",alt:"RAM"})),Object(r.b)("h4",{id:"auto-scaling"},"Auto-scaling"),Object(r.b)("p",null,"Application auto-scaling is based on real-time CPU consumption. When your app goes above 60% of CPU consumption for 5 minutes, your app will be auto-scaled and more instances will be added. It is transparent.\nYou can adjust the minimum and maximum of instances you need in your application settings. Qovery runs your application on Kubernetes and relies on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kubernetes-sigs/metrics-server"}),"metrics-server")," service to auto-scale your app."),Object(r.b)("h3",{id:"dependencies"},"Dependencies"),Object(r.b)("p",null,"Qovery gives you the power to have multiple apps within one environment. Sometimes it's necessary to one or multiple apps before others.\nBy using the ",Object(r.b)("inlineCode",{parentName:"p"},"Dependency")," configuration, you can declare a list of apps your app is depending on."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/configuration/application/app-6.png",alt:"Application Dependencies"})),Object(r.b)("p",null,"Setting up application dependencies will make sure all the dependencies are running before your application starts."),Object(r.b)("h3",{id:"storage"},"Storage"),Object(r.b)("h4",{id:"block-storage"},"Block Storage"),Object(r.b)("p",null,"The default filesystem for applications running on Qovery is ephemeral. Application data isn\u2019t persisted across deploys and restarts, which works just fine for most apps because they use managed databases to persist data."),Object(r.b)("p",null,"However, many applications need persistent disk storage that isn\u2019t ephemeral. These include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Blogging platforms and CMSs like WordPress, Ghost, and Strapi."),Object(r.b)("li",{parentName:"ul"},"Collaboration apps like Mattermost, GitLab, and Discourse.")),Object(r.b)("p",null,"This is where Qovery block Storage comes in. Qovery applications can use storage to store data that persists across deploys and restarts, making it easy to deploy stateful applications."),Object(r.b)(c.a,{type:"warning",mdxType:"Alert"},Object(r.b)("p",null,"For most use cases, it is better to use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/object-storage/"}),"Object Storage")," instead of Block Storage.")),Object(r.b)("h6",{id:"use-cases"},"Use cases"),Object(r.b)("h6",{id:"-good-use-cases"},"\u2705 Good use cases"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For I/O intensive applications (E.g. database)"),Object(r.b)("li",{parentName:"ul"},"To store temporary files")),Object(r.b)("h6",{id:"-bad-use-cases"},"\u274c Bad use cases"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To store file > 1 TB"),Object(r.b)("li",{parentName:"ul"},"To expose files from an application (E.g. images)")),Object(r.b)("h5",{id:"types-of-block-storage"},"Types of Block Storage"),Object(r.b)("p",null,"Qovery Storage supports:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Max IOPS"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Max Throughput"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Min Size"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Max Size"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Use cases"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fast_ssd"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"64000"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1GB/s"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5GB"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"10GB ",Object(r.b)("inlineCode",{parentName:"td"},"Community")," / 1TB paid plans"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Critical business applications that require sustained IOPS like databases")))),Object(r.b)("h5",{id:"configuration-1"},"Configuration"),Object(r.b)("p",null,"You can set up your Block Storage in ",Object(r.b)("inlineCode",{parentName:"p"},"Storage")," section of your application configuration."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/configuration/application/app-7.png",alt:"Application Storage"})),Object(r.b)("h3",{id:"ports"},"Ports"),Object(r.b)("p",null,"Most of the application needs to be accessed by other services inside or outside of your environment. To set up the access,\ndeclare the ports your application uses. Internal ports are available internally inside your environment for other services to use.\nYou can also expose ports publicly - it makes them accessible over the public network."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/configuration/application/app-15.png",alt:"Application Ports"})),Object(r.b)(c.a,{type:"info",mdxType:"Alert"},"By default, newly created ports are publicly exposed over HTTPS. You can change this setting in the `Advanced` section."),Object(r.b)(c.a,{type:"info",mdxType:"Alert"},"Qovery determines the readiness of your service based on the availability of the declared port. If your application does not open this port within 10 minutes, the associated container will be shut down"),Object(r.b)("h4",{id:"exposing-applications"},"Exposing Applications"),Object(r.b)("p",null,"Before your application is exposed to the internet, Qovery needs to know what ",Object(r.b)("strong",{parentName:"p"},"PORT")," to listen on to expose your app. Qovery does try to do it's best to do this automatically for you however, there are cases when we can't."),Object(r.b)("p",null,"You can configure your application to use the ",Object(r.b)("strong",{parentName:"p"},"PORT")," environment variable by adding the ",Object(r.b)("strong",{parentName:"p"},"PORT")," on your application env variables page."),Object(r.b)(c.a,{type:"warning",mdxType:"Alert"},Object(r.b)("p",null,"A Note on Listening IPs: It's best for your application to listen on ",Object(r.b)("inlineCode",{parentName:"p"},"0.0.0.0:$PORT"),". While most things work with ",Object(r.b)("inlineCode",{parentName:"p"},"127.0.0.1")," and ",Object(r.b)("inlineCode",{parentName:"p"},"localhost"),", some do not (NodeJS for example)")),Object(r.b)("h3",{id:"domains"},"Domains"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Domain")," section of your application configuration allows you to define a custom domain for your application."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/configuration/application/app-16.png",alt:"Application Domains"})),Object(r.b)("p",null,"After setting up a custom domain, you'll see a ",Object(r.b)("inlineCode",{parentName:"p"},"Value")," that you need to set up as a ",Object(r.b)("inlineCode",{parentName:"p"},"CNAME")," record in your domain registrar."),Object(r.b)(c.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/getting-started/setting-custom-domain/"}),"We prepared a guide and video tutorial that explains how to set up your custom domain."))),Object(r.b)("p",null,"Setting up the ",Object(r.b)("inlineCode",{parentName:"p"},"CNAME")," on the domain provider side will make your app accessible through your custom domain on Qovery."),Object(r.b)("h3",{id:"database"},"Database"),Object(r.b)("p",null,"To access your database from your application, you can use the BUILT_IN environment variables and secrets that have been automatically created by Qovery during the database creation process. You can find them within the Environment Variable section of your application."),Object(r.b)("p",null,"To match the naming convention used in your code for the database connection parameters, you can ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/#alias-environment-variable"}),"create an alias")," of the variable so that you don't need to change your code."),Object(r.b)("p",null,"Example of secrets and environment variables injected into your app for each created database:"),Object(r.b)("h4",{id:"database-secrets"},"Database Secrets"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'"QOVERY_POSTGRESQL_Z14324SAS_PASSWORD": "XXX"\n"QOVERY_POSTGRESQL_Z14324SAS_DATABASE_LOGIN": "superuser"\n"QOVERY_POSTGRESQL_Z14324SAS_DATABASE_PORT": "5432"\n"QOVERY_POSTGRESQL_Z14324SAS_DATABASE_NAME": "mydb"\n"QOVERY_POSTGRESQL_Z14324SAS_DATABASE_HOST": "my-postgresq-y1irp3nmdzj32yjl-svc.cnuxtlki1yn9.eu-west-3.rds.amazonaws.com"\n')),Object(r.b)("p",null,"The built-in variables follow the naming pattern: ",Object(r.b)("inlineCode",{parentName:"p"},"QOVERY_DATABASETYPE")," + <your_db_name> + <type_of_variable> where:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<your_db_name>")," is the name of your database"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<type_of_variable>")," is the type of variable we inject, e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"PASSWORD"),", ",Object(r.b)("inlineCode",{parentName:"li"},"VERSION"),", ",Object(r.b)("inlineCode",{parentName:"li"},"CONNECTION_URI")," and so on.")),Object(r.b)("h3",{id:"network"},"Network"),Object(r.b)("h4",{id:"persistent-sessions"},"Persistent sessions"),Object(r.b)("p",null,"A user of your application will be redirected by the load balancer to the same instance each time he accesses to it."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/sticky-session.png",alt:"Sticky session"})),Object(r.b)("h2",{id:"advanced-settings"},"Advanced Settings"),Object(r.b)("p",null,"To further fine-tune your Qovery infrastructure at application level, you can set advanced settings through the Qovery API endpoint."),Object(r.b)(c.a,{type:"info",mdxType:"Alert"},"Advanced settings are not available in the Qovery console yet."),Object(r.b)("p",null,"The advanced settings currently available are:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Advanced Setting"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Use Case"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"deployment.delay_start_time_sec"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Allows you to specify a waiting period, in seconds, between the application container start and the first application status check (",Object(r.b)("inlineCode",{parentName:"td"},"initialDelaySeconds")," Kubernetes probe setting)."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Allowing additional time for the application to start can be useful when boot time usually takes too long (due to long boot operations), or when the application opens the port before being ready to receive traffic on it (due to a still ongoing boot operation).")))),Object(r.b)("h2",{id:"environment-variable"},"Environment Variable"),Object(r.b)("p",null,"To learn how to set up environment variables in your projects and applications, navigate to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"configuring Environment Variables")," section."),Object(r.b)("h2",{id:"secrets"},"Secrets"),Object(r.b)("p",null,"To learn how to set up secrets in your projects and applications, navigate to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/secret/"}),"configuring Secrets")," section."),Object(r.b)("h2",{id:"logs"},"Logs"),Object(r.b)("p",null,"To learn how to display your application logs, navigate to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/getting-started/debugging/#logs"}),"logs section in our Debugging guide")),Object(r.b)("h2",{id:"ssh"},"SSH"),Object(r.b)("p",null,"To connect to your application via SSH, please use the via the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/interface/cli/"}),"Qovery SSH command")," available on our CLI."),Object(r.b)("h2",{id:"update-and-rollback"},"Update and Rollback"),Object(r.b)(o.a,{headingDepth:3,mdxType:"Steps"},Object(r.b)("ol",null,Object(r.b)("li",null,Object(r.b)("p",null,"Navigate to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Console"))),Object(r.b)("li",null,Object(r.b)("p",null,"Choose your application")),Object(r.b)("li",null,Object(r.b)("p",null,"In the application overview, click on the ",Object(r.b)("inlineCode",{parentName:"p"},"Actions")," button and ",Object(r.b)("inlineCode",{parentName:"p"},"Rollback and Update"),"."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/configuration/application/rollback-update.png",alt:"Application"}))),Object(r.b)("li",null,Object(r.b)("p",null,"Once you click, this panel will appear, and you will be able to choose the version you wish to update/rollback."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/configuration/application/rollback-update2.png",alt:"Application"}))))),Object(r.b)("h2",{id:"delete-an-application"},"Delete an Application"),Object(r.b)(o.a,{headingDepth:3,mdxType:"Steps"},Object(r.b)("ol",null,Object(r.b)("li",null,Object(r.b)("p",null,"Navigate to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Console"))),Object(r.b)("li",null,Object(r.b)("p",null,"Choose your application")),Object(r.b)("li",null,Object(r.b)("p",null,"In the application overview, click on the ",Object(r.b)("inlineCode",{parentName:"p"},"Actions")," button and remove the application."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/configuration/application/app-1.png",alt:"Application"}))))))}d.isMDXComponent=!0},433:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var o=i.apply(null,a);o&&e.push(o)}else if("object"===r)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},434:function(e,t,n){"use strict";n(437);var a=n(0),i=n.n(a),r=n(433),o=n.n(r);n(131);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,r=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return i.a.createElement("div",{className:o()(n,"alert","alert--"+c,{"alert--fill":a,"alert--icon":!1!==r}),role:"alert"},!1!==r&&i.a.createElement("i",{className:o()("feather","icon-"+(r||l))}),t)}},435:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||r;return n?i.a.createElement(m,c({ref:t},b,{components:n})):i.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},436:function(e,t,n){"use strict";var a=n(1),i=n(0),r=n.n(i),o=n(39),c=n(442),l=n(19),b=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,s=n||l,p=Object(c.a)(s),u=Object(i.useRef)(!1),d=b.a.canUseIntersectionObserver;return Object(i.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(s),function(){d&&t&&t.disconnect()}}),[s,d,p]),s&&p?r.a.createElement(o.b,Object(a.a)({},e,{onMouseEnter:function(){u.current||(window.docusaurus.preload(s),u.current=!0)},innerRef:function(e){var n,a;d&&e&&p&&(n=e,a=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:s})):r.a.createElement("a",Object(a.a)({},e,{href:s}))}},437:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(440)}),n(74)("fill")},438:function(e,t,n){var a=n(26).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||n(10)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},439:function(e,t,n){"use strict";n(438);var a=n(0),i=n.n(a),r=n(434);t.a=function(e){var t=e.children,n=e.name;return i.a.createElement(r.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},i.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},440:function(e,t,n){"use strict";var a=n(27),i=n(75),r=n(25);e.exports=function(e){for(var t=a(this),n=r(t.length),o=arguments.length,c=i(o>1?arguments[1]:void 0,n),l=o>2?arguments[2]:void 0,b=void 0===l?n:i(l,n);b>c;)t[c++]=e;return t}},441:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(436),o=n(433),c=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.className,a=e.badge,o=e.leftIcon,l=e.rightIcon,b=e.size,s=e.target,p=e.to,u=c()("jump-to","jump-to--"+b,n),d=i.a.createElement("div",{className:"jump-to--inner"},i.a.createElement("div",{className:"jump-to--inner-2"},o&&i.a.createElement("div",{className:"jump-to--left"},i.a.createElement("i",{className:"feather icon-"+o})),i.a.createElement("div",{className:"jump-to--main"},a?i.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),i.a.createElement("div",{className:"jump-to--right"},i.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return s?i.a.createElement("a",{href:p,target:s,className:u},d):i.a.createElement(r.a,{to:p,className:u},d)}},442:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))},443:function(e,t,n){"use strict";var a=n(445),i=n(51);function r(e,t){return t.encode?t.strict?a(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,a){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===a[e]&&(a[e]={}),a[e][t[1]]=n):a[e]=n};case"bracket":return function(e,n,a){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==a[e]?a[e]=[].concat(a[e],n):a[e]=[n]:a[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=i({arrayFormat:"none"},t)),a=Object.create(null);return"string"!=typeof e?a:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),i=t.shift(),r=t.length>0?t.join("="):void 0;r=void 0===r?null:decodeURIComponent(r),n(decodeURIComponent(i),r,a)})),Object.keys(a).sort().reduce((function(e,t){var n=a[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):a},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,a){return null===n?[r(t,e),"[",a,"]"].join(""):[r(t,e),"[",r(a,e),"]=",r(n,e)].join("")};case"bracket":return function(t,n){return null===n?r(t,e):[r(t,e),"[]=",r(n,e)].join("")};default:return function(t,n){return null===n?r(t,e):[r(t,e),"=",r(n,e)].join("")}}}(t=i({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(a){var i=e[a];if(void 0===i)return"";if(null===i)return r(a,t);if(Array.isArray(i)){var o=[];return i.slice().forEach((function(e){void 0!==e&&o.push(n(a,e,o.length))})),o.join("&")}return r(a,t)+"="+r(i,t)})).filter((function(e){return e.length>0})).join("&"):""}},444:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=(n(433),n(443)),o=n.n(r);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,r=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},b="https://github.com/qovery/documentation/issues/new?"+o.a.stringify(l),s=Object(a.useState)(null),p=s[0],u=s[1];return i.a.createElement("div",{className:"steps steps--h"+n},t,!r&&!p&&i.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",i.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return u("yes")}},"Yes"),"\xa0\xa0",i.a.createElement("a",{href:b,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&i.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",i.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},445:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);