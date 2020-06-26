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

## 三.分页功能调用时候启动进度条刷新

![这种是没办法奏效的](https://img-blog.csdnimg.cn/20200626144645978.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3N6dXdhdGVyYnJvdGhlcg==,size_16,color_FFFFFF,t_70)
因为只会在跳转的一瞬间会加载，要在分页中嵌入功能，只能另寻它法

> For now, let’s finish up the code we need in router.js by setting
> props: true because we’ll be setting our current page as a parameter
> to pass in as a prop.

**/src/router.js**

    ...
    const router = new Router({
      mode: 'history',
      routes: [
        {
          path: '/',
          name: 'event-list',
          component: EventList,
          props: true // We'll set the page parameter, so we want to send it in as a prop
        },
        ...

## 分页功能的实现

分页其实就是对一组数据分组！而 vue 又刚好是数据驱动，所以我们只需要关注数据层就行了！分页开始--->

```
变量：

 data() {
    return {
      // 假设这是后台传来的数据来源
      data: [],
      // 所有页面的数据
      totalPage: [],
      // 每页显示数量
      pageSize: 5,
      // 共几页
      pageNum: 1,
      // 当前显示的数据
      dataShow: "",
      // 默认当前显示第一页
      currentPage: 0
    };
  },
```

步骤 1：计算页数
// 这里简单模拟一下后台传过来的数据

```
   for (let i = 0; i < 601; i++) {
      this.data.push({ name: "liu" ,look:"very handsome"});
    }

    // 根据后台数据的条数和每页显示数量算出一共几页,得0时设为1 ;
    this.pageNum = Math.ceil(this.data.length / this.pageSize) || 1;
```

```
步骤二：根据页数对数据分组，并存进每一页
   for (let i = 0; i < this.pageNum; i++) {
      // 每一页都是一个数组 形如 [['第一页的数据'],['第二页的数据'],['第三页数据']]
      // 根据每页显示数量 将后台的数据分割到 每一页,假设pageSize为5， 则第一页是1-5条，即slice(0,5)，第二页是6-10，条即slice(0,5)...
      this.totalPage[i] = this.data.slice(this.pageSize * i, this.pageSize * (i + 1))
    }
```

```
步骤三：设置默认显示页，上一页下一个，只需要切换当前页面的索引值就行了
    // 当前显示的内容
    this.dataShow = this.totalPage[this.currentPage];
    // 上一页和下一页
    // 下一页
    nextPage() {
      if (this.currentPage === this.pageNum - 1) return ;
      this.dataShow = this.totalPage[++this.currentPage];
    },
    // 上一页
    prePage() {
      if (this.currentPage === 0) return ;
      this.dataShow = this.totalPage[--this.currentPage];
    }
```

————————————————

仿照以上的思路，不过我的写法不太一样 emm，这里我也不想改了
