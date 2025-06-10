
```
systemctl status firewalld
```

- firewall-cmd

```
--get-default-zone∶ 显示当前默认区域
--set-default-zone=<zone>∶设置默认区域

--get-active-zones ∶ 显示当前正在使用的区域及其对应的网卡接口
--get-zones∶ 显示所有可用的区域

--get-zone-of-interface=<interface>∶ 显示指定接口绑定的区域
--zone=<zone> --add-interface=<interface>∶ 为指定接口绑定区域
--zone=<zone> --change-interface=<interface>∶为指定的区域更改绑定的网络接口
--zone=<zone> --remove-interface=<interface>∶ 为指定的区域删除绑定的网络接口
```

```
[--zone=<zone>] --list-all ∶ 显示所有指定区域的所有规则，省略--zone=<zone>时表示仅对默认区域操作

[--zone=<zone>] --list-services ; 显示指定区域内 允许访问的所有服务
[--zone=<zone>] --add-service=<service> ∶ 为指定区域设置允许访问的某项服务
[--zone=<zone>] --remove-service=<service> ∶ 删除指定区域已设置的允许访问的某项服务
```


```
[--zone=<zone>] --list-all ∶ 显示所有指定区域的所有规则，省略--zone=<zone>时表示仅对默认区域操作

[--zone=<zone>] --list-services ; 显示指定区域内 允许访问的所有服务
[--zone=<zone>] --add-service=<service> ∶ 为指定区域设置允许访问的某项服务
[--zone=<zone>] --remove-service=<service> ∶ 删除指定区域已设置的允许访问的某项服务
```

