import axios from "axios";
const apiService = axios.create({
  baseURL: "http://localhost:8081/",
  //   mode: "no-cors",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default apiService;
