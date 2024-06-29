export default {
    namespaced: true,
    state: {
        modal: {
            isVisible: false,
            title: "",
            message: "",
            confirmText: "Confirm",
            closeText: "Close",
            onConfirm: null,
        },
    },
    mutations: {
        openModal(state, payload) {
            state.modal = { ...state.modal, ...payload, isVisible: true };
        },
        closeModal(state) {
            state.modal.isVisible = false;
        },
    },
    actions: {
        openModal({ commit }, payload) {
            commit("openModal", payload);
        },
        closeModal({ commit }) {
            commit("closeModal");
        },
    },
};
