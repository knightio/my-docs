# 基础工具

## curl 

```
curl [options...] <url>
```

默认为GET请求

常用options

|options| 作用 | 示例|
|-|-|-|
|-X / --request|请求方式| -X POST |
|-d / --data| 请求数据 | -d '{"test": 1}' |
|-H / --header|请求头| -H 'Content-Type:application/json'|
|-v / --verbose |显示请求的信息| -v |
|-V / --version |显示版本| -V |