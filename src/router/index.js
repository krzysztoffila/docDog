import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/components/UI/home/HomeView.vue";
import LoginUser from "@/components/UI/user/LoginUser.vue";
import RegisterUser from "@/components/UI/user/RegisterUser.vue";
import UserDashboard from "@/components/UI/user/UserDashboard.vue";
import RegisterVisit from "@/components/UI/user/RegisterVisit.vue";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/login",
        name: "login",
        component: LoginUser,
        meta: {
            title: "Login - docDog",
        },
    },
    {
        path: "/register",
        name: "register",
        component: RegisterUser,
        meta: {
            title: "Register - docDog",
        },
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: UserDashboard,
        meta: {
            title: "User Dashboard - docDog",
        },
    },
    {
        path: "/registervisit",
        name: "registervisit",
        component: RegisterVisit,
        meta: {
            title: "Register Visit - docDog",
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
