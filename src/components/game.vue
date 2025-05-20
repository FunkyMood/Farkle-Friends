<template>
        <div class="container-game">
            <h1 class="score__title">{{ score }}</h1>
            <div class="d-flex gap-1 flex-wrap temprary-score-wrapper">
                <p class="temporary-score m-0" v-for="(temporaryScore, index) in scoreStacks" :key="index"> {{ temporaryScore }}</p>
            </div>
            <div class="d-flex justify-content-center gap-3 flex-wrap mt-2">
                <ScoreButton :player-index="playerIndex" @add-score="addTemporaryScore"></ScoreButton>
            </div>
            <div class="btn-wrapper d-flex justify-content-center gap-2">
                <button class="mt-2 btn-undo" @click="undo()" :class="(this.scoreStacks.length > 0 ? 'temporary-color' : 'total-color')" >Undo</button>
                <button class="mt-2" @click="increaseScore()">Add Score</button>
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
            scoreStacks: [],
            playerStore: usePlayerStore(),
            wakeLoock: false,
            totalScore: 0,
        }
    },
    props: {
        playerIndex: {
            type: Number,
            default: 0
        },
        resetFlag: {
            type: Boolean,
        }
    },
    computed: {
        score() {
            return this.playerStore.getTotalScore(this.playerIndex);
        },
    },
    methods: {
        increaseScore(){
            this.scoreStacks.forEach(score => {
                this.playerStore.addPoints(this.playerIndex , score)
            });
            this.scoreStacks.length = 0;
            
        },
        addTemporaryScore(points) {
            this.scoreStacks.push(points)
        },
        undo() {
            if (this.scoreStacks.length > 0) {
                this.scoreStacks.pop();
            } else {
                this.playerStore.undoTotalScore(this.playerIndex)
            }
        },
        async wakeLockMobile() {
            if('wakeLock' in navigator) {
                try {
                    this.wakeLock = await navigator.wakeLock.request('screen');
                    document.addEventListener('visibilitychange', async () => {
                        if(document.visibilityState === 'visible') {
                            this.wakeLoock = await navigator.wakeLock.request('screen');
                        }
                    });
                }
                catch (err) {
                    console.error(err)
                }
            } else {
                console.log("This browser doesn't support wakeLock API")
            }
        },
    },  
    watch:{
        resetFlag(newVal) {
            if(newVal) {
                this.scoreStacks.length = [];
            }
        }
    },
    mounted() {
        this.wakeLockMobile();
    }
}
</script>

<style lang="less">
@media screen and (min-width: 300px) {
    .container-game {
        display: flex;
        flex-direction: column;
        align-items: center;
        &:not(:first-of-type) {
            padding-top: 20px;
        }
        .score__title {
            color: var(--bs-warning);
            width: fit-content;
            font-size: 32px;
            font-weight: 700;
        }
        .temprary-score-wrapper {
            min-height: 33px;
            .temporary-score {
                color: #20C997;
                font-weight: 700;
                font-size: 22px;
            }
        }
        .btn-wrapper {
            .btn-undo {
                &.temporary-color {
                    background-color: #20C997;
                }
                &.total-color {
                    background-color: var(--bs-warning);
                }
            }
        }
    }
}
   
</style>
