import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";

Vue.config.productionTip = false;

store.dispatch("User/fetchUser").then(() => {
    new Vue({
        router,
        store,
        render: (h) => h(App),
    }).$mount("#app");
});
