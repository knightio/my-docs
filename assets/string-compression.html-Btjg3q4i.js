import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,b as r,o as s}from"./app-DZr1m2BJ.js";const a={};function n(c,t){return s(),e("div",null,t[0]||(t[0]=[r(`<h1 id="压缩字符串" tabindex="-1"><a class="header-anchor" href="#压缩字符串"><span>压缩字符串</span></a></h1><p><a href="https://leetcode.cn/problems/string-compression/description/?envType=study-plan-v2&amp;envId=leetcode-75" target="_blank" rel="noopener noreferrer">压缩字符串</a></p><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目"><span>题目</span></a></h2><p>给你一个字符数组 <code>chars</code> ，请使用下述算法压缩：</p><p>从一个空字符串 <code>s</code> 开始。对于 <code>chars</code> 中的每组 <strong>连续重复字符</strong> ：</p><ul><li>如果这一组长度为 <code>1</code> ，则将字符追加到 <code>s</code> 中。</li><li>否则，需要向 <code>s</code> 追加字符，后跟这一组的长度。</li></ul><p>压缩后得到的字符串 <code>s</code> <strong>不应该直接返回</strong> ，需要转储到字符数组 <code>chars</code> 中。需要注意的是，如果组长度为 <code>10</code> 或 <code>10</code> 以上，则在 <code>chars</code> 数组中会被拆分为多个字符。</p><p>请在 <strong>修改完输入数组后</strong> ，返回该数组的新长度。</p><p>你必须设计并实现一个只使用常量额外空间的算法来解决此问题。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> chars = [&quot;a&quot;,&quot;a&quot;,&quot;b&quot;,&quot;b&quot;,&quot;c&quot;,&quot;c&quot;,&quot;c&quot;]<br><strong>输出：</strong> 返回 6 ，输入数组的前 6 个字符应该是：[&quot;a&quot;,&quot;2&quot;,&quot;b&quot;,&quot;2&quot;,&quot;c&quot;,&quot;3&quot;]<br><strong>解释：</strong> &quot;aa&quot; 被 &quot;a2&quot; 替代。&quot;bb&quot; 被 &quot;b2&quot; 替代。&quot;ccc&quot; 被 &quot;c3&quot; 替代。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> chars = [&quot;a&quot;]<br><strong>输出：</strong> 返回 1 ，输入数组的前 1 个字符应该是：[&quot;a&quot;]<br><strong>解释：</strong> 唯一的组是“a”，它保持未压缩，因为它是一个字符。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> chars = [&quot;a&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;b&quot;]<br><strong>输出：</strong> 返回 4 ，输入数组的前 4 个字符应该是：[&quot;a&quot;,&quot;b&quot;,&quot;1&quot;,&quot;2&quot;]。<br><strong>解释：</strong> 由于字符 &quot;a&quot; 不重复，所以不会被压缩。&quot;bbbbbbbbbbbb&quot; 被 “b12” 替代。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= chars.length &lt;= 2000</code></li><li><code>chars[i]</code> 可以是小写英文字母、大写英文字母、数字或符号</li></ul><h2 id="解法" tabindex="-1"><a class="header-anchor" href="#解法"><span>解法</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19)]))}const p=o(a,[["render",n],["__file","string-compression.html.vue"]]),d=JSON.parse('{"path":"/leetcode/leetcode-75/string-compression.html","title":"压缩字符串","lang":"zh-CN","frontmatter":{"description":"压缩字符串 压缩字符串 题目 给你一个字符数组 chars ，请使用下述算法压缩： 从一个空字符串 s 开始。对于 chars 中的每组 连续重复字符 ： 如果这一组长度为 1 ，则将字符追加到 s 中。 否则，需要向 s 追加字符，后跟这一组的长度。 压缩后得到的字符串 s 不应该直接返回 ，需要转储到字符数组 chars 中。需要注意的是，如果组长...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/leetcode/leetcode-75/string-compression.html"}],["meta",{"property":"og:site_name","content":"一切为了更好的自己"}],["meta",{"property":"og:title","content":"压缩字符串"}],["meta",{"property":"og:description","content":"压缩字符串 压缩字符串 题目 给你一个字符数组 chars ，请使用下述算法压缩： 从一个空字符串 s 开始。对于 chars 中的每组 连续重复字符 ： 如果这一组长度为 1 ，则将字符追加到 s 中。 否则，需要向 s 追加字符，后跟这一组的长度。 压缩后得到的字符串 s 不应该直接返回 ，需要转储到字符数组 chars 中。需要注意的是，如果组长..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-24T10:13:49.000Z"}],["meta",{"property":"article:author","content":"憨憨十二"}],["meta",{"property":"article:modified_time","content":"2023-08-24T10:13:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"压缩字符串\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-24T10:13:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"憨憨十二\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目","slug":"题目","link":"#题目","children":[]},{"level":2,"title":"解法","slug":"解法","link":"#解法","children":[]}],"git":{"createdTime":1692872029000,"updatedTime":1692872029000,"contributors":[{"name":"wangkai","email":"wangkai@yqun.com.cn","commits":1}]},"readingTime":{"minutes":1.34,"words":401},"filePathRelative":"leetcode/leetcode-75/string-compression.md","localizedDate":"2023年8月24日","autoDesc":true}');export{p as comp,d as data};