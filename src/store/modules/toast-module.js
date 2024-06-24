export default {
    namespaced: true,
    state: {
        toasts: [],
    },
    mutations: {
        addToast(state, toast) {
            state.toasts.push(toast);
        },
        removeToast(state, toast) {
            const index = state.toasts.indexOf(toast);
            if (index > -1) {
                state.toasts.splice(index, 1);
            }
        },
    },
};
