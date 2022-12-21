/*! For license information please see 1aa86e56.0c523a4a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{187:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(1),o=t(9),a=(t(0),t(441)),i=t(440),c={last_modified_on:"2022-12-21",title:"Circle CI",description:"Learn how to connect Circle CI to Qovery"},l={id:"using-qovery/integration/continuous-integration/circle-ci",title:"Circle CI",description:"Learn how to connect Circle CI to Qovery",source:"@site/docs/using-qovery/integration/continuous-integration/circle-ci.md",permalink:"/docs/using-qovery/integration/continuous-integration/circle-ci",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/integration/continuous-integration/circle-ci.md",sidebar:"docs",previous:{title:"GitLab CI",permalink:"/docs/using-qovery/integration/continuous-integration/gitlab-ci"},next:{title:"Jenkins",permalink:"/docs/using-qovery/integration/continuous-integration/jenkins"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Qovery CLI command examples",id:"qovery-cli-command-examples",children:[{value:"Deploy your application with a specific commit ID",id:"deploy-your-application-with-a-specific-commit-id",children:[]},{value:"Deploy your container with a specific Tag",id:"deploy-your-container-with-a-specific-tag",children:[]},{value:"Create a Preview Environment for your Pull-Request",id:"create-a-preview-environment-for-your-pull-request",children:[]},{value:"Delete a Preview Environment",id:"delete-a-preview-environment",children:[]},{value:"Terraform",id:"terraform",children:[]},{value:"Any other examples?",id:"any-other-examples",children:[]}]}],p={rightToc:u};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Using Circle CI with Qovery is super powerful and gives you the ability to manage the way that you want to deploy your applications. As the possibility are endless, I will share with you a couple of examples that you can use. Feel free to adapt them to your need."),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"Before using the examples below, you need to:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Install the ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/using-qovery/interface/cli/"}),"Qovery CLI"),"."),Object(a.b)("li",{parentName:"ol"},"Generate an ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/using-qovery/interface/cli/#generate-api-token"}),"API token"),"."),Object(a.b)("li",{parentName:"ol"},"Set the environment variable ",Object(a.b)("inlineCode",{parentName:"li"},"QOVERY_CLI_ACCESS_TOKEN")," (",Object(a.b)("inlineCode",{parentName:"li"},"export QOVERY_CLI_ACCESS_TOKEN=your-api-token"),") with your API token.")),Object(a.b)("h2",{id:"qovery-cli-command-examples"},"Qovery CLI command examples"),Object(a.b)("h3",{id:"deploy-your-application-with-a-specific-commit-id"},"Deploy your application with a specific commit ID"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"qovery application deploy \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_environment_name> \\\n  --application <your_app_name> \\\n  --commit-id <your_commit_id> \\\n  --watch\n")),Object(a.b)(i.a,{type:"success",mdxType:"Alert"},Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"--watch")," is an optional parameter that will display the status of the deployment and return 0 if the deployment is successful or 1 if it fails.")),Object(a.b)("h3",{id:"deploy-your-container-with-a-specific-tag"},"Deploy your container with a specific Tag"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"qovery application deploy \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_environment_name> \\\n  --container <your_container_name> \\\n  --tag <your_container_tag> \\\n  --watch\n")),Object(a.b)("h3",{id:"create-a-preview-environment-for-your-pull-request"},"Create a Preview Environment for your Pull-Request"),Object(a.b)("p",null,"Qovery integrates automatically with GitHub, GitLab and Bitbucket to create a Preview Environment for each Pull-Request. But in case you want to control the creation of the Preview Environment manually, you can use the following commands:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"# Clone your base environment\nqovery environment clone \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_environment_name> \\\n  --new-environment-name <your_new_environment_name>\n\n# Change your application branch to the Pull-Request branch\nqovery application update \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_new_environment_name> \\\n  --application <your_app_name> \\\n  --branch <your_pull_request_branch_name>\n\n# Deploy your new environment\nqovery environment deploy \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_new_environment_name> \\\n  --watch\n")),Object(a.b)("h3",{id:"delete-a-preview-environment"},"Delete a Preview Environment"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"qovery environment delete \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_preview_environment_name> \\\n  --watch\n")),Object(a.b)("h3",{id:"terraform"},"Terraform"),Object(a.b)("p",null,"Do you want to include Terraform in your CI? Check out our ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/integration/terraform/"}),"Terraform documentation"),"."),Object(a.b)("h3",{id:"any-other-examples"},"Any other examples?"),Object(a.b)("p",null,"Feel free to share your examples with us, and we'll be happy to share them with the community. Contact us on ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://discuss.qovery.com/"}),"our forum"),"."))}s.isMDXComponent=!0},439:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},440:function(e,n,t){"use strict";t(444);var r=t(0),o=t.n(r),a=t(439),i=t.n(a);t(132);n.a=function(e){var n=e.children,t=e.classNames,r=e.fill,a=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return o.a.createElement("div",{className:i()(t,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:i()("feather","icon-"+(a||l))}),n)}},441:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},s=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},y=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),y=r,b=s["".concat(i,".").concat(y)]||s[y]||m[y]||a;return t?o.a.createElement(b,c({ref:n},u,{components:t})):o.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=y;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},444:function(e,n,t){var r=t(12);r(r.P,"Array",{fill:t(448)}),t(74)("fill")},448:function(e,n,t){"use strict";var r=t(28),o=t(75),a=t(27);e.exports=function(e){for(var n=r(this),t=a(n.length),i=arguments.length,c=o(i>1?arguments[1]:void 0,t),l=i>2?arguments[2]:void 0,u=void 0===l?t:o(l,t);u>c;)n[c++]=e;return n}}}]);