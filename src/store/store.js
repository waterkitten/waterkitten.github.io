import Vue from "vue";
import Vuex from "vuex";
import EventService from ".././EventService/EventServe";
import * as event from "./modules/event.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    event
  },
  state: {
    event: {},
    user: {
      id: "abc123",
      name: "Adam Jahr"
    },
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community"
    ],
    events: [{
        id: 1,
        title: "...",
        organizer: "..."
      },
      {
        id: 2,
        title: "...",
        organizer: "..."
      },
      {
        id: 3,
        title: "...",
        organizer: "..."
      },
      {
        id: 4,
        title: "...",
        organizer: "..."
      }
    ]
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_EVENT(state, event) {
      state.event = event;
    }
  },
  actions: {
    fetchEvents({
      commit
    }, {
      perPage,
      page
    }) {
      EventService.getEvents(perPage, page)
        .then(response => {
          commit("SET_EVENTS", response.data);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
    },
    fetchEvent({
      commit,
      getters
    }, id) {
      // Send in the getters

      var event = getters.getEventById(id); // See if we already have this event

      if (event) {
        // If we do, set the event
        commit("SET_EVENT", event);
      } else {
        // If not, get it with the API.
        EventService.getEvent(id)
          .then(response => {
            commit("SET_EVENT", response.data);
          })
          .catch(error => {
            console.log("There was an error:", error.response);
          });
      }
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    },
    catLength: state => {
      return state.categories.length;
    }
  }
});