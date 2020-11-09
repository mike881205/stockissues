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
  inputQuestion: function(section, question) {
    return axios.post("/api/inputquestion", section, question)
  },
  addClient: function(firstName, lastName, email, phone, streetAddress, aptUnitNum, city, state, zip, audit, dwelling, gateCode) {
    return axios.post("/api/addClient", firstName, lastName, email, phone, streetAddress, aptUnitNum, city, state, zip, audit, dwelling, gateCode)
  },
  addMember: function(name, relationship, age, ClientId) {
    return axios.post("/api/addMember", name, relationship, age, ClientId)
  },
  getSections: function() {
    return axios.get("/api/getSections")
  },
  getClients: function() {
    return axios.get("/api/getClients")
  },
  submitAssessment: function(ClientId, SectionId, QuestionId, response, observation, comment) {
    return axios.post("/api/submitAssessment", ClientId, SectionId, QuestionId, response, observation, comment)
  },
  getClientResults: function(ClientId) {
    return axios.get("/api/getClientResults/" + ClientId)
  },
  getResultSections: function(SectionId) {
    return axios.get("/api/getResultSections/" + SectionId)
  }
};
