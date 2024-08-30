# drone

## 与gitea 集成

启动

```
docker run \
  --volume=/home/data/drone/data:/data \
  --env=DRONE_GITEA_SERVER=https://try.gitea.io \
  --env=DRONE_GITEA_CLIENT_ID=05136e57d80189bef462 \
  --env=DRONE_GITEA_CLIENT_SECRET=7c229228a77d2cbddaa61ddc78d45e \
  --env=DRONE_RPC_SECRET=super-duper-secret \
  --env=DRONE_SERVER_HOST=drone.company.com \
  --env=DRONE_SERVER_PROTO=https 
  --env=DRONE_USER_CREATE=username:gitea,admin:true \
  --publish=9999:80 \
  --restart=always \
  --detach=true \
  --name=drone \
  drone/drone:2
```

- DRONE_GITEA_CLIENT_ID
  
    必填项，提供你在上一步中生成的 Gitea OAuth Client ID。

- DRONE_GITEA_CLIENT_SECRET
  
    必填项，提供你在上一步中生成的 Gitea OAuth Client Secret。

- DRONE_GITEA_SERVER
  
    必填项，提供你的 Gitea 服务器地址。例如 https://gitea.company.com，注意 http(s)，否则你会看到来自 Gitea 的「不支持的协议方案（unsupported protocol scheme）」错误。

- DRONE_GIT_ALWAYS_AUTH
  
    可选项，配置值为布尔值，用于配置 Drone 在克隆公共存储库时是否进行身份验证。

- DRONE_RPC_SECRET
  
    必填项，提供在上一步中生成的共享密钥。这用于验证 Server 和 Runner 之间的 rpc 连接。必须为 Server 和 Runner 提供相同的秘密值。

- DRONE_SERVER_HOST
  
    必填项，提供你的外部主机名或 IP 地址，例如 drone.company.com。如果使用 IP 地址，你可以包括端口。

- DRONE_SERVER_PROTO
  
    必填项，提供你的外部协议方案。此值应设置为 http 或 https。如果你配置 ssl 或 acme，此字段默认为 https。如果你将 Drone 部署在负载均衡或带有禁止 SSL 的反向代理后面，则此值应设置为 https。

- DRONE_USER_CREATE
    
    应在启动时创建的可选用户帐户。默认帐户为管理员帐户。它可以是真实帐户（即真实的 GitHub 用户），也可以是机器帐户。

    >trusted 需要登录admin账号