<template>
    <div v-for="(label, points) in pointsMap" :key="points">
        <button @click="increasePoints(points)">{{ label }}</button>
    </div>
   
</template>

<script>
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
            }
        }
        
    },
    props:{
    },
    methods: {
        increasePoints(points) {
            const numericPoints = Number(points)
            this.$emit("add-score", numericPoints)
        },
    },
}

</script>