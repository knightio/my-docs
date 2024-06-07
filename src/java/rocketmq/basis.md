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

