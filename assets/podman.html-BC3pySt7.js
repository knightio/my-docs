import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as n,o as i}from"./app-DZr1m2BJ.js";const t={};function l(r,a){return i(),s("div",null,a[0]||(a[0]=[n(`<h1 id="podman" tabindex="-1"><a class="header-anchor" href="#podman"><span>Podman</span></a></h1><p>docker的替代？</p><ol><li>rootless模式</li><li>无守护线程</li></ol><h2 id="配置镜像地址" tabindex="-1"><a class="header-anchor" href="#配置镜像地址"><span>配置镜像地址</span></a></h2><p><strong>修改文件</strong></p><ul><li><p>全局镜像：<code>/etc/containers/registries.conf</code></p></li><li><p>用户镜像：<code>~/.config/containers/registries.conf</code></p></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>unqualified-search-registries = [&quot;docker.io&quot;, &quot;registry.access.redhat.com&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="拉取镜像" tabindex="-1"><a class="header-anchor" href="#拉取镜像"><span>拉取镜像</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">podman</span> pull podname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="运行容器" tabindex="-1"><a class="header-anchor" href="#运行容器"><span>运行容器</span></a></h2><p>如果本地没有容器镜像，会自动拉去对应镜像</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">podman</span> run podname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="简单案例" tabindex="-1"><a class="header-anchor" href="#简单案例"><span>简单案例</span></a></h2><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>nginx</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">podman</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">-p</span> <span class="token number">443</span>:443 <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> mynginx  <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/podman/nginx/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/podman/nginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/podman/nginx/conf/conf.d:/etc/nginx/conf.d <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/podman/nginx/logs:/var/log/nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/ssl:/etc/nginx/ssl <span class="token punctuation">\\</span>
nginx 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>redis</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">podman</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token parameter variable">--name</span> myredis
<span class="token parameter variable">-v</span> /usr/local/podman/redis/conf/redis.conf:/usr/local/etc/reids/redis.conf
<span class="token parameter variable">-v</span> /usr/local/podman/redis/data:/data
redis redis-server /usr/local/etc/redis/reids.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看pod" tabindex="-1"><a class="header-anchor" href="#查看pod"><span>查看pod</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">podman</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等于</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">podman</span> container <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看配置信息" tabindex="-1"><a class="header-anchor" href="#查看配置信息"><span>查看配置信息</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">podman</span> inspect podname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="访问pod内部" tabindex="-1"><a class="header-anchor" href="#访问pod内部"><span>访问pod内部</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">podman</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> podname bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="podman服务自启" tabindex="-1"><a class="header-anchor" href="#podman服务自启"><span>podman服务自启</span></a></h2><p>文件映射是尽量为全路径</p><p>systemd 文件位置： <code>/etc/systemd/system/</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">podman</span> generate systemd <span class="token parameter variable">--files</span> <span class="token parameter variable">--name</span> podname <span class="token parameter variable">--new</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> container-podname.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等于</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> container-podname.service
systemctl start container-podname.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rootless" tabindex="-1"><a class="header-anchor" href="#rootless"><span>rootless</span></a></h3><p>配置(是否需要)</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">XDG_RUNTIME_DIR</span></span><span class="token operator">=</span><span class="token string">&quot;/run/user/<span class="token environment constant">$UID</span>&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">DBUS_SESSION_BUS_ADDRESS</span></span><span class="token operator">=</span><span class="token string">&quot;unix:path=<span class="token variable">\${<span class="token environment constant">XDG_RUNTIME_DIR</span>}</span>/bus&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>加 <code>--user</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl <span class="token parameter variable">--user</span> <span class="token parameter variable">--now</span> <span class="token builtin class-name">enable</span> container-podname.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="更新pod" tabindex="-1"><a class="header-anchor" href="#更新pod"><span>更新pod</span></a></h2><p>添加 <code>--label &quot;io.containers.autoupdate=registry&quot;</code> //todo 或？ <code>--label &quot;io.containers.autoupdate=image&quot;</code></p><p>需保证run/pull时为镜像全路径</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># docker.io/library/nginx</span>
<span class="token function">podman</span> run <span class="token parameter variable">--label</span> <span class="token string">&quot;io.containers.autoupdate=registry&quot;</span> docker.io/podname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl <span class="token parameter variable">--now</span> <span class="token builtin class-name">enable</span> container-podname.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">podman</span> auto-update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="疑难杂症" tabindex="-1"><a class="header-anchor" href="#疑难杂症"><span>疑难杂症</span></a></h2><h3 id="wsl2-显示-warn-0000-is-not-a-shared-mount-this-could-cause-issues-or-missing-mounts-with-rootless-containers" tabindex="-1"><a class="header-anchor" href="#wsl2-显示-warn-0000-is-not-a-shared-mount-this-could-cause-issues-or-missing-mounts-with-rootless-containers"><span>wsl2 显示 WARN[0000] &quot;/&quot; is not a shared mount, this could cause issues or missing mounts with rootless containers</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ findmnt <span class="token parameter variable">-o</span> PROPAGATION /
PROPAGATION
shared
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mount</span> --make-rshared /
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,48)]))}const c=e(t,[["render",l],["__file","podman.html.vue"]]),p=JSON.parse('{"path":"/linux/software/podman.html","title":"Podman","lang":"zh-CN","frontmatter":{"description":"Podman docker的替代？ rootless模式 无守护线程 配置镜像地址 修改文件 全局镜像：/etc/containers/registries.conf 用户镜像：~/.config/containers/registries.conf 拉取镜像 运行容器 如果本地没有容器镜像，会自动拉去对应镜像 简单案例 nginx redis 查看p...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/linux/software/podman.html"}],["meta",{"property":"og:site_name","content":"一切为了更好的自己"}],["meta",{"property":"og:title","content":"Podman"}],["meta",{"property":"og:description","content":"Podman docker的替代？ rootless模式 无守护线程 配置镜像地址 修改文件 全局镜像：/etc/containers/registries.conf 用户镜像：~/.config/containers/registries.conf 拉取镜像 运行容器 如果本地没有容器镜像，会自动拉去对应镜像 简单案例 nginx redis 查看p..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-27T03:17:50.000Z"}],["meta",{"property":"article:author","content":"憨憨十二"}],["meta",{"property":"article:modified_time","content":"2024-05-27T03:17:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Podman\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-27T03:17:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"憨憨十二\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"配置镜像地址","slug":"配置镜像地址","link":"#配置镜像地址","children":[]},{"level":2,"title":"拉取镜像","slug":"拉取镜像","link":"#拉取镜像","children":[]},{"level":2,"title":"运行容器","slug":"运行容器","link":"#运行容器","children":[]},{"level":2,"title":"简单案例","slug":"简单案例","link":"#简单案例","children":[{"level":3,"title":"nginx","slug":"nginx","link":"#nginx","children":[]},{"level":3,"title":"redis","slug":"redis","link":"#redis","children":[]}]},{"level":2,"title":"查看pod","slug":"查看pod","link":"#查看pod","children":[]},{"level":2,"title":"查看配置信息","slug":"查看配置信息","link":"#查看配置信息","children":[]},{"level":2,"title":"访问pod内部","slug":"访问pod内部","link":"#访问pod内部","children":[]},{"level":2,"title":"podman服务自启","slug":"podman服务自启","link":"#podman服务自启","children":[{"level":3,"title":"rootless","slug":"rootless","link":"#rootless","children":[]}]},{"level":2,"title":"更新pod","slug":"更新pod","link":"#更新pod","children":[]},{"level":2,"title":"疑难杂症","slug":"疑难杂症","link":"#疑难杂症","children":[{"level":3,"title":"wsl2 显示 WARN[0000] \\"/\\" is not a shared mount, this could cause issues or missing mounts with rootless containers","slug":"wsl2-显示-warn-0000-is-not-a-shared-mount-this-could-cause-issues-or-missing-mounts-with-rootless-containers","link":"#wsl2-显示-warn-0000-is-not-a-shared-mount-this-could-cause-issues-or-missing-mounts-with-rootless-containers","children":[]}]}],"git":{"createdTime":1699343281000,"updatedTime":1716779870000,"contributors":[{"name":"hanhan12","email":"1607077440@qq.com","commits":3},{"name":"consen3464","email":"wangkai@consen.net","commits":2}]},"readingTime":{"minutes":1.06,"words":318},"filePathRelative":"linux/software/podman.md","localizedDate":"2023年11月7日","autoDesc":true}');export{c as comp,p as data};