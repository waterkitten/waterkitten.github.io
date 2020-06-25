<template>
  <div>
    <el-menu :default-active="this.$route.path"
             router
             mode="horizontal">
      <el-menu-item><img class="icon-header"
             src="http://rxd.capcom.com.tw/assets/images/logo.png" /></el-menu-item>

      <el-menu-item v-for="(item, i) in navList"
                    :key="i"
                    :index="item.name">
        {{ item.navItem }}
        <svg class="icon svg-icon"
             aria-hidden="true">
          <use :xlink:href="item.icon" />
        </svg>
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.icon-header {
  width: 100px;
  height: 40px;
}

.el-aside {
  color: #333;
}
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

<script>
export default {
  data () {
    return {
      navList: [
        {
          name: "/findProject",
          navItem: "发现项目",
          icon: "#icon-ertongshouhui-huojian"
        },
        {
          name: "/communityActivity",
          navItem: "社区动态",
          icon: "#icon-ertongshouhui-taiyang"
        },
        {
          name: "/publishProject",
          navItem: "发布项目",
          icon: "#icon-ertongshouhui-xingqiu"
        },
        {
          name: "/personalCenter",
          navItem: "个人中心",
          icon: "#icon-ertongshouhui-xiaoxiong"
        },
        {
          name: "/manageCenter",
          navItem: "管理员中心",
          icon: "#icon-ertongshouhui-shuben"
        }
      ]
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
