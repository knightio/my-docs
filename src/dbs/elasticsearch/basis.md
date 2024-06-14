# 基础

## 定义

|关系型数据库 RDB|Elasticsearch|
|-|-|
|数据库 database |索引 index|
|表 table |类型 type|
|行 rows|文档 documents|
|字段 column|字段 fields|
|字段属性、键 |映射 mapping|

## 增删改查

### 添加

#### 添加类型



### 查询

查询所有索引 (Index)
```
GET

localhost:9200/_cat/indices
```

查询索引信息
```
POST

localhost:9200/cs_task_message/
```

查询类型 (Type)
```
POST

localhost:9200/cs_task_message/_search
```

### 删除

```
DELETE

localhost:9200/name
```