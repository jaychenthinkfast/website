"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[2878],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return t?a.createElement(k,o(o({ref:n},p),{},{components:t})):a.createElement(k,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9596:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),o=["components"],i={},s="\u7cbe\u7ec6\u5316 CPU \u7f16\u6392",d={unversionedId:"user-manuals/fine-grained-cpu-orchestration",id:"version-v1.3/user-manuals/fine-grained-cpu-orchestration",title:"\u7cbe\u7ec6\u5316 CPU \u7f16\u6392",description:"koord-scheduler \u4e3a\u4e86\u63d0\u5347 CPU \u5bc6\u96c6\u578b\u5de5\u4f5c\u8d1f\u8f7d\u7684\u6027\u80fd\u63d0\u4f9b\u4e86\u7cbe\u7ec6\u5316 CPU \u7f16\u6392\u80fd\u529b\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v1.3/user-manuals/fine-grained-cpu-orchestration.md",sourceDirName:"user-manuals",slug:"/user-manuals/fine-grained-cpu-orchestration",permalink:"/zh-Hans/docs/user-manuals/fine-grained-cpu-orchestration",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/fine-grained-cpu-orchestration.md",tags:[],version:"v1.3",lastUpdatedBy:"saintube",lastUpdatedAt:1692186595,formattedLastUpdatedAt:"2023/8/16",frontMatter:{},sidebar:"docs",previous:{title:"\u8d1f\u8f7d\u611f\u77e5\u91cd\u8c03\u5ea6",permalink:"/zh-Hans/docs/user-manuals/load-aware-descheduling"},next:{title:"\u8d44\u6e90\u9884\u7559",permalink:"/zh-Hans/docs/user-manuals/resource-reservation"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"\u8bbe\u7f6e",id:"\u8bbe\u7f6e",level:2},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u914d\u7f6e\u5168\u5c40\u53c2\u6570",id:"\u914d\u7f6e\u5168\u5c40\u53c2\u6570",level:3},{value:"\u6309\u8282\u70b9\u914d\u7f6e",id:"\u6309\u8282\u70b9\u914d\u7f6e",level:3},{value:"CPU \u7ed1\u5b9a\u7b56\u7565",id:"cpu-\u7ed1\u5b9a\u7b56\u7565",level:4},{value:"NUMA Node \u9009\u62e9\u7b56\u7565",id:"numa-node-\u9009\u62e9\u7b56\u7565",level:4},{value:"\u4f7f\u7528\u7cbe\u7ec6\u5316 CPU \u7f16\u6392",id:"\u4f7f\u7528\u7cbe\u7ec6\u5316-cpu-\u7f16\u6392",level:2}],c={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7cbe\u7ec6\u5316-cpu-\u7f16\u6392"},"\u7cbe\u7ec6\u5316 CPU \u7f16\u6392"),(0,l.kt)("p",null,"koord-scheduler \u4e3a\u4e86\u63d0\u5347 CPU \u5bc6\u96c6\u578b\u5de5\u4f5c\u8d1f\u8f7d\u7684\u6027\u80fd\u63d0\u4f9b\u4e86\u7cbe\u7ec6\u5316 CPU \u7f16\u6392\u80fd\u529b\u3002"),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"\u8d8a\u6765\u8d8a\u591a\u7684\u7cfb\u7edf\u5229\u7528 CPU \u548c\u786c\u4ef6\u52a0\u901f\u5668\u7684\u7ec4\u5408\u6765\u652f\u6301\u5b9e\u65f6\u8ba1\u7b97\u548c\u9ad8\u541e\u5410\u7684\u5e76\u884c\u8ba1\u7b97\u3002 \u8bb8\u591a\u5e94\u7528\u7a0b\u5e8f\u90fd\u9700\u8981\u9ad8\u6027\u80fd\u73af\u5883\uff0c\u5305\u62ec\u7535\u4fe1\u3001\u79d1\u5b66\u8ba1\u7b97\u3001\u673a\u5668\u5b66\u4e60\u3001\u91d1\u878d\u670d\u52a1\u548c\u6570\u636e\u5206\u6790\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\uff0cKubernetes \u96c6\u7fa4\u4e2d\u7684 Pod \u5728\u591a\u79cd\u8d44\u6e90\u7ef4\u5ea6\u4e0a\u90fd\u662f\u5171\u4eab\u7684\uff0c\u5b58\u5728\u76f8\u4e92\u5e72\u6270\u7684\u95ee\u9898\u3002 CPU \u8d44\u6e90\u7684\u5171\u4eab\u51e0\u4e4e\u662f\u4e0d\u53ef\u907f\u514d\u7684\uff0c\u4f8b\u5982 SMT \u7ebf\u7a0b\uff08\u5373\u903b\u8f91\u5904\u7406\u5668\uff09\u5171\u4eab\u540c\u4e00\u4e2a\u7269\u7406\u6838\uff0c\u540c\u4e00\u4e2a\u82af\u7247\u4e2d\u7684\u7269\u7406\u6838\u5171\u4eab\u540c\u4e00\u4e2a L3 \u7f13\u5b58\u3002 \u8d44\u6e90\u7ade\u4e89\u4f1a\u51cf\u6162\u8fd9\u4e9b\u5bf9 CPU \u654f\u611f\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7684\u8fd0\u884c\u8d28\u91cf\uff0c\u4ece\u800c\u5bfc\u81f4\u5ef6\u8fdf\u5347\u9ad8\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u63d0\u9ad8\u5bf9 CPU \u654f\u611f\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7684\u6027\u80fd\uff0ckoord-scheduler \u63d0\u4f9b\u4e86\u4e00\u79cd\u7cbe\u7ec6\u5316\u7684 CPU \u7f16\u6392\u673a\u5236\u3002 \u5b83\u589e\u5f3a\u4e86 Kubernetes \u7684 CPU \u7ba1\u7406\uff0c\u5e76\u652f\u6301\u8be6\u7ec6\u7684 NUMA \u5c40\u90e8\u6027\u548c CPU \u6392\u9664\u3002"),(0,l.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/docs/designs/fine-grained-cpu-orchestration"},"\u8bbe\u8ba1\uff1a\u7ec6\u7c92\u5ea6 CPU \u7f16\u6392"),"\u3002"),(0,l.kt)("h2",{id:"\u8bbe\u7f6e"},"\u8bbe\u7f6e"),(0,l.kt)("h3",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kubernetes >= 1.18"),(0,l.kt)("li",{parentName:"ul"},"Koordinator >= 0.6")),(0,l.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("p",null,"\u8bf7\u786e\u4fdd Koordinator \u7ec4\u4ef6\u5df2\u6b63\u786e\u5b89\u88c5\u5728\u4f60\u7684\u96c6\u7fa4\u4e2d\u3002 \u5982\u679c\u6ca1\u6709\uff0c\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"/docs/installation"},"\u5b89\u88c5\u6587\u6863"),"\u3002"),(0,l.kt)("h3",{id:"\u914d\u7f6e\u5168\u5c40\u53c2\u6570"},"\u914d\u7f6e\u5168\u5c40\u53c2\u6570"),(0,l.kt)("p",null,"\u7cbe\u7ec6\u5316 CPU \u7f16\u6392\u80fd\u529b\u662f\u9ed8\u8ba4\u5f00\u542f\u7684\u3002\u7528\u6237\u4e0d\u9700\u8981\u989d\u5916\u7684\u914d\u7f6e\u5373\u53ef\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u9700\u8981\u6df1\u5165\u5b9a\u5236\u7684\u7528\u6237\uff0c\u53ef\u4ee5\u6309\u9700\u4fee\u6539 Helm Chart \u4e2d\u7684\u914d\u7f6e\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"koord-scheduler-config")," \u8bbe\u7f6e\u7cbe\u7ec6\u5316 CPU \u7f16\u6392\u7684\u53c2\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: koord-scheduler-config\n  ...\ndata:\n  koord-scheduler-config: |\n    apiVersion: kubescheduler.config.k8s.io/v1beta2\n    kind: KubeSchedulerConfiguration\n    profiles:\n      - schedulerName: koord-scheduler\n      - pluginConfig:\n        - name: NodeNUMAResource\n          args:\n            apiVersion: kubescheduler.config.k8s.io/v1beta2\n            kind: NodeNUMAResourceArgs\n            # The default CPU Binding Policy. The default is FullPCPUs\n            # If the Pod belongs to LSE/LSR Prod Pods, and if no specific CPU binding policy is set, \n            # the CPU will be allocated according to the default core binding policy.\n            defaultCPUBindPolicy: FullPCPUs\n            # the scoring strategy\n            scoringStrategy:\n              # the scoring strategy ('MostAllocated', 'LeastAllocated')\n              # - MostAllocated(default): prefer the node with the least available resources\n              # - LeastAllocated: prefer the node with the most available resources\n              type: MostAllocated\n              # the weights of each resource type\n              resources:\n              - name: cpu\n                weight: 1\n        plugins:\n          # enable the NodeNUMAResource plugin\n          preFilter:\n            enabled:\n              - name: NodeNUMAResource\n          filter:\n            enabled:\n              - name: NodeNUMAResource\n              ...\n          score:\n            enabled:\n              - name: NodeNUMAResource\n                weight: 1\n              ...\n          reserve:\n            enabled:\n              - name: NodeNUMAResource\n          preBind:\n            enabled:\n              - name: NodeNUMAResource\n")),(0,l.kt)("p",null,"koord-descheduler \u662f\u901a\u8fc7 Configmap \u52a0\u8f7d",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/scheduling/config/"},"\u8c03\u5ea6\u5668\u914d\u7f6e"),"\u7684\u3002\u56e0\u6b64\u9700\u8981\u901a\u8fc7\u91cd\u542f\u8c03\u5ea6\u5668\u624d\u80fd\u4f7f\u7528\u6700\u65b0\u7684\u914d\u7f6e\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultCPUBindPolicy"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u7684 CPU \u7ed1\u5b9a\u7b56\u7565\u3002 \u9ed8\u8ba4\u503c\u4e3a FullPCPUs\u3002 \u5982\u679c Pod \u5c5e\u4e8e LSE/LSR Prod Pod\uff0c\u5e76\u4e14\u6ca1\u6709\u8bbe\u7f6e\u5177\u4f53\u7684 CPU \u7ed1\u5b9a\u7b56\u7565\uff0cCPU \u5219\u4f1a\u6309\u7167\u9ed8\u8ba4\u7684 CPU \u7ed1\u5b9a\u7b56\u7565\u8fdb\u884c\u5206\u914d\u3002 \u53ef\u9009\u503c\u4e3a FullPCPUs \u548c SpreadByPCPUs"),(0,l.kt)("td",{parentName:"tr",align:null},">= v0.6.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scoringStrategy"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6253\u5206\u7b56\u7565\uff0c\u53ef\u9009\u503c\u4e3a MostAllocated \u548c LeastAllocated"),(0,l.kt)("td",{parentName:"tr",align:null},">= v0.6.0")))),(0,l.kt)("h3",{id:"\u6309\u8282\u70b9\u914d\u7f6e"},"\u6309\u8282\u70b9\u914d\u7f6e"),(0,l.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5355\u72ec\u7684\u4e3a\u8282\u70b9\u8bbe\u7f6e\u4e0d\u540c\u7684 CPU \u7ed1\u5b9a\u7b56\u7565\u548c NUMA Node \u9009\u62e9\u7b56\u7565\u3002"),(0,l.kt)("h4",{id:"cpu-\u7ed1\u5b9a\u7b56\u7565"},"CPU \u7ed1\u5b9a\u7b56\u7565"),(0,l.kt)("p",null,"Label ",(0,l.kt)("inlineCode",{parentName:"p"},"node.koordinator.sh/cpu-bind-policy")," \u7ea6\u675f\u4e86\u8c03\u5ea6\u65f6\u5982\u4f55\u6309\u7167\u6307\u5b9a\u7684\u7b56\u7565\u5206\u914d\u548c\u7ed1\u5b9aCPU\u3002\u5177\u4f53\u7684\u503c\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"None or empty"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u6267\u884c\u4efb\u4f55\u7b56\u7565\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},">= v0.6.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FullPCPUsOnly"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u6c42\u8c03\u5ea6\u5668\u5fc5\u987b\u5206\u914d\u5b8c\u6574\u7684\u7269\u7406\u6838\u3002\u7b49\u4ef7\u4e8e kubelet CPU manager policy option full-pcpus-only=true."),(0,l.kt)("td",{parentName:"tr",align:null},">= v0.6.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SpreadByPCPUs"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u6c42\u8c03\u5ea6\u5668\u5fc5\u987b\u6309\u7167\u7269\u7406\u6838\u7ef4\u5ea6\u5747\u5300\u7684\u5206\u914d\u903b\u8f91\u6838\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},">= v1.1.0")))),(0,l.kt)("p",null,"\u5982\u679c\u8282\u70b9 Label \u4e0a\u6ca1\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"node.koordinator.sh/cpu-bind-policy"),"\uff0c\u8c03\u5ea6\u5668\u5c06\u4f1a\u6309\u7167 Pod \u6307\u5b9a\u7684 CPU \u7ed1\u5b9a\u7b56\u7565\u6216\u8005\u8c03\u5ea6\u5668\u914d\u7f6e\u7684\u9ed8\u8ba4\u7b56\u7565\u5206\u914d CPU\u3002"),(0,l.kt)("h4",{id:"numa-node-\u9009\u62e9\u7b56\u7565"},"NUMA Node \u9009\u62e9\u7b56\u7565"),(0,l.kt)("p",null,"Label ",(0,l.kt)("inlineCode",{parentName:"p"},"node.koordinator.sh/numa-allocate-strategy")," \u8868\u793a\u8c03\u5ea6\u65f6\u5e94\u8be5\u5982\u4f55\u9009\u62e9 NUMA Node\u3002\u5177\u4f53\u7684\u503c\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MostAllocated"),(0,l.kt)("td",{parentName:"tr",align:null},"MostAllocated \u8868\u793a\u9009\u62e9\u8d44\u6e90\u5269\u4f59\u6700\u5c11\u7684 NUMA Node\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},">= v.0.6.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LeastAllocated"),(0,l.kt)("td",{parentName:"tr",align:null},"LeastAllocated \u8868\u793a\u9009\u62e9\u8d44\u6e90\u5269\u4f59\u6700\u591a\u7684NUMA Node\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},">= v.0.6.0")))),(0,l.kt)("p",null,"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"node.koordinator.sh/numa-allocate-strategy")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"kubelet.koordinator.sh/cpu-manager-policy")," \u90fd\u8bbe\u7f6e\u4e86, \u4f18\u5148\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"node.koordinator.sh/numa-allocate-strategy"),"\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u7cbe\u7ec6\u5316-cpu-\u7f16\u6392"},"\u4f7f\u7528\u7cbe\u7ec6\u5316 CPU \u7f16\u6392"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6309\u7167\u4e0b\u9762\u7684 YAM\u4e86 \u521b\u5efa Deployment ",(0,l.kt)("inlineCode",{parentName:"li"},"nginx"),"\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u7cbe\u7ec6\u5316 CPU \u7f16\u6392\u65f6\uff0cPod \u9700\u8981\u5728 Label \u4e2d\u6307\u5b9a\u5177\u4f53\u7684 ",(0,l.kt)("a",{parentName:"p",href:"/docs/architecture/qos#definition"},"QoSClass")," \u5e76\u6307\u5b9a\u5177\u4f53\u7684\u7ed1\u5b9a\u7b56\u7565\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-lsr\n  labels:\n    app: nginx-lsr\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx-lsr\n  template:\n    metadata:\n      name: nginx-lsr\n      labels:\n        app: nginx-lsr\n        koordinator.sh/qosClass: LSR # set the QoS class as LSR, the binding policy is FullPCPUs by default\n        # in v0.5, binding policy should be specified.\n        # e.g. to set binding policy as FullPCPUs (prefer allocating full physical CPUs of the same core):\n        #annotations:\n          #scheduling.koordinator.sh/resource-spec: '{\"preferredCPUBindPolicy\": \"FullPCPUs\"}'\n    spec:\n      schedulerName: koord-scheduler # use the koord-scheduler\n      containers:\n      - name: nginx\n        image: nginx\n        resources:\n          limits:\n            cpu: '2'\n          requests:\n            cpu: '2'\n      priorityClassName: koord-prod\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"li"},"nginx")," deployment \u5e76\u68c0\u67e5\u8c03\u5ea6\u7ed3\u679c\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create -f nginx-deployment.yaml\ndeployment/nginx-lsr created\n$ kubectl get pods -o wide | grep nginx\nnginx-lsr-59cf487d4b-jwwjv   1/1     Running   0       21s     172.20.101.35    node-0   <none>         <none>\nnginx-lsr-59cf487d4b-4l7r4   1/1     Running   0       21s     172.20.101.79    node-1   <none>         <none>\nnginx-lsr-59cf487d4b-nrb7f   1/1     Running   0       21s     172.20.106.119   node-2   <none>         <none>\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u68c0\u67e5 Pod \u7684 CPU \u5206\u914d\u7ed3\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"scheduling.koordinator.sh/resource-status"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get pod nginx-lsr-59cf487d4b-jwwjv -o jsonpath=\'{.metadata.annotations.scheduling\\.koordinator\\.sh/resource-status}\'\n{"cpuset":"2,54"}\n')),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230 Pod ",(0,l.kt)("inlineCode",{parentName:"p"},"nginx-lsr-59cf487d4b-jwwjv")," \u7ed1\u5b9a\u4e86 2 \u4e2a\u903b\u8f91\u6838\uff0c\u5bf9\u5e94\u7684\u903b\u8f91\u6838 ID \u5206\u522b\u662f 2 \u548c 54\uff0c\u8fd9\u4e24\u4e2a\u903b\u8f91\u6838\u5c5e\u4e8e\u540c\u4e00\u4e2a\u7269\u7406\u6838\u3002"),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u66f4\u6539 ",(0,l.kt)("inlineCode",{parentName:"li"},"nginx")," deployment \u7684 CPU \u7ed1\u5b9a\u7b56\u7565\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-lsr\n  labels:\n    app: nginx-lsr\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx-lsr\n  template:\n    metadata:\n      name: nginx-lsr\n      labels:\n        app: nginx-lsr\n        koordinator.sh/qosClass: LSR # set the QoS class as LSR\n      annotations:\n        # set binding policy as SpreadByPCPUs (prefer allocating physical CPUs of different cores)\n        scheduling.koordinator.sh/resource-spec: '{\"preferredCPUBindPolicy\": \"SpreadByPCPUs\"}'\n    spec:\n      schedulerName: koord-scheduler # use the koord-scheduler\n      containers:\n      - name: nginx\n        image: nginx\n        resources:\n          limits:\n            cpu: '2'\n          requests:\n            cpu: '2'\n      priorityClassName: koord-prod\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u66f4\u65b0 ",(0,l.kt)("inlineCode",{parentName:"li"},"nginx")," deployment \u5e76\u68c0\u67e5\u8c03\u5ea6\u7ed3\u679c\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f nginx-deployment.yaml\ndeployment/nginx-lsr created\n$ kubectl get pods -o wide | grep nginx\nnginx-lsr-7fcbcf89b4-rkrgg   1/1     Running   0       49s     172.20.101.35    node-0   <none>         <none>\nnginx-lsr-7fcbcf89b4-ndbks   1/1     Running   0       49s     172.20.101.79    node-1   <none>         <none>\nnginx-lsr-7fcbcf89b4-9v8b8   1/1     Running   0       49s     172.20.106.119   node-2   <none>         <none>\n")),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"\u68c0\u67e5 Pod \u6700\u65b0\u7684 CPU \u5206\u914d\u7ed3\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"scheduling.koordinator.sh/resource-status"),"\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get pod nginx-lsr-7fcbcf89b4-rkrgg -o jsonpath=\'{.metadata.annotations.scheduling\\.koordinator\\.sh/resource-status}\'\n{"cpuset":"2-3"}\n')),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u770b\u5230 Pod ",(0,l.kt)("inlineCode",{parentName:"p"},"nginx-lsr-59cf487d4b-jwwjv")," \u7ed1\u5b9a\u4e86\u4e24\u4e2a\u903b\u8f91\u6838\uff0c\u5bf9\u5e94\u7684 ID \u5206\u522b\u662f 2,3, \u5c5e\u4e8e\u4e24\u4e2a\u4e0d\u540c\u7684\u7269\u7406\u6838\u3002"),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"(\u53ef\u9009) \u9ad8\u7ea7\u914d\u7f6e.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  labels:\n    # koordinator QoS class of the pod. (use 'LSR' or 'LSE' for binding CPUs)\n    koordinator.sh/qosClass: LSR\n  annotations:\n    # `resource-spec` indicates the specification of resource scheduling, here we need to set `preferredCPUBindPolicy`.\n    # `preferredCPUBindPolicy` indicating the CPU binding policy of the pod ('None', 'FullPCPUs', 'SpreadByPCPUs')\n    # - None: perform no exclusive policy\n    # - FullPCPUs(default): a bin-packing binding policy, prefer allocating full physical cores (SMT siblings)\n    # - SpreadByPCPUs: a spread binding policy, prefer allocating logical cores (SMT threads) evenly across physical cores (SMT siblings)\n    scheduling.koordinator.sh/resource-spec: '{\"preferredCPUBindPolicy\": \"FullPCPUs\"}'\n")))}m.isMDXComponent=!0}}]);