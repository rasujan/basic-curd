import axios from "axios";

const instance = axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com",
  baseURL: "http://localhost:5000",
  headers: {
    "content-type": "application/json",
  },
});

export default instance;
