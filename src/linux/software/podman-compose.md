# podman-compose

## dockerfile

### 构成

- FROM：指定基础镜像
- MAINTAINER：镜像维护者姓名及邮箱地址
- RUN：容器构建时需要运行的命令
- EXPOSE：当前容器对外暴露的端口号
- WORKDIR：指定在创建容器后，终端默认登录进来的工作目录
- ENV：用来在构建镜像过程中设置环境变量
- ADD：将宿主机目录下的文件拷贝进镜像，ADD命令会自动处理URL和解压tar压缩包
- COPY：拷贝文件、目录到镜像中。具体是将从构建上下文目录中`<src原路径>`的文件或目录复制到新一层镜像的`<目标路径>`位置 ，有两种写法：COPY src dest 或者 COPY ["src", "dest"]
- VOLUME：容器数据卷，用于数据保存和持久化工作
- CMD：指定一个容器启动时要运行的命令

  - 注意DockerFile中可以有多个CMD指令，但只有最后一个在启动时生效，CMD会被 docker run 之后的命令或参数覆盖
  - CMD指令的格式和RUN相似，也是两种格式：

    - shell格式：`CMD <命令>`
    - exec格式：`CMD ["可执行文件", "参数1", "参数2" ...]`
- 参数列表格式：`CMD ["参数1", "参数2", ...]`，在指定了ENTRYPOINT 指令后，用CMD指定具体的参数。

- ENTRYPOINT：指定一个容器启动时要运行的命令，与CMD一样都是在指定容器启动程序及参数（下面通过实例2将他们的区别）。
- ONBUILD：当构建一个被继承的DockerFile时运行命令， 父镜像在被子镜像继承后，父镜像的ONBUILD被触发。

### example

- ohttps

```
FROM nginx:stable-alpine
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
ENTRYPOINT ["./push-node-alpine-x64", "--node-id=push-mlyxpro7vo0ez6jw", "--node-token=b4f2f70c85466671bc06d7f1f469395d", "--cert-folder=/etc/nginx/certificates/", "--service-start-cmd='nginx'", "--service-reload-cmd='mv -f /etc/nginx/certificates/cert-dyq1zry59w307lgn/cert.key /etc/nginx/ssl/becurious.cn.key && mv -f /etc/nginx/certificates/cert-dyq1zry59w307lgn/fullchain.cer /etc/nginx/ssl/becurious.cn.pem &&  nginx -s reload'"]
```
