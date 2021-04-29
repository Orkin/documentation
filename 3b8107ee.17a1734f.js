(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{192:function(e,o,t){"use strict";t.r(o),t.d(o,"frontMatter",(function(){return i})),t.d(o,"metadata",(function(){return c})),t.d(o,"rightToc",(function(){return s})),t.d(o,"default",(function(){return l}));var r=t(1),n=t(9),a=(t(0),t(343)),i={last_modified_on:"2021-04-29",title:"FAQ",description:"Frequently Asked Questions"},c={id:"useful-links/faq",title:"FAQ",description:"Frequently Asked Questions",source:"@site/docs/useful-links/faq.md",permalink:"/docs/useful-links/faq",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/useful-links/faq.md",sidebar:"docs",previous:{title:"GDPR",permalink:"/docs/security-and-compliance/gdpr"},next:{title:"Help and Support",permalink:"/docs/useful-links/help-and-support"}},s=[{value:"What is the difference between a Project, Application, and Environment?",id:"what-is-the-difference-between-a-project-application-and-environment",children:[]},{value:"Can you help me to deploy my application on Qovery?",id:"can-you-help-me-to-deploy-my-application-on-qovery",children:[]},{value:"How does application build work?",id:"how-does-application-build-work",children:[]},{value:"How does Qovery manage databases?",id:"how-does-qovery-manage-databases",children:[]},{value:"Does Qovery replace Kubernetes?",id:"does-qovery-replace-kubernetes",children:[]},{value:"Does Qovery support mono repository?",id:"does-qovery-support-mono-repository",children:[]},{value:"Does Qovery support private Git repository ?",id:"does-qovery-support-private-git-repository-",children:[]},{value:"What resources are provided with Free plan ?",id:"what-resources-are-provided-with-free-plan-",children:[]},{value:"Where are your servers located?",id:"where-are-your-servers-located",children:[]},{value:"What is the IP address of Qovery? I would like to whitelist it on my side",id:"what-is-the-ip-address-of-qovery-i-would-like-to-whitelist-it-on-my-side",children:[]},{value:"If I have N custom domains under the same root domain, do I need to create N CNAME records, or just creating one for the root domain is enough ?",id:"if-i-have-n-custom-domains-under-the-same-root-domain-do-i-need-to-create-n-cname-records-or-just-creating-one-for-the-root-domain-is-enough-",children:[]},{value:"I have made actions on my AWS account and want to clean my organization in order to restart from scratch, how can I proceed ?",id:"i-have-made-actions-on-my-aws-account-and-want-to-clean-my-organization-in-order-to-restart-from-scratch-how-can-i-proceed-",children:[]},{value:"How Qovery works under the hood?",id:"how-qovery-works-under-the-hood",children:[]},{value:"How can I contact you?",id:"how-can-i-contact-you",children:[]}],d={rightToc:s};function l(e){var o=e.components,t=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,t,{components:o,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"what-is-the-difference-between-a-project-application-and-environment"},"What is the difference between a Project, Application, and Environment?"),Object(a.b)("p",null,"A ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/main-concepts/project/"}),"project")," is the site that you're working on. Each project can contain multiple ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/main-concepts/application/"}),"applications")," and be deployed in multiple ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/main-concepts/environment/"}),"environments"),". An environment is a standalone copy of your site, including apps, databases, storage, data, and all other services. By default, ",Object(a.b)("inlineCode",{parentName:"p"},"master")," branch is the production environment, while all other branches can be set up as identical copies of the prod environment for testing purposes."),Object(a.b)("h3",{id:"can-you-help-me-to-deploy-my-application-on-qovery"},"Can you help me to deploy my application on Qovery?"),Object(a.b)("p",null,"Yes, absolutely. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://community.qovery.com/"}),"Join our fantastic community")," to get the help of our +2000 developers and Qovery team members."),Object(a.b)("h3",{id:"how-does-application-build-work"},"How does application build work?"),Object(a.b)("p",null,"We build and run your Dockerfile, so it's up to you to provide all the good instructions. If you have any trouble, we can assist you."),Object(a.b)("h3",{id:"how-does-qovery-manage-databases"},"How does Qovery manage databases?"),Object(a.b)("p",null,"Qovery relies on the managed databases provided by the Cloud provider of your choice (AWS, GCP, Azure). So it's highly reliable. For development usage, we rely on a single instance database running inside a container (to keep the cost low for development purposes). But, we guarantee the safety of the data and the availability."),Object(a.b)("h3",{id:"does-qovery-replace-kubernetes"},"Does Qovery replace Kubernetes?"),Object(a.b)("p",null,"Behind the scene, Qovery uses ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/"}),"Kubernetes"),". Qovery adds a simplification layer on top of Kubernetes to make it accessible to any developer. Qovery is installable on your Kubernetes clusters with the Enterprise version. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.qovery.com/business"}),"Read more")),Object(a.b)("h3",{id:"does-qovery-support-mono-repository"},"Does Qovery support mono repository?"),Object(a.b)("p",null,"We expect to support mono repository as soon as possible. Please do ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://roadmap.qovery.com/"}),"upvote for mono repository support in our roadmap"),"."),Object(a.b)("h3",{id:"does-qovery-support-private-git-repository-"},"Does Qovery support private Git repository ?"),Object(a.b)("p",null,"Yes, absolutely."),Object(a.b)("h3",{id:"what-resources-are-provided-with-free-plan-"},"What resources are provided with Free plan ?"),Object(a.b)("p",null,"Free plan comes with 10GB of storage, 1GB of RAM adn 1 vCPU."),Object(a.b)("h3",{id:"where-are-your-servers-located"},"Where are your servers located?"),Object(a.b)("p",null,"Qovery relies on Cloud providers like AWS (Amazon Web Services), GCP (Google Cloud Platform) and Azure. For each ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/main-concepts/project/"}),"project"),", and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/main-concepts/environment/"}),"environment")," you can select the region (America, Europe, Asia) of your choice."),Object(a.b)("h3",{id:"what-is-the-ip-address-of-qovery-i-would-like-to-whitelist-it-on-my-side"},"What is the IP address of Qovery? I would like to whitelist it on my side"),Object(a.b)("p",null,"It is not possible to whitelist only one IP address as we have several nodes, and they have different IP addresses. Your app can move to any of those nodes.\nIn addition to that, nodes can be deleted/replaced with new ones and therefore have different IPs. Authentication based on an IP address is not a viable solution for any cloud-native solution like Qovery."),Object(a.b)("h3",{id:"if-i-have-n-custom-domains-under-the-same-root-domain-do-i-need-to-create-n-cname-records-or-just-creating-one-for-the-root-domain-is-enough-"},"If I have N custom domains under the same root domain, do I need to create N CNAME records, or just creating one for the root domain is enough ?"),Object(a.b)("p",null,"You have to create N CNAME, one per custom domain"),Object(a.b)("h3",{id:"i-have-made-actions-on-my-aws-account-and-want-to-clean-my-organization-in-order-to-restart-from-scratch-how-can-i-proceed-"},"I have made actions on my AWS account and want to clean my organization in order to restart from scratch, how can I proceed ?"),Object(a.b)("p",null,'If you want to remove Qovery infrastructure from your AWS account in order to restart from the beginning, or if you are leaving Qovery and want to delete Qovery infrastructure from your AWS account, you can do that buy clicking on "delete infrastraucture" on your Organization page:'),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/organization-delete-infra.png",alt:"Delete Qovery infrastructure"})),Object(a.b)("p",null,"The option is also available if you do not have any project;"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/organization-delete-infra-2.png",alt:"Delete Qovery infrastructure"})),Object(a.b)("h3",{id:"how-qovery-works-under-the-hood"},"How Qovery works under the hood?"),Object(a.b)("p",null,"We will explain in details soon."),Object(a.b)("h3",{id:"how-can-i-contact-you"},"How can I contact you?"),Object(a.b)("p",null,"Feel free to join our ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Discord server")," or contact us by email at hello (at) qovery.com."))}l.isMDXComponent=!0},343:function(e,o,t){"use strict";t.d(o,"a",(function(){return p})),t.d(o,"b",(function(){return b}));var r=t(0),n=t.n(r);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=n.a.createContext({}),l=function(e){var o=n.a.useContext(d),t=o;return e&&(t="function"==typeof e?e(o):c({},o,{},e)),t},p=function(e){var o=l(e.components);return n.a.createElement(d.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.a.createElement(n.a.Fragment,{},o)}},h=Object(r.forwardRef)((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),h=r,b=p["".concat(i,".").concat(h)]||p[h]||u[h]||a;return t?n.a.createElement(b,c({ref:o},d,{components:t})):n.a.createElement(b,c({ref:o},d))}));function b(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=h;var c={};for(var s in o)hasOwnProperty.call(o,s)&&(c[s]=o[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=t[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);