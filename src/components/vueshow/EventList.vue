<template>
  <div class="contain">
    <div class="list"
         style="width:25%">
      <img src="http://rxd.capcom.com.tw/assets/images/tt1.png"
           class="TitleHeader" />

      <EventCard v-for="event in event.events"
                 :key="event.id"
                 :event="event" />
      <template v-if="page != 1">
        <router-link :to="{ name: 'event-list', query: { page: page - 1 } }"
                     rel="prev">Prev Page</router-link>
        |
      </template>
      <router-link v-if="hasNextPage"
                   :to="{ name: 'event-list', query: { page: page + 1 } }">Next Page</router-link>
    </div>

    <div style="width:50%">
      <img src="http://rxd.capcom.com.tw/assets/images/zh/chara01.png"
           alt="" />
    </div>
    <div style="width:25%">
      <img src="http://rxd.capcom.com.tw/assets/images/loading.gif"
           class="TitleHeader1" />
      <img src="http://rxd.capcom.com.tw/assets/images/loading.gif"
           class="TitleHeader1" />
      <img src="http://rxd.capcom.com.tw/assets/images/loading.gif"
           class="TitleHeader1" />
      <EventCard v-for="event in event.events"
                 :key="event.id"
                 :event="event" />
    </div>
  </div>
</template>

<script>
import EventService from "../../EventService/EventServe.js"; // <--- brings in the axios library
import EventCard from "../EventCard.vue";
import { mapState } from "vuex";
export default {
  components: {
    EventCard
  },

  created () {
    this.perPage = 4;
    this.$store.dispatch("event/fetchEvents", {
      perPage: this.perPage,
      page: this.page
    });
  },
  computed: {
    page () {
      return parseInt(this.$route.query.page) || 1;
    },
    hasNextPage () {
      return this.eventsTotal > this.page * this.perPage;
    },
    ...mapState(["events", "eventsTotal", "event", "user"])
  }
};
</script>

<style scoped>
.contain {
  width: 100%;
  display: flex;
  overflow: hidden;
}
.list {
  flex-direction: column;
}
.TitleHeader {
  width: 100%;
  height: 60px;
}
.TitleHeader1 {
  width: 33%;
  height: 60px;
  background-color: darkblue;
}

.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
