export default {
    namespaced: true,
    state: {
        doctors: [
            { doctorId: 1, name: "Dr. Dolittle" },
            { doctorId: 2, name: "Dr. Ventura" },
            { doctorId: 3, name: "Dr. Oetker" },
        ],
        selectedDoctor: null,
    },
    mutations: {
        setSelectedDoctor(state, doctor) {
            state.selectedDoctor = doctor;
        },
    },
    actions: {
        setSelectedDoctor({ commit }, doctor) {
            commit("setSelectedDoctor", doctor);
        },
    },
};
