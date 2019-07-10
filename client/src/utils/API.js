import axios from "axios"

export default {
  //Lost ITEMS =========================================  
  // Gets all Lost items
  getLostItems: function () {
    return axios.get("/api/lost");
  },

  //Post Lost item to DB
  postLostItem: function (itemData) {
    return axios.post("/api/lost", itemData);
  },

  //Update Lost item's status
  updateLostItem: function (id) {
    return axios.put("/api/lost" + id);
  },

  // Deletes an Lost item from database
  deleteLostItem: function (id) {
    return axios.delete("/api/lost/" + id);
  },

  //FOUND ITEMS =========================================  
  // Gets all found items
  getFoundItems: function () {
    return axios.get("/api/found");
  },

  // Gets Found items through search parameters
  getItemSearch: function (search) {
    return axios.get("/api/found/" + search);
  },

  //Post Found item to DB
  postFoundItem: function (itemData) {
    return axios.post("/api/found", itemData);
  },

  //Update Found item's status
  updateFoundItem: function (id) {
    return axios.put("/api/found" + id);
  },

  // Deletes Found an item from database
  deleteFoundItem: function (id) {
    return axios.delete("/api/found/" + id);
  },
  
  //USERS =================================================
  //get user by id
  getUser: function (id) {
    return axios.get("/api/user" + id);
  },

  // Deletes user from database
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },

  // Updates user info
  updateUser: function (id) {
    return axios.put("/api/user/" + id);
  },
}