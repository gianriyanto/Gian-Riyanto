import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from './views/Welcome'
import MainPage from "@/views/MainPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: Welcome
    },
    {
        path: '/mainpage',
        name: 'mainPage',
        component: MainPage
    },

]

const router = new VueRouter({
    routes
})

export default router
