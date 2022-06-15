/*! For license information please see ff91a867.48f95d41.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{432:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return O}));var a=n(1),r=n(9),i=(n(0),n(439)),o=n(438),l=n(448),c=n(443),b={last_modified_on:"2022-06-15",title:"Organization",description:"Learn how to configure Organizations on Qovery"},p={id:"using-qovery/configuration/organization",title:"Organization",description:"Learn how to configure Organizations on Qovery",source:"@site/docs/using-qovery/configuration/organization.md",permalink:"/docs/using-qovery/configuration/organization",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/organization.md",sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/using-qovery/configuration"},next:{title:"Project",permalink:"/docs/using-qovery/configuration/project"}},u=[{value:"Create an Organization",id:"create-an-organization",children:[{value:"How to choose between plans?",id:"how-to-choose-between-plans",children:[]}]},{value:"Manage your clusters",id:"manage-your-clusters",children:[]},{value:"Organization members",id:"organization-members",children:[{value:"Roles",id:"roles",children:[]}]},{value:"Change an Organization",id:"change-an-organization",children:[]},{value:"Delete an Organization",id:"delete-an-organization",children:[]},{value:"Managing Git Permissions Using the Qovery Github App",id:"managing-git-permissions-using-the-qovery-github-app",children:[{value:"Installing the Qovery Github App",id:"installing-the-qovery-github-app",children:[]},{value:"Managing the Github permissions",id:"managing-the-github-permissions",children:[]},{value:"Uninstalling the Qovery Github App",id:"uninstalling-the-qovery-github-app",children:[]}]},{value:"Billing",id:"billing",children:[]}],s={rightToc:u};function O(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(c.a,{name:"documentation",mdxType:"Assumptions"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You have a ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/using-qovery/interface/"}),"created an account"),"."))),Object(i.b)("p",null,"An organization is a shared account where developers can collaborate across many projects at once. Owners and organization administrators\ncan manage:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"cloud accounts."),Object(i.b)("li",{parentName:"ul"},"members access."),Object(i.b)("li",{parentName:"ul"},"the billing.")),Object(i.b)("h2",{id:"create-an-organization"},"Create an Organization"),Object(i.b)("p",null,"You need to create an organization the first time you use Qovery. You have to choose between the ",Object(i.b)("strong",{parentName:"p"},"Free"),", ",Object(i.b)("strong",{parentName:"p"},"Professional"),", ",Object(i.b)("strong",{parentName:"p"},"Business")," and ",Object(i.b)("strong",{parentName:"p"},"Enterprise"),"."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/organization/create_organization.jpg",alt:"Qovery - create an organization"})),Object(i.b)("h3",{id:"how-to-choose-between-plans"},"How to choose between plans?"),Object(i.b)("p",null,"In a nutshell:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Free"),", ",Object(i.b)("strong",{parentName:"li"},"Professional"),", ",Object(i.b)("strong",{parentName:"li"},"Business")," and ",Object(i.b)("strong",{parentName:"li"},"Enterprise")," plans: to deploy on your Cloud account."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Community"),": to get free hosting for your hobby project.")),Object(i.b)("p",null,"Get more info ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.qovery.com/pricing"}),"here"),"."),Object(i.b)("h2",{id:"manage-your-clusters"},"Manage your clusters"),Object(i.b)("p",null,"With Qovery, you can manage multiple clusters in your organizations settings. You can then deploy your project environments and services to the cluster of your choice."),Object(i.b)("p",null,"In the settings of your organization, you can add, stop and delete a cluster, as well as update its settings."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/organization/multi-clusters.png",alt:"Qovery - Manage multiple clusters in your organization"})),Object(i.b)("p",null,"For more information, see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/clusters/"}),"Clusters"),"."),Object(i.b)("h4",{id:"what-is-the-default-cluster"},"What is the default cluster?"),Object(i.b)("p",null,"The default cluster is the first cluster you installed in your organization. "),Object(i.b)("p",null,"When you create a new environment and leave the ",Object(i.b)("inlineCode",{parentName:"p"},"mode")," and ",Object(i.b)("inlineCode",{parentName:"p"},"cluster")," parameters set to the value ",Object(i.b)("inlineCode",{parentName:"p"},"Automatic"),", your environment is deployed to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the cluster defined in one of ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/deployment-rule/#environment-deployment-rules"}),"your project rules"),","),Object(i.b)("li",{parentName:"ul"},"or to the default cluster if no project rule applies.")),Object(i.b)("p",null,"For more information on deployment rules, see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/project/"}),"Project"),"."),Object(i.b)("h2",{id:"organization-members"},"Organization members"),Object(i.b)("p",null,"You can invite someone to join your organization by email. Then he will get access to your projects and will be able to contribute."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/organization/organization_members.png",alt:"Qovery - List all members within an organization"})),Object(i.b)("h3",{id:"roles"},"Roles"),Object(i.b)("p",null,"Four roles within an organization exist:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Action"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Owner"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Admin"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Developer"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Viewer"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Read organization"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Edit organization"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Delete organization"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Manage billing"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Invite members"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Connect to Kubernetes cluster"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Read project"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Edit project"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Delete project"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Read environment"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Edit production environment"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Edit development environment"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Stop production environment"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Stop development environment"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Delete production environment"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Delete development environment"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Read application"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Edit production application"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Edit development application"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Delete production application"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Delete development application"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Connect via SSH to an application"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Read database"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Edit production database"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Edit development database"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Delete production database"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Delete development database"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")))),Object(i.b)("h2",{id:"change-an-organization"},"Change an Organization"),Object(i.b)("p",null,"As a user, you can have access to one or many organizations. Use the dropdown in the top right navbar to change your organization."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/organization/change_organization.png",alt:"Qovery - change organization"})),Object(i.b)("h2",{id:"delete-an-organization"},"Delete an Organization"),Object(i.b)(o.a,{type:"danger",mdxType:"Alert"},Object(i.b)("p",null,"This is a non-recoverable operation. By deleting your organization, all your data are deleted.")),Object(i.b)("p",null,"To delete your organization, you need to go into the ",Object(i.b)("strong",{parentName:"p"},"Danger Zone")," within your organization settings."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/organization/delete_organization.png",alt:"Qovery - delete organization"})),Object(i.b)("h2",{id:"managing-git-permissions-using-the-qovery-github-app"},"Managing Git Permissions Using the Qovery Github App"),Object(i.b)("p",null,"When you first sign into the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Qovery Console"),", you need to provide your Git provider account credentials. This allows you to later take advantage of a Single Sign-On process through your Git provider.\nHowever, by default, Qovery is then allowed to access all the resources stored on your Git provider account. "),Object(i.b)("p",null,"For better control, as a Github user, you can install the ",Object(i.b)("strong",{parentName:"p"},"Qovery Github App"),", and define which Github repositories Qovery can access."),Object(i.b)(o.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"You can only link one Github Organization to your Qovery Organization through the ",Object(i.b)("strong",{parentName:"p"},"Qovery Github App"),".\nAlso, once the ",Object(i.b)("strong",{parentName:"p"},"Qovery Github App")," is installed, all the members of your Qovery Organization will only have access to the repositories linked to your ",Object(i.b)("strong",{parentName:"p"},"Qovery Github App"),".")),Object(i.b)("h3",{id:"installing-the-qovery-github-app"},"Installing the Qovery Github App"),Object(i.b)(o.a,{type:"warning",mdxType:"Alert"},Object(i.b)("p",null,"If you have already one or more applications running on your Qovery Organization, please make sure to give the ",Object(i.b)("strong",{parentName:"p"},"Qovery Github App")," access to their repositories. If a repository is missing, you might experience a loss of functionalities for those applications (update, auto-deploy, preview environments, etc.).")),Object(i.b)("p",null,"To install the ",Object(i.b)("strong",{parentName:"p"},"Qovery Github App"),":"),Object(i.b)(l.a,{headingDepth:3,mdxType:"Steps"},Object(i.b)("ol",null,Object(i.b)("li",null,Object(i.b)("p",null,"Open your ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Qovery Console")," and access your organization settings:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/clusters/Organization_Settings_Access_Button.png",alt:"Qovery - delete organization"}))),Object(i.b)("li",null,Object(i.b)("p",null,"In the ",Object(i.b)("inlineCode",{parentName:"p"},"Organization settings")," menu, click ",Object(i.b)("inlineCode",{parentName:"p"},"Git Permission"),":"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/organization/Git_Permissions_Tab.png",alt:"Application"}))),Object(i.b)("li",null,Object(i.b)("p",null,"Below your Git provider account click ",Object(i.b)("inlineCode",{parentName:"p"},"Install Github Application to manage permission"),":"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/organization/Installing_Github_App.png",alt:"Application"})),Object(i.b)("p",null,"A new window opens in your browser so you can install the ",Object(i.b)("strong",{parentName:"p"},"Qovery Github App")," on your Github account.")),Object(i.b)("li",null,Object(i.b)("p",null,"Click the Github account on which you want to install the ",Object(i.b)("strong",{parentName:"p"},"Qovery Github App"),":"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/organization/Install_GithubApp_Access.png",alt:"Application"}))),Object(i.b)("li",null,Object(i.b)("p",null,"Click ",Object(i.b)("inlineCode",{parentName:"p"},"Only select repositories")," and, in the dropdown menu, define which Github repositories you want to give Qovery access to:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/organization/Repositories_Selection.png",alt:"Application"})),Object(i.b)(o.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"You need to give Qovery access to any Github repository linked to an existing Qovery application.\nFailure to do so will result in the loss of some functionalities (update, auto-deploy, preview environments, etc.)."))),Object(i.b)("li",null,Object(i.b)("p",null,"To confirm, click ",Object(i.b)("inlineCode",{parentName:"p"},"Install & Authorize"),":"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/organization/Confirmation_Window_GithubApp.png",alt:"Application"})),Object(i.b)("p",null,"You are redirected to your Qovery Console, where the list of authorized Github repositories is updated."),Object(i.b)(o.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"You can update or revoke access to one or multiple Github repositories at any time. To do so, in the ",Object(i.b)("inlineCode",{parentName:"p"},"Git Permission")," tab, click ",Object(i.b)("inlineCode",{parentName:"p"},"Manage Permission")," below your Git provider account, and repeat the selection process on the Github website."))))),Object(i.b)("h3",{id:"managing-the-github-permissions"},"Managing the Github permissions"),Object(i.b)("p",null,"To add or remove access to one of your repositories:"),Object(i.b)(l.a,{headingDepth:3,mdxType:"Steps"},Object(i.b)("ol",null,Object(i.b)("li",null,Object(i.b)("p",null,"Open your ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Qovery Console")," and access your organization settings:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/clusters/Organization_Settings_Access_Button.png",alt:"Qovery - delete organization"}))),Object(i.b)("li",null,Object(i.b)("p",null,"In the ",Object(i.b)("inlineCode",{parentName:"p"},"Organization settings")," menu, click ",Object(i.b)("inlineCode",{parentName:"p"},"Git Permission"),":"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/organization/Git_Permissions_Tab.png",alt:"Application"}))),Object(i.b)("li",null,Object(i.b)("p",null,"Next to your Git provider account, click ",Object(i.b)("inlineCode",{parentName:"p"},"Manage permission"),":"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/organization/Github_App_Disconnect.png",alt:"Application"}))),Object(i.b)("li",null,Object(i.b)("p",null,"Click the Github account on which you want to manage the ",Object(i.b)("strong",{parentName:"p"},"Qovery Github App")," access:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/organization/Install_GithubApp_Access.png",alt:"Application"}))),Object(i.b)("li",null,Object(i.b)("p",null,"Add or remove the repositories you want to give Qovery access to:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/organization/Repositories_Selection.png",alt:"Application"})),Object(i.b)(o.a,{type:"warning",mdxType:"Alert"},Object(i.b)("p",null,"Rremoving access to a Github repository linked to an existing Qovery application will result in the loss of some functionalities for that application (update, auto-deploy, preview environments, etc.)."))))),Object(i.b)("h3",{id:"uninstalling-the-qovery-github-app"},"Uninstalling the Qovery Github App"),Object(i.b)(o.a,{type:"warning",mdxType:"Alert"},Object(i.b)("p",null,"Uninstalling the ",Object(i.b)("strong",{parentName:"p"},"Qovery Github App")," will result in a loss of some functionalities for all your applications (update, auto-deploy, preview environments, etc.).")),Object(i.b)("p",null,"To uninstall the ",Object(i.b)("strong",{parentName:"p"},"Qovery Github App"),":"),Object(i.b)(l.a,{headingDepth:3,mdxType:"Steps"},Object(i.b)("ol",null,Object(i.b)("li",null,Object(i.b)("p",null,"Open your ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Qovery Console")," and access your organization settings:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/clusters/Organization_Settings_Access_Button.png",alt:"Qovery - delete organization"}))),Object(i.b)("li",null,Object(i.b)("p",null,"In the ",Object(i.b)("inlineCode",{parentName:"p"},"Organization settings")," menu, click ",Object(i.b)("inlineCode",{parentName:"p"},"Git Permission"),":"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/organization/Git_Permissions_Tab.png",alt:"Application"}))),Object(i.b)("li",null,Object(i.b)("p",null,"Next to your Git provider account, click ",Object(i.b)("inlineCode",{parentName:"p"},"Disconnect"),":"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/organization/Github_App_Disconnect.png",alt:"Application"})),Object(i.b)("p",null,"The list of authorized Github repositories is updated, meaning Qovery now has access to all of your Github repositories again.")),Object(i.b)("li",null,Object(i.b)("p",null,"From your browser, access your Github account and open your ",Object(i.b)("inlineCode",{parentName:"p"},"Settings"),":"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/organization/Github_Settings.png",alt:"Application"}))),Object(i.b)("li",null,Object(i.b)("p",null,"In the navigation menu, click ",Object(i.b)("inlineCode",{parentName:"p"},"Applications"),":"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/organization/Github_Applications_Menu.png",alt:"Application"}))),Object(i.b)("li",null,Object(i.b)("p",null,"At the bottom of the page, click ",Object(i.b)("inlineCode",{parentName:"p"},"Uninstall"),":"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/organization/GithubApp_Uninstall_Finalize.png",alt:"Application"})),Object(i.b)("p",null,"A confirmation pop-up window opens.")),Object(i.b)("li",null,Object(i.b)("p",null,"Click ",Object(i.b)("inlineCode",{parentName:"p"},"OK"),":"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"Qovery Github App")," is uninstalled.")))),Object(i.b)("h2",{id:"billing"},"Billing"),Object(i.b)(o.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"To know more on how much Qovery costs - see our ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.qovery.com/pricing"}),"pricing page"),".")))}O.isMDXComponent=!0},437:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},438:function(e,t,n){"use strict";n(442);var a=n(0),r=n.n(a),i=n(437),o=n.n(i);n(131);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,i=e.icon,l=e.type,c=null;switch(l){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return r.a.createElement("div",{className:o()(n,"alert","alert--"+l,{"alert--fill":a,"alert--icon":!1!==i}),role:"alert"},!1!==i&&r.a.createElement("i",{className:o()("feather","icon-"+(i||c))}),t)}},439:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),O=a,j=u["".concat(o,".").concat(O)]||u[O]||s[O]||i;return n?r.a.createElement(j,l({ref:t},b,{components:n})):r.a.createElement(j,l({ref:t},b))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=O;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},441:function(e,t,n){var a=n(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},442:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(446)}),n(74)("fill")},443:function(e,t,n){"use strict";n(441);var a=n(0),r=n.n(a),i=n(438);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(i.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},446:function(e,t,n){"use strict";var a=n(27),r=n(75),i=n(26);e.exports=function(e){for(var t=a(this),n=i(t.length),o=arguments.length,l=r(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,b=void 0===c?n:r(c,n);b>l;)t[l++]=e;return t}},447:function(e,t,n){"use strict";var a=n(449),r=n(51);function i(e,t){return t.encode?t.strict?a(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,a){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===a[e]&&(a[e]={}),a[e][t[1]]=n):a[e]=n};case"bracket":return function(e,n,a){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==a[e]?a[e]=[].concat(a[e],n):a[e]=[n]:a[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=r({arrayFormat:"none"},t)),a=Object.create(null);return"string"!=typeof e?a:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),i=t.length>0?t.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),n(decodeURIComponent(r),i,a)})),Object.keys(a).sort().reduce((function(e,t){var n=a[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):a},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,a){return null===n?[i(t,e),"[",a,"]"].join(""):[i(t,e),"[",i(a,e),"]=",i(n,e)].join("")};case"bracket":return function(t,n){return null===n?i(t,e):[i(t,e),"[]=",i(n,e)].join("")};default:return function(t,n){return null===n?i(t,e):[i(t,e),"=",i(n,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(a){var r=e[a];if(void 0===r)return"";if(null===r)return i(a,t);if(Array.isArray(r)){var o=[];return r.slice().forEach((function(e){void 0!==e&&o.push(n(a,e,o.length))})),o.join("&")}return i(a,t)+"="+i(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},448:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=(n(437),n(447)),o=n.n(i);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,i=e.hideFeedbackQuestion,l="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+l+" failed",body:"The tutorial on:\n\n"+l+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},b="https://github.com/qovery/documentation/issues/new?"+o.a.stringify(c),p=Object(a.useState)(null),u=p[0],s=p[1];return r.a.createElement("div",{className:"steps steps--h"+n},t,!i&&!u&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return s("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:b,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==u&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},449:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);