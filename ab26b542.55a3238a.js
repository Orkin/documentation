/*! For license information please see ab26b542.55a3238a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{294:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return l})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return f}));var n=t(1),a=t(9),o=(t(0),t(378)),i=t(377),c=(t(382),{last_modified_on:"2021-10-06",title:"Load Balancer",description:"Learn how to configure and fine tune your load balancers on Qovery"}),l={id:"devops/infrastructure-config/load-balancer",title:"Load Balancer",description:"Learn how to configure and fine tune your load balancers on Qovery",source:"@site/docs/devops/infrastructure-config/load-balancer.md",permalink:"/docs/devops/infrastructure-config/load-balancer",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/devops/infrastructure-config/load-balancer.md",sidebar:"docs",previous:{title:"Custom Domain",permalink:"/docs/devops/infrastructure-config/custom-domain"},next:{title:"Observability",permalink:"/docs/devops/infrastructure-config/observability"}},u=[],s={rightToc:u};function f(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)(i.a,{type:"warning",mdxType:"Alert"},Object(o.b)("p",null,"Work in progress")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Introduce what is a Load Balancer"),Object(o.b)("li",{parentName:"ul"},"Introduce where load balancer are used on Qovery"),Object(o.b)("li",{parentName:"ul"},"Introduce how we use NGINX as MUX")))}f.isMDXComponent=!0},376:function(e,r,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)t.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(r,[]))||(e.exports=n)}()},377:function(e,r,t){"use strict";t(380);var n=t(0),a=t.n(n),o=t(376),i=t.n(o);t(131);r.a=function(e){var r=e.children,t=e.classNames,n=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:i()(t,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),r)}},378:function(e,r,t){"use strict";t.d(r,"a",(function(){return f})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c({},r,{},e)),t},f=function(e){var r=s(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=n,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return t?a.a.createElement(m,c({ref:r},u,{components:t})):a.a.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},380:function(e,r,t){var n=t(12);n(n.P,"Array",{fill:t(385)}),t(74)("fill")},381:function(e,r,t){var n=t(25).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||t(10)&&n(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},382:function(e,r,t){"use strict";t(381);var n=t(0),a=t.n(n),o=t(377);r.a=function(e){var r=e.children,t=e.name;return a.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",t||"page"," assumes the following:"),r)}},385:function(e,r,t){"use strict";var n=t(27),a=t(75),o=t(26);e.exports=function(e){for(var r=n(this),t=o(r.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,t),l=i>2?arguments[2]:void 0,u=void 0===l?t:a(l,t);u>c;)r[c++]=e;return r}}}]);