<template
  >
  <div>
    <el-menu :default-active="this.$route.path"
             router
             mode="horizontal">
      <el-menu-item v-for="(item,i) in navList"
                    :key="i"
                    :index="item.name">
        {{ item.navItem }}
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

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data () {

    return {
      navList: [
        { name: '/findProject', navItem: '发现项目' },
        { name: '/communityActivity', navItem: '社区动态' },
        { name: '/publishProject', navItem: '发布项目' },
        { name: '/personalCenter', navItem: '个人中心' },
        { name: '/manageCenter', navItem: '管理员中心' },
      ]
    }

  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
