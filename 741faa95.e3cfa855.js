/*! For license information please see 741faa95.e3cfa855.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{252:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),i=(n(0),n(378)),o=n(377),c=(n(382),{last_modified_on:"2021-10-10",title:"Kubernetes",description:"Learn how to configure and fine tune Kubernetes on Qovery"}),l={id:"devops/infrastructure-config/kubernetes",title:"Kubernetes",description:"Learn how to configure and fine tune Kubernetes on Qovery",source:"@site/docs/devops/infrastructure-config/kubernetes.md",permalink:"/docs/devops/infrastructure-config/kubernetes",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/devops/infrastructure-config/kubernetes.md",sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/devops/infrastructure-config"},next:{title:"Custom Domain",permalink:"/docs/devops/infrastructure-config/custom-domain"}},u=[{value:"Direct access",id:"direct-access",children:[]},{value:"Container application",id:"container-application",children:[]},{value:"High-availability",id:"high-availability",children:[]},{value:"Auto-scaling",id:"auto-scaling",children:[]},{value:"Cost optimization",id:"cost-optimization",children:[]},{value:"Container database",id:"container-database",children:[]},{value:"Service discovery",id:"service-discovery",children:[]},{value:"Security",id:"security",children:[]},{value:"Maintenance",id:"maintenance",children:[]}],s={rightToc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(o.a,{type:"warning",mdxType:"Alert"},Object(i.b)("p",null,"Work in progress")),Object(i.b)("p",null,"TODO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Introduction to Kubernetes in the context of Qovery (for stateless workload)")),Object(i.b)("h2",{id:"direct-access"},"Direct access"),Object(i.b)("p",null,"To connect to your Kubernetes cluster, you can use the Qovery CLI and run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery cluster connect <name>\n")),Object(i.b)("h2",{id:"container-application"},"Container application"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"TODO"),Object(i.b)("li",{parentName:"ul"},"Health check")),Object(i.b)("h2",{id:"high-availability"},"High-availability"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"What is HA")),Object(i.b)("h2",{id:"auto-scaling"},"Auto-scaling"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"What is auto-scaling"),Object(i.b)("li",{parentName:"ul"},"How auto-scaling works")),Object(i.b)("h2",{id:"cost-optimization"},"Cost optimization"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"explain how Qovery optimizes the Kubernetes costs"),Object(i.b)("li",{parentName:"ul"},"Aggressive down scaling")),Object(i.b)("h2",{id:"container-database"},"Container database"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Explain how Qovery handles containerized database on Kubernetes"),Object(i.b)("li",{parentName:"ul"},"Explain how to fine tune them (modify engine conf)")),Object(i.b)("h2",{id:"service-discovery"},"Service discovery"),Object(i.b)("p",null,"TODO"),Object(i.b)("h2",{id:"security"},"Security"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Talk about virtual isolation"),Object(i.b)("li",{parentName:"ul"},"Talk about network isolation"),Object(i.b)("li",{parentName:"ul"},"Container isolation")),Object(i.b)("h2",{id:"maintenance"},"Maintenance"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"How Qovery handles upgrade and maintenance of Kubernetes")))}b.isMDXComponent=!0},376:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},377:function(e,t,n){"use strict";n(380);var r=n(0),a=n.n(r),i=n(376),o=n.n(i);n(131);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,i=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:o()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==i}),role:"alert"},!1!==i&&a.a.createElement("i",{className:o()("feather","icon-"+(i||l))}),t)}},378:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,f=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return n?a.a.createElement(f,c({ref:t},u,{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},380:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(385)}),n(74)("fill")},381:function(e,t,n){var r=n(25).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||n(10)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},382:function(e,t,n){"use strict";n(381);var r=n(0),a=n.n(r),i=n(377);t.a=function(e){var t=e.children,n=e.name;return a.a.createElement(i.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},385:function(e,t,n){"use strict";var r=n(27),a=n(75),i=n(26);e.exports=function(e){for(var t=r(this),n=i(t.length),o=arguments.length,c=a(o>1?arguments[1]:void 0,n),l=o>2?arguments[2]:void 0,u=void 0===l?n:a(l,n);u>c;)t[c++]=e;return t}}}]);