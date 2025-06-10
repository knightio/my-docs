import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e,o as i}from"./app-CHFajGP5.js";const l={};function p(r,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="docker-启动" tabindex="-1"><a class="header-anchor" href="#docker-启动"><span>docker 启动！</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>version: &#39;3.8&#39;</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  namesrv:</span></span>
<span class="line"><span>    image: apache/rocketmq:5.2.0</span></span>
<span class="line"><span>    container_name: rmqnamesrv</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - 9876:9876</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      - &quot;MAX_POSSIBLE_HEAP=1024m&quot;</span></span>
<span class="line"><span>      - TZ=Asia/Shanghai</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - /home/lighthouse/podman/rocketmq/namesrv/logs:/home/rocketmq/logs</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - rocketmq</span></span>
<span class="line"><span>    command: sh mqnamesrv</span></span>
<span class="line"><span>  broker:</span></span>
<span class="line"><span>    image: apache/rocketmq:5.2.0</span></span>
<span class="line"><span>    container_name: rmqbroker</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - 10909:10909</span></span>
<span class="line"><span>      - 10911:10911</span></span>
<span class="line"><span>      - 10912:10912</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - /home/lighthouse/podman/rocketmq/broker/logs:/home/rocketmq/logs</span></span>
<span class="line"><span>      - /home/lighthouse/podman/rocketmq/broker/store:/home/rocketmq/store</span></span>
<span class="line"><span>      - /home/lighthouse/podman/rocketmq/broker/conf:/home/rocketmq/conf</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      - NAMESRV_ADDR=rmqnamesrv:9876</span></span>
<span class="line"><span>      - &quot;MAX_POSSIBLE_HEAP=1024m&quot;</span></span>
<span class="line"><span>      - TZ=Asia/Shanghai</span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span>      - namesrv</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - rocketmq</span></span>
<span class="line"><span>    command: sh mqbroker -c /home/rocketmq/conf/broker.conf</span></span>
<span class="line"><span>  proxy:</span></span>
<span class="line"><span>    image: apache/rocketmq:5.2.0</span></span>
<span class="line"><span>    container_name: rmqproxy</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - rocketmq</span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span>      - broker</span></span>
<span class="line"><span>      - namesrv</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - 8080:8080</span></span>
<span class="line"><span>      - 8081:8081</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      - NAMESRV_ADDR=rmqnamesrv:9876</span></span>
<span class="line"><span>      - &quot;MAX_POSSIBLE_HEAP=1024m&quot;</span></span>
<span class="line"><span>      - TZ=Asia/Shanghai</span></span>
<span class="line"><span>    command: ./mqproxy</span></span>
<span class="line"><span>networks:</span></span>
<span class="line"><span>  rocketmq:</span></span>
<span class="line"><span>    driver: bridge</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>broker.conf</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span># nameServer 地址多个用;隔开 默认值null</span></span>
<span class="line"><span># 例：127.0.0.1:6666;127.0.0.1:8888 </span></span>
<span class="line"><span>namesrvAddr = 10.89.1.2:9876</span></span>
<span class="line"><span># 集群名称</span></span>
<span class="line"><span>brokerClusterName = DefaultCluster</span></span>
<span class="line"><span># 节点名称</span></span>
<span class="line"><span>brokerName = broker-a</span></span>
<span class="line"><span># broker id节点ID， 0 表示 master, 其他的正整数表示 slave，不能小于0 </span></span>
<span class="line"><span>brokerId = 0</span></span>
<span class="line"><span># Broker服务地址	String	内部使用填内网ip，如果是需要给外部使用填公网ip</span></span>
<span class="line"><span>brokerIP1 = 10.89.1.2</span></span>
<span class="line"><span># Broker角色</span></span>
<span class="line"><span>brokerRole = ASYNC_MASTER</span></span>
<span class="line"><span># 刷盘方式</span></span>
<span class="line"><span>flushDiskType = ASYNC_FLUSH</span></span>
<span class="line"><span># 在每天的什么时间删除已经超过文件保留时间的 commit log，默认值04</span></span>
<span class="line"><span>deleteWhen = 04</span></span>
<span class="line"><span># 以小时计算的文件保留时间 默认值72小时</span></span>
<span class="line"><span>fileReservedTime = 72</span></span>
<span class="line"><span># 是否允许Broker 自动创建Topic，建议线下开启，线上关闭</span></span>
<span class="line"><span>autoCreateTopicEnable=true</span></span>
<span class="line"><span># 是否允许Broker自动创建订阅组，建议线下开启，线上关闭</span></span>
<span class="line"><span>autoCreateSubscriptionGroup=true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const m=s(l,[["render",p]]),o=JSON.parse('{"path":"/java/rocketmq/basis.html","title":"docker 启动！","lang":"zh-CN","frontmatter":{"description":"docker 启动！ broker.conf","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"docker 启动！\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T09:19:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"憨憨十二\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/my-docs/java/rocketmq/basis.html"}],["meta",{"property":"og:site_name","content":"一切为了更好的自己"}],["meta",{"property":"og:title","content":"docker 启动！"}],["meta",{"property":"og:description","content":"docker 启动！ broker.conf"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T09:19:26.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-12T09:19:26.000Z"}]]},"git":{"createdTime":1717752278000,"updatedTime":1718183966000,"contributors":[{"name":"consen3464","username":"consen3464","email":"wangkai@consen.net","commits":4,"url":"https://github.com/consen3464"}]},"readingTime":{"minutes":0.97,"words":290},"filePathRelative":"java/rocketmq/basis.md","autoDesc":true}');export{m as comp,o as data};
