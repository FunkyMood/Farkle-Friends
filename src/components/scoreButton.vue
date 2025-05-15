<template>
    <div v-for="(label, points) in pointsMap" :key="points">
        <button class="btn-score" @click="emitPoints(points)">{{ label }}</button>
    </div>
   
</template>

<script>

import { usePlayerStore } from '../stores/playerStore'

export default {
    data() {
        return {
            pointsMap: {
                50: "+ 50",
                100: "+ 100",
                200: "+ 200",
                300: "+ 300",
                400: "+ 400",
                500: "+ 500",
                600: "+ 600",
                1000: "+ 1000",
                1500: "+ 1500"
            },
            playerStore: usePlayerStore(),
        }
        
    },
    props:{
        playerIndex: {
            type: Number,
            default: 0
        }
    },
    methods: {
        emitPoints(points){
            const numericPoints = Number(points);
            this.$emit('add-score', numericPoints)
        }
    },
}

</script>

<style lang="less" scoped>
    .btn-score {
        &:focus,
        &:focus-visible {
            outline: 4px auto -webkit-focus-ring-color;
        }
    }
</style>