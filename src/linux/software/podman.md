# Podman

docker的替代？

1. rootless模式
2. 无守护线程

## 配置镜像地址

**修改文件**

- 全局镜像：`/etc/containers/registries.conf`

- 用户镜像：`~/.config/containers/registries.conf`

```
unqualified-search-registries = ["docker.io", "registry.access.redhat.com"]
```

## 拉取镜像

```shell
podman pull podname
```

## 运行容器

如果本地没有容器镜像，会自动拉去对应镜像

```shell
podman run podname
```

## 简单案例

### nginx

```shell
podman run -d -p 80:80 -p 443:443 \
--name mynginx  \
-v /usr/local/podman/nginx/html:/usr/share/nginx/html \
-v /usr/local/podman/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /usr/local/podman/nginx/conf/conf.d:/etc/nginx/conf.d \
-v /usr/local/podman/nginx/logs:/var/log/nginx \
-v /usr/local/ssl:/etc/nginx/ssl \
nginx 
```

### redis

```shell
podman run -d -p 6379:6379 --name myredis
-v /usr/local/podman/redis/conf/redis.conf:/usr/local/etc/reids/redis.conf
-v /usr/local/podman/redis/data:/data
redis redis-server /usr/local/etc/redis/reids.conf
```

## 查看pod

```shell
podman ps -a
```

等于

```shell
podman container -a
```

## 查看配置信息

```shell
podman inspect podname
```

## 访问pod内部

```shell
podman exec -it podname bin/bash
```

## podman服务自启

文件映射是尽量为全路径

systemd 文件位置： `/etc/systemd/system/`

```shell
podman generate systemd --files --name podname --new
```

```shell
systemctl enable --now container-podname.service
```

等于

```shell
systemctl enable container-podname.service
systemctl start container-podname.service
```

### rootless

配置(是否需要)
```shell
export XDG_RUNTIME_DIR="/run/user/$UID"
export DBUS_SESSION_BUS_ADDRESS="unix:path=${XDG_RUNTIME_DIR}/bus"
```

加 `--user`
```shell
systemctl --user --now enable container-podname.service
```

## 更新pod

添加 `--label "io.containers.autoupdate=registry"`
//todo
或？
`--label "io.containers.autoupdate=image"`

需保证run/pull时为镜像全路径

```shell
# docker.io/library/nginx
podman run --label "io.containers.autoupdate=registry" docker.io/podname
```

```shell
systemctl --now enable container-podname.service
```

```shell
podman auto-update
```

## 疑难杂症

### wsl2 显示 WARN[0000] "/" is not a shared mount, this could cause issues or missing mounts with rootless containers

```shell
$ findmnt -o PROPAGATION /
PROPAGATION
shared
```

解决

```shell
sudo mount --make-rshared /
```