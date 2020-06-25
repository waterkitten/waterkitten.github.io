<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item
      v-for="(item, i) in navList"
      :key="i"
      :index="item.picture"
    >
      <img :src="item.picture" class="picture" /> 1
    </el-carousel-item>
  </el-carousel>
</template>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.picture {
  width: 100%;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
<script>
export default {
  data() {
    return {
      title: 'Park Cleanup',

      navList: [
        {
          id: 1,
          picture: 'http://rxd.capcom.com.tw/assets/images/chara/ch_1.jpg',
        },
        {
          id: 2,
          picture: 'http://rxd.capcom.com.tw/assets/images/chara/ch_2.jpg',
        },
        {
          id: 3,
          picture: 'http://rxd.capcom.com.tw/assets/images/chara/ch_3.jpg',
        },
        {
          id: 4,
          picture: 'http://rxd.capcom.com.tw/assets/images/chara/ch_4.jpg',
        },
        {
          id: 5,
          picture: 'http://rxd.capcom.com.tw/assets/images/chara/ch_5.jpg',
        },
        {
          id: 6,
          picture: 'http://rxd.capcom.com.tw/assets/images/chara/ch_6.jpg',
        },
      ],
    }
  },
}
</script>
