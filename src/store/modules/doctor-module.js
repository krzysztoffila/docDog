export default {
    namespaced: true,
    state: {
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
    mutations: {
        setSelectedDoctor(state, doctor) {
            state.selectedDoctor = doctor;
        },
    },
};
