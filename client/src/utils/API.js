import axios from "axios";

export default {
  register: function (user) {
    return axios.post("/api/register", user);
  },
  login: function (user) {
    return axios.post("/api/login", user);
  },
  isAuthorized: function () {
    return axios.get("/api/authorized");
  },
  logout: function () {
    return axios.get("/api/logout");
  },
  availableUN: function (username) {
    return axios.get("/api/user/?username=" + username);
  },
  addPOInfo: function(PONum, design, issue) {
    return axios.post("/api/addPOInfo", PONum, design, issue)
  },
  addMissingInfo: function(brand, style, color, xSmall, small, medium, large, xLarge, twoXL, threeXL, fourXL, fiveXL) {
    return axios.post("/api/addMissingInfo", brand, style, color, xSmall, small, medium, large, xLarge, twoXL, threeXL, fourXL, fiveXL)
  },
  addReceivedInfo: function(brand, style, color, xSmall, small, medium, large, xLarge, twoXL, threeXL, fourXL, fiveXL) {
    return axios.post("/api/addReceivedInfo", brand, style, color, xSmall, small, medium, large, xLarge, twoXL, threeXL, fourXL, fiveXL)
  }
};