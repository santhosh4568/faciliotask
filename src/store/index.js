import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    proform: {
      firstname: "Santhosh",
      lastname: "P",
      position: "Student Intern",
      doj: "23-06-2021",
      contact: "7339535537",
      email: "santhosh@facilio.com",
      defaultdate: new Date("2021-06-23"),
      attachment: null,
      image: "",
    },
  },
  mutations: {
    setFirstname(state, payload) {
      state.proform.firstname = payload;
    },
    setLastname(state, payload) {
      state.proform.lastname = payload;
    },
    setPosition(state, payload) {
      state.proform.position = payload;
    },
    setDoj(state, payload) {
      state.proform.doj = payload;
    },
    setEmail(state, payload) {
      state.proform.email = payload;
    },
    setContact(state, payload) {
      state.proform.contact = payload;
    },
    setDefaultdate(state, payload) {
      state.proform.defaultdate = payload;
    },
    setAttachment(state, payload) {
      state.proform.attachment = payload;
    },
    setImage(state, payload) {
      state.proform.image = payload;
    },
  },
  actions: {
    setFirstname({ commit }, payload) {
      commit("setFirstname", payload);
    },
    setLastname({ commit }, payload) {
      commit("setLastname", payload);
    },
    setPosition({ commit }, payload) {
      commit("setPosition", payload);
    },
    setDoj({ commit }, payload) {
      commit("setDoj", payload);
    },
    setEmail({ commit }, payload) {
      commit("setEmail", payload);
    },
    setContact({ commit }, payload) {
      commit("setContact", payload);
    },
    setDefaultdate({ commit }, payload) {
      commit("setDefaultdate", payload);
    },
    setAttachment({ commit }, payload) {
      commit("setAttachment", payload);
    },
    setImage({ commit }, payload) {
      commit("setImage", payload);
    },
  },
  modules: {},
  getters: {
    getFirstname(state) {
      return state.proform.firstname;
    },
    getLastname(state) {
      return state.proform.lastname;
    },
    getEmail(state) {
      return state.proform.email;
    },
    getImage(state) {
      return state.proform.image;
    },
  },
});
