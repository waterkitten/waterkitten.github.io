import axios from "axios";
import NProgress from "nprogress";
const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
// call on request
apiClient.interceptors.request.use(config => {
  NProgress.start();
  return config;
});
//多个api同时调用的情况没考虑

//call on response
apiClient.interceptors.response.use(response => {
  NProgress.done();
  return response;
});

export default {
  getEvents(perPage, page) {
    return apiClient.get("/events?_limit=" + perPage + "&_page=" + page);
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
  postEvent(event) {
    return apiClient.post("/events", event);
  }
};