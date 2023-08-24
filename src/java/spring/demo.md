# Spring

## web请求数据绑定

HandlerMethodArgumentResolverComposite.resolveArgument() ->

----

### GET

ModelAttributeMethodProcessor.resolveArgument() ->

```java
WebDataBinder binder = binderFactory.createBinder(webRequest, attribute, name);
if (binder.getTarget() != null) {
    if (!mavContainer.isBindingDisabled(name)) {
        bindRequestParameters(binder, webRequest);
    }
}
```

ServletModelAttributeMethodProcessor.bindRequestParameters() ->

```java
servletBinder.bind(servletRequest);
```

ServletRequestDataBinder.bind() ->

```java
MutablePropertyValues mpvs = new ServletRequestParameterPropertyValues(request); // 获取get请求的参数
MultipartRequest multipartRequest = WebUtils.getNativeRequest(requestMultipartRequest.class);
if (multipartRequest != null) {
    bindMultipart(multipartRequest.getMultiFileMap(), mpvs);
}
addBindValues(mpvs, request);
doBind(mpvs); // 绑定
```

----

RequestResponseBodyMethodProcessor.resolveArgument() ->

```java
parameter = parameter.nestedIfOptional();
Object arg = readWithMessageConverters(webRequest, parameter,parametergetNestedGenericParameterType()); //已将请求body数据，转为对象
String name = Conventions.getVariableNameForParameter(parameter);
if (binderFactory != null) 
    WebDataBinder binder = binderFactory.createBinder(webRequest, arg, name);
```

RequestResponseBodyMethodProcessor.readWithMessageConverters() ->
AbstractMessageConverterMethodArgumentResolver.readWithMessageConverters()
