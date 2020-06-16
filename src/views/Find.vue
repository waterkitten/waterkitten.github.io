<template>
  <div>
    <nav-bar></nav-bar>
    <h4>Park Cleanup</h4>
    <event-card></event-card>

  </div>
</template>

<script>
import EventCard from "../components/EventCard.vue"
import NavBar from "../components/NavBar.vue"
export default {
  components: {
    EventCard,
    NavBar
  }
}
</script>

<style>
</style>