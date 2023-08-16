"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[7742],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9449:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:2},s="Anolis Plugsched",c={unversionedId:"best-practices/anolis_plugsched",id:"version-v1.2/best-practices/anolis_plugsched",title:"Anolis Plugsched",description:"\u4e3a\u4e86\u63d0\u5347CentOS 7.9\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u5728CPU\u8d44\u6e90\u7ef4\u5ea6\u7684\u6df7\u90e8\u6548\u679c\uff0c\u9f99\u8725\u793e\u533a\u63d0\u4f9b\u4e86\u4e00\u79cd\u63d2\u4ef6\u5316\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5373\u5229\u7528 plugsched \u8c03\u5ea6\u5668\u70ed\u5347\u7ea7\u6280\u672f\u63d0\u4f9b\u4e00\u79cd CPU \u6df7\u90e8\u6280\u672f\u7684\u8c03\u5ea6\u5668\u63d2\u4ef6\u5305\u3002\u8be5\u63d2\u4ef6\u53ef\u76f4\u63a5\u5b89\u88c5\u5230 CentOS 7.9\uff0c\u4e0d\u9700\u8981\u505c\u673a\u548c\u4e1a\u52a1\u8fc1\u79fb\u7b49\u5de5\u4f5c\u3002\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605Blog",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v1.2/best-practices/anolis_plugsched.md",sourceDirName:"best-practices",slug:"/best-practices/anolis_plugsched",permalink:"/zh-Hans/docs/v1.2/best-practices/anolis_plugsched",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/best-practices/anolis_plugsched.md",tags:[],version:"v1.2",lastUpdatedBy:"zwzhang",lastUpdatedAt:1680861757,formattedLastUpdatedAt:"2023/4/7",sidebarPosition:2,frontMatter:{sidebar_position:2}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"\u4f7f\u7528 Plugsched",id:"\u4f7f\u7528-plugsched",level:2},{value:"\u5b89\u88c5\u63d2\u4ef6",id:"\u5b89\u88c5\u63d2\u4ef6",level:3},{value:"\u79fb\u9664\u63d2\u4ef6",id:"\u79fb\u9664\u63d2\u4ef6",level:3},{value:"\u4f7f\u7528Koordinator\u7684CPU QoS\u529f\u80fd",id:"\u4f7f\u7528koordinator\u7684cpu-qos\u529f\u80fd",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"anolis-plugsched"},"Anolis Plugsched"),(0,a.kt)("p",null,"\u4e3a\u4e86\u63d0\u5347CentOS 7.9\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u5728CPU\u8d44\u6e90\u7ef4\u5ea6\u7684\u6df7\u90e8\u6548\u679c\uff0c\u9f99\u8725\u793e\u533a\u63d0\u4f9b\u4e86\u4e00\u79cd\u63d2\u4ef6\u5316\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5373\u5229\u7528 plugsched \u8c03\u5ea6\u5668\u70ed\u5347\u7ea7\u6280\u672f\u63d0\u4f9b\u4e00\u79cd CPU \u6df7\u90e8\u6280\u672f\u7684\u8c03\u5ea6\u5668\u63d2\u4ef6\u5305\u3002\u8be5\u63d2\u4ef6\u53ef\u76f4\u63a5\u5b89\u88c5\u5230 CentOS 7.9\uff0c\u4e0d\u9700\u8981\u505c\u673a\u548c\u4e1a\u52a1\u8fc1\u79fb\u7b49\u5de5\u4f5c\u3002\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"https://koordinator.sh/blog/anolis-CPU-Co-location"},"Blog")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kernel: \u5fc5\u987b\u4f7f\u7528\u5b98\u65b9CentOS 7.9\u7684\u5185\u6838\u3002"),(0,a.kt)("li",{parentName:"ul"},"version == 3.10.0"),(0,a.kt)("li",{parentName:"ul"},"release >= 1160.81.1")),(0,a.kt)("h2",{id:"\u4f7f\u7528-plugsched"},"\u4f7f\u7528 Plugsched"),(0,a.kt)("h3",{id:"\u5b89\u88c5\u63d2\u4ef6"},"\u5b89\u88c5\u63d2\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# rpm -ivh https://github.com/koordinator-sh/koordinator/releases/download/v1.1.1/scheduler-bvt-noise-clean-$(uname -r).rpm\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u66f4\u65b0\u5185\u6838\u7248\u672c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5\u65b0\u7684\u63d2\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# rpm -ivh https://github.com/koordinator-sh/koordinator/releases/download/v1.1.1/scheduler-bvt-noise-clean-$(uname -r).rpm --oldpackage\n")),(0,a.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u5728cpu cgroup\u76ee\u5f55\u4e0b\u770b\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"cpu.bvt_warp_ns")," \uff0c\u5176\u4f7f\u7528\u65b9\u6cd5\u4e0eGroup Identity\u7279\u6027\u517c\u5bb9\u3002"),(0,a.kt)("h3",{id:"\u79fb\u9664\u63d2\u4ef6"},"\u79fb\u9664\u63d2\u4ef6"),(0,a.kt)("p",null,"\u79fb\u9664\u63d2\u4ef6\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"rpm -e")," \u547d\u4ee4\uff0c\u7136\u540e ",(0,a.kt)("inlineCode",{parentName:"p"},"cpu.bvt_warp_ns")," \u5c06\u4e5f\u4e0d\u518d\u5b58\u5728\u3002\u8bf7\u786e\u4fdd\u5378\u8f7d\u63d2\u4ef6\u524d\u6ca1\u6709\u4efb\u4f55\u4efb\u52a1\u8fd8\u5728\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"cpu.bvt_warp_ns")," \u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528koordinator\u7684cpu-qos\u529f\u80fd"},"\u4f7f\u7528Koordinator\u7684CPU QoS\u529f\u80fd"),(0,a.kt)("p",null,"\u8bf7\u53c2\u9605\u5bf9\u5e94\u7684",(0,a.kt)("a",{parentName:"p",href:"/zh-Hans/docs/v1.2/user-manuals/cpu-qos"},"\u7528\u6237\u6587\u6863"),"\u3002"))}m.isMDXComponent=!0}}]);