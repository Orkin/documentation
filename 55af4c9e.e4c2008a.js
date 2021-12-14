/*! For license information please see 55af4c9e.e4c2008a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{244:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(9),i=(r(0),r(407)),a=r(416),c={last_modified_on:"2021-09-06",$schema:"/.meta/.schemas/guides.json",title:"How to use Github Organizations with Qovery",description:"How to configure Github and Qovery to use your Github Organization repositories with Qovery",author_github:"https://github.com/pjeziorowski",tags:["type: tutorial","technology: qovery"],hide_pagination:!0},u={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"How to use Github Organizations with Qovery",description:"How to configure Github and Qovery to use your Github Organization repositories with Qovery",permalink:"/guides/tutorial/github-organization-repository-access",readingTime:"1 min read",source:"@site/guides/tutorial/github-organization-repository-access.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"How to use Github Organizations with Qovery",truncated:!1,prevItem:{title:"How to deploy Strapi with PostgreSQL",permalink:"/guides/tutorial/how-to-deploy-strapi-with-postgresql"},nextItem:{title:"How to use the Qovery API",permalink:"/guides/tutorial/how-to-use-the-qovery-api"}},s=[],l={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When you create a new application, you need to connect it to a Git repository.\nIf your code is stored in a Github Organization, Qovery needs privileges to access your Organization's repositories\nin order to run deployments."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/github-org-access-1.png",alt:"Github Organization"})),Object(i.b)("p",null,"If Organization repositories are missing in the repository selector, you will need to grant Qovery access to your organization."),Object(i.b)(a.a,{headingDepth:3,mdxType:"Steps"},Object(i.b)("ol",null,Object(i.b)("li",null,Object(i.b)("p",null,"Navigate to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/settings/connections/applications/f54d3da8bad40800b3bf"}),"Qovery Github Application"))),Object(i.b)("li",null,Object(i.b)("p",null,"Make sure Qovery has access to the organization you want to use (grant permissions if necessary)"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/github-org-access-2.png",alt:"Github Organization"}))))),Object(i.b)("p",null,"After following the steps from above, you should be able to select your organization repositories in Qovery Console while creating an application."))}p.isMDXComponent=!0},405:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===i)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},407:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,y=p["".concat(a,".").concat(b)]||p[b]||f[b]||i;return r?o.a.createElement(y,c({ref:t},s,{components:r})):o.a.createElement(y,c({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},415:function(e,t,r){"use strict";var n=r(418),o=r(51);function i(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t=o({arrayFormat:"none"},t)),n=Object.create(null);return"string"!=typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),i=t.length>0?t.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),r(decodeURIComponent(o),i,n)})),Object.keys(n).sort().reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(r):e[t]=r,e}),Object.create(null))):n},t.stringify=function(e,t){var r=function(e){switch(e.arrayFormat){case"index":return function(t,r,n){return null===r?[i(t,e),"[",n,"]"].join(""):[i(t,e),"[",i(n,e),"]=",i(r,e)].join("")};case"bracket":return function(t,r){return null===r?i(t,e):[i(t,e),"[]=",i(r,e)].join("")};default:return function(t,r){return null===r?i(t,e):[i(t,e),"=",i(r,e)].join("")}}}(t=o({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(n){var o=e[n];if(void 0===o)return"";if(null===o)return i(n,t);if(Array.isArray(o)){var a=[];return o.slice().forEach((function(e){void 0!==e&&a.push(r(n,e,a.length))})),a.join("&")}return i(n,t)+"="+i(o,t)})).filter((function(e){return e.length>0})).join("&"):""}},416:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=(r(405),r(415)),a=r.n(i);r(133);t.a=function(e){var t=e.children,r=e.headingDepth,i=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,u={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+a.a.stringify(u),l=Object(n.useState)(null),p=l[0],f=l[1];return o.a.createElement("div",{className:"steps steps--h"+r},t,!i&&!p&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return f("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},418:function(e,t,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);