import Vue from "vue";
import Vuex from "vuex";
import Toast from "./modules/toast-module";
import Modal from "./modules/modal-module";
import User from "./modules/user-module";
import Doctor from "./modules/doctor-module";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Toast,
        Modal,
        User,
        Doctor,
    },
    state: {},
    getters: {},
    mutations: {},
    actions: {},
});
