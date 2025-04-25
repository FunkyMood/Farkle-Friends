<template>
    <div class="d-flex">
        <button  class="btn-back" @click="goBack">Indietro</button>
    </div>
    <section class="container-wrapper-games">
        <div v-for="n in numberOfPlayers" :key="n">
            <Game/>
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
        }
    },
    methods: {
        goBack() {
            this.$router.push('/');
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
    }
</style>
