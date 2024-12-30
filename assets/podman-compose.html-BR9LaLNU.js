import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as o,o as n}from"./app-WJVEwWvE.js";const l={};function a(c,e){return n(),i("div",null,e[0]||(e[0]=[o(`<h1 id="podman-compose" tabindex="-1"><a class="header-anchor" href="#podman-compose"><span>podman-compose</span></a></h1><h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile"><span>dockerfile</span></a></h2><h3 id="构成" tabindex="-1"><a class="header-anchor" href="#构成"><span>构成</span></a></h3><ul><li><p>FROM：指定基础镜像</p></li><li><p>MAINTAINER：镜像维护者姓名及邮箱地址</p></li><li><p>RUN：容器构建时需要运行的命令</p></li><li><p>EXPOSE：当前容器对外暴露的端口号</p></li><li><p>WORKDIR：指定在创建容器后，终端默认登录进来的工作目录</p></li><li><p>ENV：用来在构建镜像过程中设置环境变量</p></li><li><p>ADD：将宿主机目录下的文件拷贝进镜像，ADD命令会自动处理URL和解压tar压缩包</p></li><li><p>COPY：拷贝文件、目录到镜像中。具体是将从构建上下文目录中<code>&lt;src原路径&gt;</code>的文件或目录复制到新一层镜像的<code>&lt;目标路径&gt;</code>位置 ，有两种写法：COPY src dest 或者 COPY [&quot;src&quot;, &quot;dest&quot;]</p></li><li><p>VOLUME：容器数据卷，用于数据保存和持久化工作</p></li><li><p>CMD：指定一个容器启动时要运行的命令</p><ul><li><p>注意DockerFile中可以有多个CMD指令，但只有最后一个在启动时生效，CMD会被 docker run 之后的命令或参数覆盖</p></li><li><p>CMD指令的格式和RUN相似，也是两种格式：</p><ul><li>shell格式：<code>CMD &lt;命令&gt;</code></li><li>exec格式：<code>CMD [&quot;可执行文件&quot;, &quot;参数1&quot;, &quot;参数2&quot; ...]</code></li></ul></li></ul></li><li><p>参数列表格式：<code>CMD [&quot;参数1&quot;, &quot;参数2&quot;, ...]</code>，在指定了ENTRYPOINT 指令后，用CMD指定具体的参数。</p></li><li><p>ENTRYPOINT：指定一个容器启动时要运行的命令，与CMD一样都是在指定容器启动程序及参数（下面通过实例2将他们的区别）。</p></li><li><p>ONBUILD：当构建一个被继承的DockerFile时运行命令， 父镜像在被子镜像继承后，父镜像的ONBUILD被触发。</p></li></ul><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>example</span></a></h3><ul><li>ohttps</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>FROM nginx:stable-alpine
# 删除官方容器镜像中的默认日志
# 否则启动nginx命令会报日志权限异常
RUN unlink /var/log/nginx/access.log
RUN unlink /var/log/nginx/error.log
# 设置当前工作文件夹
WORKDIR /etc/nginx
# 复制push-node二进制包
COPY /root/push-node-alpine-x64 .
# 为push-node添加可执行权限
RUN chmod a+x ./push-node-alpine-x64
# 设置容器启动命令
ENTRYPOINT [&quot;./push-node-alpine-x64&quot;, &quot;--node-id=push-mlyxpro7vo0ez6jw&quot;, &quot;--node-token=b4f2f70c85466671bc06d7f1f469395d&quot;, &quot;--cert-folder=/etc/nginx/certificates/&quot;, &quot;--service-start-cmd=&#39;nginx&#39;&quot;, &quot;--service-reload-cmd=&#39;mv -f /etc/nginx/certificates/cert-dyq1zry59w307lgn/cert.key /etc/nginx/ssl/becurious.cn.key &amp;&amp; mv -f /etc/nginx/certificates/cert-dyq1zry59w307lgn/fullchain.cer /etc/nginx/ssl/becurious.cn.pem &amp;&amp;  nginx -s reload&#39;&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const s=t(l,[["render",a],["__file","podman-compose.html.vue"]]),d=JSON.parse('{"path":"/linux/software/podman-compose.html","title":"podman-compose","lang":"zh-CN","frontmatter":{"description":"podman-compose dockerfile 构成 FROM：指定基础镜像 MAINTAINER：镜像维护者姓名及邮箱地址 RUN：容器构建时需要运行的命令 EXPOSE：当前容器对外暴露的端口号 WORKDIR：指定在创建容器后，终端默认登录进来的工作目录 ENV：用来在构建镜像过程中设置环境变量 ADD：将宿主机目录下的文件拷贝进镜像，ADD...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/my-docs/linux/software/podman-compose.html"}],["meta",{"property":"og:site_name","content":"一切为了更好的自己"}],["meta",{"property":"og:title","content":"podman-compose"}],["meta",{"property":"og:description","content":"podman-compose dockerfile 构成 FROM：指定基础镜像 MAINTAINER：镜像维护者姓名及邮箱地址 RUN：容器构建时需要运行的命令 EXPOSE：当前容器对外暴露的端口号 WORKDIR：指定在创建容器后，终端默认登录进来的工作目录 ENV：用来在构建镜像过程中设置环境变量 ADD：将宿主机目录下的文件拷贝进镜像，ADD..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-27T03:17:50.000Z"}],["meta",{"property":"article:author","content":"憨憨十二"}],["meta",{"property":"article:modified_time","content":"2024-05-27T03:17:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"podman-compose\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-27T03:17:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"憨憨十二\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"dockerfile","slug":"dockerfile","link":"#dockerfile","children":[{"level":3,"title":"构成","slug":"构成","link":"#构成","children":[]},{"level":3,"title":"example","slug":"example","link":"#example","children":[]}]}],"git":{"createdTime":1716779870000,"updatedTime":1716779870000,"contributors":[{"name":"consen3464","email":"wangkai@consen.net","commits":1}]},"readingTime":{"minutes":1.79,"words":536},"filePathRelative":"linux/software/podman-compose.md","localizedDate":"2024年5月27日","autoDesc":true}');export{s as comp,d as data};