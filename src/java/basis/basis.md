# 暂且不知道叫什么

## 基本类型

| 基本类型 | 字节 | 默认值  | 包装类    |
| -------- | ---- | ------- | --------- |
| byte     | 1    | 0       | Byte      |
| short    | 2    | 2       | Short     |
| char     | 2    | 'u0000' | Character |
| int      | 4    | 0       | Integer   |
| float    | 4    | 0f      | Float     |
| long     | 8    | 0L      | Long      |
| double   | 8    | 0d      | Double    |
| boolean  |      | false   | Boolean   |

`boolean` 官方文档未明确定义，依赖于JVMs实现。

### 包装类

基本类型有默认值，包装类默认为null

基本数据类型的局部变量存放在 Java 虚拟机栈中的局部变量表中，基本数据类型的成员变量（未被 static 修饰 ）存放在 Java 虚拟机的堆中。包装类型属于对象类型，我们知道**几乎所有对象实例**都存在于堆中。

> **为什么说是几乎所有对象实例呢？** 
>
> HotSpot 虚拟机引入了 JIT 优化之后，会对对象进行逃逸分析，如果发现某一个对象并没有逃逸到方法外部，那么就可能通过标量替换来实现**栈上分配**，而避免堆上分配内存。

#### 常量池

| 类型                    | 范围       |
| ----------------------- | ---------- |
| Byte,Short,Integer,Long | [-128,127] |
| Character               | [0,127]    |
| Boolean                 | True,False |
