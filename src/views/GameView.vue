<template>
    <div class="d-flex justify-content-between">
        <button  class="btn-back" @click="goBack">Go back</button>
        <button class="btn-back" @click="triggerReset">New Game</button>
    </div>
    <section class="container-wrapper-games" :class="numberOfPlayers === 1 ? 'counter-only' : numberOfPlayers === 2 ? 'duel-game' : 'royal-rumble-game'">
        <div v-for="(n, index) in numberOfPlayers" :key="n">
            <Game :player-index="index" :reset-flag="resetFlag"/>
        </div>
    </section>
</template>

<script>
import { usePlayerStore } from '../stores/playerStore';
import Game from '../components/game.vue';

export default {
    components: {
        Game
    },
    data() {
        return {
            numberOfPlayers: 0,
            playerStore: usePlayerStore(),
            resetFlag: false
        }
    },
    methods: {
        goBack() {
            this.$router.push('/');
        },
        triggerReset() {
           this.playerStore.players.forEach(player => {
            player.score = [];
            this.playerStore.getTotalScore(0)
           });
           this.resetFlag = false;
           this.$nextTick(() => {
                this.resetFlag = true;
           })
        }
    },
    mounted() {
        this.numberOfPlayers = this.playerStore.players.length;
    }
}
</script>

<style lang="less">
    .container-wrapper-games { 
        display: grid;
        gap: 30px;
        padding: 0px 16px;
        align-content: center;
        &.counter-only {
            height: 100%;
        }
    }
</style>
