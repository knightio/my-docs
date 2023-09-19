# 乱锅炖

未分类

## 注入

### bean名称

默认首字母小写的驼峰命名法

```java
@Bean
public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception
{
    String typeAliasesPackage = env.getProperty("mybatis.typeAliasesPackage");
    String mapperLocations = env.getProperty("mybatis.mapperLocations");
    String configLocation = env.getProperty("mybatis.configLocation");
    typeAliasesPackage = setTypeAliasesPackage(typeAliasesPackage);
    VFS.addImplClass(SpringBootVFS.class);

    final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
    sessionFactory.setDataSource(dataSource);
    sessionFactory.setTypeAliasesPackage(typeAliasesPackage);
    sessionFactory.setMapperLocations(resolveMapperLocations(StringUtils.split(mapperLocations, ",")));
    sessionFactory.setConfigLocation(new DefaultResourceLoader().getResource(configLocation));
    return sessionFactory.getObject();
}

@Bean
@ConfigurationProperties("spring.datasource.druid")
public DataSource MasterDataSource(DruidProperties druidProperties)
{
    DruidDataSource dataSource = DruidDataSourceBuilder.create().build();
    return druidProperties.dataSource(dataSource);
}
```

### @Bean 和 @Component的区别

1. 作用对象不同：`@Component` 注解作用于类，而 `@Bean` 注解作用于方法
2. `@Component` 通常是通过路径扫描来自动侦测以及自动装配到 Spring 容器中(我们可以使用 `@ComponentScan` 注解定义要扫描的路径从中找出标识了需要装配的类自动装配到 Spring 的 bean 容器中)。  
   `@Bean` 注解通常是我们在标有该注解的方法中定义产生这个 bean，`@Bean` 告诉了 Spring 这是某个类的实例，当我们需要用它的时候还给我。
3. `@Bean` 注解比 `@Component` 注解的自定义性更强，而且很多地方我们只能通过 `@Bean` 注解来注册 bean。比如当我们引用第三方库中的类需要装配到 Spring 容器时，只能通过 `@Bean` 来实现。

### @Configuration ：配置类注解

```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Component
public @interface Configuration {

	@AliasFor(annotation = Component.class)
	String value() default "";

	boolean proxyBeanMethods() default true;

	boolean enforceUniqueMethods() default true;
}
```

约束：
- 配置类必须以类的方式提供(比如不能是由工厂方法返回的实例)。
- 配置类必须是非 final 的。
- 配置类必须是非本地的(即可能不在方法中声明)，native 标注的方法。
- 任何嵌套的配置类必须声明为 static。
- @Bean 方法可能不会反过来创建更多的配置类。

### @Autowired 与 @Resource的区别

- @Autowired默认按 byType 自动注入
- @Resource默认按 byName 自动注入

@Resource装配顺序

1. 如果同时指定了name和type，则从Spring上下文中找到唯一匹配的bean进行装配，找不到则抛出异常
2. 如果指定了name，则从上下文中查找名称（id）匹配的bean进行装配，找不到则抛出异常
3. 如果指定了type，则从上下文中找到类型匹配的唯一bean进行装配，找不到或者找到多个，都会抛出异常
4. 如果既没有指定name，又没有指定type，则自动按照byName方式进行装配；如果没有匹配，则回退为一个原始类型进行匹配，如果匹配则自动装配；

@Autowired 配合 @Qualifier 注解 实现 byName ???

#### @Qualifier

当存在类型相同的bean时，通过名称注入

```java
@Autowired
@Qualifier("demo")
public Demo demo1;
```

定义bean名称
```java
@Component
@Qualifier("demo2")
public class Demo{

}
```

#### @Primary

同类型bean注入优先权

```java
@Bean
public User user1(){
    return new User("user1");
}

@Bean
@Primary
public User user2(){
    return new User("user2");
}
```

> 不能使用多个`@Primary()`注解标记同一个类型的bean

#### @Order() @Priority()

- `@Order()`注解中的值越小、而bean在属性注入到同一类型的集合中就排在越前面
- `@Priority()`中的值越小注入单一属性的时候就会优先使用、而注入到对象集合的时候会排在前面。

> 属性同一对象注入到集合中的优先级使用 @Order 》 @Priority 》无

- 使用`@Autowired`注入单一属性值的时候、`@Priority()`和`@Primary()`会优先选择被标记的对象、优先级 `@Primary()`>`@Priority()`
- 使用`@Autowired`注入同一类型的集合属性值的时候、`@Primary()`不会对集合中的对象值顺序发生变化、而`@Order()`和`@Priority()`会改变集合中的值顺序优先级 `@Order` > `@Priority`


#### 注入失效

```java
@Configuration
public class MyConfig1 {

    private static final Logger log = LoggerFactory.getLogger(MyConfig1.class);

    @Autowired
    public void setApplicationContext(ApplicationContext applicationContext) {
        log.debug("注入 ApplicationContext");
    }

    @PostConstruct
    public void init() {
        log.debug("初始化");
    }
}

GenericApplicationContext context = new GenericApplicationContext();
context.registerBean("myConfig1", MyConfig1.class);
context.registerBean(AutowiredAnnotationBeanPostProcessor.class);
context.registerBean(CommonAnnotationBeanPostProcessor.class);
context.registerBean(ConfigurationClassPostProcessor.class);
context.refresh(); // 1. beanFactory 后处理器,  2. 添加 bean 后处理器, 3. 初始化单例
context.close();
```

```shell
[DEBUG] 10:34:20.991 [main] com.itheima.a06.MyConfig1           - 注入 ApplicationContext 
[DEBUG] 10:34:20.995 [main] com.itheima.a06.MyConfig1           - 初始化 
```

添加beanFactory 后处理器

```java
@Configuration
public class MyConfig1 {

    private static final Logger log = LoggerFactory.getLogger(MyConfig1.class);

    @Autowired
    public void setApplicationContext(ApplicationContext applicationContext) {
        log.debug("注入 ApplicationContext");
    }

    @PostConstruct
    public void init() {
        log.debug("初始化");
    }

    @Bean //  beanFactory 后处理器
    public BeanFactoryPostProcessor processor1() {
        return beanFactory -> {
            log.debug("执行 processor1");
        };
    }

}
```

```shell
[INFO ] 10:35:55.619 [main] o.s.c.a.ConfigurationClassEnhancer  - @Bean method MyConfig1.processor1 is non-static and returns an object assignable to Spring's BeanFactoryPostProcessor interface. This will result in a failure to process annotations such as @Autowired, @Resource and @PostConstruct within the method's declaring @Configuration class. Add the 'static' modifier to this method to avoid these container lifecycle issues; see @Bean javadoc for complete details. 
[DEBUG] 10:35:55.629 [main] com.itheima.a06.MyConfig1           - 执行 processor1 
```
> @Autowired 和 @PostConstruct 的注入和初始化失败