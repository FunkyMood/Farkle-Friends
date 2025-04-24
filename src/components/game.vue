<template>
    <h1>{{ score }}</h1>
    <div class="d-flex justify-content-center gap-3 flex-wrap">
        <ScoreButton @add-score="increaseScore"></ScoreButton>
    </div>
    <button class="mt-2" @click="undo()">Undo</button>
</template>

<script>

import ScoreButton from './scoreButton.vue';

export default {
    components: {
        ScoreButton
  },
    data() {
        return {
            score: 0,
            scoreStacks: []
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
    },  
    
    mounted() {

    }
}
</script>
