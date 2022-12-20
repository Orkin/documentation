/*! For license information please see 07c2f310.93b524cd.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{159:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(9),l=(a(0),a(440)),b=a(439),i=a(449),c={last_modified_on:"2022-03-04",title:"Environment Variable",description:"Learn how to configure Environment Variables on Qovery"},o={id:"using-qovery/configuration/environment-variable",title:"Environment Variable",description:"Learn how to configure Environment Variables on Qovery",source:"@site/docs/using-qovery/configuration/environment-variable.md",permalink:"/docs/using-qovery/configuration/environment-variable",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/environment-variable.md",sidebar:"docs",previous:{title:"Lifecycle Job",permalink:"/docs/using-qovery/configuration/lifecycle-job"},next:{title:"Secrets",permalink:"/docs/using-qovery/configuration/secret"}},p=[{value:"Levels",id:"levels",children:[]},{value:"Built-in variables",id:"built-in-variables",children:[]},{value:"Additional built-in variables",id:"additional-built-in-variables",children:[]},{value:"Additional Rules",id:"additional-rules",children:[]},{value:"Create an Environment Variable",id:"create-an-environment-variable",children:[{value:"Scopes",id:"scopes",children:[]}]},{value:"Delete an Environment Variable",id:"delete-an-environment-variable",children:[]},{value:"Update an Environment Variable",id:"update-an-environment-variable",children:[]},{value:"Override Environment Variable",id:"override-environment-variable",children:[]},{value:"Alias Environment Variable",id:"alias-environment-variable",children:[]},{value:"Import environment variables",id:"import-environment-variables",children:[{value:"Importation conflicts",id:"importation-conflicts",children:[]},{value:"Overwriting and limitations",id:"overwriting-and-limitations",children:[]}]}],u={rightToc:p};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(b.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"Do you need to keep secure your environment variable? Use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/secret/"}),"Secret")," instead of ",Object(l.b)("em",{parentName:"p"},"Environment Variable"),".")),Object(l.b)("p",null,"Qovery makes ",Object(l.b)("strong",{parentName:"p"},"Environment Variables")," available to your services at runtime, as well as during builds and deploys."),Object(l.b)(b.a,{type:"warning",mdxType:"Alert"},Object(l.b)("p",null,"Environment Variables are not directly connected to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"Environment")," concept."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Environment Variables"),": represent variables you can store and retrieve in your applications."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Environments"),": represent environments with services (apps, databases, and other services)."))),Object(l.b)("p",null,"Here is a short video to show how to use environment variables."),Object(l.b)("div",{class:"video-container"},Object(l.b)("p",{align:"center"},Object(l.b)("iframe",{src:"https://www.loom.com/embed/4a8000605cd842519a32eb96feecda61",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))),Object(l.b)("h2",{id:"levels"},"Levels"),Object(l.b)("p",null,"There are four levels of Environment Variables. Each type differs in scope - you can create variables bound to application, environment, or project."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scope"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Level"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"BUILT_IN")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Automatically generated variables based on your configuration (e.g., requested databases) propagated to all projects, environments, and applications")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"PROJECT")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Variables at the project level are shared across all environments and all applications of the project")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"ENVIRONMENT")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Variables at the environment level are shared across all applications of the project in one, given environment")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"APPLICATION")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Variables available for one application in one environment")))),Object(l.b)("h2",{id:"built-in-variables"},"Built-in variables"),Object(l.b)("p",null,"By default, every environment contains built-in variables:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"QOVERY_PROJECT_ID")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Current project ID")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"QOVERY_ENVIRONMENT_ID")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Current environment ID")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"QOVERY_APPLICATION_ID")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Current application ID")))),Object(l.b)("h2",{id:"additional-built-in-variables"},"Additional built-in variables"),Object(l.b)("p",null,"For any added service (database, broker, storage), your application receives additional built-in variables. These can be used, for example, to connect\nto the database."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Naming Convention"),":"),Object(l.b)("p",null,"We use the following naming convention for additional built-in variables:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"QOVERY_<SERVICE_TYPE>_<SERVICE_ID>_<SPEC>\n")),Object(l.b)("h2",{id:"additional-rules"},"Additional Rules"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Environment variable keys should use only alphanumeric characters and the underscore character (_) to ensure they are accessible from all programming languages. Environment variable keys should not include the hyphen character."),Object(l.b)("li",{parentName:"ul"},"Environment variable keys should not begin with a double underscore (__)."),Object(l.b)("li",{parentName:"ul"},"An environment variable\u2019s key should not begin with QOVERY_ unless it is set by the Qovery platform itself.")),Object(l.b)("h2",{id:"create-an-environment-variable"},"Create an Environment Variable"),Object(l.b)(b.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"Do you want to bulk import your Environment Variables? ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/tutorial/import-your-environment-variables-with-the-qovery-cli/"}),"Check out this tutorial"))),Object(l.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(l.b)("ol",null,Object(l.b)("li",null,Object(l.b)("p",null,"Navigate to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Console"))),Object(l.b)("li",null,Object(l.b)("p",null,"Select your project, environment and application")),Object(l.b)("li",null,Object(l.b)("p",null,"Select ",Object(l.b)("inlineCode",{parentName:"p"},"Environment Variables")," tab in the left panel and click ",Object(l.b)("inlineCode",{parentName:"p"},"Create")," button:"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/variables/var-1.png",alt:"Variables"}))),Object(l.b)("li",null,Object(l.b)("p",null,"Select the name and value of your new environment variable"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/variables/var-2.png",alt:"Variables"})),Object(l.b)("h3",{id:"scopes"},"Scopes"),Object(l.b)(b.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"Qovery provides three scopes of environment variables:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Project"),Object(l.b)("li",{parentName:"ul"},"Environment"),Object(l.b)("li",{parentName:"ul"},"Application")),Object(l.b)("br",null),Object(l.b)("p",null,"Additionally, there is one more ",Object(l.b)("inlineCode",{parentName:"p"},"BUILT_IN")," scope that is used for variables injected automatically by Qovery."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Project")," environment variables are visible in the whole project."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Environment")," environment variables are visible for all apps inside one environment."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Application")," environment variables are visible only in one application."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Built in")," variables are automatically injected to selected applications by Qovery."),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/#levels"}),"Read more in Levels section")))))),Object(l.b)("h2",{id:"delete-an-environment-variable"},"Delete an Environment Variable"),Object(l.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(l.b)("ol",null,Object(l.b)("li",null,Object(l.b)("p",null,"Navigate to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Console"))),Object(l.b)("li",null,Object(l.b)("p",null,"Select your project, environment and application")),Object(l.b)("li",null,Object(l.b)("p",null,"Select the ",Object(l.b)("inlineCode",{parentName:"p"},"Environment Variables")," tab in the left panel"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/variables/secret-2.png",alt:"Variables"}))),Object(l.b)("li",null,Object(l.b)("p",null,"Select variable you want to delete and click the ",Object(l.b)("inlineCode",{parentName:"p"},"Delete")," button:"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/variables/var-3.png",alt:"Delete Variables"}))))),Object(l.b)("h2",{id:"update-an-environment-variable"},"Update an Environment Variable"),Object(l.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(l.b)("ol",null,Object(l.b)("li",null,Object(l.b)("p",null,"Navigate to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Console"))),Object(l.b)("li",null,Object(l.b)("p",null,"Select your project, environment and application")),Object(l.b)("li",null,Object(l.b)("p",null,"Select the ",Object(l.b)("inlineCode",{parentName:"p"},"Environment Variables")," tab in the left panel"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/variables/secret-2.png",alt:"Variables"}))),Object(l.b)("li",null,Object(l.b)("p",null,"Select variable you want to update and click the ",Object(l.b)("inlineCode",{parentName:"p"},"Edit")," button:"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/variables/var-4.png",alt:"Update Variables"}))),Object(l.b)("li",null,Object(l.b)("p",null,"Update the variable in the popup window:"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/variables/var-5.png",alt:"Update Variables"}))))),Object(l.b)("h2",{id:"override-environment-variable"},"Override Environment Variable"),Object(l.b)("p",null,"If you want to override a value of an environment variable, follow those steps:"),Object(l.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(l.b)("ol",null,Object(l.b)("li",null,Object(l.b)("p",null,"Navigate to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Console"))),Object(l.b)("li",null,Object(l.b)("p",null,"Select your project, environment and application")),Object(l.b)("li",null,Object(l.b)("p",null,"Select the ",Object(l.b)("inlineCode",{parentName:"p"},"Environment Variables")," tab in the left panel"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/variables/secret-2.png",alt:"Variables"}))),Object(l.b)("li",null,Object(l.b)("p",null,"Select variable you want to override and click the ",Object(l.b)("inlineCode",{parentName:"p"},"Override")," button:"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/variables/var-6.png",alt:"Override Variables"}))),Object(l.b)("li",null,Object(l.b)("p",null,"Override the variable in the popup window:"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/variables/var-7.png",alt:"Override Variables"}))))),Object(l.b)(b.a,{type:"warning",mdxType:"Alert"},Object(l.b)("p",null,"You can only override environment variables of a higher scope, e.g. ",Object(l.b)("strong",{parentName:"p"},"Environment")," scope variable can override ",Object(l.b)("strong",{parentName:"p"},"Project")," variable, but can't override ",Object(l.b)("strong",{parentName:"p"},"Application")," variable.")),Object(l.b)("h2",{id:"alias-environment-variable"},"Alias Environment Variable"),Object(l.b)("p",null,"You can create an alias for the existing environment variable."),Object(l.b)("p",null,"Let's suppose that your application requires a ",Object(l.b)("inlineCode",{parentName:"p"},"DATABASE_URL")," variable. Qovery provides your application with the ",Object(l.b)("inlineCode",{parentName:"p"},"QOVERY_DATABASE_MY_POSTGRESQL_3498225_URL")," variable with a database password.\nInstead of copy-pasting its value, you can create an alias to ",Object(l.b)("inlineCode",{parentName:"p"},"QOVERY_DATABASE_MY_POSTGRESQL_3498225_URL"),"."),Object(l.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(l.b)("ol",null,Object(l.b)("li",null,Object(l.b)("p",null,"Navigate to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Console"))),Object(l.b)("li",null,Object(l.b)("p",null,"Select your project, environment and application")),Object(l.b)("li",null,Object(l.b)("p",null,"Select the ",Object(l.b)("inlineCode",{parentName:"p"},"Environment Variables")," tab in the left panel"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/variables/secret-2.png",alt:"Variables"}))),Object(l.b)("li",null,Object(l.b)("p",null,"Select variable you want to alias and click the ",Object(l.b)("inlineCode",{parentName:"p"},"Alias")," button:"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/variables/var-8.png",alt:"ALias Variables"}))),Object(l.b)("li",null,Object(l.b)("p",null,"Alias the variable in the popup window:"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/variables/var-9.png",alt:"Alias Variables"}))))),Object(l.b)("h2",{id:"import-environment-variables"},"Import environment variables"),Object(l.b)("p",null,"You can add a set of environment variables into Qovery by importing an ",Object(l.b)("inlineCode",{parentName:"p"},".env")," file.  The ",Object(l.b)("inlineCode",{parentName:"p"},".env")," file contains a list of your environment variables, in a ",Object(l.b)("inlineCode",{parentName:"p"},"MY_KEY = VALUE")," format."),Object(l.b)("p",null,"To import environment variables into your Qovery environment, follow the steps below."),Object(l.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(l.b)("ol",null,Object(l.b)("li",null,Object(l.b)("p",null,"On an application page, click on the ",Object(l.b)("inlineCode",{parentName:"p"},"Environment variable")," tabs > ",Object(l.b)("inlineCode",{parentName:"p"},"Import")," button."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/variables/import-button.png",alt:"Import button"}))),Object(l.b)("li",null,Object(l.b)("p",null,"Drag & Drop the ",Object(l.b)("inlineCode",{parentName:"p"},".env")," file into the modal, or click on the interface to open the file explorer."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/variables/import-load.png",alt:"Loading interface"}))),Object(l.b)("li",null,Object(l.b)("p",null,"The file is loaded and a new modal is displayed, where you can configure the import of your variables."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/variables/import-file-loaded.png",alt:"Import configuration"})),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Overwrites variables")),Object(l.b)("p",null,"When this option is enabled, if an existing variable and an imported variable share the same name, the existing value will be overwritten by the imported one.\nIf the option is disabled, the imported value will be ignored.\nHowever, to avoid conflicts in the architecture of your environment variables, some of them will intentionally not be imported.\nTo understand how we handle conflicts, please take a look to the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#importation-conflicts"}),"Importation conflicts")," section."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Configure variables import")),Object(l.b)("p",null,"On this modal, you can define for each variable the following parameters:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"name"),": upate variable name"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Value"),": update variable value"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Scope"),": Specify the scope in which you want to import the variable"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Secret"),": Specify if this value is considered as a secret or not")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Preset variables")),Object(l.b)("p",null,"To help you import a large number of variables quickly, you can predefine scope and secret settings.\nThis will change the scope and secret value of all listed variables.\nIf the secret and scope of one or more specific variables are subsequently updated, this will not change the predefined setting.")),Object(l.b)("li",null,Object(l.b)("p",null,"When you have finished the configuration, click on the ",Object(l.b)("inlineCode",{parentName:"p"},"Import")," button.")),Object(l.b)("li",null,Object(l.b)("p",null,"A pop-up message is displayed to inform you that your environment variables have been imported."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/variables/import-done.png",alt:"Import button"}))))),Object(l.b)("h3",{id:"importation-conflicts"},"Importation conflicts"),Object(l.b)("p",null,"To avoid conflicts between already existing and imported environment variables, some of them will not be imported, even if the overwrite option is activated.\nThe different cases are described below."),Object(l.b)("h4",{id:"imported-variable-has-same-name-as-built_in-variable"},"Imported variable has same name as BUILT_IN variable"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scope"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"}," Existing variables ")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VALUE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MY_VAR"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"42"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Built_in")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"}," Variables to import ")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VALUE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MY_VAR"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application")))),Object(l.b)("p",null,"Built_in environment variables are generated and managed by Qovery and will not be overwritten, even if the ",Object(l.b)("inlineCode",{parentName:"p"},"overwriting")," option is activated."),Object(l.b)("h4",{id:"imported-variable-has-same-name-as-an-existing-alias"},"Imported variable has same name as an existing ALIAS"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scope"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"}," Existing variables ")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VALUE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MY_VAR"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"42"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Environment")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ALIAS"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MY_VAR_ALIAS"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MY_VAR"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"}," Variables to import ")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VALUE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MY_VAR_ALIAS"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application")))),Object(l.b)("p",null,"The value cannot be rewritten because the link between the original variable and the alias would be lost."),Object(l.b)("h4",{id:"imported-variable-has-same-name-as-an-existing-secret-or-vice-versa"},"Imported variable has same name as an existing secret (or vice versa)"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scope"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Secret"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"}," Existing variables ")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VALUE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MY_VAR"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ye")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"}," Variables to import ")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VALUE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MY_VAR"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("p",null,"The value cannot be imported because this will overwrite the existing secret."),Object(l.b)("h3",{id:"overwriting-and-limitations"},"Overwriting and limitations"),Object(l.b)("p",null,"Some overwriting cases are not supported for now. They are summarized in the following table."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Existing variable scope"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Imported variable scope"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PROJECT"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PROJECT / ENVIRONMENT / APPLICATION"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"YES")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ENVIRONMENT"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PROJECT"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NO")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ENVIRONMENT"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ENVIRONMENT / APPLICATION"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"YES")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"APPLICATION"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PROJECT / ENVIRONMENT"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NO")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"APPLICATION"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"APPLICATION"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"YES")))))}s.isMDXComponent=!0},438:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var b=r.apply(null,n);b&&e.push(b)}else if("object"===l)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},439:function(e,t,a){"use strict";a(443);var n=a(0),r=a.n(n),l=a(438),b=a.n(l);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,l=e.icon,i=e.type,c=null;switch(i){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return r.a.createElement("div",{className:b()(a,"alert","alert--"+i,{"alert--fill":n,"alert--icon":!1!==l}),role:"alert"},!1!==l&&r.a.createElement("i",{className:b()("feather","icon-"+(l||c))}),t)}},440:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(a),O=n,j=u["".concat(b,".").concat(O)]||u[O]||s[O]||l;return a?r.a.createElement(j,i({ref:t},o,{components:a})):r.a.createElement(j,i({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},443:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(447)}),a(74)("fill")},447:function(e,t,a){"use strict";var n=a(28),r=a(75),l=a(27);e.exports=function(e){for(var t=n(this),a=l(t.length),b=arguments.length,i=r(b>1?arguments[1]:void 0,a),c=b>2?arguments[2]:void 0,o=void 0===c?a:r(c,a);o>i;)t[i++]=e;return t}},448:function(e,t,a){"use strict";var n=a(450),r=a(51);function l(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var a=function(e){var t;switch(e.arrayFormat){case"index":return function(e,a,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=a):n[e]=a};case"bracket":return function(e,a,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=[a]:n[e]=a};default:return function(e,t,a){void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=t}}}(t=r({arrayFormat:"none"},t)),n=Object.create(null);return"string"!=typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),l=t.length>0?t.join("="):void 0;l=void 0===l?null:decodeURIComponent(l),a(decodeURIComponent(r),l,n)})),Object.keys(n).sort().reduce((function(e,t){var a=n[t];return Boolean(a)&&"object"==typeof a&&!Array.isArray(a)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(a):e[t]=a,e}),Object.create(null))):n},t.stringify=function(e,t){var a=function(e){switch(e.arrayFormat){case"index":return function(t,a,n){return null===a?[l(t,e),"[",n,"]"].join(""):[l(t,e),"[",l(n,e),"]=",l(a,e)].join("")};case"bracket":return function(t,a){return null===a?l(t,e):[l(t,e),"[]=",l(a,e)].join("")};default:return function(t,a){return null===a?l(t,e):[l(t,e),"=",l(a,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(n){var r=e[n];if(void 0===r)return"";if(null===r)return l(n,t);if(Array.isArray(r)){var b=[];return r.slice().forEach((function(e){void 0!==e&&b.push(a(n,e,b.length))})),b.join("&")}return l(n,t)+"="+l(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},449:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=(a(438),a(448)),b=a.n(l);a(134);t.a=function(e){var t=e.children,a=e.headingDepth,l=e.hideFeedbackQuestion,i="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+i+" failed",body:"The tutorial on:\n\n"+i+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},o="https://github.com/qovery/documentation/issues/new?"+b.a.stringify(c),p=Object(n.useState)(null),u=p[0],s=p[1];return r.a.createElement("div",{className:"steps steps--h"+a},t,!l&&!u&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return s("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:o,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==u&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},450:function(e,t,a){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);