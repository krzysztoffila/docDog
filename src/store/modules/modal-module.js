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
        openModal(state) {
            state.modal.isVisible = true;
        },
        closeModal(state) {
            state.modal.isVisible = false;
        },
        setModalContent(state, payload) {
            state.modal = { ...state.modal, ...payload };
        },
    },
    actions: {
        openModal({ commit }, payload) {
            commit("setModalContent", payload);
            commit("openModal");
        },
        closeModal({ commit }) {
            commit("closeModal");
        },
    },
};
