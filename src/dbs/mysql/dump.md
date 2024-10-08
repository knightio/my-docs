---
title: dump
order: 2
---
从全库备份中抽取出t表的表结构
```shell
sed -e'/./{H;$!d;}' -e 'x;/CREATE TABLE `t`/!d;q' dump.sql
```

从全库备份中抽取出t表的内容

```shell
grep  'INSERT INTO `t`' dump.sql


grep -C 3  'INSERT INTO `t`' dump.sql
```