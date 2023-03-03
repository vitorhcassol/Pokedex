import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PokeDetails from '../views/PokeDetails.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/pokemon',
        name: 'Pokemon',
        component: PokeDetails
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router