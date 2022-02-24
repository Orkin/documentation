(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{279:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(1),o=t(9),i=(t(0),t(433)),a={last_modified_on:"2022-02-24",title:"Qovery CI",description:"Learn how to configure the Qovery CI"},c={id:"using-qovery/addon/continuous-integration/qovery-ci",title:"Qovery CI",description:"Learn how to configure the Qovery CI",source:"@site/docs/using-qovery/addon/continuous-integration/qovery-ci.md",permalink:"/docs/using-qovery/addon/continuous-integration/qovery-ci",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/addon/continuous-integration/qovery-ci.md",sidebar:"docs",previous:{title:"Continuous Integration",permalink:"/docs/using-qovery/addon/continuous-integration"},next:{title:"Gitlab CI",permalink:"/docs/using-qovery/addon/continuous-integration/gitlab-ci"}},s=[{value:"Scenarios",id:"scenarios",children:[{value:"Deploy your application with a specific commit ID",id:"deploy-your-application-with-a-specific-commit-id",children:[]},{value:"Create a Preview Environment for your Pull-Request",id:"create-a-preview-environment-for-your-pull-request",children:[]},{value:"Any other scenario?",id:"any-other-scenario",children:[]}]}],p={rightToc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Qovery provides the Qovery CI which is free and available right now to test (optional) and build your applications."),Object(i.b)("h2",{id:"scenarios"},"Scenarios"),Object(i.b)("p",null,"Those scenarios can be copy/paste and adapted to your usage. Do not forget to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/interface/cli/#generate-api-token"}),"generate a Qovery API token")," to use them."),Object(i.b)("h3",{id:"deploy-your-application-with-a-specific-commit-id"},"Deploy your application with a specific commit ID"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'#!/usr/bin/env sh\n\nAPP_COMMIT_ID="TO CHANGE WITH YOUR APP COMMIT ID TO DEPLOY"\nENVIRONMENT_ID="TO CHANGE WITH YOUR ENVIRONMENT ID"\nAPPLICATION_ID="TO CHANGE WITH YOUR APPLICATION ID"\nQOVERY_API_TOKEN="TO CHANGE"\n\nset -e\n\n# if the command did not succeed, then the job will just failed\n# Doc: https://api-doc.qovery.com/#operation/deployApplication\nresult=$(curl -sb -X POST -H \'Content-type: application/json\' -H "Authorization: Bearer $QOVERY_API_TOKEN" \\\n    -d "{\\"git_commit_id\\": \\"$APP_COMMIT_ID\\"}" "https://api.qovery.com/application/$APPLICATION_ID/deploy")\n\necho $result\n\ntimeoutInSeconds=3600\nendTime=$(($(date +%s) + timeoutInSeconds))\n\n## wait for successful deployment\nwhile [ "$(date +%s)" -lt $endTime ]; do\n    # check deployment status\n    # Doc: https://api-doc.qovery.com/#operation/getProjectEnvironmentStatus\n    current_state=$(curl -sb -X GET -H \'Content-type: application/json\' -H "Authorization: Bearer $QOVERY_API_TOKEN" \\\n      "https://api.qovery.com/environment/$ENVIRONMENT_ID/status" | jq -r .state)\n\n    if [ "RUNNING" = "$current_state" ]; then\n      break\n    fi\n\n    # shellcheck disable=SC2039\n    if [[ "$current_state" =~ ^"ERROR_.*" ]]; then\n      echo "deployment error with current state: $(current_state) - connect to https://console.qovery.com" > /dev/stderr\n      exit 1\n    fi\n\n    printf "environment state: $current_state\\n"\n\n    sleep 5 # wait to check again\ndone\n\n## keep going\nexit 0\n')),Object(i.b)("h3",{id:"create-a-preview-environment-for-your-pull-request"},"Create a Preview Environment for your Pull-Request"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'#!/usr/bin/env sh\n\nPROJECT_ID="7f498438-c545-4c10-891d-489aa5e3724b"\nBASE_ENVIRONMENT="stable"\nQOVERY_API_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJodHRwczovL3FvdmVyeS5jb20vcm9sZXMiOlsib3JnYW5pemF0aW9uOjdiMmM3ZmNkLTZjYzktNGM2MS04NjQ3LThiZjgxZTRmY2RhOTphZG1pbiJdLCJzdWIiOiJnaXRodWJ8MTI4NDc0MyIsImV4cCI6MTY2ODE5ODc2MywiaWF0IjoxNjQ0NjExNTYzfQ.qNmocfgpekk8mas6S_j63uQVgbXlpFuvg7TrjmwxrK4"\n\nset -e\n\nbaseEnvironmentId=$(curl -sb -X GET -H \'Content-type: application/json\' -H "Authorization: Bearer $QOVERY_API_TOKEN" \\\n    "https://api.qovery.com/project/$PROJECT_ID/environment" | jq -r ".results[] | select(.name==\\"$BASE_ENVIRONMENT\\") | .id")\n\n# clone the environment base on the correct right branch\nnewEnvironmentId=$(curl -sb -X POST -d "{\\"name\\": \\"[PR] $BRANCH_NAME\\"}" -H \'Content-type: application/json\' -H "Authorization: Bearer $QOVERY_API_TOKEN" \\\n    "https://api.qovery.com/environment/$baseEnvironmentId/clone" | jq -r ".id")\n\n# get all apps from env\napps=$(curl -sb -X GET -H \'Content-type: application/json\' -H "Authorization: Bearer $QOVERY_API_TOKEN" \\\n         "https://api.qovery.com/environment/$newEnvironmentId/application" | jq -r ".")\n\necho "$apps" | jq -c \'.results[]\' | while read row; do\n    # get complete app JSON and clear necessary fields, otherwise the Qovery API returns 4xx\n    app=$(echo "$row" | jq -r ".git_repository.branch=\\"$BRANCH_NAME\\"" | jq -r "del(.environment)" | jq -r "del(.created_at)" \\\n        | jq -r "del(.id)" | jq -r "del(.updated_at)" | jq -r "del(.git_repository.url)" \\\n        | jq -r "del(.git_repository.deployed_commit_id)" | jq -r "del(.git_repository.deployed_commit_date)" \\\n        | jq -r "del(.git_repository.deployed_commit_contributor)" | jq -r "del(.git_repository.deployed_commit_tag)" \\\n        | jq -r "del(.git_repository.provider)" | jq -r "del(.git_repository.owner)" | jq -r "del(.git_repository.has_access)" \\\n        | jq -r "del(.git_repository.name)" | jq -r "del(.maximum_cpu)" | jq -r "del(.maximum_memory)" | jq -r "del(.ports[].name)" \\\n        | jq -r "del(.storage)" | jq -r "del(.git_repository.root_path)")\n\n    appId=$(echo "$app" | jq -r \'.id\')\n\n    # escape double quotes\n    formatApp=$(echo "$app" | jq -c \'.\' | sed \'s/"/\\\\"/g\')\n\n    # update app via Qovery API\n    savedApp=$(curl -sb -X PUT -d "$formatApp" -H \'Content-type: application/json\' -H "Authorization: Bearer $QOVERY_API_TOKEN" \\\n             "https://api.qovery.com/application/$appId" | jq -r \'.\')\ndone\n\n# deploy env\nresult=$(curl -sb -X POST -H \'Content-type: application/json\' -H "Authorization: Bearer $QOVERY_API_TOKEN" \\\n    "https://api.qovery.com/environment/$newEnvironmentId/deploy")\n\ntimeoutInSeconds=3600\nendTime=$(($(date +%s) + timeoutInSeconds))\n\n## wait for successful deployment\nwhile [ "$(date +%s)" -lt $endTime ]; do\n    # check deployment status\n    # Doc: https://api-doc.qovery.com/#operation/getProjectEnvironmentStatus\n    current_state=$(curl -sb -X GET -H \'Content-type: application/json\' -H "Authorization: Bearer $QOVERY_API_TOKEN" \\\n      "https://api.qovery.com/environment/$newEnvironmentId/status" | jq -r .state)\n\n    if [ "RUNNING" = "$current_state" ]; then\n      break\n    fi\n\n    # shellcheck disable=SC2039\n    if [[ "$current_state" =~ ^".*_ERROR" ]]; then\n      echo "deployment error with current state: $(current_state) - connect to https://console.qovery.com" > /dev/stderr\n      exit 1\n    fi\n\n    printf "environment state: $current_state\\n"\n\n    sleep 5 # wait to check again\ndone\n\n## keep going\nexit 0\n')),Object(i.b)("h3",{id:"any-other-scenario"},"Any other scenario?"),Object(i.b)("p",null,"Feel free to share your custom scripts with us, and we'll be happy to share them with the community. Contact us on ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://discuss.qovery.com/"}),"our forum"),"."))}l.isMDXComponent=!0},433:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return y}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,y=u["".concat(a,".").concat(m)]||u[m]||d[m]||i;return t?o.a.createElement(y,c({ref:n},p,{components:t})):o.a.createElement(y,c({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);