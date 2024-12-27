import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as e,o as t}from"./app-DZr1m2BJ.js";const p={};function o(c,n){return t(),s("div",null,n[0]||(n[0]=[e(`<h1 id="spring" tabindex="-1"><a class="header-anchor" href="#spring"><span>Spring</span></a></h1><h2 id="web请求数据绑定" tabindex="-1"><a class="header-anchor" href="#web请求数据绑定"><span>web请求数据绑定</span></a></h2><p>HandlerMethodArgumentResolverComposite.resolveArgument() -&gt;</p><hr><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get"><span>GET</span></a></h3><p>ModelAttributeMethodProcessor.resolveArgument() -&gt;</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">WebDataBinder</span> binder <span class="token operator">=</span> binderFactory<span class="token punctuation">.</span><span class="token function">createBinder</span><span class="token punctuation">(</span>webRequest<span class="token punctuation">,</span> attribute<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>binder<span class="token punctuation">.</span><span class="token function">getTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>mavContainer<span class="token punctuation">.</span><span class="token function">isBindingDisabled</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">bindRequestParameters</span><span class="token punctuation">(</span>binder<span class="token punctuation">,</span> webRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ServletModelAttributeMethodProcessor.bindRequestParameters() -&gt;</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>servletBinder<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>servletRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ServletRequestDataBinder.bind() -&gt;</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">MutablePropertyValues</span> mpvs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServletRequestParameterPropertyValues</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取get请求的参数</span>
<span class="token class-name">MultipartRequest</span> multipartRequest <span class="token operator">=</span> <span class="token class-name">WebUtils</span><span class="token punctuation">.</span><span class="token function">getNativeRequest</span><span class="token punctuation">(</span>requestMultipartRequest<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>multipartRequest <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">bindMultipart</span><span class="token punctuation">(</span>multipartRequest<span class="token punctuation">.</span><span class="token function">getMultiFileMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mpvs<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">addBindValues</span><span class="token punctuation">(</span>mpvs<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">doBind</span><span class="token punctuation">(</span>mpvs<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 绑定</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>RequestResponseBodyMethodProcessor.resolveArgument() -&gt;</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>parameter <span class="token operator">=</span> parameter<span class="token punctuation">.</span><span class="token function">nestedIfOptional</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Object</span> arg <span class="token operator">=</span> <span class="token function">readWithMessageConverters</span><span class="token punctuation">(</span>webRequest<span class="token punctuation">,</span> parameter<span class="token punctuation">,</span><span class="token function">parametergetNestedGenericParameterType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//已将请求body数据，转为对象</span>
<span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token class-name">Conventions</span><span class="token punctuation">.</span><span class="token function">getVariableNameForParameter</span><span class="token punctuation">(</span>parameter<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>binderFactory <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> 
    <span class="token class-name">WebDataBinder</span> binder <span class="token operator">=</span> binderFactory<span class="token punctuation">.</span><span class="token function">createBinder</span><span class="token punctuation">(</span>webRequest<span class="token punctuation">,</span> arg<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>RequestResponseBodyMethodProcessor.readWithMessageConverters() -&gt; AbstractMessageConverterMethodArgumentResolver.readWithMessageConverters()</p>`,15)]))}const r=a(p,[["render",o],["__file","demo.html.vue"]]),u=JSON.parse('{"path":"/java/spring/demo.html","title":"Spring","lang":"zh-CN","frontmatter":{"description":"Spring web请求数据绑定 HandlerMethodArgumentResolverComposite.resolveArgument() -> GET ModelAttributeMethodProcessor.resolveArgument() -> ServletModelAttributeMethodProcessor.bindRequ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java/spring/demo.html"}],["meta",{"property":"og:site_name","content":"一切为了更好的自己"}],["meta",{"property":"og:title","content":"Spring"}],["meta",{"property":"og:description","content":"Spring web请求数据绑定 HandlerMethodArgumentResolverComposite.resolveArgument() -> GET ModelAttributeMethodProcessor.resolveArgument() -> ServletModelAttributeMethodProcessor.bindRequ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-24T10:13:55.000Z"}],["meta",{"property":"article:author","content":"憨憨十二"}],["meta",{"property":"article:modified_time","content":"2023-08-24T10:13:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-24T10:13:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"憨憨十二\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"web请求数据绑定","slug":"web请求数据绑定","link":"#web请求数据绑定","children":[{"level":3,"title":"GET","slug":"get","link":"#get","children":[]}]}],"git":{"createdTime":1692872035000,"updatedTime":1692872035000,"contributors":[{"name":"wangkai","email":"wangkai@yqun.com.cn","commits":1}]},"readingTime":{"minutes":0.34,"words":102},"filePathRelative":"java/spring/demo.md","localizedDate":"2023年8月24日","autoDesc":true}');export{r as comp,u as data};