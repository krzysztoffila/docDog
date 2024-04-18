import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginUser from '@/views/user/login/LoginUser.vue'
import RegisterUser from '@/views/user/register/RegisterUser.vue'
import UserDashboard from '@/views/user/UserDashboard.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginUser,
        meta: {
            title: 'Login - docDog'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterUser,
        meta: {
            title: 'Register - docDog'
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: UserDashboard,
        meta: {
            title: 'User Dashboard - docDog'
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
