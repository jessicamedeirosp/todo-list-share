import axios from "axios";

export default axios.create({
  baseURL: "https://lazy-cyan-python-fez.cyclic.app/",
  timeout: 10000,

  headers: {
    "Content-Type": "application/json",
    Authorization: "XXXXXXXXXXXXXXXX",
  },
});
