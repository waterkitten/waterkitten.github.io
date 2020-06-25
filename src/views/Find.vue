<template>
  <div>
    <swiper-list></swiper-list>
    <nav-bar></nav-bar>
    <h4 class="iconfont icon-ertongshouhui-huojian">项 目 展 示</h4>

    <event-list></event-list>
  </div>
</template>

<script>
import EventCard from "../components/EventCard.vue";
import NavBar from "../components/NavBar.vue";
import SwiperList from "../components/vueshow/SwiperList";
import EventList from "../components/vueshow/EventList";
export default {
  components: {
    EventCard,
    NavBar,
    SwiperList,
    EventList
  }
};
</script>

<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
