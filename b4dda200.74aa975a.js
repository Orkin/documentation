/*! For license information please see b4dda200.74aa975a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{343:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(0),n(441)),i=n(440),c=n(450),s={last_modified_on:"2022-07-05",title:"Troubleshoot",description:"Everything you need to troubleshoot your application with Qovery",sidebar_label:"hidden",hide_pagination:!0},l={id:"using-qovery/troubleshoot",title:"Troubleshoot",description:"Everything you need to troubleshoot your application with Qovery",source:"@site/docs/using-qovery/troubleshoot.md",permalink:"/docs/using-qovery/troubleshoot",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/troubleshoot.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"API",permalink:"/docs/using-qovery/integration/api-integration"},next:{title:"Introduction",permalink:"/docs/devops/qovery-for-devops-introduction"}},u=[{value:"Liveness/Readiness failed, connect: connection refused",id:"livenessreadiness-failed-connect-connection-refused",children:[]},{value:"0/x nodes are available: x insufficient cpu/ram",id:"0x-nodes-are-available-x-insufficient-cpuram",children:[]},{value:"During a managed database delete, I&#39;ve this error: SnapshotQuotaExceeded",id:"during-a-managed-database-delete-ive-this-error-snapshotquotaexceeded",children:[]},{value:"I don&#39;t have Qovery access anymore, how could I delete Qovery deployed resources on my AWS account?",id:"i-dont-have-qovery-access-anymore-how-could-i-delete-qovery-deployed-resources-on-my-aws-account",children:[]}],d={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(i.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"In this guide, you'll find common mistakes, and how to resolve them. If you don't find what you need here, ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://discuss.qovery.com/"}),"please use the forum"),".")),Object(a.b)("h1",{id:"common-application-deployment-issues"},"Common application deployment issues"),Object(a.b)("h2",{id:"livenessreadiness-failed-connect-connection-refused"},"Liveness/Readiness failed, connect: connection refused"),Object(a.b)("p",null,"If you encounter this kind of error on the Liveness and/or Readiness probe during an application deployment phase:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"Readiness probe failed: dial tcp 100.64.2.230:80: connect: connection refused\nLiveness probe failed: dial tcp 100.64.2.230:80: connect: connection refused\n")),Object(a.b)("p",null,"That means your application may not able to start, or has started but takes too many time to start."),Object(a.b)("p",null,"Here are the possible reasons for starting issues you should check:"),Object(a.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,"The declared port on Qovery (here 80), does not match your application's opening port. Check your application port, and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application/#ports"}),"set the correct port to your application configuration"),".")),Object(a.b)("li",null,Object(a.b)("p",null,"Ensure your application is not listening onto localhost (127.0.0.1) or a specific IP. But set it to all interfaces (0.0.0.0).")),Object(a.b)("li",null,Object(a.b)("p",null,"Your application can take a long time to start and succeed in the end. If it's expected, you don't want to see those messages in your logs and fix this issue, you should configure the behavior of the desired probe. For example delay the time to check from 30s to 60s. All options are ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/advanced-settings/#kubernetes-probes"}),"available here"),".")))),Object(a.b)("h2",{id:"0x-nodes-are-available-x-insufficient-cpuram"},"0/x nodes are available: x insufficient cpu/ram"),Object(a.b)("p",null,"If you encounter this kind of error during an application deployment phase:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"0/1 nodes are available: 1 Insufficient cpu.\n")),Object(a.b)("p",null,"That means your cluster does not have enough resources left to deploy your application or database. Moreover, the cluster auto-scaler cannot be triggered since it has already reached the maximum number of instances for your cluster."),Object(a.b)("p",null,"Here are the possible solutions you can apply:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Reduce the resources (CPU/RAM) used by your existing/new applications. Have a review of the deployed applications and see if you can save up some resources by reducing their CPU/RAM consumption. Remember to re-deploy the applications when you edit the resource. Have a look at ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application/#resources"}),"the resource section for more information"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Select a bigger instance type for your cluster (in terms of CPU/RAM). By increasing it, it will unlock the deployment of your application (since new resources have been added). Check your ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/clusters/#managing-your-cluster-settings"}),"cluster settings"),", and change the instance type of your cluster.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Increase the maximum number of nodes of your cluster. By increasing it, it will allow the cluster autoscaler to add a new node and allow the deployment of your application (since new resources have been added). Check your ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/clusters/#managing-your-cluster-settings"}),"cluster settings"),", and increase the maximum number of nodes of your cluster."))),Object(a.b)(i.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"Please note that by increasing the number of nodes OR by selecting a bigger instance type you will increase your cloud provider cost. For more information, have a look at our ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/clusters/#what-are-the-different-instance-types-available-when-creating-a-cluster"}),"cluster section"),".")),Object(a.b)("h2",{id:"during-a-managed-database-delete-ive-this-error-snapshotquotaexceeded"},"During a managed database delete, I've this error: SnapshotQuotaExceeded"),Object(a.b)("p",null,"This errors occurs because Qovery creates a snapshot before the delete of the database. This to avoid a user mistake who delete a database accidentally."),Object(a.b)("p",null,"To fix this issue, you have 2 solutions:"),Object(a.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,"You certainly have useless snapshots, from old databases or old ones you don't want to keep anymore. Delete them directly from your Cloud Provider web interface. Here is an example on AWS:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Search for the database service (here RDS)"),Object(a.b)("li",{parentName:"ul"},"Select the Snapshots menu"),Object(a.b)("li",{parentName:"ul"},"Select the snapshots to delete")),Object(a.b)("p",{Valign:"center"},Object(a.b)("img",{src:"/img/configuration/database/db-snaptshots-quotas-exceed.png",alt:"Database snapshots"}))),Object(a.b)("li",null,Object(a.b)("p",null,"Open a ticket to the Cloud Provider support, and as to raise this limit.")))),Object(a.b)("h1",{id:"organizations-and-clusters"},"Organizations and clusters"),Object(a.b)("h2",{id:"i-dont-have-qovery-access-anymore-how-could-i-delete-qovery-deployed-resources-on-my-aws-account"},"I don't have Qovery access anymore, how could I delete Qovery deployed resources on my AWS account?"),Object(a.b)("p",null,'Unfortunately, there is no automatic way to do it with Qovery once we don\'t have access. However, AWS provides an easy way to retrieve those resources, so you can manually perform the delete. To do so, go on the AWS web console, and search for "Resource Groups & Tag Editor" service, then:'),Object(a.b)("p",{Valign:"center"},Object(a.b)("img",{src:"/img/aws_resource_groups.png",alt:"Resource groups search by tag"})),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},'Click on "Create Resource Group".'),Object(a.b)("li",{parentName:"ol"},'In Tags, enter: "ClusterLongId".'),Object(a.b)("li",{parentName:"ol"},'In the "Optional Tag value", enter the Qovery cluster ID. If you don\'t have it, let AWS suggest it for you. If you have Qovery deployed elements remainings, it will propose the Cluster long ID automatically.'),Object(a.b)("li",{parentName:"ol"},'Click on "Add".'),Object(a.b)("li",{parentName:"ol"},"You should see the filter with the information you just entered."),Object(a.b)("li",{parentName:"ol"},'Click on "Preview groups resources".'),Object(a.b)("li",{parentName:"ol"},"You'll have all elements deployed by Qovery and you can delete what you want.")),Object(a.b)("h1",{id:"more"},"More"),Object(a.b)("p",null,"You are looking to troubleshoot your application with Qovery? ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/getting-started/debugging/"}),"Read this very short guide")))}p.isMDXComponent=!0},439:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},440:function(e,t,n){"use strict";n(443);var r=n(0),o=n.n(r),a=n(439),i=n.n(a);n(131);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,a=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return o.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:i()("feather","icon-"+(a||s))}),t)}},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,h=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(h,c({ref:t},l,{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},443:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(448)}),n(74)("fill")},448:function(e,t,n){"use strict";var r=n(27),o=n(75),a=n(26);e.exports=function(e){for(var t=r(this),n=a(t.length),i=arguments.length,c=o(i>1?arguments[1]:void 0,n),s=i>2?arguments[2]:void 0,l=void 0===s?n:o(s,n);l>c;)t[c++]=e;return t}},449:function(e,t,n){"use strict";var r=n(451),o=n(51);function a(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=o({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),n(decodeURIComponent(o),a,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[a(t,e),"[",r,"]"].join(""):[a(t,e),"[",a(r,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}(t=o({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var o=e[r];if(void 0===o)return"";if(null===o)return a(r,t);if(Array.isArray(o)){var i=[];return o.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return a(r,t)+"="+a(o,t)})).filter((function(e){return e.length>0})).join("&"):""}},450:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(439),n(449)),i=n.n(a);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,a=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,s={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},l="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(s),u=Object(r.useState)(null),d=u[0],p=u[1];return o.a.createElement("div",{className:"steps steps--h"+n},t,!a&&!d&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:l,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==d&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},451:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);