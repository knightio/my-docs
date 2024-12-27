import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as l,o as p}from"./app-DZr1m2BJ.js";const n={};function o(r,e){return p(),i("div",null,e[0]||(e[0]=[l('<h1 id="_4-管道" tabindex="-1"><a class="header-anchor" href="#_4-管道"><span>4.管道</span></a></h1><p>管道(pipeline)可以一次性发送多条命令给服务端，<strong>服务端依次处理完毕后，通过一 条响应一次性将结果返回，通过减少客户端与redis的通信次数来实现降低往返延时时间</strong>。pipeline实现的原理是队列，先进先出特性就保证数据的顺序性。</p><p><strong>批处理命令变种优化措施</strong>，类似Redis的原生批命令(mget和mset)</p><h3 id="小总结" tabindex="-1"><a class="header-anchor" href="#小总结"><span>小总结</span></a></h3><ul><li>pipeline与原生批量命令对比 <ol><li>原生批量命令是原子性(例如：mset、mget)，$\\textcolor{red}{pipeline\\text{是}\\text{非}\\text{原}\\text{子}\\text{性}\\text{的}}$</li><li>原生批量命令一次只能执行一种命令，pipeline支持批量执行不同命令</li><li>原生批量命令是服务端实现，而pipeline需要服务端与客户端共同完成</li></ol></li><li>pipeline与事务对比 <ol><li>事务具有原子性，管道不具有原子性</li><li>管道一次性将多条命令发送到服务器，事务是一条一条的发，事务只有在接收到exec命令后才会执行，管道不会</li><li>执行事务时会阻塞其他命令的执行，而执行管道中的命令时不会</li></ol></li><li>使用pipeline注意事项 <ol><li>pipeline缓冲的指令只是会依次执行，不保证原子性，如果执行中指令发生异常，将会继续执行后续的指令</li><li>使用pipeline组装的命令个数不能太多，不然数量过大客户端阻塞的时间可能过久，同时服务端此时也被迫回复一个队列答复，占用很多内存</li></ol></li></ul>',5)]))}const c=t(n,[["render",o],["__file","4.管道.html.vue"]]),m=JSON.parse('{"path":"/dbs/redis/4.%E7%AE%A1%E9%81%93.html","title":"管道","lang":"zh-CN","frontmatter":{"title":"管道","order":5,"description":"4.管道 管道(pipeline)可以一次性发送多条命令给服务端，服务端依次处理完毕后，通过一 条响应一次性将结果返回，通过减少客户端与redis的通信次数来实现降低往返延时时间。pipeline实现的原理是队列，先进先出特性就保证数据的顺序性。 批处理命令变种优化措施，类似Redis的原生批命令(mget和mset) 小总结 pipeline与原生批...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/dbs/redis/4.%E7%AE%A1%E9%81%93.html"}],["meta",{"property":"og:site_name","content":"一切为了更好的自己"}],["meta",{"property":"og:title","content":"管道"}],["meta",{"property":"og:description","content":"4.管道 管道(pipeline)可以一次性发送多条命令给服务端，服务端依次处理完毕后，通过一 条响应一次性将结果返回，通过减少客户端与redis的通信次数来实现降低往返延时时间。pipeline实现的原理是队列，先进先出特性就保证数据的顺序性。 批处理命令变种优化措施，类似Redis的原生批命令(mget和mset) 小总结 pipeline与原生批..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-14T09:34:35.000Z"}],["meta",{"property":"article:author","content":"憨憨十二"}],["meta",{"property":"article:modified_time","content":"2024-06-14T09:34:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"管道\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-14T09:34:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"憨憨十二\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":3,"title":"小总结","slug":"小总结","link":"#小总结","children":[]}],"git":{"createdTime":1695377321000,"updatedTime":1718357675000,"contributors":[{"name":"consen3464","email":"wangkai@consen.net","commits":1}]},"readingTime":{"minutes":1.41,"words":423},"filePathRelative":"dbs/redis/4.管道.md","localizedDate":"2023年9月22日","autoDesc":true}');export{c as comp,m as data};
