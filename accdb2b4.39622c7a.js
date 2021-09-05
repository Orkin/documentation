/*! For license information please see accdb2b4.39622c7a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{284:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(9),c=(a(0),a(355)),i=a(354),o=a(364),l=a(359),b={last_modified_on:"2021-09-05",title:"MySQL",description:"How to set up and use a MySQL database"},s={id:"using-qovery/configuration/database/mysql",title:"MySQL",description:"How to set up and use a MySQL database",source:"@site/docs/using-qovery/configuration/database/mysql.md",permalink:"/docs/using-qovery/configuration/database/mysql",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/database/mysql.md",sidebar:"docs",previous:{title:"PostgreSQL",permalink:"/docs/using-qovery/configuration/database/postgresql"},next:{title:"MongoDB",permalink:"/docs/using-qovery/configuration/database/mongodb"}},u=[{value:"Create a MySQL database",id:"create-a-mysql-database",children:[]},{value:"Configuration",id:"configuration",children:[{value:"General",id:"general",children:[]},{value:"Resources",id:"resources",children:[]}]},{value:"Credentials",id:"credentials",children:[]},{value:"Delete your MySQL instance",id:"delete-your-mysql-instance",children:[]}],p={rightToc:u};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(l.a,{name:"documentation",mdxType:"Assumptions"},Object(c.b)("p",null,"You have created an ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"Environment"),".")),Object(c.b)("p",null,"MySQL is the world's most popular open source database. Whether you are a fast growing web property, technology ISV or large enterprise, MySQL can cost-effectively help you deliver high performance, scalable database applications."),Object(c.b)(i.a,{type:"info",mdxType:"Alert"},Object(c.b)("p",null,"Check out ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/getting-started/create-a-database/"}),"this video guide")," to create and deploy your first database")),Object(c.b)("h2",{id:"create-a-mysql-database"},"Create a MySQL database"),Object(c.b)(o.a,{headingDepth:3,mdxType:"Steps"},Object(c.b)("ol",null,Object(c.b)("li",null,Object(c.b)("p",null,"Navigate to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://console-beta.qovery.com"}),"Console"))),Object(c.b)("li",null,Object(c.b)("p",null,"Select your project and environment")),Object(c.b)("li",null,Object(c.b)("p",null,"Click ",Object(c.b)("inlineCode",{parentName:"p"},"Add Database")," button"),Object(c.b)("p",{align:"center"},Object(c.b)("img",{src:"/img/configuration/database/db-1.png",alt:"Database"}))),Object(c.b)("li",null,Object(c.b)("p",null,"Select database type, name and version"),Object(c.b)("p",{align:"center"},Object(c.b)("img",{src:"/img/configuration/database/mysql-1.png",alt:"Database"}))),Object(c.b)("li",null,Object(c.b)("p",null,"Deploy the database using ",Object(c.b)("inlineCode",{parentName:"p"},"Action")," deploy button"),Object(c.b)("p",{align:"center"},Object(c.b)("img",{src:"/img/configuration/database/db-3.png",alt:"Database"}))))),Object(c.b)("h2",{id:"configuration"},"Configuration"),Object(c.b)("h3",{id:"general"},"General"),Object(c.b)("h4",{id:"modes"},"Modes"),Object(c.b)("p",null,"Databases can operate in two modes:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Managed"),Object(c.b)("li",{parentName:"ul"},"Container")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Managed")," databases are perfect for production - they are provided and managed by major cloud providers like AWS to make sure your production data is well managed."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Container")," databases are managed by Qovery as Docker containers with attached persistent storage. They are perfect for development and testing, as they are significantly cheaper than services provided by cloud providers."),Object(c.b)(i.a,{type:"warning",mdxType:"Alert"},"Managed databases are supported only in [paid plans][urls.qovery_pricing], it's not available in the `Community` version."),Object(c.b)("h4",{id:"versions"},"Versions"),Object(c.b)("p",null,"Qovery supports the following MySQL versions."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Cloud provider"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Version"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Container supported"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Managed supported"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AWS"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8.0"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AWS"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5.7"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AWS"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5.6"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Digital Ocean"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8.0"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Soon")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Digital Ocean"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5.7"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Soon")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Digital Ocean"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5.6"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Soon")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Scaleway"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8.0"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Soon")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Scaleway"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5.7"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Soon")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Scaleway"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5.6"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Soon")))),Object(c.b)("p",null,"You can adjust the version of your database in ",Object(c.b)("inlineCode",{parentName:"p"},"General")," section of database settings:"),Object(c.b)("p",{align:"center"},Object(c.b)("img",{src:"/img/configuration/database/mysql-2.png",alt:"Database Version"})),Object(c.b)("h4",{id:"accessibility"},"Accessibility"),Object(c.b)("p",null,"To make your database secure, you may decide not to expose it publicly."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Public")," access will make your database accessible via the public network"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Private")," access will make your database accessible only by applications in your environment")),Object(c.b)("p",null,"You can configure the accessibility settings in ",Object(c.b)("inlineCode",{parentName:"p"},"General")," section of database settings:"),Object(c.b)("p",{align:"center"},Object(c.b)("img",{src:"/img/configuration/database/mysql-2.png",alt:"Database Accessibility"})),Object(c.b)("h3",{id:"resources"},"Resources"),Object(c.b)("h4",{id:"cpu"},"CPU"),Object(c.b)("p",null,"To tweak CPU configuration of your database, navigate to ",Object(c.b)("inlineCode",{parentName:"p"},"Resource")," section in database settings:"),Object(c.b)("p",{align:"center"},Object(c.b)("img",{src:"/img/configuration/database/db-4.png",alt:"Database CPU"})),Object(c.b)("h4",{id:"memory"},"Memory"),Object(c.b)("p",null,"To tweak RAM configuration of your database, navigate to ",Object(c.b)("inlineCode",{parentName:"p"},"Resource")," section in database settings:"),Object(c.b)("p",{align:"center"},Object(c.b)("img",{src:"/img/configuration/database/db-5.png",alt:"Database Memory"})),Object(c.b)("h4",{id:"storage"},"Storage"),Object(c.b)("p",null,"To tweak the disk space assigned to your database, navigate to ",Object(c.b)("inlineCode",{parentName:"p"},"Resource")," section in the database settings:"),Object(c.b)("p",{align:"center"},Object(c.b)("img",{src:"/img/configuration/database/db-7.png",alt:"Database Storage"})),Object(c.b)("h2",{id:"credentials"},"Credentials"),Object(c.b)("p",null,"To access your database in your application, ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application/#database"}),"link it to your database"),".\nQovery will inject all environment variables and secrets you need to connect your app to your database.\nTo see all the secrets injected for your application, see ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application/#database-secrets"}),"database secrets section"),"."),Object(c.b)("h2",{id:"delete-your-mysql-instance"},"Delete your MySQL instance"),Object(c.b)(i.a,{type:"danger",mdxType:"Alert"},Object(c.b)("p",null,"Delete action drops the service and its data!")),Object(c.b)(o.a,{headingDepth:3,mdxType:"Steps"},Object(c.b)("ol",null,Object(c.b)("li",null,Object(c.b)("p",null,"Navigate to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://console-beta.qovery.com"}),"Console"))),Object(c.b)("li",null,Object(c.b)("p",null,"Select your environment and database")),Object(c.b)("li",null,Object(c.b)("p",null,"In database overview, click on ",Object(c.b)("inlineCode",{parentName:"p"},"Action")," remove button"),Object(c.b)("p",{align:"center"},Object(c.b)("img",{src:"/img/configuration/database/mysql-3.png",alt:"Database Remove"}))))))}d.isMDXComponent=!0},353:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===c)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},354:function(e,t,a){"use strict";a(358);var n=a(0),r=a.n(n),c=a(353),i=a.n(c);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,c=e.icon,o=e.type,l=null;switch(o){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:i()(a,"alert","alert--"+o,{"alert--fill":n,"alert--icon":!1!==c}),role:"alert"},!1!==c&&r.a.createElement("i",{className:i()("feather","icon-"+(c||l))}),t)}},355:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||c;return a?r.a.createElement(m,o({ref:t},b,{components:a})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<c;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},357:function(e,t,a){var n=a(25).f,r=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},358:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(363)}),a(75)("fill")},359:function(e,t,a){"use strict";a(357);var n=a(0),r=a.n(n),c=a(354);t.a=function(e){var t=e.children,a=e.name;return r.a.createElement(c.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},362:function(e,t,a){"use strict";var n=a(366),r=a(52);function c(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var a=function(e){var t;switch(e.arrayFormat){case"index":return function(e,a,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=a):n[e]=a};case"bracket":return function(e,a,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=[a]:n[e]=a};default:return function(e,t,a){void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=t}}}(t=r({arrayFormat:"none"},t)),n=Object.create(null);return"string"!=typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),c=t.length>0?t.join("="):void 0;c=void 0===c?null:decodeURIComponent(c),a(decodeURIComponent(r),c,n)})),Object.keys(n).sort().reduce((function(e,t){var a=n[t];return Boolean(a)&&"object"==typeof a&&!Array.isArray(a)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(a):e[t]=a,e}),Object.create(null))):n},t.stringify=function(e,t){var a=function(e){switch(e.arrayFormat){case"index":return function(t,a,n){return null===a?[c(t,e),"[",n,"]"].join(""):[c(t,e),"[",c(n,e),"]=",c(a,e)].join("")};case"bracket":return function(t,a){return null===a?c(t,e):[c(t,e),"[]=",c(a,e)].join("")};default:return function(t,a){return null===a?c(t,e):[c(t,e),"=",c(a,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(n){var r=e[n];if(void 0===r)return"";if(null===r)return c(n,t);if(Array.isArray(r)){var i=[];return r.slice().forEach((function(e){void 0!==e&&i.push(a(n,e,i.length))})),i.join("&")}return c(n,t)+"="+c(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},363:function(e,t,a){"use strict";var n=a(27),r=a(76),c=a(26);e.exports=function(e){for(var t=n(this),a=c(t.length),i=arguments.length,o=r(i>1?arguments[1]:void 0,a),l=i>2?arguments[2]:void 0,b=void 0===l?a:r(l,a);b>o;)t[o++]=e;return t}},364:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=(a(353),a(362)),i=a.n(c);a(134);t.a=function(e){var t=e.children,a=e.headingDepth,c=e.hideFeedbackQuestion,o="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+o+" failed",body:"The tutorial on:\n\n"+o+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},b="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(l),s=Object(n.useState)(null),u=s[0],p=s[1];return r.a.createElement("div",{className:"steps steps--h"+a},t,!c&&!u&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:b,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==u&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},366:function(e,t,a){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);