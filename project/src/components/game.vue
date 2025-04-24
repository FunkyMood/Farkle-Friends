<template>
    <h1>{{ score }}</h1>
    <div class="d-flex justify-content-center">
        <button @click="increasePoints(50)">+ 50</button>
        <button @click="increasePoints(100)">+ 100</button>
        <button @click="increasePoints(200)">+ 200</button>
        <button @click="increasePoints(300)">+ 300</button>
        <button @click="increasePoints(400)">+ 400</button>
        <button @click="increasePoints(500)">+ 500</button>
        <button @click="increasePoints(600)">+ 600</button>
        <button @click="increasePoints(1000)">+ 1000</button>
        <button @click="increasePoints(1500)">+ 1500</button>
    </div>
    <button @click="undo()">Undo</button>
</template>

<script>
export default {
    data() {
        return {
            score: 0,
            scoreStacks: [],
            pointsMap: {
                50: 50,
                100: 100,
                200: 200,
                300: 300,
                400: 400,
                500: 500,
                600: 600,
                1000: 1000,
                1500: 1500
            }
        }
    },
    methods: {
        increasePoints(number) {
            if (this.pointsMap[number]) {
                this.saveScore(this.score);
                this.score += number;
            }
        },
        undo() {
            if (this.scoreStacks.length > 0) {
                this.score = this.scoreStacks.pop();
            } else {
                this.score = 0;
            }
        },
        saveScore(score) {
            this.scoreStacks.push(score)
        }
    },
    mounted() {

    }
}
</script>
