import ExampleComponent from "../components/ExampleComponent.vue"
import Home from "../components/Home.vue"
import LoginComponent from "../components/LoginComponent.vue"
import * as VueRouter from 'vue-router';

const routes = [
    {
        name: 'home',
        path: '/home',
        alias: '/',
        component: Home,
    },
    {
        name: 'example-component',
        path: '/example',
        component: ExampleComponent,
    },
    {
        name: 'login-component',
        path: '/login',
        component: LoginComponent,
    },

]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export default router
