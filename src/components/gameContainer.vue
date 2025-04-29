<template>
    <div class="d-flex justify-content-between">
        <button  class="btn-back" @click="goBack">Go back</button>
        <button class="btn-back" @click="triggerReset">New Game</button>
    </div>
    <section class="container-wrapper-games">
        <div v-for="n in numberOfPlayers" :key="n">
            <Game :reset-score="resetScoreFlag"/>
        </div>
    </section>
</template>

<script>
import { usePlayerStore } from '../stores/playerStore';
import Game from './game.vue';

export default {
    components: {
        Game
    },
    data() {
        return {
            numberOfPlayers: 0,
            resetScoreFlag: false
        }
    },
    methods: {
        goBack() {
            this.$router.push('/');
        },
        triggerReset() {
            this.resetScoreFlag = true;
            this.$nextTick(() => {
                this.resetScoreFlag = false;
            })
        }
    },
    mounted() {
        const playerStore = usePlayerStore();
        this.numberOfPlayers = playerStore.numberOfPlayers;
    }
}
</script>

<style lang="less">
    .container-wrapper-games { 
        display: grid;
        gap: 30px;
        padding: 0px 16px;
        align-content: center;
    }
</style>
