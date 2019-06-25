import axios from "axios"

export default {
  //FOUND ITEMS =========================================  
  // Gets all found items
  getItems: function () {
    return axios.get("/api/found");
  },

  // Gets items through search parameters
  getItemSearch: function (search) {
    return axios.get("/api/found/" + search);
  },

  //Post found item to DB
  postItem: function () {
    return axios.post("/api/found");
  },

  //Update item's status
  updateItem: function (id) {
    return axios.put("/api/found" + id);
  },

  // Deletes an item from database
  deleteItem: function (id) {
    return axios.delete("/api/found/" + id);
  },
  
  //USERS =================================================
  //get user by id
  getUser: function (id) {
    return axios.get("/api/user" + id);
  },

  // Deletes user from database
  deleteUser: function (id) {
    return axios.delete("/api/found/" + id);
  },

  // Updates user info
  updateUser: function (id) {
    return axios.put("/api/found/" + id);
  },
}