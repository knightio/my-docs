# Podman

docker的替代？

1. rootless模式
2. 无守护线程

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
podman run -d -p 80:80 -p 443:443 
--name mynginx 
-v /usr/local/podman/nginx/html:/usr/share/nginx/html 
-v /usr/local/podman/nginx/conf/nginx.conf:/etc/nginx/nginx.conf  
-v /usr/local/podman/nginx/conf/conf.d:/etc/nginx/conf.d  
-v /usr/local/podman/nginx/logs:/var/log/nginx  
-v /usr/local/ssl:/etc/nginx/ssl nginx 
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

添加 `-label "io.containers.autoupdate:registry"`

```shell
podman run --label "io.containers.autoupdate=registry" podname
```

```shell
systemctl --now enable container-podname.service
```

```shell
podman auto-update
```

