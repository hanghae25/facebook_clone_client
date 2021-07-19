import axios from "axios";

const instance = axios.create({
  baseURL: "http://13.124.141.66/",
});

// instance.defaults.headers.common["Authorization"] = USER_TOKEN;

export default instance;
