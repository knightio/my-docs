import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as r,o as s}from"./app-DZr1m2BJ.js";const d={};function a(l,e){return s(),i("div",null,e[0]||(e[0]=[r(`<h1 id="docker-启动" tabindex="-1"><a class="header-anchor" href="#docker-启动"><span>docker 启动！</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>version: &#39;3.8&#39;
services:
  namesrv:
    image: apache/rocketmq:5.2.0
    container_name: rmqnamesrv
    ports:
      - 9876:9876
    environment:
      - &quot;MAX_POSSIBLE_HEAP=1024m&quot;
      - TZ=Asia/Shanghai
    volumes:
      - /home/lighthouse/podman/rocketmq/namesrv/logs:/home/rocketmq/logs
    networks:
      - rocketmq
    command: sh mqnamesrv
  broker:
    image: apache/rocketmq:5.2.0
    container_name: rmqbroker
    ports:
      - 10909:10909
      - 10911:10911
      - 10912:10912
    volumes:
      - /home/lighthouse/podman/rocketmq/broker/logs:/home/rocketmq/logs
      - /home/lighthouse/podman/rocketmq/broker/store:/home/rocketmq/store
      - /home/lighthouse/podman/rocketmq/broker/conf:/home/rocketmq/conf
    environment:
      - NAMESRV_ADDR=rmqnamesrv:9876
      - &quot;MAX_POSSIBLE_HEAP=1024m&quot;
      - TZ=Asia/Shanghai
    depends_on:
      - namesrv
    networks:
      - rocketmq
    command: sh mqbroker -c /home/rocketmq/conf/broker.conf
  proxy:
    image: apache/rocketmq:5.2.0
    container_name: rmqproxy
    networks:
      - rocketmq
    depends_on:
      - broker
      - namesrv
    ports:
      - 8080:8080
      - 8081:8081
    environment:
      - NAMESRV_ADDR=rmqnamesrv:9876
      - &quot;MAX_POSSIBLE_HEAP=1024m&quot;
      - TZ=Asia/Shanghai
    command: ./mqproxy
networks:
  rocketmq:
    driver: bridge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>broker.conf</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># nameServer 地址多个用;隔开 默认值null
# 例：127.0.0.1:6666;127.0.0.1:8888 
namesrvAddr = 10.89.1.2:9876
# 集群名称
brokerClusterName = DefaultCluster
# 节点名称
brokerName = broker-a
# broker id节点ID， 0 表示 master, 其他的正整数表示 slave，不能小于0 
brokerId = 0
# Broker服务地址	String	内部使用填内网ip，如果是需要给外部使用填公网ip
brokerIP1 = 10.89.1.2
# Broker角色
brokerRole = ASYNC_MASTER
# 刷盘方式
flushDiskType = ASYNC_FLUSH
# 在每天的什么时间删除已经超过文件保留时间的 commit log，默认值04
deleteWhen = 04
# 以小时计算的文件保留时间 默认值72小时
fileReservedTime = 72
# 是否允许Broker 自动创建Topic，建议线下开启，线上关闭
autoCreateTopicEnable=true
# 是否允许Broker自动创建订阅组，建议线下开启，线上关闭
autoCreateSubscriptionGroup=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const o=n(d,[["render",a],["__file","basis.html.vue"]]),v=JSON.parse('{"path":"/java/rocketmq/basis.html","title":"docker 启动！","lang":"zh-CN","frontmatter":{"description":"docker 启动！ broker.conf","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java/rocketmq/basis.html"}],["meta",{"property":"og:site_name","content":"一切为了更好的自己"}],["meta",{"property":"og:title","content":"docker 启动！"}],["meta",{"property":"og:description","content":"docker 启动！ broker.conf"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T09:19:26.000Z"}],["meta",{"property":"article:author","content":"憨憨十二"}],["meta",{"property":"article:modified_time","content":"2024-06-12T09:19:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"docker 启动！\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T09:19:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"憨憨十二\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1717752278000,"updatedTime":1718183966000,"contributors":[{"name":"consen3464","email":"wangkai@consen.net","commits":2}]},"readingTime":{"minutes":0.97,"words":290},"filePathRelative":"java/rocketmq/basis.md","localizedDate":"2024年6月7日","autoDesc":true}');export{o as comp,v as data};
