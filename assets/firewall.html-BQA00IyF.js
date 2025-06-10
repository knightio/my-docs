import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,b as i,o as l}from"./app-B9MCLd9g.js";const a={};function s(r,e){return l(),n("div",null,e[0]||(e[0]=[i(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>systemctl status firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>firewall-cmd</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>--get-default-zone∶ 显示当前默认区域
--set-default-zone=&lt;zone&gt;∶设置默认区域

--get-active-zones ∶ 显示当前正在使用的区域及其对应的网卡接口
--get-zones∶ 显示所有可用的区域

--get-zone-of-interface=&lt;interface&gt;∶ 显示指定接口绑定的区域
--zone=&lt;zone&gt; --add-interface=&lt;interface&gt;∶ 为指定接口绑定区域
--zone=&lt;zone&gt; --change-interface=&lt;interface&gt;∶为指定的区域更改绑定的网络接口
--zone=&lt;zone&gt; --remove-interface=&lt;interface&gt;∶ 为指定的区域删除绑定的网络接口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[--zone=&lt;zone&gt;] --list-all ∶ 显示所有指定区域的所有规则，省略--zone=&lt;zone&gt;时表示仅对默认区域操作

[--zone=&lt;zone&gt;] --list-services ; 显示指定区域内 允许访问的所有服务
[--zone=&lt;zone&gt;] --add-service=&lt;service&gt; ∶ 为指定区域设置允许访问的某项服务
[--zone=&lt;zone&gt;] --remove-service=&lt;service&gt; ∶ 删除指定区域已设置的允许访问的某项服务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[--zone=&lt;zone&gt;] --list-all ∶ 显示所有指定区域的所有规则，省略--zone=&lt;zone&gt;时表示仅对默认区域操作

[--zone=&lt;zone&gt;] --list-services ; 显示指定区域内 允许访问的所有服务
[--zone=&lt;zone&gt;] --add-service=&lt;service&gt; ∶ 为指定区域设置允许访问的某项服务
[--zone=&lt;zone&gt;] --remove-service=&lt;service&gt; ∶ 删除指定区域已设置的允许访问的某项服务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const c=t(a,[["render",s],["__file","firewall.html.vue"]]),m=JSON.parse('{"path":"/linux/software/firewall.html","title":"","lang":"zh-CN","frontmatter":{"description":"firewall-cmd","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/my-docs/linux/software/firewall.html"}],["meta",{"property":"og:site_name","content":"一切为了更好的自己"}],["meta",{"property":"og:description","content":"firewall-cmd"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-06-10T05:57:39.000Z"}],["meta",{"property":"article:author","content":"憨憨十二"}],["meta",{"property":"article:modified_time","content":"2025-06-10T05:57:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-06-10T05:57:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"憨憨十二\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1749535059000,"updatedTime":1749535059000,"contributors":[{"name":"consen3464","email":"wangkai@consen.net","commits":1}]},"readingTime":{"minutes":1.08,"words":324},"filePathRelative":"linux/software/firewall.md","localizedDate":"2025年6月10日","autoDesc":true}');export{c as comp,m as data};
