"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[6508],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return p}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(o),p=n,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||i;return o?r.createElement(m,a(a({ref:t},c),{},{components:o})):r.createElement(m,a({ref:t},c))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var d=2;d<i;d++)a[d]=o[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},8363:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var r=o(7462),n=o(3366),i=(o(7294),o(3905)),a=["components"],s={},l="Load-aware Scheduling",d={unversionedId:"designs/load-aware-scheduling",id:"version-v1.2/designs/load-aware-scheduling",title:"Load-aware Scheduling",description:"Summary",source:"@site/versioned_docs/version-v1.2/designs/load-aware-scheduling.md",sourceDirName:"designs",slug:"/designs/load-aware-scheduling",permalink:"/docs/v1.2/designs/load-aware-scheduling",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/designs/load-aware-scheduling.md",tags:[],version:"v1.2",lastUpdatedBy:"zwzhang",lastUpdatedAt:1680861757,formattedLastUpdatedAt:"4/7/2023",frontMatter:{},sidebar:"docs",previous:{title:"Enhanced Scheduler Extension",permalink:"/docs/v1.2/designs/enhanced-scheduler-extension"},next:{title:"Fine-grained CPU orchestration",permalink:"/docs/v1.2/designs/fine-grained-cpu-orchestration"}},c={},u=[{value:"Summary",id:"summary",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Goals",id:"goals",level:3},{value:"Non-Goals/Future Work",id:"non-goalsfuture-work",level:3},{value:"User stories",id:"user-stories",level:2},{value:"Story 1",id:"story-1",level:3},{value:"Story 2",id:"story-2",level:3},{value:"Story 3",id:"story-3",level:3},{value:"Story 4",id:"story-4",level:3},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Filter unhealthy nodes",id:"filter-unhealthy-nodes",level:3},{value:"Score algorithm",id:"score-algorithm",level:3},{value:"Plugin configuration",id:"plugin-configuration",level:3},{value:"Custom NodeMetric update Period",id:"custom-nodemetric-update-period",level:3},{value:"Custom node usage thresholds",id:"custom-node-usage-thresholds",level:3}],h={toc:u};function p(e){var t=e.components,s=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"load-aware-scheduling"},"Load-aware Scheduling"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Although Koordinator provides the co-location mechanism to improve the resource utilization of the cluster and reduce costs, it does not yet have the ability to control the utilization level of the cluster dimension. This proposal defines a scheduling plugin to help Koordinator achieve this capability."),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"Koordinator oversells some resources through the co-location mechanism. Although it can improve the utilization of nodes, Best Effort workloads may also interfere with latency-sensitive applications. "),(0,i.kt)("h3",{id:"goals"},"Goals"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Provides a configurable scheduling plugin to help control cluster resource utilization."),(0,i.kt)("li",{parentName:"ol"},"Utilization control mechanism that supports multiple resources."),(0,i.kt)("li",{parentName:"ol"},"Control resource utilization at a safe threshold.")),(0,i.kt)("h3",{id:"non-goalsfuture-work"},"Non-Goals/Future Work"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Help the plugin to achieve more reasonable estimates and better results through application profiles. This is left as a follow-up work that will be done under a different proposal.")),(0,i.kt)("h2",{id:"user-stories"},"User stories"),(0,i.kt)("h3",{id:"story-1"},"Story 1"),(0,i.kt)("p",null,"When the resource utilization of the node has reached a high threshold, serious resource contention will occur between the running workloads on the node. For example, best effort workloads are frequently suppressed due to higher-priority applications requiring resources. As a result, best effort workloads are timed out or even forced to end; or a latency-sensitive application will suffer severe performance degradation under high utilization, failing to meet external SLAs. This should be avoided."),(0,i.kt)("h3",{id:"story-2"},"Story 2"),(0,i.kt)("p",null,"Workloads in a co-located cluster have different resource requirements. Typical CPU-bound workloads expect to use more CPU, while other types of workloads may use more memory. It is possible that the utilization of CPU resources is relatively high, while the utilization of memory resources is relatively low. In this scenario, the unbalanced utilization of resources will affect the effect of scheduling, and may even lead to the problem that resources are idle but Pods cannot be scheduled."),(0,i.kt)("h3",{id:"story-3"},"Story 3"),(0,i.kt)("p",null,"Koordinator defines NodeMetric CRD to describe the resource usage of nodes and is regularly updated by koordlet. However, if there are many Pods scheduled to cold nodes (that is, nodes with low resource utilization) during the update cycle, when these Pods start running, the resource utilization of these nodes may exceed the expected threshold. As a result, the runtime quality of these pods is not as good as expected."),(0,i.kt)("h3",{id:"story-4"},"Story 4"),(0,i.kt)("p",null,"The koordlet may not be able to report the latest resource usage due to node exception. Such nodes should be avoided during scheduling to prevent unexpected exceptions."),(0,i.kt)("h2",{id:"implementation-details"},"Implementation Details"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"image",src:o(2503).Z,width:"611",height:"466"})),(0,i.kt)("p",null,"The scheduling plugin filters abnormal nodes and scores them according to resource usage. This scheduling plugin extends the Filter/Score/Reserve/Unreserve extension points defined in the Kubernetes scheduling framework."),(0,i.kt)("h3",{id:"filter-unhealthy-nodes"},"Filter unhealthy nodes"),(0,i.kt)("p",null,"By default, abnormal nodes are filtered, and users can decide whether to enable or not by configuring as needed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Filter nodes where koordlet fails to update NodeMetric. If the configuration enables, the plugin will exclude nodes with ",(0,i.kt)("em",{parentName:"p"},"nodeMetrics.status.updateTime >= LoadAwareSchedulingArgs.nodeMetricExpirationSeconds"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Filter nodes by utilization thresholds. If the configuration enables, the plugin will exclude nodes with ",(0,i.kt)("em",{parentName:"p"},"latestUsageUtilization >= utilizationThreshold"),". In the filtering phase, only the resource utilization is obtained from the latest NodeMetric, and the resource usage of the allocated but not yet counted Pods does not participate in the calculation, so as to allocate resources to the newly created Pods and avoid scheduling failure due to unreasonable estimates."))),(0,i.kt)("h3",{id:"score-algorithm"},"Score algorithm"),(0,i.kt)("p",null,"The core logic of the scoring algorithm is to select the node with the smallest resource usage. However, considering the delay of resource usage reporting and the delay of Pod startup time, the resource requests of the Pods that have been scheduled and the Pods currently being scheduled within the time window will also be estimated, and the estimated values will be involved in the calculation."),(0,i.kt)("h3",{id:"plugin-configuration"},"Plugin configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'\ntype LoadAwareSchedulingArgs struct {\n  metav1.TypeMeta\n\n  FilterExpiredNodeMetrics    *bool                          `json:"filterExpiredNodeMetrics,omitempty"`\n  NodeMetricExpirationSeconds *int64                         `json:"nodeMetricExpirationSeconds,omitempty"`\n  ResourceWeights             map[corev1.ResourceName]int64 `json:"resourceWeights,omitempty"`\n  UsageThresholds             map[corev1.ResourceName]int64 `json:"usageThresholds,omitempty"`\n  EstimatedScalingFactors     map[corev1.ResourceName]int64 `json:"estimatedScalingFactors,omitempty"`\n}\n\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FilterExpiredNodeMetrics")," indicates whether to filter nodes where koordlet fails to update NodeMetric."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NodeMetricExpirationSeconds")," indicates the NodeMetric expiration in seconds. When NodeMetrics expired, the node is considered abnormal.Default is 180 seconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ResourceWeights")," indicates the weights of resources. The weights of CPU and Memory are both 1 by default."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UsageThresholds")," indicates the resource utilization threshold, the default for CPU is 65%, and the default for memory is 95%. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EstimatedScalingFactors")," indicates the factor when estimating resource usage. The default value of CPU is 85%, and the default value of Memory is 70%.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FilterExpiredNodeMetrics")," controls the filter behavior, if it is false, ",(0,i.kt)("inlineCode",{parentName:"p"},"NodeMetricExpirationSeconds")," can still be used when scoring."),(0,i.kt)("h3",{id:"custom-nodemetric-update-period"},"Custom NodeMetric update Period"),(0,i.kt)("p",null,"This plugin is dependent on NodeMetric's reporting period. Different reporting periods need to be set according to different scenarios and workloads. If the reporting period is relatively long, koordlet needs to aggregate within the reporting period to ensure the effect of the metrics. Therefore, NodeMetricSpec needs to be extended to support user-defined reporting period and aggregation period. Users can modify ",(0,i.kt)("inlineCode",{parentName:"p"},"slo-controller-config")," to complete the corresponding configuration, and the controller in ",(0,i.kt)("inlineCode",{parentName:"p"},"koord-manager")," will be responsible for updating the reporting period and aggregation period fields of NodeMetrics of related nodes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// NodeMetricSpec defines the desired state of NodeMetric\ntype NodeMetricSpec struct {\n  // CollectPolicy defines the Metric collection policy\n  CollectPolicy *NodeMetricCollectPolicy `json:"metricCollectPolicy,omitempty"`\n}\n\n// NodeMetricCollectPolicy defines the Metric collection policy\ntype NodeMetricCollectPolicy struct {\n  // AggregateDurationSeconds represents the aggregation period in seconds\n  AggregateDurationSeconds *int64 `json:"aggregateDurationSeconds,omitempty"`\n  // ReportIntervalSeconds represents the report period in seconds\n  ReportIntervalSeconds *int64 `json:"reportIntervalSeconds,omitempty"`\n}\n')),(0,i.kt)("h3",{id:"custom-node-usage-thresholds"},"Custom node usage thresholds"),(0,i.kt)("p",null,"Currently, the resource utilization thresholds of nodes are configured based on experience to ensure the runtime quality of nodes. But there are also ways to evaluate the workload running on the node to arrive at a more appropriate threshold for resource utilization. For example, in a time-sharing scenario, a higher threshold can be set to allow scheduling to run more best effort workloads during the valley of latency-sensitive applications. When the peak of latency-sensitive applications comes up, lower the threshold and evict some best effort workloads. In addition, 3-sigma can be used to analyze the utilization level in the cluster to obtain a more appropriate threshold."),(0,i.kt)("p",null,"Define Annotation supports user-defined node resource utilization thresholds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'const (\n  AnnotationCustomUsageThresholds = "scheduling.koordinator.sh/usage-thresholds"\n)\n\ntype CustomUsageThresholds struct {\n  UsageThresholds map[corev1.ResourceName]int64 `json:"usageThresholds,omitempty"`\n}\n')))}p.isMDXComponent=!0},2503:function(e,t,o){t.Z=o.p+"assets/images/load-aware-scheduling-arch-cfa9bc8e584faf58a3c7807fd699361a.svg"}}]);