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
      image: require("../assets/user.jpg"),
    },
  },
  mutations: {
    setter(state, payload) {
      state.proform.firstname = payload.firstname;
      state.proform.lastname = payload.lastname;
      state.proform.position = payload.position;
      state.proform.doj = payload.doj;
      state.proform.email = payload.email;
      state.proform.contact = payload.contact;
      state.proform.image = payload.image;
    },
  },
  actions: {
    setter({ commit }, payload) {
      commit("setter", payload);
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
