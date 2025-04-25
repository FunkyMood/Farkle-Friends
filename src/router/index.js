import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import gameContainer from '../components/gameContainer.vue'

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/game',
        name: 'Game',
        component: gameContainer
    },
]

const router = createRouter({
    history: createWebHistory('/Farkle-Friends/'),
    routes
})

export default router