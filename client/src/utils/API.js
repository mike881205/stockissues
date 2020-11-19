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
  addPOInfo: function(POnum, design, issue, notes) {
    return axios.post("/api/addPOInfo", POnum, design, issue, notes)
  },
  addMissingInfo: function(POnum, design, brand, style, color, xSmall, small, medium, large, xLarge, twoXL, threeXL, fourXL, fiveXL, POInfoId) {
    return axios.post("/api/addMissingInfo", POnum, design, brand, style, color, xSmall, small, medium, large, xLarge, twoXL, threeXL, fourXL, fiveXL, POInfoId)
  },
  addReceivedInfo: function(POnum, design, brand, style, color, xSmall, small, medium, large, xLarge, twoXL, threeXL, fourXL, fiveXL, POInfoId) {
    return axios.post("/api/addReceivedInfo", POnum, design, brand, style, color, xSmall, small, medium, large, xLarge, twoXL, threeXL, fourXL, fiveXL, POInfoId)
  }
};