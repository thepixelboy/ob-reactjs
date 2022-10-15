import axios from "axios";

export default axios.create({
  baseURL: "https://randomuser.me/api",
  responseType: "json",
  timeout: 5000,
});
