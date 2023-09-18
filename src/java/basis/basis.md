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

## 异常

### Exception 和 Error

- Exception :程序本身可以处理的异常，可以通过 catch 来进行捕获。
  -  Checked Exception (受检查异常，必须处理) 
  -  Unchecked Exception (不受检查异常，可以不处理)。
- Error：Error 属于程序无法处理的错误 ，不建议通过catch捕获 。例如 Java 虚拟机运行错误（Virtual MachineError）、虚拟机内存不够错误(OutOfMemoryError)、类定义错误（NoClassDefFoundError）等 。这些异常发生时，Java 虚拟机（JVM）一般会选择线程终止。
  
### Checked Exception 和 Unchecked Exception

Checked Exception 即 受检查异常 ，Java 代码在编译过程中，如果受检查异常没有被 catch或者throws 关键字处理的话，就没办法通过编译。

除了RuntimeException及其子类以外，其他的Exception类及其子类都属于受检查异常。

RuntimeException 及其子类都统称为非受检查异常

### try-catch-finally 

`try`块：用于捕获异常。其后可接零个或多个 `catch` 块，如果没有 `catch` 块，则必须跟一个 `finally` 块。

`catch`块：用于处理 `try` 捕获到的异常。

`finally` 块：无论是否捕获或处理异常，`finally` 块里的语句都会被执行。当在 `try` 块或 `catch` 块中遇到 `return` 语句时，finally 语句块将在方法返回之前被执行。

> If the try clause executes a return, the compiled code does the following:
> 1. Saves the return value (if any) in a local variable.
> 2. Executes a jsr to the code for the finally clause.
> 3. Upon return from the finally clause, returns the value saved in the local variable.

#### finally 不一定会执行

1. 虚拟机被终止运行
2. 程序所在的线程死亡
3. 关闭 CPU

### try-with-resources

面对必须要关闭的资源，我们总是应该优先使用 try-with-resources 而不是try-finally。随之产生的代码更简短，更清晰，产生的异常对我们也更有用。try-with-resources语句让我们更容易编写必须要关闭的资源的代码，若采用try-finally则几乎做不到这点。

```java
try(
    Scanner scanner = new Scanner(new File("test.txt"))
){

}catch(FileNotFoundException fnfe){

}
```

## 泛型

### 分类

#### 泛型类

```java
public class Test<T>{}

public static class Forth<E,T>{
        E e;
        T t;
}
```

#### 泛型方法

```java
public <T> T Test(T t){}
```

#### 泛型类与方法

泛型类中的类型参数与泛型方法中的类型参数是没有相应的联系的，泛型方法始终以自己定义的类型参数为准

```java
public static class First<T>{
    T t;
    public First(T t) {
        this.t = t;
    }

    public <T> T firstMethod(T t){
        System.out.println(t.getClass());
        return null;
    }

    public T getT() {
        return t;
    }
}

First<String> first = new First<String>("123");
System.out.println(first.getT().getClass().getName());//java.lang.String
first.firstMethod(Integer.valueOf(123));//class java.lang.Integer
```

#### 泛型接口

```java
public interface Iterable<T> {}
```
