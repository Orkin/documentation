(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{217:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(1),o=t(9),i=(t(0),t(311)),c={last_modified_on:"2020-09-28",title:"Monitoring",description:"Plug-in monitoring systems to Qovery"},a={id:"main-concepts/business/monitoring",title:"Monitoring",description:"Plug-in monitoring systems to Qovery",source:"@site/docs/main-concepts/business/monitoring.md",permalink:"/docs/main-concepts/business/monitoring",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/main-concepts/business/monitoring.md",sidebar:"docs",previous:{title:"External Services",permalink:"/docs/main-concepts/business/external-services"},next:{title:"Using Qovery",permalink:"/docs/using-qovery"}},s=[],u={rightToc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"For convenience, Qovery enables very easy integration with monitoring platforms like Datadog or New Relic."),Object(i.b)("img",{src:"/img/monitoring.png"}),Object(i.b)("p",null,"To enable monitoring, just navigate to Monitoring section in the web interface and provide the required data. Qovery will use it to enable the default monitoring integration\nwith the solution of your choice."))}l.isMDXComponent=!0},311:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a({},n,{},e)),t},p=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=r,b=p["".concat(c,".").concat(f)]||p[f]||m[f]||i;return t?o.a.createElement(b,a({ref:n},u,{components:t})):o.a.createElement(b,a({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);