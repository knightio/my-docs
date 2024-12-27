import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,b as s,o as t}from"./app-DZr1m2BJ.js";const i={};function l(d,a){return t(),n("div",null,a[0]||(a[0]=[s(`<h1 id="_5-发布与订阅" tabindex="-1"><a class="header-anchor" href="#_5-发布与订阅"><span>5.发布与订阅</span></a></h1><p>发布/订阅其实是一个轻量的队列，只不过数据不会被持久化，一般用来处理实时性较高的异步消息</p><h1 id="订阅" tabindex="-1"><a class="header-anchor" href="#订阅"><span>订阅</span></a></h1><p>订阅后会挂起操作，等待消息发布</p><ul><li><p><code>SUBSCRIBE</code> 订阅频道</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>SUBSCRIBE channel <span class="token punctuation">[</span>channel <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>订阅成功之前发布的消息是收不到的</p></li><li><p><code>PSUBSCRIBE</code> 按模式匹配订阅</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>PSUBSCRIBE pattern <span class="token punctuation">[</span>pattern <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h1 id="发布" tabindex="-1"><a class="header-anchor" href="#发布"><span>发布</span></a></h1><ul><li><p><code>PUBLISH</code> 像频道发布消息</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>PUBLISH channel message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>订阅的客户端每次可以收到一个3个参数的消息</p><ol><li>消息种类</li><li>始发频道的名称</li><li>实际的消息内容</li></ol></li></ul><h1 id="查看" tabindex="-1"><a class="header-anchor" href="#查看"><span>查看</span></a></h1><ul><li><p><code>PUBSUB CHANNELS</code> 查看当前活跃的频道</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>PUBSUB CHANNELS <span class="token punctuation">[</span>pattern<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>PUBSUB NUMSUB</code> 查看频道活跃人数</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>PUBSUB NUMSUB <span class="token punctuation">[</span>channel <span class="token punctuation">[</span>channel <span class="token punctuation">..</span>.<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>PUBSUB NUMPAT</code> 查看使用 <code>PSUBSCRIBE</code> 命令订阅的频道数</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>PUBSUB NUMPAT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h1 id="退订" tabindex="-1"><a class="header-anchor" href="#退订"><span>退订</span></a></h1><ul><li><p><code>UNSUBSCRIBE</code> 退订指定频道</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>UNSUBSCRIBE <span class="token punctuation">[</span>channel <span class="token punctuation">[</span>channel <span class="token punctuation">..</span>.<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>PUNSUBSCRIBE</code> 退订模式匹配的频道</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>PUNSUBSCRIBE <span class="token punctuation">[</span>pattern <span class="token punctuation">[</span>pattern <span class="token punctuation">..</span>.<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h1 id="小总结" tabindex="-1"><a class="header-anchor" href="#小总结"><span>小总结</span></a></h1><p><strong>可以实现消息中间件MQ的功能，通过发布订阅实现消息的引导和分流。但是不推荐使用该功能，专业的事情交给专业的中间件处理，redis就做好分布式缓存功能</strong></p><h1 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h1><ol><li>发布的消息在Redis系统中不能持久化，因此，必须先执行订阅，在等待消息发布。如果先发布了消息，那么该消息由于没有订阅者，消息将被直接丢弃</li><li>消息只管发送，对于发布者而言消息是即发即失，不管接受，也没有ACK机制，无法保证消息的消费成功</li><li>以上的缺点导致Redis的Pub/Sub模式就像个小玩具，在生产环境中几乎无用武之地，为此Redis5.0版本新增了Stream数据结构，不但支持多播，还支持数据持久化，相比Pub/Sub更加的强大</li></ol>`,15)]))}const o=e(i,[["render",l],["__file","5.发布与订阅.html.vue"]]),r=JSON.parse('{"path":"/dbs/redis/5.%E5%8F%91%E5%B8%83%E4%B8%8E%E8%AE%A2%E9%98%85.html","title":"发布与订阅","lang":"zh-CN","frontmatter":{"title":"发布与订阅","order":6,"description":"5.发布与订阅 发布/订阅其实是一个轻量的队列，只不过数据不会被持久化，一般用来处理实时性较高的异步消息 订阅 订阅后会挂起操作，等待消息发布 SUBSCRIBE 订阅频道 订阅成功之前发布的消息是收不到的 PSUBSCRIBE 按模式匹配订阅 发布 PUBLISH 像频道发布消息 订阅的客户端每次可以收到一个3个参数的消息 消息种类 始发频道的名称 ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/dbs/redis/5.%E5%8F%91%E5%B8%83%E4%B8%8E%E8%AE%A2%E9%98%85.html"}],["meta",{"property":"og:site_name","content":"一切为了更好的自己"}],["meta",{"property":"og:title","content":"发布与订阅"}],["meta",{"property":"og:description","content":"5.发布与订阅 发布/订阅其实是一个轻量的队列，只不过数据不会被持久化，一般用来处理实时性较高的异步消息 订阅 订阅后会挂起操作，等待消息发布 SUBSCRIBE 订阅频道 订阅成功之前发布的消息是收不到的 PSUBSCRIBE 按模式匹配订阅 发布 PUBLISH 像频道发布消息 订阅的客户端每次可以收到一个3个参数的消息 消息种类 始发频道的名称 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-14T09:34:35.000Z"}],["meta",{"property":"article:author","content":"憨憨十二"}],["meta",{"property":"article:modified_time","content":"2024-06-14T09:34:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"发布与订阅\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-14T09:34:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"憨憨十二\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1695377321000,"updatedTime":1718357675000,"contributors":[{"name":"consen3464","email":"wangkai@consen.net","commits":1}]},"readingTime":{"minutes":1.62,"words":486},"filePathRelative":"dbs/redis/5.发布与订阅.md","localizedDate":"2023年9月22日","autoDesc":true}');export{o as comp,r as data};
