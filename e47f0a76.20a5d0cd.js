/*! For license information please see e47f0a76.20a5d0cd.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{353:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return f}));var n=r(1),i=r(9),o=(r(0),r(378)),a=r(377),c=(r(382),{last_modified_on:"2021-10-06",title:"Observability",description:"Learn how to configure and fine tune Observability on your infrastructure with Qovery"}),l={id:"devops/infrastructure-config/observability",title:"Observability",description:"Learn how to configure and fine tune Observability on your infrastructure with Qovery",source:"@site/docs/devops/infrastructure-config/observability.md",permalink:"/docs/devops/infrastructure-config/observability",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/devops/infrastructure-config/observability.md",sidebar:"docs",previous:{title:"Load Balancer",permalink:"/docs/devops/infrastructure-config/load-balancer"},next:{title:"Qovery Engine",permalink:"/docs/devops/infrastructure-config/qovery-engine"}},u=[],s={rightToc:u};function f(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)(a.a,{type:"warning",mdxType:"Alert"},Object(o.b)("p",null,"Work in progress")),Object(o.b)("p",null,"TODO"))}f.isMDXComponent=!0},376:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var a=i.apply(null,n);a&&e.push(a)}else if("object"===o)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},377:function(e,t,r){"use strict";r(380);var n=r(0),i=r.n(n),o=r(376),a=r.n(o);r(131);t.a=function(e){var t=e.children,r=e.classNames,n=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return i.a.createElement("div",{className:a()(r,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&i.a.createElement("i",{className:a()("feather","icon-"+(o||l))}),t)}},378:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},f=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),b=n,d=f["".concat(a,".").concat(b)]||f[b]||p[b]||o;return r?i.a.createElement(d,c({ref:t},u,{components:r})):i.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},380:function(e,t,r){var n=r(12);n(n.P,"Array",{fill:r(385)}),r(74)("fill")},381:function(e,t,r){var n=r(25).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||r(10)&&n(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},382:function(e,t,r){"use strict";r(381);var n=r(0),i=r.n(n),o=r(377);t.a=function(e){var t=e.children,r=e.name;return i.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},i.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",r||"page"," assumes the following:"),t)}},385:function(e,t,r){"use strict";var n=r(27),i=r(75),o=r(26);e.exports=function(e){for(var t=n(this),r=o(t.length),a=arguments.length,c=i(a>1?arguments[1]:void 0,r),l=a>2?arguments[2]:void 0,u=void 0===l?r:i(l,r);u>c;)t[c++]=e;return t}}}]);