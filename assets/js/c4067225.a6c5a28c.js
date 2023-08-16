"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[8178],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),g=r,h=p["".concat(s,".").concat(g)]||p[g]||c[g]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3917:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Load Aware Scheduling",d={unversionedId:"user-manuals/load-aware-scheduling",id:"version-v1.3/user-manuals/load-aware-scheduling",title:"Load Aware Scheduling",description:"Load Aware Scheduling is an ability of koord-scheduler for balancing pods scheduling based on the real-time load of each node.",source:"@site/versioned_docs/version-v1.3/user-manuals/load-aware-scheduling.md",sourceDirName:"user-manuals",slug:"/user-manuals/load-aware-scheduling",permalink:"/docs/user-manuals/load-aware-scheduling",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/load-aware-scheduling.md",tags:[],version:"v1.3",lastUpdatedBy:"saintube",lastUpdatedAt:1692186595,formattedLastUpdatedAt:"8/16/2023",frontMatter:{},sidebar:"docs",previous:{title:"Colocation Profile",permalink:"/docs/user-manuals/colocation-profile"},next:{title:"Load Aware Descheduling",permalink:"/docs/user-manuals/load-aware-descheduling"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Installation",id:"installation",level:3},{value:"Global Configuration via plugin args",id:"global-configuration-via-plugin-args",level:3},{value:"Configure filter thresholds by Node",id:"configure-filter-thresholds-by-node",level:3},{value:"Use Load Aware Scheduling",id:"use-load-aware-scheduling",level:2},{value:"Load-aware scheduling by the whole machine load",id:"load-aware-scheduling-by-the-whole-machine-load",level:3},{value:"Load-aware scheduling by the Prod Pods",id:"load-aware-scheduling-by-the-prod-pods",level:3},{value:"Load-aware scheduling based on percentile statistics",id:"load-aware-scheduling-based-on-percentile-statistics",level:3}],p={toc:c};function g(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"load-aware-scheduling"},"Load Aware Scheduling"),(0,i.kt)("p",null,"Load Aware Scheduling is an ability of koord-scheduler for balancing pods scheduling based on the real-time load of each node."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Load balancing is a common issue in resource scheduling. Under-utilized nodes bring much resource waste to the\ncluster, while over-utilized nodes are likely to cause performance degradation. Neither of them is suitable for\nefficient resource management."),(0,i.kt)("p",null,"The native Kubernetes scheduler schedules pods based on the requests and the allocation of nodes, considering neither\nthe real-time load nor the estimated usage. When we want to balance the pod scheduling on each node and make the loads\neven with the native scheduler, we need to set precise resource requirements for the applications. Moreover, since\nKoordinator enables resource overcommitment to achieve better resource efficiency, we need a mechanism to reduce the\nprobability of performance degradation and avoid over-utilization."),(0,i.kt)("p",null,"Koord-scheduler can retrieve node metrics by cooperating with the koordlet. It provides the ability to balance the\nscheduling of both the online (LSE/LSR/LS) pods and offline (BE) pods based on node utilization."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"image",src:n(2503).Z,width:"611",height:"466"})),(0,i.kt)("p",null,"For more information, please see ",(0,i.kt)("a",{parentName:"p",href:"/docs/designs/load-aware-scheduling"},"Design: Load Aware Scheduling"),"."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kubernetes >= 1.18"),(0,i.kt)("li",{parentName:"ul"},"Koordinator >= 0.4")),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Please make sure Koordinator components are correctly installed in your cluster. If not, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/installation"},"Installation"),"."),(0,i.kt)("h3",{id:"global-configuration-via-plugin-args"},"Global Configuration via plugin args"),(0,i.kt)("p",null,"Load-aware scheduling is ",(0,i.kt)("em",{parentName:"p"},"Enabled")," by default. You can use it without any modification on the koord-scheduler config."),(0,i.kt)("p",null,"For users who need deep insight, please configure the rules of load-aware scheduling by modifying the ConfigMap\n",(0,i.kt)("inlineCode",{parentName:"p"},"koord-scheduler-config")," in the helm chart."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: koord-scheduler-config\n  ...\ndata:\n  koord-scheduler-config: |\n    apiVersion: kubescheduler.config.k8s.io/v1beta2\n    kind: KubeSchedulerConfiguration\n    profiles:\n      - schedulerName: koord-scheduler\n        plugins:\n          # enable the LoadAwareScheduling plugin\n          filter:\n            enabled:\n              - name: LoadAwareScheduling\n              ...\n          score:\n            enabled:\n              - name: LoadAwareScheduling\n                weight: 1\n              ...\n          reserve:\n            enabled:\n              - name: LoadAwareScheduling\n          ...\n        pluginConfig:\n        # configure the thresholds and weights for the plugin\n        - name: LoadAwareScheduling\n          args:\n            apiVersion: kubescheduler.config.k8s.io/v1beta2\n            kind: LoadAwareSchedulingArgs\n            # whether to filter nodes where koordlet fails to update NodeMetric\n            filterExpiredNodeMetrics: true\n            # the expiration threshold seconds when using NodeMetric\n            nodeMetricExpirationSeconds: 300\n            # weights of resources\n            resourceWeights:\n              cpu: 1\n              memory: 1\n            # thresholds (%) of resource utilization\n            usageThresholds:\n              cpu: 75\n              memory: 85\n            # thresholds (%) of resource utilization of Prod Pods\n            prodUsageThresholds:\n              cpu: 55\n              memory: 65\n            # enable score according Prod usage\n            scoreAccordingProdUsage: true\n            # the factor (%) for estimating resource usage\n            estimatedScalingFactors:\n              cpu: 80\n              memory: 70\n            # enable resource utilization filtering and scoring based on percentile statistics\n            aggregated:\n              usageThresholds:\n                cpu: 65\n                memory: 75\n              usageAggregationType: "p99"\n              scoreAggregationType: "p99"\n')),(0,i.kt)("p",null,"The koord-scheduler takes this ConfigMap as ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/scheduling/config/"},"scheduler Configuration"),".\nNew configurations will take effect after the koord-scheduler restarts."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"filterExpiredNodeMetrics"),(0,i.kt)("td",{parentName:"tr",align:null},"filterExpiredNodeMetrics indicates whether to filter nodes where koordlet fails to update NodeMetric. Enabled by default but in Helm chart, it's disabled."),(0,i.kt)("td",{parentName:"tr",align:null},">= v0.4.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nodeMetricExpirationSeconds"),(0,i.kt)("td",{parentName:"tr",align:null},"nodeMetricExpirationSeconds indicates the NodeMetric expiration in seconds. When NodeMetrics expired, the node is considered abnormal. Default is 180 seconds."),(0,i.kt)("td",{parentName:"tr",align:null},">= v0.4.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"resourceWeights"),(0,i.kt)("td",{parentName:"tr",align:null},"resourceWeights indicates the weights of resources. The weights of CPU and Memory are both 1 by default."),(0,i.kt)("td",{parentName:"tr",align:null},">= v0.4.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"usageThresholds"),(0,i.kt)("td",{parentName:"tr",align:null},"usageThresholds indicates the resource utilization threshold of the whole machine. The default for CPU is 65%, and the default for memory is 95%."),(0,i.kt)("td",{parentName:"tr",align:null},">= v0.4.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"estimatedScalingFactors"),(0,i.kt)("td",{parentName:"tr",align:null},"estimatedScalingFactors indicates the factor when estimating resource usage. The default value of CPU is 85%, and the default value of Memory is 70%."),(0,i.kt)("td",{parentName:"tr",align:null},">= v0.4.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"prodUsageThresholds"),(0,i.kt)("td",{parentName:"tr",align:null},"prodUsageThresholds indicates the resource utilization threshold of Prod Pods compared to the whole machine. Not enabled by default."),(0,i.kt)("td",{parentName:"tr",align:null},">= v1.1.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"scoreAccordingProdUsage"),(0,i.kt)("td",{parentName:"tr",align:null},"scoreAccordingProdUsage controls whether to score according to the utilization of Prod Pod."),(0,i.kt)("td",{parentName:"tr",align:null},">= v1.1.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"aggregated"),(0,i.kt)("td",{parentName:"tr",align:null},"aggregated supports resource utilization filtering and scoring based on percentile statistics."),(0,i.kt)("td",{parentName:"tr",align:null},">= v1.1.0")))),(0,i.kt)("p",null,"The fields of Aggregated:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"usageThresholds"),(0,i.kt)("td",{parentName:"tr",align:null},"usageThresholds indicates the resource utilization threshold of the machine based on percentile statistics."),(0,i.kt)("td",{parentName:"tr",align:null},">= v1.1.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"usageAggregationType"),(0,i.kt)("td",{parentName:"tr",align:null},"usageAggregationType indicates the percentile type of the machine's utilization when filtering. Currently supports ",(0,i.kt)("inlineCode",{parentName:"td"},"avg"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"p50"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"p90"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"p95")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"p99"),"."),(0,i.kt)("td",{parentName:"tr",align:null},">= v1.1.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"usageAggregatedDuration"),(0,i.kt)("td",{parentName:"tr",align:null},"usageAggregatedDuration indicates the statistical period of the percentile of the machine's utilization when filtering. When this field is not set, the scheduler uses the data of the maximum period in NodeMetrics by default."),(0,i.kt)("td",{parentName:"tr",align:null},">= v1.1.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"scoreAggregationType"),(0,i.kt)("td",{parentName:"tr",align:null},"scoreAggregationType indicates the percentile type of the machine's utilization when scoring. Currently supports ",(0,i.kt)("inlineCode",{parentName:"td"},"avg"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"p50"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"p90"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"p95")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"p99"),"."),(0,i.kt)("td",{parentName:"tr",align:null},">= v1.1.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"scoreAggregatedDuration"),(0,i.kt)("td",{parentName:"tr",align:null},"scoreAggregatedDuration indicates the statistical period of the percentile of Prod Pod's utilization when scoring. When this field is not set, the scheduler uses the data of the maximum period in NodeMetrics by default."),(0,i.kt)("td",{parentName:"tr",align:null},">= v1.1.0")))),(0,i.kt)("h3",{id:"configure-filter-thresholds-by-node"},"Configure filter thresholds by Node"),(0,i.kt)("p",null,"The configuration through the plugin can be used as the default global configuration of the cluster, and users can also set the load thresholds of the node dimension by appending annotation to the node. When the annotation exists on the node, it will be filtered according to the parameters specified by the annotation."),(0,i.kt)("p",null,"The annotation is defined as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'const (\n  AnnotationCustomUsageThresholds = "scheduling.koordinator.sh/usage-thresholds"\n)\n\n// CustomUsageThresholds supports user-defined node resource utilization thresholds.\ntype CustomUsageThresholds struct {\n    // UsageThresholds indicates the resource utilization threshold of the whole machine.\n    UsageThresholds map[corev1.ResourceName]int64 `json:"usageThresholds,omitempty"`\n    // ProdUsageThresholds indicates the resource utilization threshold of Prod Pods compared to the whole machine\n    ProdUsageThresholds map[corev1.ResourceName]int64 `json:"prodUsageThresholds,omitempty"`\n    // AggregatedUsage supports resource utilization filtering and scoring based on percentile statistics\n    AggregatedUsage *CustomAggregatedUsage `json:"aggregatedUsage,omitempty"`\n}\n\ntype CustomAggregatedUsage struct {\n    // UsageThresholds indicates the resource utilization threshold of the machine based on percentile statistics\n    UsageThresholds map[corev1.ResourceName]int64 `json:"usageThresholds,omitempty"`\n    // UsageAggregationType indicates the percentile type of the machine\'s utilization when filtering\n    UsageAggregationType slov1alpha1.AggregationType `json:"usageAggregationType,omitempty"`\n    // UsageAggregatedDuration indicates the statistical period of the percentile of the machine\'s utilization when filtering\n    UsageAggregatedDuration *metav1.Duration `json:"usageAggregatedDuration,omitempty"`\n}\n')),(0,i.kt)("h2",{id:"use-load-aware-scheduling"},"Use Load Aware Scheduling"),(0,i.kt)("h3",{id:"load-aware-scheduling-by-the-whole-machine-load"},"Load-aware scheduling by the whole machine load"),(0,i.kt)("p",null,"The example cluster in this article has three 4-core 16GiB nodes."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Deploy a ",(0,i.kt)("inlineCode",{parentName:"li"},"stress")," pod with the YAML file below.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: stress-demo\n  namespace: default\n  labels:\n    app: stress-demo\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: stress-demo\n  template:\n    metadata:\n      name: stress-demo\n      labels:\n        app: stress-demo\n    spec:\n      containers:\n        - args:\n            - '--vm'\n            - '2'\n            - '--vm-bytes'\n            - '1600M'\n            - '-c'\n            - '2'\n            - '--vm-hang'\n            - '2'\n          command:\n            - stress\n          image: polinux/stress\n          imagePullPolicy: Always\n          name: stress\n          resources:\n            limits:\n              cpu: '2'\n              memory: 4Gi\n            requests:\n              cpu: '2'\n              memory: 4Gi\n      restartPolicy: Always\n      schedulerName: koord-scheduler # use the koord-scheduler\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create -f stress-demo.yaml\ndeployment.apps/stress-demo created\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Watch the pod status util it becomes running.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod -o wide\nNAME                           READY   STATUS    RESTARTS   AGE   IP           NODE                    NOMINATED NODE   READINESS GATES\nstress-demo-7fdd89cc6b-gcnzn   1/1     Running   0          82s   10.0.3.114   cn-beijing.10.0.3.112   <none>           <none>\n")),(0,i.kt)("p",null,"The pod ",(0,i.kt)("inlineCode",{parentName:"p"},"stress-demo-7fdd89cc6b-gcnzn")," is scheduled on ",(0,i.kt)("inlineCode",{parentName:"p"},"cn-beijing.10.0.3.112"),"."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Check the load of each node.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl top node\nNAME                    CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%\ncn-beijing.10.0.3.110   92m          2%     1158Mi          9%\ncn-beijing.10.0.3.111   77m          1%     1162Mi          9%\ncn-beijing.10.0.3.112   2105m        53%    3594Mi          28%\n")),(0,i.kt)("p",null,"In above order, ",(0,i.kt)("inlineCode",{parentName:"p"},"cn-beijing.10.0.3.112")," has the highest load, while ",(0,i.kt)("inlineCode",{parentName:"p"},"cn-beijing.10.0.3.111")," has the lowest load."),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Deploy an ",(0,i.kt)("inlineCode",{parentName:"li"},"nginx")," deployment with the YAML file below.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-with-loadaware\n  labels:\n    app: nginx\nspec:\n  replicas: 6\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      name: nginx\n      labels:\n        app: nginx\n    spec:\n      schedulerName: koord-scheduler # use the koord-scheduler\n      containers:\n      - name: nginx\n        image: nginx\n        resources:\n          limits:\n            cpu: 500m\n          requests:\n            cpu: 500m\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create -f nginx-with-loadaware.yaml\ndeployment/nginx-with-loadawre created\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Check the scheduling results of ",(0,i.kt)("inlineCode",{parentName:"li"},"nginx")," pods.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pods | grep nginx\nnginx-with-loadaware-5646666d56-224jp   1/1     Running   0          18s   10.0.3.118   cn-beijing.10.0.3.110   <none>           <none>\nnginx-with-loadaware-5646666d56-7glt9   1/1     Running   0          18s   10.0.3.115   cn-beijing.10.0.3.110   <none>           <none>\nnginx-with-loadaware-5646666d56-kcdvr   1/1     Running   0          18s   10.0.3.119   cn-beijing.10.0.3.110   <none>           <none>\nnginx-with-loadaware-5646666d56-qzw4j   1/1     Running   0          18s   10.0.3.113   cn-beijing.10.0.3.111   <none>           <none>\nnginx-with-loadaware-5646666d56-sbgv9   1/1     Running   0          18s   10.0.3.120   cn-beijing.10.0.3.111   <none>           <none>\nnginx-with-loadaware-5646666d56-z79dn   1/1     Running   0          18s   10.0.3.116   cn-beijing.10.0.3.111   <none>           <none>\n")),(0,i.kt)("p",null,"Now we can see ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx")," pods get scheduled on the nodes other than ",(0,i.kt)("inlineCode",{parentName:"p"},"cn-beijing.10.0.3.112")," (node with the highest load)."),(0,i.kt)("h3",{id:"load-aware-scheduling-by-the-prod-pods"},"Load-aware scheduling by the Prod Pods"),(0,i.kt)("p",null,"If there are many BestEffort Pods scheduled in one Node, the latency-sensitive Pods may fail to schedule cause the load of node has reached the limit of usage.  In Koordinator v1.1.0, load-aware scheduling is optimized for this scenario. For latency-sensitive(LSE/LSR/LS) Pods, priority is given to scheduling to the nodes with low total utilization of the Prod Pods. BestEffort(BE) Pods are scheduled according to the utilization level of the whole node."),(0,i.kt)("p",null,"Enable relevant optimizations by setting the following parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"prodUsageThresholds"),(0,i.kt)("td",{parentName:"tr",align:null},"prodUsageThresholds indicates the resource utilization threshold of Prod Pods compared to the whole machine. Not enabled by default."),(0,i.kt)("td",{parentName:"tr",align:null},">= v1.1.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"scoreAccordingProdUsage"),(0,i.kt)("td",{parentName:"tr",align:null},"scoreAccordingProdUsage controls whether to score according to the utilization of Prod Pod."),(0,i.kt)("td",{parentName:"tr",align:null},">= v1.1.0")))),(0,i.kt)("h3",{id:"load-aware-scheduling-based-on-percentile-statistics"},"Load-aware scheduling based on percentile statistics"),(0,i.kt)("p",null,"In Koordinator v1.0 and previous versions, load-aware scheduling is filtered and scored according to the average utilization data reported by koordlet. But the average value hides a lot of information, so in Koordinator v1.1, koordlet adds utilization aggregation data based on percentile statistics. Corresponding adaptations have also been made on the scheduler side."),(0,i.kt)("p",null,"Enable relevant optimizations by setting the following parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"aggregated"),(0,i.kt)("td",{parentName:"tr",align:null},"aggregated supports resource utilization filtering and scoring based on percentile statistics."),(0,i.kt)("td",{parentName:"tr",align:null},">= v1.1.0")))),(0,i.kt)("p",null,"The fields of Aggregated:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"usageThresholds"),(0,i.kt)("td",{parentName:"tr",align:null},"usageThresholds indicates the resource utilization threshold of the machine based on percentile statistics."),(0,i.kt)("td",{parentName:"tr",align:null},">= v1.1.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"usageAggregationType"),(0,i.kt)("td",{parentName:"tr",align:null},"usageAggregationType indicates the percentile type of the machine's utilization when filtering. Currently supports ",(0,i.kt)("inlineCode",{parentName:"td"},"avg"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"p50"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"p90"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"p95")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"p99"),"."),(0,i.kt)("td",{parentName:"tr",align:null},">= v1.1.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"usageAggregatedDuration"),(0,i.kt)("td",{parentName:"tr",align:null},"usageAggregatedDuration indicates the statistical period of the percentile of the machine's utilization when filtering. When this field is not set, the scheduler uses the data of the maximum period in NodeMetrics by default."),(0,i.kt)("td",{parentName:"tr",align:null},">= v1.1.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"scoreAggregationType"),(0,i.kt)("td",{parentName:"tr",align:null},"scoreAggregationType indicates the percentile type of the machine's utilization when scoring. Currently supports ",(0,i.kt)("inlineCode",{parentName:"td"},"avg"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"p50"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"p90"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"p95")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"p99"),"."),(0,i.kt)("td",{parentName:"tr",align:null},">= v1.1.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"scoreAggregatedDuration"),(0,i.kt)("td",{parentName:"tr",align:null},"scoreAggregatedDuration indicates the statistical period of the percentile of Prod Pod's utilization when scoring. When this field is not set, the scheduler uses the data of the maximum period in NodeMetrics by default."),(0,i.kt)("td",{parentName:"tr",align:null},">= v1.1.0")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"aggregated")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"usageThresholds")," parameter are mutually exclusive. When both are configured, the ",(0,i.kt)("inlineCode",{parentName:"p"},"aggregated")," will be used.\nIn addition, Pod type awareness is not currently supported."))}g.isMDXComponent=!0},2503:function(e,t,n){t.Z=n.p+"assets/images/load-aware-scheduling-arch-cfa9bc8e584faf58a3c7807fd699361a.svg"}}]);