<template>
    <div class="d-flex">
        <button  class="btn-back" @click="goBack">Indietro</button>
    </div>
    <div v-for="n in numberOfPlayers" :key="n">
        <div class="container-game">
            <h1 class="score__title">{{ score }}</h1>
            <div class="d-flex justify-content-center gap-3 flex-wrap">
                <ScoreButton @add-score="increaseScore"></ScoreButton>
            </div>
            <button class="mt-2" @click="undo()">Undo</button>
        </div>
    </div>
</template>

<script>

import ScoreButton from './scoreButton.vue';
import { usePlayerStore } from '../stores/playerStore';

export default {
    components: {
        ScoreButton
  },
    data() {
        return {
            score: 0,
            scoreStacks: [],
            numberOfPlayers: 0,
        }
    },
    methods: {
        increaseScore(points){
            this.saveScore(points);
            this.score = this.score + points;
        },
        saveScore() {
            this.scoreStacks.push(this.score)
        },
        undo() {
            if (this.scoreStacks.length > 0) {
                this.score = this.scoreStacks.pop();
            } else {
                this.score = 0;
            }
        },
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
@media screen and (min-width: 300px) {
    .container-game {
        &:not(:first-of-type) {
            padding-top: 20px;
        }
        .score__title {
            color: #ffffff;
            padding-bottom: 20px;
        }
    }
}
   
</style>
