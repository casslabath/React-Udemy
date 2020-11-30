import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Y3EBYwZuEFzFcTL4bTY6m0tLxjECXZwgvrSjGmoEyrk",
  },
});
