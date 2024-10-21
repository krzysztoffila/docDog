import Vue from "vue";
import Vuex from "vuex";
import Toast from "./modules/toast-module";
import Modal from "./modules/modal-module";
import User from "./modules/user-module";
import Doctor from "./modules/doctor-module";
import Cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Toast,
        Modal,
        User,
        Doctor,
    },
    state: {
        user: null,
    },
    mutations: {
        setUser(state, user) {
            console.log("Mutacja setUser wywołana z:", user);
            state.user = user;
        },
        clearUser(state) {
            console.log("Mutacja clearUser wywołana");
            state.user = null;
        },
    },
    actions: {
        checkUser({ commit }) {
            const userToken =
                sessionStorage.getItem("userToken") || Cookies.get("userToken");
            console.log("checkUser: userToken =", userToken);
            if (userToken) {
                commit("setUser", { token: userToken });
            } else {
                commit("clearUser");
            }
        },
        logout({ commit }) {
            console.log(
                "logout: usuwanie tokenów i wywoływanie mutacji clearUser"
            );
            sessionStorage.removeItem("userToken");
            Cookies.remove("userToken");
            commit("clearUser");
        },
    },
});
