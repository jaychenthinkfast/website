"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[2370],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=o,p=m["".concat(l,".").concat(h)]||m[h]||d[h]||a;return n?r.createElement(p,i(i({ref:t},u),{},{components:n})):r.createElement(p,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2009:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},l="SLO \u914d\u7f6e",c={unversionedId:"user-manuals/slo-config",id:"version-v1.3/user-manuals/slo-config",title:"SLO \u914d\u7f6e",description:"\u7b80\u4ecb",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v1.3/user-manuals/slo-config.md",sourceDirName:"user-manuals",slug:"/user-manuals/slo-config",permalink:"/zh-Hans/docs/user-manuals/slo-config",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/slo-config.md",tags:[],version:"v1.3",lastUpdatedBy:"saintube",lastUpdatedAt:1692186595,formattedLastUpdatedAt:"2023/8/16",frontMatter:{},sidebar:"docs",previous:{title:"Multi Hierarchy Elastic Quota Management",permalink:"/zh-Hans/docs/user-manuals/multi-hierarchy-elastic-quota-management"},next:{title:"CPU Suppress",permalink:"/zh-Hans/docs/user-manuals/cpu-suppress"}},u={},d=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u914d\u7f6e\u5c42\u7ea7",id:"\u914d\u7f6e\u5c42\u7ea7",level:3},{value:"NodeSLO",id:"nodeslo",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2}],m={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"slo-\u914d\u7f6e"},"SLO \u914d\u7f6e"),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"Koordinator \u4f7f\u7528\u4e00\u4e2a ConfigMap \u7ba1\u7406 SLO \u914d\u7f6e\u3002\u8be5 ConfigMap \u88ab slo-controller \u6240\u4f7f\u7528\uff0c\u5b83\u7684\u540d\u5b57\u548c\u547d\u540d\u7a7a\u95f4\u53ef\u4ee5\u5728 koord-manager \u7684\u542f\n\u52a8\u53c2\u6570\u4e2d\u6307\u5b9a\uff08\u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"koordinator-system/slo-controller-config"),"\uff09\u3002\u5b83\u5206\u522b\u5305\u542b\u4e86\u4ee5\u4e0b\u952e\u503c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"colocation-config"),"\uff1a\u6df7\u90e8\u914d\u7f6e\u3002\u4f8b\u5982\uff0c\u662f\u5426\u5f00\u542f\u6df7\u90e8 Batch \u8d44\u6e90\uff0c\u6df7\u90e8\u6c34\u4f4d\u7ebf\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resource-threshold-config"),"\uff1a\u57fa\u4e8e\u9608\u503c\u7684\u538b\u5236/\u9a71\u9010\u7b56\u7565\u7684\u914d\u7f6e\u3002\u4f8b\u5982\uff0cCPU \u538b\u5236\u7684\u9608\u503c\uff0c\u5185\u5b58\u9a71\u9010\u7684\u9608\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resource-qos-config"),"\uff1aQoS \u7279\u6027\u7684\u914d\u7f6e\u3002\u4f8b\u5982\uff0cBE pods \u7684 Group Identity\uff0cLS pods \u7684\u5185\u5b58 QoS\uff0cBE pods \u7684\u672b\u7ea7\u7f13\u5b58\u5212\u5206\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cpu-burst-config"),"\uff1aCPU Burst \u7279\u6027\u7684\u914d\u7f6e\u3002\u4f8b\u5982\uff0cpod \u7684\u6700\u5927 burst \u6bd4\u4f8b\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"system-config"),"\uff1a\u7cfb\u7edf\u8bbe\u5b9a\u7684\u914d\u7f6e\u3002\u4f8b\u5982\uff0c\u5168\u5c40\u5185\u5b58\u6700\u4f4e\u6c34\u4f4d\u7ebf\u7cfb\u6570 ",(0,a.kt)("inlineCode",{parentName:"li"},"min_free_kbytes"),"\u3002")),(0,a.kt)("h3",{id:"\u914d\u7f6e\u5c42\u7ea7"},"\u914d\u7f6e\u5c42\u7ea7"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u914d\u7f6e\u5b9a\u4e49\u4e3a\u96c6\u7fa4\u7ea7\u522b\u548c\u8282\u70b9\u7ea7\u522b\u7684\u5f62\u5f0f\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type ColocationCfg struct {\nColocationStrategy `json:",inline"`\nNodeConfigs        []NodeColocationCfg `json:"nodeConfigs,omitempty"`\n}\n\ntype ResourceQOSCfg struct {\nClusterStrategy *slov1alpha1.ResourceQOSStrategy `json:"clusterStrategy,omitempty"`\nNodeStrategies  []NodeResourceQOSStrategy        `json:"nodeStrategies,omitempty"`\n}\n')),(0,a.kt)("p",null,"\u96c6\u7fa4\u7ea7\u522b\u914d\u7f6e\u7528\u4e8e\u8bbe\u7f6e\u5168\u5c40\u914d\u7f6e\uff0c\u800c\u8282\u70b9\u7ea7\u522b\u5219\u4f9b\u7528\u6237\u8c03\u6574\u90e8\u5206\u8282\u70b9\u7684\u914d\u7f6e\uff0c\u7279\u522b\u662f\u7070\u5ea6\u90e8\u7f72\u7684\u60c5\u51b5\u3002"),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5927\u90e8\u5206\u53ef\u914d\u7f6e\u7684\u5b57\u6bb5\u90fd\u5728\u7ec4\u4ef6\u5185\u90e8\uff08koordlet\u3001koord-manager\uff09\u6709\u9ed8\u8ba4\u503c\uff0c\u6240\u4ee5\u901a\u5e38\u4ec5\u9700\u8981\u7f16\u8f91\u53d8\u66f4\u7684\u53c2\u6570\u3002"),(0,a.kt)("h3",{id:"nodeslo"},"NodeSLO"),(0,a.kt)("p",null,"SLO \u914d\u7f6e\u7684 data \u5b57\u6bb5\u4f1a\u88ab koord-manager \u89e3\u6790\u3002Koord-manager \u4f1a\u68c0\u67e5\u914d\u7f6e\u6570\u636e\u662f\u5426\u5408\u6cd5\uff0c\u7136\u540e\u7528\u89e3\u6790\u540e\u7684\u914d\u7f6e\u66f4\u65b0\u5230\u6bcf\u4e2a\u8282\u70b9\u7684 NodeSLO \u5bf9\u8c61\u4e2d\u3002\n\u5982\u679c\u89e3\u6790\u5931\u8d25\uff0ckoord-manager \u4f1a\u5728 ConfigMap \u5bf9\u8c61\u4e0a\u8bb0\u5f55 Events\uff0c\u4ee5\u8b66\u793a unmarshal \u9519\u8bef\u3002\u5bf9\u4e8e agent \u7ec4\u4ef6 koordlet\uff0c\u5b83\u4f1a watch NodeSLO\n\u7684 Spec\uff0c\u5e76\u5bf9\u8282\u70b9\u7684 QoS \u7279\u6027\u8fdb\u884c\u8c03\u8c10\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: slo.koordinator.sh/v1alpha1\nkind: NodeSLO\nmetadata:\n  name: test-node\nspec:\n  cpuBurstStrategy: {}\n  extensions: {}\n  resourceQOSStrategy: {}\n  systemStrategy: {}\n  # parsed from the `resource-threshold-config` data\n  resourceUsedThresholdWithBE:\n    cpuSuppressPolicy: cpuset\n    cpuSuppressThresholdPercent: 65\n    enable: true\n    memoryEvictThresholdPercent: 70\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\u7248\u672c\uff1aKoordinator v1.2")),(0,a.kt)("p",null,"SLO \u914d\u7f6e\u7684\u6a21\u677f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: slo-controller-config\n  namespace: koordinator-system\ndata:\n  # colocation-config is the configuration for colocation.\n  # Related features: Dynamic resource over-commitment, Load-aware scheduling, Load-aware descheduling.\n  # - enable: whether to enable the colocation. If false, the reclaimed resources of the node allocatable (e.g. `kubernetes.io/batch-cpu`) will be removed.\n  # - metricAggregateDurationSeconds: the aggregated duration of node metrics reporting.\n  # - metricReportIntervalSeconds: the reporting interval of the node metrics.\n  # - metricAggregatePolicy: policies of reporting node metrics in different durations.\n  # - cpuReclaimThresholdPercent: the reclaim threshold for calculating the reclaimed cpu resource. Basically, the reclaimed resource cannot reclaim the unused resources which are exceeding the threshold.\n  # - memoryReclaimThresholdPercent: the reclaim threshold for calculating the reclaimed memory resource. Basically, the reclaimed resource cannot reclaim the unused resources which are exceeding the threshold.\n  # - memoryCalculatePolicy: the policy for calculating the reclaimable memory resource. If set to `request`, only unallocated memory resource of high-priority pods are reclaimable, and no allocated memory can be reclaimed.\n  # - degradeTimeMinutes: the threshold duration to degrade the colocation for which the node metrics has not been updated.\n  # - updateTimeThresholdSeconds: the threshold duration to force updating the reclaimed resources with the latest calculated result.\n  # - resourceDiffThreshold: the threshold to update the reclaimed resources than which the calculated reclaimed resources is different from the current.\n  # - nodeConfigs: the node-level configurations which matches the nodes via the node selector and overrides the cluster configuration.\n  colocation-config: |\n    {\n      "enable": false,\n      "metricAggregateDurationSeconds": 300,\n      "metricReportIntervalSeconds": 60,\n      "metricAggregatePolicy": {\n        "durations": [\n          "5m",\n          "10m",\n          "15m"\n        ]\n      },\n      "cpuReclaimThresholdPercent": 60,\n      "memoryReclaimThresholdPercent": 65,\n      "memoryCalculatePolicy": "usage",\n      "degradeTimeMinutes": 15,\n      "updateTimeThresholdSeconds": 300,\n      "resourceDiffThreshold": 0.1,\n      "nodeConfigs": [\n        {\n          "name": "anolis",\n          "nodeSelector": {\n            "matchLabels": {\n              "kubernetes.io/kernel": "anolis"\n            }\n          },\n          "updateTimeThresholdSeconds": 360,\n          "resourceDiffThreshold": 0.2\n        }\n      ]\n    }\n  # The configuration for threshold-based strategies.\n  # Related features: BECPUSuppress, BEMemoryEvict, BECPUEvict.\n  # - clusterStrategy: the cluster-level configuration.\n  # - nodeStrategies: the node-level configurations which matches the nodes via the node selector and overrides the cluster configuration.\n  # - enable: whether to enable the threshold-based strategies or not. If false, all threshold-based strategies are disabled. If set to true, CPU Suppress and Memory Evict are enabled by default.\n  # - cpuSuppressThresholdPercent: the node cpu utilization threshold to suppress BE pods\' usage.\n  # - cpuSuppressPolicy: the policy of cpu suppression. If set to `cpuset`, the BE pods\' `cpuset.cpus` will be reconciled when suppression. If set to `cfsQuota`, the BE pods\' `cpu.cfs_quota_us` will be reconciled.\n  # - memoryEvictThresholdPercent: the node memory utilization threshold to evict BE pods.\n  # - memoryEvictLowerPercent: the node memory utilization threshold to stop the memory eviction. By default, `lowerPercent = thresholdPercent - 2`.\n  # - cpuEvictBESatisfactionLowerPercent: the cpu satisfaction threshold to start the cpu eviction (also require to meet the BE util threshold).\n  # - cpuEvictBEUsageThresholdPercent: the BE utilization (BEUsage / BERealLimit) threshold to start the cpu eviction (also require to meet the cpu satisfaction threshold).\n  # - cpuEvictBESatisfactionUpperPercent: the cpu satisfaction threshold to stop the cpu eviction.\n  # - cpuEvictTimeWindowSeconds: the time window of the cpu metrics for the cpu eviction.\n  resource-threshold-config: |\n    {\n      "clusterStrategy": {\n        "enable": false,\n        "cpuSuppressThresholdPercent": 65,\n        "cpuSuppressPolicy": "cpuset",\n        "memoryEvictThresholdPercent": 70,\n        "memoryEvictLowerPercent": 65,\n        "cpuEvictBESatisfactionUpperPercent": 90,\n        "cpuEvictBESatisfactionLowerPercent": 60,\n        "cpuEvictBEUsageThresholdPercent": 90\n      },\n      "nodeStrategies": [\n        {\n          "name": "anolis",\n          "nodeSelector": {\n            "matchLabels": {\n              "kubernetes.io/kernel": "anolis"\n            }\n          },\n          "cpuEvictBEUsageThresholdPercent": 80\n        }\n      ]\n    }\n  # The configuration for QoS-based features.\n  # Related features: CPUQoS (GroupIdentity), MemoryQoS (CgroupReconcile), ResctrlQoS.\n  # - clusterStrategy: the cluster-level configuration.\n  # - nodeStrategies: the node-level configurations which matches the nodes via the node selector and overrides the cluster configuration.\n  # - lsrClass/lsClass/beClass: the configuration for pods of QoS LSR/LS/BE respectively. \n  # - cpuQOS: the configuration of CPU QoS.\n  #   - enable: whether to enable CPU QoS. If set to `false`, the related cgroup configs will be reset to the system default.\n  #   - groupIdentity: the priority level of the Group Identity ([-1, 2]). `2` means the highest priority, while `-1` means the lowest priority. Anolis OS required.\n  # - memoryQOS: the configuration of Memory QoS.\n  #   - enable: whether to enable Memory QoS. If set to `false`, the related cgroup configs will be reset to the system default.\n  #   - minLimitPercent: the scale percentage for setting the `memory.min` based on the container\'s request. It enables the memory protection from the Linux memory reclaim.\n  #   - lowLimitPercent: the scale percentage for setting the `memory.low` based on the container\'s request. It enables the memory soft protection from the Linux memory reclaim.\n  #   - throttlingPercent: the scale percentage for setting the `memory.high` based on the container\'s limit. It enables the memory throttling in cgroup level.\n  #   - wmarkRatio: the ratio of container-level asynchronous memory reclaim based on the container\'s limit. Anolis OS required.\n  #   - wmarkScalePermill: the per-mill of container memory to reclaim in once asynchronous memory reclaim. Anolis OS required.\n  #   - wmarkMinAdj: the adjustment percentage of global memory min watermark. It affects the reclaim priority when the node memory free is quite a few. Anolis OS required.\n  # - resctrlQOS: the configuration of Resctrl (Intel RDT) QoS.\n  #   - enable: whether to enable Resctrl QoS.\n  #   - catRangeStartPercent: the starting percentage of the L3 Cache way partitioning. L3 CAT required.\n  #   - catRangeEndPercent: the ending percentage of the L3 Cache way partitioning. L3 CAT required.\n  #   - mbaPercent: the allocation percentage of the memory bandwidth. MBA required.\n  resource-qos-config: |\n    {\n      "clusterStrategy": {\n        "lsrClass": {\n          "cpuQOS": {\n            "enable": false,\n            "groupIdentity": 2\n          },\n          "memoryQOS": {\n            "enable": false,\n            "minLimitPercent": 0,\n            "lowLimitPercent": 0,\n            "throttlingPercent": 0,\n            "wmarkRatio": 95,\n            "wmarkScalePermill": 20,\n            "wmarkMinAdj": -25,\n            "priorityEnable": 0,\n            "priority": 0,\n            "oomKillGroup": 0\n          },\n          "resctrlQOS": {\n            "enable": false,\n            "catRangeStartPercent": 0,\n            "catRangeEndPercent": 100,\n            "mbaPercent": 100\n          }\n        },\n        "lsClass": {\n          "cpuQOS": {\n            "enable": false,\n            "groupIdentity": 2\n          },\n          "memoryQOS": {\n            "enable": false,\n            "minLimitPercent": 0,\n            "lowLimitPercent": 0,\n            "throttlingPercent": 0,\n            "wmarkRatio": 95,\n            "wmarkScalePermill": 20,\n            "wmarkMinAdj": -25,\n            "priorityEnable": 0,\n            "priority": 0,\n            "oomKillGroup": 0\n          },\n          "resctrlQOS": {\n            "enable": false,\n            "catRangeStartPercent": 0,\n            "catRangeEndPercent": 100,\n            "mbaPercent": 100\n          }\n        },\n        "beClass": {\n          "cpuQOS": {\n            "enable": false,\n            "groupIdentity": -1\n          },\n          "memoryQOS": {\n            "enable": false,\n            "minLimitPercent": 0,\n            "lowLimitPercent": 0,\n            "throttlingPercent": 0,\n            "wmarkRatio": 95,\n            "wmarkScalePermill": 20,\n            "wmarkMinAdj": 50,\n            "priorityEnable": 0,\n            "priority": 0,\n            "oomKillGroup": 0\n          },\n          "resctrlQOS": {\n            "enable": false,\n            "catRangeStartPercent": 0,\n            "catRangeEndPercent": 30,\n            "mbaPercent": 100\n          }\n        }\n      },\n      "nodeStrategies": [\n        {\n          "name": "anolis",\n          "nodeSelector": {\n            "matchLabels": {\n              "kubernetes.io/kernel": "anolis"\n            }\n          },\n          "beClass": {\n            "memoryQOS": {\n              "wmarkRatio": 90\n            }\n          }\n        }\n      ]\n    }\n  # The configuration for the CPU Burst.\n  # Related features: CPUBurst.\n  # - clusterStrategy: the cluster-level configuration.\n  # - nodeStrategies: the node-level configurations which matches the nodes via the node selector and overrides the cluster configuration.\n  # - policy: the policy of CPU Burst. If set to `none`, the CPU Burst is disabled. If set to `auto`, the CPU Burst is fully enabled. If set to `cpuBurstOnly`, only the Linux CFS Burst feature is enabled.\n  # - cpuBurstPercent: the percentage of Linux CFS Burst. It affects the value of `cpu.cfs_burst_us` of pod/container cgroups. It specifies the percentage to which the CPU limit can be increased by CPU Burst.\n  # - cfsQuotaBurstPercent: the percentage of cfs quota burst. It affects the scaled ratio of `cpu.cfs_quota_us` of pod/container cgroups. It specifies the maximum percentage to which the value of cfs_quota in the cgroup parameters can be increased.\n  # - cfsQuotaBurstPeriodSeconds: the maximum period of once cfs quota burst. It indicates that the time period in which the container can run with an increased CFS quota is unlimited.\n  # - sharePoolThresholdPercent: the threshold of share pool utilization. If the share pool utilization is too high, CPU Burst will be stopped and reset to avoid machine overload.\n  cpu-burst-config: |\n    {\n      "clusterStrategy": {\n        "policy": "none",\n        "cpuBurstPercent": 1000,\n        "cfsQuotaBurstPercent": 300,\n        "cfsQuotaBurstPeriodSeconds": -1,\n        "sharePoolThresholdPercent": 50\n      },\n      "nodeStrategies": [\n        {\n          "name": "anolis",\n          "nodeSelector": {\n            "matchLabels": {\n              "kubernetes.io/kernel": "anolis"\n            }\n          },\n          "policy": "cfsQuotaBurstOnly",\n          "cfsQuotaBurstPercent": 400\n        }\n      ]\n    }\n  # The configuration for system-level settings.\n  # Related features: SystemConfig.\n  # - clusterStrategy: the cluster-level configuration.\n  # - nodeStrategies: the node-level configurations which matches the nodes via the node selector and overrides the cluster configuration.\n  # - minFreeKbytesFactor: the factor for calculating the global minimum memory free watermark `/proc/sys/vm/min_free_kbytes`. `min_free_kbytes = minFreeKbytesFactor * nodeTotalMemory / 10000`.\n  # - watermarkScaleFactor: the reclaim factor `/proc/sys/vm/watermark_scale_factor` in once global memory reclaim.\n  # - memcgReapBackGround: whether to enable the reaper for orphan memory cgroups.\n  system-config: |-\n    {\n      "clusterStrategy": {\n        "minFreeKbytesFactor": 100,\n        "watermarkScaleFactor": 150,\n        "memcgReapBackGround": 0\n      }\n      "nodeStrategies": [\n        {\n          "name": "anolis",\n          "nodeSelector": {\n            "matchLabels": {\n              "kubernetes.io/kernel": "anolis"\n            }\n          },\n          "minFreeKbytesFactor": 100,\n          "watermarkScaleFactor": 150\n        }\n      ]\n    }\n')),(0,a.kt)("p",null,"\u5bf9\u4e8e\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b\u76f8\u5173\u7279\u6027\u7684\u7528\u6237\u624b\u518c\u548c\u8bbe\u8ba1\u6587\u6863\u3002"),(0,a.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ConfigMap ",(0,a.kt)("inlineCode",{parentName:"li"},"koordinator-system/slo-controller-config")," \u68c0\u67e5\u5f53\u524d\u7684 SLO \u914d\u7f6e\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get configmap -n koordinator-system slo-controller-config -o yaml\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  annotations:\n    meta.helm.sh/release-name: koordinator\n    meta.helm.sh/release-namespace: default\n  labels:\n    app.kubernetes.io/managed-by: Helm\n  name: slo-controller-config\n  namespace: koordinator-system\ndata:\n  colocation-config: |\n    {\n      "enable": false,\n      "metricAggregateDurationSeconds": 300,\n      "metricReportIntervalSeconds": 60,\n      "cpuReclaimThresholdPercent": 60,\n      "memoryReclaimThresholdPercent": 65,\n      "memoryCalculatePolicy": "usage",\n      "degradeTimeMinutes": 15,\n      "updateTimeThresholdSeconds": 300,\n      "resourceDiffThreshold": 0.1\n    }\n  resource-threshold-config: |\n    {\n      "clusterStrategy": {\n        "enable": false\n      }\n    }\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u7f16\u8f91 ConfigMap ",(0,a.kt)("inlineCode",{parentName:"li"},"koordinator-system/slo-controller-config")," \u6765\u4fee\u6539 SLO \u914d\u7f6e\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl edit configmap -n koordinator-system slo-controller-config\n")),(0,a.kt)("p",null,"\u4f8b\u5982\uff0cConfigMap \u7f16\u8f91\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'data:\n  # ...\n  resource-threshold-config: |\n    {\n      "clusterStrategy": {\n        "enable": true,\n        "cpuSuppressThresholdPercent": 60,\n        "cpuSuppressPolicy": "cpuset",\n        "memoryEvictThresholdPercent": 60\n      }\n    }\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u786e\u8ba4 NodeSLO \u662f\u5426\u6210\u529f\u4e0b\u53d1\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u9ed8\u8ba4\u503c\u4f1a\u5728 NodeSLO \u4e2d\u7701\u7565\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodeslo.slo.koordinator.sh test-node -o yaml\napiVersion: slo.koordinator.sh/v1alpha1\nkind: NodeSLO\nmetadata:\n  name: test-node\nspec:\n  # ...\n  extensions: {}\n  resourceUsedThresholdWithBE:\n    cpuSuppressPolicy: cpuset\n    cpuSuppressThresholdPercent: 60\n    enable: true\n    memoryEvictThresholdPercent: 60\n")))}h.isMDXComponent=!0}}]);