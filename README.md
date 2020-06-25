# water-test

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

项目便签后续添加功能的细节

## 一.Progress Bar: Axios Interceptors/进度条

Axios interceptors (in this lesson)
In-component route guards (next lesson)
Global and per-route guards (lesson after that)
说白就是进度条功能，然后是用
\$ json-server -d 1500 db.json
这种强行加延迟的方式去进行“假性缓存”测试的
存在以下问题：
无法同时调多个 api

> This works great until we are using two or more API calls to load a
> page. In this scenario we’d want to continue to show the progress bar
> until all API calls return. A common solution to this problem is to
> create a loading Vuex module that holds the loading State. Here’s what
> that might look like:

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200625163545415.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3N6dXdhdGVyYnJvdGhlcg==,size_16,color_FFFFFF,t_70)

> 😕 Caveat #2 - Templates get rendered before the API call is returned
>
> On some webpages, it’s not a great user experience to see the page
> before the data is populated in it reactively. You’ll notice when we
> load up /event/5 (an event that we have to pull from the API) that the
> page loads empty before the data flashes onto the screen 1.5 seconds
> later.
> ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200625163724500.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3N6dXdhdGVyYnJvdGhlcg==,size_16,color_FFFFFF,t_70)

## 二.In-Component Route Guards/进度条加载完前不要渲染页面

VUE 生命周期的挂载，created，mounted，updated
vue router 也有类似的**三大件**

> - beforeRouteEnter(routeTo, routeFrom, next)
> - beforeRouteUpdate(routeTo, routeFrom, next)
> - beforeRouteLeave(routeTo, routeFrom, next)

We can define each of these inside our components, just like lifecycle hooks. First, let’s learn about the Parameters:

> - routeTo - This refers to the route that is about to be navigated to.
> - routeFrom - This refers to the route that is about to be navigated away from.
>
> - next - This is a function that must be called in each of them to resolve the hook, and continue navigation.

下面介绍一波
