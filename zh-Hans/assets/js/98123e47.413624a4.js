"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[7575],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(t),f=o,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||a;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5533:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],i={slug:"release-v1.2.0",title:"Koordinator v1.2: \u652f\u6301\u8282\u70b9\u8d44\u6e90\u9884\u7559\uff0c\u517c\u5bb9\u793e\u533a\u91cd\u8c03\u5ea6\u7b56\u7565",authors:["zwzhang0107"],tags:["release"]},s=void 0,d={permalink:"/zh-Hans/blog/release-v1.2.0",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/blog/2023-04-07-release/index.md",source:"@site/blog/2023-04-07-release/index.md",title:"Koordinator v1.2: \u652f\u6301\u8282\u70b9\u8d44\u6e90\u9884\u7559\uff0c\u517c\u5bb9\u793e\u533a\u91cd\u8c03\u5ea6\u7b56\u7565",description:"\u80cc\u666f",date:"2023-04-07T00:00:00.000Z",formattedDate:"2023\u5e744\u67087\u65e5",tags:[{label:"release",permalink:"/zh-Hans/blog/tags/release"}],readingTime:12.33,truncated:!1,authors:[{name:"Zuowei Zhang",title:"Koordinator maintainer",url:"https://github.com/zwzhang0107",imageURL:"https://github.com/zwzhang0107.png",key:"zwzhang0107"}],frontMatter:{slug:"release-v1.2.0",title:"Koordinator v1.2: \u652f\u6301\u8282\u70b9\u8d44\u6e90\u9884\u7559\uff0c\u517c\u5bb9\u793e\u533a\u91cd\u8c03\u5ea6\u7b56\u7565",authors:["zwzhang0107"],tags:["release"]},prevItem:{title:"Koordinator v1.3: \u589e\u5f3a\u8d44\u6e90\u9884\u7559\uff0c\u652f\u6301 NRI\uff0c\u63d0\u4f9b\u8282\u70b9\u753b\u50cf\u7684 Mid \u8d44\u6e90\u8d85\u5356",permalink:"/zh-Hans/blog/release-v1.3.0"},nextItem:{title:"\u9f99\u8725 plugsched \u795e\u5668\u52a9\u529b Koordinator \u4e91\u539f\u751f\u5355\u673a\u6df7\u90e8\u2014\u2014 \u5185\u6838 CPU QoS \u63ed\u79d8",permalink:"/zh-Hans/blog/anolis-CPU-Co-location"}},u={authorsImageUrls:[void 0]},c=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u7248\u672c\u529f\u80fd\u7279\u6027\u89e3\u8bfb",id:"\u7248\u672c\u529f\u80fd\u7279\u6027\u89e3\u8bfb",level:2},{value:"\u8282\u70b9\u8d44\u6e90\u9884\u7559",id:"\u8282\u70b9\u8d44\u6e90\u9884\u7559",level:3},{value:"\u8282\u70b9\u8d44\u6e90\u9884\u7559\u58f0\u660e",id:"\u8282\u70b9\u8d44\u6e90\u9884\u7559\u58f0\u660e",level:4},{value:"\u8c03\u5ea6\u53ca\u91cd\u8c03\u5ea6\u573a\u666f\u9002\u914d",id:"\u8c03\u5ea6\u53ca\u91cd\u8c03\u5ea6\u573a\u666f\u9002\u914d",level:4},{value:"\u5355\u673a\u8d44\u6e90\u7ba1\u7406",id:"\u5355\u673a\u8d44\u6e90\u7ba1\u7406",level:4},{value:"\u517c\u5bb9\u793e\u533a\u91cd\u8c03\u5ea6\u7b56\u7565",id:"\u517c\u5bb9\u793e\u533a\u91cd\u8c03\u5ea6\u7b56\u7565",level:3},{value:"\u8d44\u6e90\u9884\u7559\u8c03\u5ea6\u80fd\u529b\u589e\u5f3a",id:"\u8d44\u6e90\u9884\u7559\u8c03\u5ea6\u80fd\u529b\u589e\u5f3a",level:3},{value:"\u652f\u6301AMD\u73af\u5883\u4e0b\u7684L3 Cache\u548c\u5185\u5b58\u5e26\u5bbd\u9694\u79bb",id:"\u652f\u6301amd\u73af\u5883\u4e0b\u7684l3-cache\u548c\u5185\u5b58\u5e26\u5bbd\u9694\u79bb",level:3},{value:"\u5176\u4ed6\u529f\u80fd",id:"\u5176\u4ed6\u529f\u80fd",level:3},{value:"\u672a\u6765\u8ba1\u5212",id:"\u672a\u6765\u8ba1\u5212",level:2}],p={toc:c};function f(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,a.kt)("p",null,"Koordinator \u662f\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\uff0c\u57fa\u4e8e\u963f\u91cc\u5df4\u5df4\u5728\u5bb9\u5668\u8c03\u5ea6\u9886\u57df\u591a\u5e74\u7d2f\u79ef\u7684\u7ecf\u9a8c\u5b75\u5316\u8bde\u751f\uff0c\u53ef\u4ee5\u63d0\u5347\u5bb9\u5668\u6027\u80fd\uff0c\u964d\u4f4e\u96c6\u7fa4\u8d44\u6e90\u6210\u672c\u3002\u901a\u8fc7\u6df7\u90e8\u3001\u8d44\u6e90\u753b\u50cf\u3001\u8c03\u5ea6\u4f18\u5316\u7b49\u6280\u672f\u80fd\u529b\uff0c\n\u80fd\u591f\u63d0\u9ad8\u5ef6\u8fdf\u654f\u611f\u7684\u5de5\u4f5c\u8d1f\u8f7d\u548c\u6279\u5904\u7406\u4f5c\u4e1a\u7684\u8fd0\u884c\u6548\u7387\u548c\u53ef\u9760\u6027\uff0c\u4f18\u5316\u96c6\u7fa4\u8d44\u6e90\u4f7f\u7528\u6548\u7387\u3002"),(0,a.kt)("p",null,"\u4ece 2022 \u5e74 4 \u6708\u53d1\u5e03\u4ee5\u6765\uff0cKoordinator \u8fc4\u4eca\u4e00\u5171\u8fed\u4ee3\u53d1\u5e03\u4e86 10 \u4e2a\u7248\u672c\uff0c\u5438\u5f15\u4e86\u4e86\u5305\u62ec\u963f\u91cc\u5df4\u5df4\u3001\u5c0f\u7c73\u3001\u5c0f\u7ea2\u4e66\u3001\u7231\u5947\u827a\u3001360\u3001\u6709\u8d5e \u7b49\u5728\u5185\u7684\u5927\u91cf\u4f18\u79c0\u5de5\u7a0b\u5e08\u53c2\u4e0e\u8d21\u732e\u3002\n\u968f\u77402023\u5e74\u6625\u5929\u7684\u6765\u4e34\uff0cKoordinator\u4e5f\u8fce\u6765\u4e86\u5b83\u7684\u4e00\u5468\u5e74\u8bde\u8fb0\uff0c\u5728\u6b64\u6211\u4eec\u5f88\u9ad8\u5174\u7684\u5411\u5927\u5bb6\u5ba3\u5e03\uff0cKoordinator v1.2\u7248\u672c\u6b63\u5f0f\u53d1\u5e03\u3002\u65b0\u7248\u672c\u4e2dKoordinator\u652f\u6301\u4e86\u8282\u70b9\u8d44\u6e90\u9884\u7559\u529f\u80fd\uff0c\n\u5e76\u517c\u5bb9\u4e86K8s\u793e\u533a\u7684\u91cd\u8c03\u5ea6\u7b56\u7565\uff0c\u540c\u65f6\u5728\u5355\u673a\u4fa7\u589e\u52a0\u4e86\u5bf9AMD\u73af\u5883L3 Cache\u548c\u5185\u5b58\u5e26\u5bbd\u9694\u79bb\u7684\u652f\u6301\u3002"),(0,a.kt)("p",null,"\u5728\u65b0\u7248\u672c\u4e2d\uff0c\u5171\u670912\u4f4d\u65b0\u52a0\u5165\u7684\u5f00\u53d1\u8005\u53c2\u4e0e\u5230\u4e86Koordiantor\u793e\u533a\u7684\u5efa\u8bbe\uff0c\u4ed6\u4eec\u662f@Re-Grh\uff0c@chengweiv5\uff0c@kingeasternsun\uff0c@shelwinnn\uff0c@yuexian1234\uff0c@Syulin7\uff0c@tzzcfrank\n@Dengerwei\uff0c@complone\uff0c@AlbeeSo\uff0c@xigang\uff0c@leason00\uff0c\u611f\u8c22\u4ee5\u4e0a\u5f00\u53d1\u8005\u7684\u8d21\u732e\u548c\u53c2\u4e0e\u3002"),(0,a.kt)("h2",{id:"\u7248\u672c\u529f\u80fd\u7279\u6027\u89e3\u8bfb"},"\u7248\u672c\u529f\u80fd\u7279\u6027\u89e3\u8bfb"),(0,a.kt)("h3",{id:"\u8282\u70b9\u8d44\u6e90\u9884\u7559"},"\u8282\u70b9\u8d44\u6e90\u9884\u7559"),(0,a.kt)("p",null,"\u6df7\u90e8\u573a\u666f\u4e2d\u5305\u542b\u7684\u5e94\u7528\u5f62\u6001\u591a\u79cd\u591a\u6837\uff0c\u9664\u4e86\u5df2\u7ecf\u5b8c\u6210\u4e91\u539f\u751f\u5316\u7684\u5bb9\u5668\uff0c\u8fd8\u5305\u542b\u5f88\u591a\u5c1a\u672a\u5b8c\u6210\u5bb9\u5668\u5316\u7684\u5e94\u7528\uff0c\u8fd9\u90e8\u5206\u5e94\u7528\u4f1a\u4ee5\u8fdb\u7a0b\u7684\u5f62\u5f0f\u5728\u5bbf\u4e3b\u673a\u4e0a\u4e0eK8s\u5bb9\u5668\u5171\u540c\u8fd0\u884c\u3002\n\u4e3a\u4e86\u51cf\u5c11K8s\u5e94\u7528\u548c\u5176\u4ed6\u7c7b\u578b\u5e94\u7528\u5728\u8282\u70b9\u4fa7\u7684\u8d44\u6e90\u7ade\u4e89\uff0cKoordinator \u652f\u6301\u5c06\u4e00\u90e8\u5206\u8d44\u6e90\u9884\u7559\uff0c\u4f7f\u5176\u65e2\u4e0d\u53c2\u4e0e\u8c03\u5ea6\u5668\u7684\u8d44\u6e90\u8c03\u5ea6\uff0c\u4e5f\u4e0d\u53c2\u4e0e\u8282\u70b9\u4fa7\u7684\u8d44\u6e90\u5206\u914d\uff0c\u8fbe\u5230\u8d44\u6e90\u5206\u9694\u4f7f\u7528\u7684\u6548\u679c\u3002\n\u5728v1.2\u7248\u672c\u4e2d\uff0cKoordiantor\u5df2\u7ecf\u652f\u6301CPU\u548c\u5185\u5b58\u8d44\u6e90\u7ef4\u5ea6\u7684\u9884\u7559\uff0c\u5e76\u5141\u8bb8\u76f4\u63a5\u6307\u5b9a\u9884\u7559\u7684CPU\u7f16\u53f7\uff0c\u5177\u4f53\u5982\u4e0b\u3002"),(0,a.kt)("h4",{id:"\u8282\u70b9\u8d44\u6e90\u9884\u7559\u58f0\u660e"},"\u8282\u70b9\u8d44\u6e90\u9884\u7559\u58f0\u660e"),(0,a.kt)("p",null,"\u5728Node\u4e0a\u53ef\u4ee5\u914d\u7f6e\u9700\u8981\u9884\u7559\u7684\u8d44\u6e90\u91cf\u6216\u5177\u4f53\u7684CPU\u7f16\u53f7\uff0c\u4e3e\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Node\nmetadata:\n  name: fake-node\n  annotations: # specific 5 cores will be calculated, e.g. 0, 1, 2, 3, 4, and then those core will be reserved.\n    node.koordinator.sh/reservation: \'{"resources":{"cpu":"5"}}\'\n---\napiVersion: v1\nkind: Node\nmetadata:\n  name: fake-node\n  annotations: # the cores 0, 1, 2, 3 will be reserved.\n    node.koordinator.sh/reservation: \'{"reservedCPUs":"0-3"}\'\n')),(0,a.kt)("p",null,"\u5355\u673a\u7ec4\u4ef6Koordlet\u5728\u4e0a\u62a5\u8282\u70b9\u8d44\u6e90\u62d3\u6251\u4fe1\u606f\u65f6\uff0c\u4f1a\u5c06\u5177\u4f53\u9884\u7559\u7684CPU\u7f16\u53f7\u66f4\u65b0\u5230NodeResourceTopology\u5bf9\u8c61\u7684Annotation\u4e2d\u3002"),(0,a.kt)("h4",{id:"\u8c03\u5ea6\u53ca\u91cd\u8c03\u5ea6\u573a\u666f\u9002\u914d"},"\u8c03\u5ea6\u53ca\u91cd\u8c03\u5ea6\u573a\u666f\u9002\u914d"),(0,a.kt)("p",null,"\u8c03\u5ea6\u5668\u5728\u5206\u914d\u8d44\u6e90\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6d89\u53ca\u4e86\u591a\u79cd\u60c5\u51b5\u7684\u8d44\u6e90\u6821\u9a8c\uff0c\u5305\u62ecQuota\u7ba1\u7406\uff0c\u8282\u70b9\u5bb9\u91cf\u6821\u9a8c\uff0cCPU\u62d3\u6251\u6821\u9a8c\u7b49\u7b49\uff0c\u8fd9\u4e9b\u573a\u666f\u90fd\u9700\u8981\u589e\u52a0\u5bf9\u8282\u70b9\u9884\u7559\u8d44\u6e90\u7684\u8003\u8651\uff0c\u4f8b\u5982\uff0c\u8c03\u5ea6\u5668\u5728\u8ba1\u7b97\u8282\u70b9CPU\u5bb9\u91cf\u65f6\uff0c\u9700\u8981\u5c06\u8282\u70b9\u9884\u7559\u7684\u8d44\u6e90\u8fdb\u884c\u6263\u9664\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cpus(alloc) = cpus(total) - cpus(allocated) - cpus(kubeletReserved) - cpus(nodeAnnoReserved)\n")),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u5bf9\u4e8eBatch\u6df7\u90e8\u8d85\u5356\u8d44\u6e90\u7684\u8ba1\u7b97\u540c\u6837\u9700\u8981\u5c06\u8fd9\u90e8\u5206\u8d44\u6e90\u6263\u9664\uff0c\u800c\u8003\u8651\u5230\u8282\u70b9\u4e2d\u8fd8\u5305\u62ec\u4e00\u90e8\u5206\u7cfb\u7edf\u8fdb\u7a0b\u7684\u8d44\u6e90\u6d88\u8017\uff0cKoord-Manager\u5728\u8ba1\u7b97\u65f6\u4f1a\u53d6\u8282\u70b9\u9884\u7559\u548c\u7cfb\u7edf\u7528\u91cf\u7684\u6700\u5927\u503c\uff0c\u5177\u4f53\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"reserveRatio = (100-thresholdPercent) / 100.0\nnode.reserved = node.alloc * reserveRatio\nsystem.used = max(node.used - pod.used, node.anno.reserved)\nNode(BE).Alloc = Node.Alloc - Node.Reserved - System.Used - Pod(LS).Used\n")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u91cd\u8c03\u5ea6\uff0c\u5404\u63d2\u4ef6\u7b56\u7565\u9700\u8981\u5728\u8282\u70b9\u5bb9\u91cf\u3001\u5229\u7528\u7387\u8ba1\u7b97\u7b49\u573a\u666f\u611f\u77e5\u8282\u70b9\u9884\u7559\u8d44\u6e90\u91cf\uff0c\u6b64\u5916\uff0c\u82e5\u5df2\u7ecf\u6709\u5bb9\u5668\u5360\u7528\u4e86\u8282\u70b9\u7684\u9884\u7559\u8d44\u6e90\uff0c\u91cd\u8c03\u5ea6\u9700\u8981\u8003\u8651\u5c06\u5176\u8fdb\u884c\u9a71\u9010\uff0c\u786e\u4fdd\u8282\u70b9\u5bb9\u91cf\u5f97\u5230\u6b63\u786e\u7ba1\u7406\uff0c\n\u907f\u514d\u8d44\u6e90\u7ade\u4e89\u3002\u8fd9\u90e8\u5206\u91cd\u8c03\u5ea6\u76f8\u5173\u7684\u529f\u80fd\uff0c\u6211\u4eec\u5c06\u5728\u540e\u7eed\u7248\u672c\u8fdb\u884c\u652f\u6301\uff0c\u4e5f\u6b22\u8fce\u5e7f\u5927\u7231\u597d\u8005\u4eec\u4e00\u8d77\u53c2\u4e0e\u5171\u5efa\u3002"),(0,a.kt)("h4",{id:"\u5355\u673a\u8d44\u6e90\u7ba1\u7406"},"\u5355\u673a\u8d44\u6e90\u7ba1\u7406"),(0,a.kt)("p",null,"\u5bf9\u4e8eLS\u7c7b\u578b\u7684Pod\uff0c\u5355\u673aKoordlet\u7ec4\u4ef6\u4f1a\u6839\u636eCPU\u5206\u914d\u60c5\u51b5\u52a8\u6001\u8ba1\u7b97\u5171\u4eabCPU\u6c60\uff0c\u5bf9\u4e8e\u8282\u70b9\u9884\u7559\u7684CPU\u6838\u5fc3\u4f1a\u5c06\u5176\u6392\u9664\u5728\u5916\uff0c\u786e\u4fddLS\u7c7b\u578bpod\u548c\u5176\u4ed6\u975e\u5bb9\u5668\u5316\u7684\u8fdb\u7a0b\u8d44\u6e90\u9694\u79bb\u3002\n\u540c\u65f6\uff0c\u5bf9\u4e8e\u5355\u673a\u76f8\u5173\u7684QoS\u7b56\u7565\uff0c\u4f8b\u5982CPUSuppress\u538b\u5236\u7b56\u7565\u5728\u8ba1\u7b97\u8282\u70b9\u5229\u7528\u7387\u65f6\uff0c\u4f1a\u5c06\u9884\u7559\u8d44\u6e90\u91cf\u8003\u8651\u5728\u5185\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"suppress(BE) := node.Total * SLOPercent - pod(LS).Used - max(system.Used, node.anno.reserved)\n")),(0,a.kt)("p",null,"\u5173\u4e8e\u8282\u70b9\u8d44\u6e90\u9884\u7559\u529f\u80fd\u7684\u8be6\u7ec6\u8bf4\u660e\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/blob/main/docs/proposals/scheduling/20221227-node-resource-reservation.md"},"\u8bbe\u8ba1\u6587\u6863")," \u4e2d\u7684\u4ecb\u7ecd\u3002"),(0,a.kt)("h3",{id:"\u517c\u5bb9\u793e\u533a\u91cd\u8c03\u5ea6\u7b56\u7565"},"\u517c\u5bb9\u793e\u533a\u91cd\u8c03\u5ea6\u7b56\u7565"),(0,a.kt)("p",null,"\u5f97\u76ca\u4e8e Koordinator Descheduler \u7684\u6846\u67b6\u65e5\u76ca\u6210\u719f\uff0c\u5728 Koordinator v1.2 \u7248\u672c\u4e2d\uff0c\u901a\u8fc7\u5f15\u5165\u4e00\u79cd\u63a5\u53e3\u9002\u914d\u673a\u5236\uff0c\u53ef\u4ee5\u65e0\u7f1d\u7684\u5bf9 Kubernetes Desceheduler \u5df2\u6709\u63d2\u4ef6\u8fdb\u884c\u517c\u5bb9\uff0c\u5728\u4f7f\u7528\u65f6\u60a8\u53ea\u9700\u90e8\u7f72 Koordinator Descheduler \u5373\u53ef\u4f7f\u7528\u5230\u4e0a\u6e38\u7684\u5168\u90e8\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u5728\u5b9e\u73b0\u4e0a\uff0cKoordinator Descheduler \u901a\u8fc7 import \u4e0a\u6e38\u4ee3\u7801\u4e0d\u505a\u4efb\u4f55\u4fb5\u5165\u5f0f\u7684\u6539\u52a8\uff0c\u4fdd\u8bc1\u5b8c\u5168\u517c\u5bb9\u4e0a\u6e38\u6240\u6709\u7684\u63d2\u4ef6\u3001\u53c2\u6570\u914d\u7f6e\u4ee5\u53ca\u5176\u8fd0\u884c\u7b56\u7565\u3002\u540c\u65f6\uff0cKoordinator \u5141\u8bb8\u7528\u6237\u4e3a\u4e0a\u6e38\u63d2\u4ef6\u6307\u5b9a\u589e\u5f3a\u7684 evictor\uff0c\u4ece\u800c\u590d\u7528 Koordinator \u63d0\u4f9b\u7684\u8d44\u6e90\u9884\u7559\u3001\u5de5\u4f5c\u8d1f\u8f7d\u53ef\u7528\u6027\u4fdd\u969c\u4ee5\u53ca\u5168\u5c40\u6d41\u63a7\u7b49\u5b89\u5168\u6027\u7b56\u7565\u3002"),(0,a.kt)("p",null,"\u517c\u5bb9\u7684\u63d2\u4ef6\u5217\u8868\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HighNodeUtilization"),(0,a.kt)("li",{parentName:"ul"},"LowNodeUtilization"),(0,a.kt)("li",{parentName:"ul"},"PodLifeTime"),(0,a.kt)("li",{parentName:"ul"},"RemoveFailedPods"),(0,a.kt)("li",{parentName:"ul"},"RemoveDuplicates"),(0,a.kt)("li",{parentName:"ul"},"RemovePodsHavingTooManyRestarts"),(0,a.kt)("li",{parentName:"ul"},"RemovePodsViolatingInterPodAntiAffinity"),(0,a.kt)("li",{parentName:"ul"},"RemovePodsViolatingNodeAffinity"),(0,a.kt)("li",{parentName:"ul"},"RemovePodsViolatingNodeTaints"),(0,a.kt)("li",{parentName:"ul"},"RemovePodsViolatingTopologySpreadConstraint"),(0,a.kt)("li",{parentName:"ul"},"DefaultEvictor")),(0,a.kt)("p",null,"\u5728\u4f7f\u7528\u65f6\uff0c\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u7684\u65b9\u5f0f\u914d\u7f6e\uff0c\u4ee5 RemovePodsHavingTooManyRestarts \u4e3a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: descheduler/v1alpha2\nkind: DeschedulerConfiguration\nclientConnection:\n  kubeconfig: "/Users/joseph/asi/koord-2/admin.kubeconfig"\nleaderElection:\n  leaderElect: false\n  resourceName: test-descheduler\n  resourceNamespace: kube-system\ndeschedulingInterval: 10s\ndryRun: true\nprofiles:\n- name: koord-descheduler\n  plugins:\n    evict:\n      enabled:\n        - name: MigrationController\n   deschedule:\n     enabled:\n       - name: RemovePodsHavingTooManyRestarts\n  pluginConfig:\n    - name: RemovePodsHavingTooManyRestarts\n      args:\n        apiVersion: descheduler/v1alpha2\n        kind: RemovePodsHavingTooManyRestartsArgs\n        podRestartThreshold: 10\n')),(0,a.kt)("h3",{id:"\u8d44\u6e90\u9884\u7559\u8c03\u5ea6\u80fd\u529b\u589e\u5f3a"},"\u8d44\u6e90\u9884\u7559\u8c03\u5ea6\u80fd\u529b\u589e\u5f3a"),(0,a.kt)("p",null,"Koordinator \u5728\u6bd4\u8f83\u65e9\u671f\u7684\u7248\u672c\u4e2d\u5f15\u5165\u4e86 Reservation \u673a\u5236\uff0c\u901a\u8fc7\u9884\u7559\u8d44\u6e90\u5e76\u590d\u7528\u7ed9\u6307\u5b9a\u7279\u5f81\u7684 Pod \u4f7f\u7528\uff0c\u7528\u4e8e\u5e2e\u52a9\u89e3\u51b3\u8d44\u6e90\u4ea4\u4ed8\u786e\u5b9a\u6027\u95ee\u9898\u3002\n\u4f8b\u5982\u91cd\u8c03\u5ea6\u573a\u666f\u4e2d\u671f\u671b\u88ab\u9a71\u9010\u7684 Pod \u4e00\u5b9a\u6709\u8d44\u6e90\u53ef\u4ee5\u4f7f\u7528\uff0c\u800c\u4e0d\u662f\u88ab\u9a71\u9010\u540e\u65e0\u8d44\u6e90\u53ef\u7528\u5bfc\u81f4\u5f15\u8d77\u7a33\u5b9a\u6027\u95ee\u9898\uff1b\u53c8\u6216\u8005\u9700\u8981\u6269\u5bb9\u65f6\uff0c\n\u4e00\u4e9b PaaS \u5e73\u53f0\u5e0c\u671b\u80fd\u591f\u5148\u786e\u5b9a\u662f\u5426\u6ee1\u8db3\u5e94\u7528\u8c03\u5ea6\u7f16\u6392\u7684\u8d44\u6e90\uff0c\u518d\u51b3\u5b9a\u662f\u5426\u6269\u5bb9\uff0c\u6216\u8005\u63d0\u524d\u505a\u4e00\u4e9b\u9884\u5907\u5de5\u4f5c\u7b49\u3002"),(0,a.kt)("p",null,"Koordinator Reservation \u901a\u8fc7 CRD \u5b9a\u4e49\uff0c\u6bcf\u4e2a Reservation \u5bf9\u8c61\u4f1a\u5728 koord-scheduler \u5185\u4f2a\u9020\u6210\u4e00\u4e2a Pod \u8fdb\u884c\u8c03\u5ea6\uff0c\n\u8fd9\u6837\u7684 Pod \u6211\u4eec\u79f0\u4e3a Reserve PodReserve Pod \u5c31\u53ef\u4ee5\u590d\u7528\u5df2\u6709\u7684\u8c03\u5ea6\u63d2\u4ef6\u548c\u6253\u5206\u63d2\u4ef6\u627e\u5230\u5408\u9002\u7684\u8282\u70b9\uff0c\u5e76\u6700\u7ec8\u5728\u8c03\u5ea6\u5668\u5185\u90e8\u72b6\u6001\u4e2d\u5360\u636e\u5bf9\u5e94\u7684\u8d44\u6e90\u3002\nReservation \u5728\u521b\u5efa\u65f6\u90fd\u4f1a\u6307\u5b9a\u9884\u7559\u7684\u8d44\u6e90\u5c06\u6765\u8981\u7ed9\u54ea\u4e9b Pod \u4f7f\u7528\uff0c\u53ef\u4ee5\u6307\u5b9a\u5177\u4f53\u67d0\u4e2a Pod\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u67d0\u4e9b workload \u5bf9\u8c61\uff0c\u6216\u8005\u5177\u5907\u67d0\u4e9b\u6807\u7b7e\u7684 Pod \u4f7f\u7528\u3002\n\u5f53\u8fd9\u4e9b Pod \u901a\u8fc7 koord-scheduler \u8c03\u5ea6\u65f6\uff0c\u8c03\u5ea6\u5668\u4f1a\u627e\u5230\u53ef\u4ee5\u88ab\u8be5 Pod \u4f7f\u7528\u7684 Reservation \u5bf9\u8c61\uff0c\u5e76\u4e14\u4f18\u5148\u4f7f\u7528 Reservation \u7684\u8d44\u6e90\u3002\n\u5e76\u4e14 Reservation Status \u4e2d\u4f1a\u8bb0\u5f55\u88ab\u54ea\u4e2a Pod \u4f7f\u7528\uff0c\u4ee5\u53ca Pod Annotations \u4e2d\u4e5f\u4f1a\u8bb0\u5f55\u4f7f\u7528\u4e86\u54ea\u4e2a Reservation\u3002\nReservation \u88ab\u4f7f\u7528\u540e\uff0c\u4f1a\u81ea\u52a8\u7684\u6e05\u7406\u5185\u90e8\u72b6\u6001\uff0c\u786e\u4fdd\u5176\u4ed6 Pod \u4e0d\u4f1a\u56e0\u4e3a Reservation \u5bfc\u81f4\u65e0\u6cd5\u8c03\u5ea6\u3002"),(0,a.kt)("p",null,"\u5728 Koordinator v1.2 \u4e2d\uff0c\u6211\u4eec\u505a\u4e86\u5927\u5e45\u5ea6\u7684\u4f18\u5316\u3002\u9996\u5148\u6211\u4eec\u653e\u5f00\u4e86\u53ea\u80fd\u4f7f\u7528 Reservation \u6301\u6709\u7684\u8d44\u6e90\u7684\u9650\u5236\uff0c\u5141\u8bb8\u8de8\u51fa Reservation \u7684\u8d44\u6e90\u8fb9\u754c\uff0c\n\u65e2\u53ef\u4ee5\u4f7f\u7528 Reservation \u9884\u7559\u7684\u8d44\u6e90\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u8282\u70b9\u4e0a\u5269\u4f59\u7684\u8d44\u6e90\u3002\u800c\u4e14\u6211\u4eec\u901a\u8fc7\u975e\u4fb5\u5165\u5f0f\u7684\u65b9\u5f0f\u6269\u5c55\u4e86 Kubernetes Scheduler Framework\uff0c\n\u652f\u6301\u9884\u7559\u7cbe\u7ec6\u5316\u8d44\u6e90\uff0c\u5373\u53ef\u4ee5\u9884\u7559 CPU \u6838\u548c GPU \u8bbe\u5907\u7b49\u3002\u6211\u4eec\u4e5f\u4fee\u6539\u4e86 Reservation \u53ef\u4ee5\u88ab\u91cd\u590d\u4f7f\u7528\u7684\u9ed8\u8ba4\u884c\u4e3a\uff0c\u6539\u4e3a AllocateOnce\uff0c\n\u5373 Reservation \u4e00\u65e6\u88ab\u67d0\u4e2a Pod \u4f7f\u7528\uff0c\u8be5 Reservation \u4f1a\u88ab\u5e9f\u5f03\u3002\u8fd9\u6837\u7684\u6539\u52a8\u662f\u8003\u8651\u5230\uff0cAllocateOnce \u66f4\u80fd\u8986\u76d6\u5927\u90e8\u5206\u573a\u666f\uff0c\u8fd9\u6837\u4f5c\u4e3a\u9ed8\u8ba4\u884c\u4e3a\uff0c\u5927\u5bb6\u5728\u4f7f\u7528\u65f6\u4f1a\u66f4\u7b80\u5355\u3002"),(0,a.kt)("h3",{id:"\u652f\u6301amd\u73af\u5883\u4e0b\u7684l3-cache\u548c\u5185\u5b58\u5e26\u5bbd\u9694\u79bb"},"\u652f\u6301AMD\u73af\u5883\u4e0b\u7684L3 Cache\u548c\u5185\u5b58\u5e26\u5bbd\u9694\u79bb"),(0,a.kt)("p",null,"\u5728v0.3.0\u7248\u672c\u4e2d\uff0cKoordiantor\u5df2\u7ecf\u652f\u6301\u4e86Intel\u73af\u5883\u7684L3 Cache\u548c\u5185\u5b58\u5e26\u5bbd\u9694\u79bb\uff0c\u5728\u6700\u65b0\u76841.2.0\u7248\u672c\u4e2d\u6211\u4eec\u65b0\u589e\u4e86\u5bf9AMD\u73af\u5883\u7684\u652f\u6301\u3002\nLinux\u5185\u6838L3 Cache\u548c\u5185\u5b58\u5e26\u5bbd\u9694\u79bb\u80fd\u529b\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684resctrl\u63a5\u53e3\uff0c\u540c\u65f6\u652f\u6301Intel\u548cAMD\u73af\u5883\uff0c\u4e3b\u8981\u533a\u522b\u5728\u4e8e\uff0cIntel\u63d0\u4f9b\u7684\u5185\u5b58\u5e26\u5bbd\u9694\u79bb\u63a5\u53e3\u4e3a\u767e\u5206\u6bd4\u683c\u5f0f\uff0c\n\u800cAMD\u63d0\u4f9b\u7684\u5185\u5b58\u5e26\u5bbd\u9694\u79bb\u63a5\u53e3\u4e3a\u7edd\u5bf9\u503c\u683c\u5f0f\uff0c\u5177\u4f53\u5982\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Intel Format\n# resctrl schema\nL3:0=3ff;1=3ff\nMB:0=100;1=100\n\n# AMD Format\n# resctrl schema\nL3:0=ffff;1=ffff;2=ffff;3=ffff;4=ffff;5=ffff;6=ffff;7=ffff;8=ffff;9=ffff;10=ffff;11=ffff;12=ffff;13=ffff;14=ffff;15=ffff\nMB:0=2048;1=2048;2=2048;3=2048;4=2048;5=2048;6=2048;7=2048;8=2048;9=2048;10=2048;11=2048;12=2048;13=2048;14=2048;15=2048\n")),(0,a.kt)("p",null,"\u63a5\u53e3\u683c\u5f0f\u5305\u542b\u4e24\u90e8\u5206\uff0cL3\u8868\u793a\u5bf9\u5e94\u7684socket\u6216CCD\u53ef\u7528\u7684\u201c\u8def\u6570\u201d\uff08way\uff09\uff0c\u4ee516\u8fdb\u5236\u7684\u6570\u636e\u683c\u5f0f\u8868\u793a\uff0c\u6bcf\u4e2a\u6bd4\u7279\u4f4d\u8868\u793a\u4e00\u8def\nMB\u8868\u793a\u5bf9\u5e94\u7684socket\u6216CCD\u53ef\u4ee5\u4f7f\u7528\u7684\u5185\u5b58\u5e26\u5bbd\u8303\u56f4\uff0cIntel\u53ef\u9009\u8303\u56f4\u4e3a0~100\u7684\u767e\u5206\u6bd4\u683c\u5f0f\uff0cAMD\u5bf9\u5e94\u7684\u4e3a\u7edd\u5bf9\u503c\u683c\u5f0f\uff0c\u5355\u4f4d\u4e3aGb/s\uff0c2048\u8868\u793a\u4e0d\u9650\u5236\u3002\nKoordiantor\u7edf\u4e00\u63d0\u4f9b\u4e86\u767e\u5206\u6bd4\u683c\u5f0f\u7684\u63a5\u53e3\uff0c\u5e76\u81ea\u52a8\u611f\u77e5\u8282\u70b9\u73af\u5883\u662f\u5426\u4e3aAMD\uff0c\u51b3\u5b9aresctrl\u63a5\u53e3\u4e2d\u586b\u5199\u7684\u683c\u5f0f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: slo-controller-config\n  namespace: koordinator-system\ndata:\n  resource-qos-config: |-\n    {\n      "clusterStrategy": {\n        "lsClass": {\n           "resctrlQOS": {\n             "enable": true,\n             "catRangeStartPercent": 0,\n             "catRangeEndPercent": 100,\n             "MBAPercent": 100\n           }\n         },\n        "beClass": {\n           "resctrlQOS": {\n             "enable": true,\n             "catRangeStartPercent": 0,\n             "catRangeEndPercent": 30,\n             "MBAPercent": 100\n           }\n         }\n      }\n    }\n')),(0,a.kt)("h3",{id:"\u5176\u4ed6\u529f\u80fd"},"\u5176\u4ed6\u529f\u80fd"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/releases/tag/v1.2.0"},"v1.2 release")," \u9875\u9762\uff0c\u53ef\u4ee5\u770b\u5230\u66f4\u591a\u7248\u672c\u6240\u5305\u542b\u7684\u65b0\u589e\u529f\u80fd\u3002"),(0,a.kt)("h2",{id:"\u672a\u6765\u8ba1\u5212"},"\u672a\u6765\u8ba1\u5212"),(0,a.kt)("p",null,"\u5728\u63a5\u4e0b\u6765\u7684\u7248\u672c\u4e2d\uff0cKoordiantor\u91cd\u70b9\u89c4\u5212\u4e86\u4ee5\u4e0b\u529f\u80fd\uff0c\u5177\u4f53\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u786c\u4ef6\u62d3\u6251\u611f\u77e5\u8c03\u5ea6\uff0c\u7efc\u5408\u8003\u8651\u8282\u70b9CPU\u3001\u5185\u5b58\u3001GPU\u7b49\u591a\u4e2a\u8d44\u6e90\u7ef4\u5ea6\u7684\u62d3\u6251\u5173\u7cfb\uff0c\u5728\u96c6\u7fa4\u8303\u56f4\u5185\u8fdb\u884c\u8c03\u5ea6\u4f18\u5316\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u91cd\u8c03\u5ea6\u5668\u7684\u53ef\u89c2\u6d4b\u6027\u548c\u53ef\u8ffd\u6eaf\u6027\u8fdb\u884c\u589e\u5f3a\u3002"),(0,a.kt)("li",{parentName:"ul"},"GPU\u8d44\u6e90\u8c03\u5ea6\u80fd\u529b\u7684\u589e\u5f3a\u3002")),(0,a.kt)("p",null,"Koordinator \u662f\u4e00\u4e2a\u5f00\u653e\u7684\u793e\u533a\uff0c\u975e\u5e38\u6b22\u8fce\u5e7f\u5927\u4e91\u539f\u751f\u7231\u597d\u8005\u4eec\u901a\u8fc7\u5404\u79cd\u65b9\u5f0f\u4e00\u8d77\u53c2\u4e0e\u5171\u5efa\uff0c\u65e0\u8bba\u60a8\u5728\u4e91\u539f\u751f\u9886\u57df\u662f\u521d\u5b66\u4e4d\u7ec3\u8fd8\u662f\u9a7e\u8f7b\u5c31\u719f\uff0c\u6211\u4eec\u90fd\u975e\u5e38\u671f\u5f85\u542c\u5230\u60a8\u7684\u58f0\u97f3\uff01"))}f.isMDXComponent=!0}}]);