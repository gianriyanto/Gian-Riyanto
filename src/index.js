import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from './views/Welcome'
import MainPage from "./views/MainPage";

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

const scrollBehavior = () => {
    return { x: 0, y: 0 }
}

const router = new VueRouter({
    scrollBehavior,
    routes,
})

export default router
