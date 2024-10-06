import axios from "axios";

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default {
    namespaced: true,
    state: {
        userIsLogged: !!localStorage.getItem("token"),
        user: JSON.parse(localStorage.getItem("user")) || {
            appointmentsData: [],
        },
        selectedDoctor: null,
        error: null,
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
            state.userIsLogged = true;
            state.error = null; // Resetowanie błędów przy pomyślnym logowaniu
        },
        LOGOUT(state) {
            state.user = { appointmentsData: [] };
            state.userIsLogged = false;
            state.error = null; // Resetowanie błędów przy wylogowaniu
        },
        SET_ERROR(state, error) {
            state.error = error;
        },
    },
    actions: {
        async login({ commit }, userData) {
            try {
                const response = await axios.post("/api/auth/login", userData);
                const { user, token } = response.data;

                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));

                commit("SET_USER", user);
                return response;
            } catch (error) {
                commit(
                    "SET_ERROR",
                    error.response?.data?.message || "Login failed"
                );
                throw error;
            }
        },
        logout({ commit }) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            commit("LOGOUT");
        },
        fetchUser({ commit }) {
            const token = localStorage.getItem("token");
            if (token) {
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
        error: (state) => state.error,
    },
};
