import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userIsLogged: true,
    user: {
      email: "j.store@mail.com",
      fullName: "John Store",
      appointmentsData: [
        {
          date: "27.08.2024",
          status: "Pending",
          doctor: "Dr.Dolittle",
        },
        {
          date: "28.09.2024",
          status: "Visited",
          doctor: "Dr.Ventura",
        },
        {
          date: "29.10.2024",
          status: "Cancelled",
          doctor: "Dr.Oetker",
        },
        {
          date: "30.11.2024",
          status: "Pending",
          doctor: "Dr.Oetker",
        },
      ],
    },
    doctors: {
      selectedDoctor: null,
      doctors: [
        {
          doctorId: 0,
          name: "Dr. Dolittle",
        },
        {
          doctorId: 1,
          name: "Dr. Ventura",
        },
        {
          doctorId: 2,
          name: "Dr. Oetker",
        },
      ],
    },
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
