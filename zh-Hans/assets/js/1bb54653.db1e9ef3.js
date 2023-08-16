"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[8135],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return v}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),v=o,m=p["".concat(s,".").concat(v)]||p[v]||u[v]||i;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1724:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={},s="Koordlet",c={unversionedId:"designs/koordlet-overview",id:"version-v1.2/designs/koordlet-overview",title:"Koordlet",description:"\u6458\u8981",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v1.2/designs/koordlet-overview.md",sourceDirName:"designs",slug:"/designs/koordlet-overview",permalink:"/zh-Hans/docs/v1.2/designs/koordlet-overview",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/designs/koordlet-overview.md",tags:[],version:"v1.2",lastUpdatedBy:"zwzhang",lastUpdatedAt:1680861757,formattedLastUpdatedAt:"2023/4/7",frontMatter:{},sidebar:"docs",previous:{title:"Performance Collector",permalink:"/zh-Hans/docs/v1.2/user-manuals/performance-collector"},next:{title:"RuntimeProxy",permalink:"/zh-Hans/docs/v1.2/designs/runtime-proxy"}},d={},u=[{value:"\u6458\u8981",id:"\u6458\u8981",level:2},{value:"\u67b6\u6784",id:"\u67b6\u6784",level:2},{value:"\u6a21\u5757",id:"\u6a21\u5757",level:2},{value:"Metrics Advisor",id:"metrics-advisor",level:3},{value:"Storage",id:"storage",level:3},{value:"States Informer",id:"states-informer",level:3},{value:"QoS Manager",id:"qos-manager",level:3},{value:"Metrics Reporter",id:"metrics-reporter",level:3},{value:"Runtime Hooks",id:"runtime-hooks",level:3},{value:"\u4f8b\u5982 Pod \u751f\u547d\u5468\u671f\u4e2d\u7684 LLC \u9694\u79bb\u6ce8\u5165",id:"\u4f8b\u5982-pod-\u751f\u547d\u5468\u671f\u4e2d\u7684-llc-\u9694\u79bb\u6ce8\u5165",level:4}],p={toc:u};function v(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"koordlet"},"Koordlet"),(0,i.kt)("h2",{id:"\u6458\u8981"},"\u6458\u8981"),(0,i.kt)("p",null,'Koordlet \u662f\u90e8\u7f72\u5728 Kubernetes \u8282\u70b9\u4e2d\u7684 DaemonSet\uff0c\u7528\u4e8e\u6df7\u90e8\u8d44\u6e90\u8d85\u5356\u3001\u5e72\u6270\u68c0\u6d4b\u3001QoS \u4fdd\u969c\u7b49\u3002\u5b83\u7531\u51e0\u4e2a\u6a21\u5757\u7ec4\u6210\uff0c\u5206\u522b\u8d1f\u8d23\u4fe1\u606f\u6536\u96c6\u3001\u6570\u636e\u5206\u6790\u548c QoS \u7ba1\u7406\u3002\n\u4e00\u4e9b\u6a21\u5757\u8fd8\u63d0\u4f9b\u4e86\u6846\u67b6\u811a\u624b\u67b6\uff0c\u63d0\u4f9b\u4e86\u4e00\u7ec4\u63d2\u4ef6\u8fdb\u884c\u6269\u5c55\uff08\u5982"QoS Manager"\uff09\uff0c\u4ee5\u4fbf\u4e8e\u6dfb\u52a0\u65b0\u7b56\u7565\u3002'),(0,i.kt)("h2",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"image",src:r(4215).Z,width:"424",height:"251"})),(0,i.kt)("h2",{id:"\u6a21\u5757"},"\u6a21\u5757"),(0,i.kt)("h3",{id:"metrics-advisor"},"Metrics Advisor"),(0,i.kt)("p",null,"Metric Advisor \u63d0\u4f9b\u8282\u70b9\u3001Pod \u548c\u5bb9\u5668\u7684\u8d44\u6e90\u4f7f\u7528\u548c\u6027\u80fd\u7279\u5f81\u7684\u57fa\u672c\u4fe1\u606f\u3002\n\u5b83\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u6a21\u5757\uff0c\u5b9a\u671f\u6536\u96c6\u3001\u5904\u7406\u548c\u5bfc\u51fa\u8d44\u6e90\u753b\u50cf\u3002\u5b83\u8fd8\u68c0\u6d4b\u8fd0\u884c\u5bb9\u5668\u7684\u5e72\u6270\uff0c\u4f8b\u5982 CPU \u8c03\u5ea6\u3001\u5185\u5b58\u5206\u914d\u5ef6\u8fdf\u548c\u538b\u529b\u963b\u585e\u4fe1\u606f\uff08Pressure Stall Information, PSI\uff09\u3002\n\u8be5\u4fe1\u606f\u5c06\u5e7f\u6cdb\u7528\u4e8e\u8d44\u6e90\u8d85\u5356\u548c QoS \u4fdd\u969c\u63d2\u4ef6\u3002"),(0,i.kt)("h3",{id:"storage"},"Storage"),(0,i.kt)("p",null,"Storage \u7ba1\u7406\u6765\u81ea Metrics Advisor \u548c States Informer \u7684\u4fe1\u606f\uff0c\u63d0\u4f9b\u4e00\u7cfb\u5217\u589e\u5220\u6539\u67e5\u7684API\uff0c\u5e76\u5bf9\u8fc7\u671f\u6570\u636e\u5b9a\u671f\u6e05\u7406\u3002\n\u5b83\u6709\u4e24\u79cd\u7c7b\u578b\u7684\u6570\u636e\uff1a\u9759\u6001\u548c\u65f6\u95f4\u5e8f\u5217\u3002\u65f6\u95f4\u5e8f\u5217\u7c7b\u578b\u5b58\u50a8\u5386\u53f2\u6570\u636e\u7528\u4e8e\u7edf\u8ba1\u76ee\u7684\uff0c\u4f8b\u5982 CPU \u548c\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\u3002\u9759\u6001\u7c7b\u578b\u5305\u62ec\u8282\u70b9\u3001Pod \u548c\u5bb9\u5668\u7684\u72b6\u6001\u4fe1\u606f\uff0c\u4f8b\u5982\u8282\u70b9\u7684 CPU \u4fe1\u606f\u3001Pod \u7684\u5143\u6570\u636e\u3002"),(0,i.kt)("h3",{id:"states-informer"},"States Informer"),(0,i.kt)("p",null,"States Informer \u4ece kube-apiserver \u548c kubelet \u540c\u6b65\u8282\u70b9\u548c Pod \u72b6\u6001\uff0c\u5e76\u5c06\u6570\u636e\u4f5c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," \u7c7b\u578b\u4fdd\u5b58\u5230 Storage \u4e2d\u3002\u4e0e\u5176\u4ed6\u6a21\u5757\u76f8\u6bd4\uff0c\u8be5\u6a21\u5757\u5728\u5f00\u53d1\u8fed\u4ee3\u4e2d\u5e94\u8be5\u4fdd\u6301\u76f8\u5bf9\u7a33\u5b9a\u3002"),(0,i.kt)("h3",{id:"qos-manager"},"QoS Manager"),(0,i.kt)("p",null,"QoS Manager \u534f\u8c03\u4e00\u7ec4\u63d2\u4ef6\uff0c\u8fd9\u4e9b\u63d2\u4ef6\u8d1f\u8d23\u6309\u4f18\u5148\u7ea7\u4fdd\u969c SLO\uff0c\u51cf\u5c11 Pod \u4e4b\u95f4\u7684\u5e72\u6270\u3002\u63d2\u4ef6\u6839\u636e\u8d44\u6e90\u5206\u6790\u3001\u5e72\u6270\u68c0\u6d4b\u4ee5\u53ca SLO \u7b56\u7565\u914d\u7f6e\uff0c\u5728\u4e0d\u540c\u573a\u666f\u4e0b\u52a8\u6001\u8c03\u6574\u8d44\u6e90\u53c2\u6570\u914d\u7f6e\u3002\u901a\u5e38\u6765\u8bf4\uff0c\u6bcf\u4e2a\u63d2\u4ef6\u90fd\u4f1a\u5728\u8d44\u6e90\u8c03\u53c2\u8fc7\u7a0b\u4e2d\u751f\u6210\u5bf9\u5e94\u7684\u6267\u884c\u8ba1\u5212\u3002"),(0,i.kt)("p",null,"QoS Manager \u53ef\u80fd\u662f\u8fed\u4ee3\u9891\u7387\u6700\u9ad8\u7684\u6a21\u5757\uff0c\u6269\u5c55\u4e86\u65b0\u7684\u63d2\u4ef6\uff0c\u66f4\u65b0\u4e86\u7b56\u7565\u7b97\u6cd5\u5e76\u6dfb\u52a0\u4e86\u7b56\u7565\u6267\u884c\u65b9\u5f0f\u3002\n\u4e00\u4e2a\u65b0\u7684\u63d2\u4ef6\u5e94\u8be5\u5b9e\u73b0\u5305\u542b\u4e00\u7cfb\u5217\u6807\u51c6API\u7684\u63a5\u53e3\uff0c\u786e\u4fdd QoS Manager \u7684\u6838\u5fc3\u90e8\u5206\u7b80\u5355\u4e14\u5177\u6709\u8f83\u597d\u7684\u53ef\u7ef4\u62a4\u6027\u3002\n\u9ad8\u7ea7\u63d2\u4ef6\uff08\u4f8b\u5982\u7528\u4e8e\u5e72\u6270\u68c0\u6d4b\u7684\u63d2\u4ef6\uff09\u4f1a\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u53d8\u5f97\u66f4\u52a0\u590d\u6742\uff0c\u5728\u5b75\u5316\u5df2\u7ecf\u7a33\u5b9a\u5728 QoS Manager \u4e2d\u4e4b\u540e\uff0c\u5b83\u53ef\u80fd\u4f1a\u6210\u4e3a\u4e00\u4e2a\u72ec\u7acb\u7684\u6a21\u5757\u3002"),(0,i.kt)("h3",{id:"metrics-reporter"},"Metrics Reporter"),(0,i.kt)("p",null,"Metrics Reporter \u4ece Storage \u4e2d\u8bfb\u53d6\u5386\u53f2\u6307\u6807\u548c\u72b6\u6001\u6570\u636e\uff0c\u7136\u540e\u5c06\u5b83\u4eec\u5408\u5e76\u5e76\u53d1\u9001\u5230 ApiServer\uff0c\u8fd9\u4e9b\u6570\u636e\u5c06\u88ab Koordinator Manager \u7528\u4e8e\u8d44\u6e90\u8d85\u5356\u6a21\u578b\u7ba1\u7406\u3002\nMetrics Reporter \u8fd8\u652f\u6301\u9488\u5bf9\u4e0d\u540c\u6df7\u90e8\u573a\u666f\u7684\u591a\u79cd\u5904\u7406\u7b97\u6cd5\u3002"),(0,i.kt)("h3",{id:"runtime-hooks"},"Runtime Hooks"),(0,i.kt)("p",null,"Runtime Hooks \u5145\u5f53\u8fd0\u884c\u65f6 Hook \u7ba1\u7406\u5668\u7684\u540e\u7aef\u670d\u52a1\u5668\u3002 Runtime Hook \u7ba1\u7406\u5668\u662f\u4e00\u4e2a CRI \u4ee3\u7406\uff0c\u5b83\u62e6\u622aCRI\u8bf7\u6c42\uff0c\u8c03\u7528\u540e\u7aef\u670d\u52a1\u5668\u6ce8\u5165\u7b56\u7565\uff0c\u5982\u901a\u8fc7 Pod \u4f18\u5148\u7ea7\u8bbe\u7f6e\u8d44\u6e90\u9694\u79bb\u53c2\u6570\uff0c\u5e94\u7528\u8d44\u6e90\u5206\u914d\u7b56\u7565\u3002\nRuntime Hooks \u63d0\u4f9b\u4e86\u4e00\u4e2a\u6846\u67b6\u6765\u7ef4\u62a4\u4e0d\u540c\u7c7b\u578b\u7684\u7b56\u7565\uff0c\u5e76\u5728\u5bb9\u5668\u7684\u751f\u547d\u5468\u671f\u4e2d\u63d0\u4f9b\u7075\u6d3b\u7684\u6269\u5c55\u70b9\u3002"),(0,i.kt)("h4",{id:"\u4f8b\u5982-pod-\u751f\u547d\u5468\u671f\u4e2d\u7684-llc-\u9694\u79bb\u6ce8\u5165"},"\u4f8b\u5982 Pod \u751f\u547d\u5468\u671f\u4e2d\u7684 LLC \u9694\u79bb\u6ce8\u5165"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"image",src:r(6229).Z,width:"425",height:"291"})))}v.isMDXComponent=!0},4215:function(e,t,r){t.Z=r.p+"assets/images/koordlet-arch-12f76fe4c21480d3db812a902a853e3b.svg"},6229:function(e,t,r){t.Z=r.p+"assets/images/llc-isolation-ee2864c933cc19aaca13902992d83bca.svg"}}]);