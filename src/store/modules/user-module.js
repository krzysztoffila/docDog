import axios from "axios";

export default {
    namespaced: true,
    state: {
        userIsLogged: !!localStorage.getItem("token"),
        user: JSON.parse(localStorage.getItem("user")) || {
            appointmentsData: [],
        },
        selectedDoctor: null,
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
            state.userIsLogged = true;
        },
        LOGOUT(state) {
            state.user = { appointmentsData: [] };
            state.userIsLogged = false;
        },
    },
    actions: {
        async login({ commit }, userData) {
            try {
                const response = await axios.post("/api/auth/login", userData);
                const user = response.data.user;
                const token = response.data.token;

                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                axios.defaults.headers.common["Authorization"] = token;

                commit("SET_USER", user);
                return response;
            } catch (error) {
                throw error;
            }
        },
        logout({ commit }) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            delete axios.defaults.headers.common["Authorization"];
            commit("LOGOUT");
        },
        fetchUser({ commit }) {
            const token = localStorage.getItem("token");
            if (token) {
                axios.defaults.headers.common["Authorization"] = token;
                commit("SET_USER", JSON.parse(localStorage.getItem("user")));
            } else {
                commit("LOGOUT");
            }
        },
    },
    getters: {
        userIsLogged: (state) => state.userIsLogged,
        user: (state) => state.user,
        appointments: (state) => state.user?.appointmentsData || [],
    },
};
