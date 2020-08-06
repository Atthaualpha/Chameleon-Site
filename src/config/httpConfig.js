import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(
  function(response) {
    //Return allways the data from response
    return response.data;
  },
  function(error) {
    //Return allways the data from response
    return Promise.reject(error.response.data);
  }
);
