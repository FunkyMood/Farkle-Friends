import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Game from '../components/game.vue'

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/game',
        name: 'Game',
        component: Game
    },
]

const router = createRouter({
    history: createWebHistory('/Farkle-Friends/'),
    routes
})

export default router