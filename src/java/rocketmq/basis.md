# docker 启动！

```
version: '3.8'
services:
  namesrv:
    image: apache/rocketmq:5.2.0
    container_name: rmqnamesrv
    ports:
      - 9876:9876
    environment:
      - "MAX_POSSIBLE_HEAP=1024m"
      - TZ=Asia/Shanghai
    volumes:
      - /home/lighthouse/podman/rocketmq/namesrv/logs:/home/rocketmq/logs
    networks:
      - rocketmq
    command: sh mqnamesrv
  broker:
    image: apache/rocketmq:5.2.0
    container_name: rmqbroker
    ports:
      - 10909:10909
      - 10911:10911
      - 10912:10912
    volumes:
      - /home/lighthouse/podman/rocketmq/broker/logs:/home/rocketmq/logs
      - /home/lighthouse/podman/rocketmq/broker/store:/home/rocketmq/store
      - /home/lighthouse/podman/rocketmq/broker/conf:/home/rocketmq/conf
    environment:
      - NAMESRV_ADDR=rmqnamesrv:9876
      - "MAX_POSSIBLE_HEAP=1024m"
      - TZ=Asia/Shanghai
    depends_on:
      - namesrv
    networks:
      - rocketmq
    command: sh mqbroker -c /home/rocketmq/conf/broker.conf
  proxy:
    image: apache/rocketmq:5.2.0
    container_name: rmqproxy
    networks:
      - rocketmq
    depends_on:
      - broker
      - namesrv
    ports:
      - 8080:8080
      - 8081:8081
    environment:
      - NAMESRV_ADDR=rmqnamesrv:9876
      - "MAX_POSSIBLE_HEAP=1024m"
      - TZ=Asia/Shanghai
    command: ./mqproxy
networks:
  rocketmq:
    driver: bridge
```

broker.conf
```
# nameServer 地址多个用;隔开 默认值null
# 例：127.0.0.1:6666;127.0.0.1:8888 
namesrvAddr = 10.89.1.2:9876
# 集群名称
brokerClusterName = DefaultCluster
# 节点名称
brokerName = broker-a
# broker id节点ID， 0 表示 master, 其他的正整数表示 slave，不能小于0 
brokerId = 0
# Broker服务地址	String	内部使用填内网ip，如果是需要给外部使用填公网ip
brokerIP1 = 10.89.1.2
# Broker角色
brokerRole = ASYNC_MASTER
# 刷盘方式
flushDiskType = ASYNC_FLUSH
# 在每天的什么时间删除已经超过文件保留时间的 commit log，默认值04
deleteWhen = 04
# 以小时计算的文件保留时间 默认值72小时
fileReservedTime = 72
# 是否允许Broker 自动创建Topic，建议线下开启，线上关闭
autoCreateTopicEnable=true
# 是否允许Broker自动创建订阅组，建议线下开启，线上关闭
autoCreateSubscriptionGroup=true
```
