import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import GameView from '../views/GameView.vue'
import PlayersSelection from '../views/PlayersSelection.vue'

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/game',
        name: 'Game',
        component: GameView
    },
    {
        path: '/players',
        name: 'Players',
        component: PlayersSelection
    }
]

const router = createRouter({
    history: createWebHashHistory('/Farkle-Friends/'),
    routes
})

export default router