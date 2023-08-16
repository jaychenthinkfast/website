"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[725],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8158:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="CPU Burst",u={unversionedId:"user-manuals/cpu-burst",id:"version-v1.2/user-manuals/cpu-burst",title:"CPU Burst",description:"Introduction",source:"@site/versioned_docs/version-v1.2/user-manuals/cpu-burst.md",sourceDirName:"user-manuals",slug:"/user-manuals/cpu-burst",permalink:"/zh-Hans/docs/v1.2/user-manuals/cpu-burst",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/cpu-burst.md",tags:[],version:"v1.2",lastUpdatedBy:"zwzhang",lastUpdatedAt:1680861757,formattedLastUpdatedAt:"2023/4/7",frontMatter:{},sidebar:"docs",previous:{title:"CPU Suppress",permalink:"/zh-Hans/docs/v1.2/user-manuals/cpu-suppress"},next:{title:"Memory QoS",permalink:"/zh-Hans/docs/v1.2/user-manuals/memory-qos"}},c={},p=[{value:"Introduction",id:"introduction",level:2},{value:"How CPU Burst works",id:"how-cpu-burst-works",level:3},{value:"Setup",id:"setup",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Installation",id:"installation",level:3},{value:"Configurations",id:"configurations",level:3},{value:"Use CPU Burst",id:"use-cpu-burst",level:2},{value:"Use an annotation to enable CPU Burst for the pod",id:"use-an-annotation-to-enable-cpu-burst-for-the-pod",level:3},{value:"Use a ConfigMap to enable CPU Burst for all pods in a cluster",id:"use-a-configmap-to-enable-cpu-burst-for-all-pods-in-a-cluster",level:3},{value:"(Optional) Advanced Settings",id:"optional-advanced-settings",level:3},{value:"Verify CPU Burst",id:"verify-cpu-burst",level:3}],d={toc:p};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cpu-burst"},"CPU Burst"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"CPU Burst is a service level objective (SLO)-aware resource scheduling feature provided by Koordinator. You can use CPU Burst to improve the performance of latency-sensitive applications. CPU scheduling for a container may be throttled by the kernel due to the CPU limit, which downgrades the performance of the application. The koordlet component automatically detects CPU throttling events and automatically adjusts the CPU limit to a proper value. This greatly improves the performance of latency-sensitive applications."),(0,o.kt)("h3",{id:"how-cpu-burst-works"},"How CPU Burst works"),(0,o.kt)("p",null,"Kubernetes allows you to specify CPU limits, which can be reused based on time-sharing. If you specify a CPU limit for a container, the OS limits the amount of CPU resources that can be used by the container within a specific time period. For example, you set the CPU limit of a container to 2. The OS kernel limits the CPU time slices that the container can use to 200 milliseconds within each 100-millisecond period."),(0,o.kt)("p",null,"CPU utilization is a key metric that is used to evaluate the performance of a container. In most cases, the CPU limit is specified based on CPU utilization. CPU utilization on a per-millisecond basis shows more spikes than on a per-second basis. If the CPU utilization of a container reaches the limit within a 100-millisecond period, CPU throttling is enforced by the OS kernel and threads in the container are suspended for the rest of the time period, as shown in the following figure."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"image",src:n(6866).Z,width:"734",height:"566"})),(0,o.kt)("p",null,"The following figure shows the thread allocation of a web application container that runs on a node with four vCPUs. The CPU limit of the container is set to 2. The overall CPU utilization within the last second is low. However, Thread 2 cannot be resumed until the third 100-millisecond period starts because CPU throttling is enforced somewhere in the second 100-millisecond period. This increases the response time (RT) and causes long-tail latency problems in containers."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"image",src:n(5734).Z,width:"432",height:"226"})),(0,o.kt)("p",null,"Upstream Linux kernel >=5.14 and Anolis OS both provide ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/torvalds/linux/commit/f4183717b370ad28dd0c0d74760142b20e6e7931#diff-cc1a82129952a910fdc4292448c2a097a2ba538bebefcf3c06381e45639ae73e"},"Burstable CFS Controller"),", namely ",(0,o.kt)("em",{parentName:"p"},"CPU Burst")," feature. It allows a container to accumulate CPU time slices when the container is idle. The container can use the accumulated CPU time slices to burst above the CPU limit when CPU utilization spikes. This improves performance and reduces the RT of the container."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"image",src:n(3872).Z,width:"432",height:"226"})),(0,o.kt)("p",null,"For kernel versions that do not support CPU Burst, koordlet detects CPU throttling events and dynamically adjusts the CPU limit to achieve the same effect as CPU Burst."),(0,o.kt)("p",null,"For more information about CPU Burst, see the presentation at KubeCon 2021: ",(0,o.kt)("a",{parentName:"p",href:"https://kccncosschn21.sched.com/event/pcdF?spm=a2c63.p38356.0.0.2ec3731dhQbCIe&iframe=no"},"CPU Burst: Getting Rid of Unnecessary Throttling, Achieving High CPU Utilization and Application Performance at the Same Time"),"."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kubernetes >= 1.18"),(0,o.kt)("li",{parentName:"ul"},"Koordinator >= 0.3")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Please make sure Koordinator components are correctly installed in your cluster. If not, please refer to\n",(0,o.kt)("a",{parentName:"p",href:"/docs/installation"},"Installation"),"."),(0,o.kt)("h3",{id:"configurations"},"Configurations"),(0,o.kt)("p",null,"Koordlet has already enabled CPU Burst feature (",(0,o.kt)("inlineCode",{parentName:"p"},"-feature-gates=AllAlpha=true"),"). If not, please enable it manually by updating the feature gate in the koordlet daemonset."),(0,o.kt)("p",null,"NOTE: CPU Burst is not available for ",(0,o.kt)("inlineCode",{parentName:"p"},"LSR")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"BE")," pods since it targets on burstable cpu usages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: koordlet\nspec:\n  selector:\n    matchLabels:\n      koord-app: koordlet\n  template:\n    metadata:\n      labels:\n        koord-app: koordlet\n    spec:\n      containers:\n        - command:\n            - /koordlet\n          args:\n            - -CgroupRootDir=/host-cgroup/\n            - -feature-gates=XXXX,CPUBurst=true # enable CPU Burst feature\n            ...\n")),(0,o.kt)("h2",{id:"use-cpu-burst"},"Use CPU Burst"),(0,o.kt)("h3",{id:"use-an-annotation-to-enable-cpu-burst-for-the-pod"},"Use an annotation to enable CPU Burst for the pod"),(0,o.kt)("p",null,"Add the following annotation to the pod configuration to enable CPU Burst:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Pod\nmetadata:\n  name: demo-pod-xxx\n  annotations:\n    # Set the value to auto to enable CPU Burst for the pod.\n    koordinator.sh/cpuBurst: \'{"policy": "auto"}\'\n    # To disable CPU Burst for the pod, set the value to none.\n    #koordinator.sh/cpuBurst: \'{"policy": "none"}\'\n')),(0,o.kt)("h3",{id:"use-a-configmap-to-enable-cpu-burst-for-all-pods-in-a-cluster"},"Use a ConfigMap to enable CPU Burst for all pods in a cluster"),(0,o.kt)("p",null,"Modify the slo-controller-config ConfigMap based on the following content to enable CPU Burst for all pods in a cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: slo-controller-config\n  namespace: koordinator-system\ndata:\n  cpu-burst-config: \'{"clusterStrategy": {"policy": "auto"}}\'\n  #cpu-burst-config: \'{"clusterStrategy": {"policy": "cpuBurstOnly"}}\'\n  #cpu-burst-config: \'{"clusterStrategy": {"policy": "none"}}\'\n')),(0,o.kt)("h3",{id:"optional-advanced-settings"},"(Optional) Advanced Settings"),(0,o.kt)("p",null,"The following code block shows the pod annotations and ConfigMap fields that you can use for advanced configurations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Example of the slo-controller-config ConfigMap.\ndata:\n  cpu-burst-config: |\n    {\n      "clusterStrategy": {\n        "policy": "auto",\n        "cpuBurstPercent": 1000,\n        "cfsQuotaBurstPercent": 300,\n        "sharePoolThresholdPercent": 50,\n        "cfsQuotaBurstPeriodSeconds": -1\n      }\n    }\n\n  # Example of pod annotations.\n  koordinator.sh/cpuBurst: \'{"policy": "auto", "cpuBurstPercent": 1000, "cfsQuotaBurstPercent": 300, "cfsQuotaBurstPeriodSeconds": -1}\'\n')),(0,o.kt)("p",null,"The following table describes the ConfigMap fields that you can use for advanced configurations of CPU Burst."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Data type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"policy"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("ul",null," ",(0,o.kt)("li",null," none: disables CPU Burst. If you set the value to none, the related fields are reset to their original values. This is the default value.")," ",(0,o.kt)("li",null,"cpuBurstOnly: enables the CPU Burst feature only for the kernel of Anolis OS or upstream linux kernel >= 5.14. "),(0,o.kt)("li",null," cfsQuotaBurstOnly: enables automatic adjustment of CFS quotas of general kernel versions. ")," ",(0,o.kt)("li",null," auto: enables CPU Burst and all the related features. ")," "))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cpuBurstPercent"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"Default value:",(0,o.kt)("inlineCode",{parentName:"td"},"1000"),". Unit: %. This field specifies the percentage to which the CPU limit can be increased by CPU Burst. If the CPU limit is set to ",(0,o.kt)("inlineCode",{parentName:"td"},"1"),", CPU Burst can increase the limit to 10 by default.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cfsQuotaBurstPercent"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"Default value:",(0,o.kt)("inlineCode",{parentName:"td"},"300"),". Unit: %. This field specifies the maximum percentage to which the value of cfs_quota in the cgroup parameters can be increased. By default, the value of cfs_quota can be increased to at most three times.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cfsQuotaBurstPeriodSeconds"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"Default value:",(0,o.kt)("inlineCode",{parentName:"td"},"-1"),". Unit: seconds. This indicates that the time period in which the container can run with an increased CFS quota is unlimited. This field specifies the time period in which the container can run with an increased CFS quota, which cannot exceed the upper limit specified by ",(0,o.kt)("inlineCode",{parentName:"td"},"cfsQuotaBurstPercent"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sharePoolThresholdPercent"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"Default value:",(0,o.kt)("inlineCode",{parentName:"td"},"50"),". Unit: %. This field specifies the CPU utilization threshold of the node. If the CPU utilization of the node exceeds the threshold, the value of cfs_quota in cgroup parameters is reset to the original value.")))),(0,o.kt)("h3",{id:"verify-cpu-burst"},"Verify CPU Burst"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use the following YAML template to create an apache-demo.yaml file.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To enable CPU Burst for a pod, specify an annotation in the annotations parameter of the metadata section of the pod configuration.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: apache-demo\n  annotations:\n    koordinator.sh/cpuBurst: \'{"policy": "auto"}\'   # Use this annotation to enable or disable CPU Burst.\nspec:\n  containers:\n  - command:\n    - httpd\n    - -D\n    - FOREGROUND\n    image: koordinatorsh/apache-2-4-51-for-slo-test:v0.1\n    imagePullPolicy: Always\n    name: apache\n    resources:\n      limits:\n        cpu: "4"\n        memory: 10Gi\n      requests:\n        cpu: "4"\n        memory: 10Gi\n  nodeName: # $nodeName Set the value to the name of the node that you use.\n  hostNetwork: False\n  restartPolicy: Never\n  schedulerName: default-scheduler\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Run the following command to create an application by using Apache HTTP Server.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f apache-demo.yaml\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Use the wrk2 tool to perform stress tests.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Download, decompress, and then install the wrk2 package.\n# The Gzip module is enabled in the configuration of the Apache application. The Gzip module is used to simulate the logic of processing requests on the server.\n# Run the following command to send requests. Replace the IP address in the command with the IP address of the application.\n./wrk -H "Accept-Encoding: deflate, gzip" -t 2 -c 12 -d 120 --latency --timeout 2s -R 24 http://$target_ip_address:8010/static/file.1m.test\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Check the results of CPU Burst enabled and disabled.")),(0,o.kt)("p",null,"e.g. We may have the following results:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"CentOS 7"),(0,o.kt)("th",{parentName:"tr",align:null},"Disabled"),(0,o.kt)("th",{parentName:"tr",align:null},"Enabled"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"apache RT-p99"),(0,o.kt)("td",{parentName:"tr",align:null},"111.69 ms"),(0,o.kt)("td",{parentName:"tr",align:null},"71.30 ms (-36.2%)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CPU Throttled Ratio"),(0,o.kt)("td",{parentName:"tr",align:null},"33%"),(0,o.kt)("td",{parentName:"tr",align:null},"0%")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Average pod CPU utilization"),(0,o.kt)("td",{parentName:"tr",align:null},"32.5%"),(0,o.kt)("td",{parentName:"tr",align:null},"33.8%")))),(0,o.kt)("p",null,"The preceding metrics indicate the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"After CPU Burst is enabled, the P99 latency of apache is greatly reduced."),(0,o.kt)("li",{parentName:"ul"},"After CPU Burst is enabled, CPU throttling is stopped and the average pod CPU utilization remains approximately at the same value.")))}m.isMDXComponent=!0},5734:function(e,t,n){t.Z=n.p+"assets/images/cpu-throttles-1-7b0734da6da6ae4ec97c460373338975.png"},3872:function(e,t,n){t.Z=n.p+"assets/images/cpu-throttles-2-8a151614f0d3920de0947ac036afc624.png"},6866:function(e,t,n){t.Z=n.p+"assets/images/cpu-throttles-95c536acf8176011c03566a2d00dd085.png"}}]);