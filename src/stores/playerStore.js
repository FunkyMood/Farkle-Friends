import { defineStore } from "pinia";

export const usePlayerStore = defineStore('playerStore', {
    state: () => ({
        players: []
    }),
    actions: {
        setNumberOfPlayers(number) {
            this.players = Array.from({ length: number }, (_, i) => ({
                name: '',
                score: [],
                totalPoints: []
            }))
        },
        setPlayerName(index, name) {
            if (this.player[index]) {
                this.players[index].name = name;
            }
        },
        setTotalScore(index) {
            const player = this.players[index];

            const scores = (player && player.score)
                ? player.score
                : [];
            const prevTotalScores = (player && player.totalPoints && player.totalPoints.length > 0 && typeof player.totalPoints[player.totalPoints.length - 1] === "number")
                ? player.totalPoints[player.totalPoints.length - 1]
                : 0;

            const total = scores.reduce((a, b) => a + b, 0) + prevTotalScores;

            player.totalPoints.push(total);
            player.score.length = 0;
        },
        undoTotalScore(index) {
            const player = this.players[index];
            if (player && player.totalPoints && player.totalPoints.length > 0) {
                player.totalPoints.pop();
            }
        }
    },
    getters: {
        getTotalScore: (state) => (index) => {
            const player = state.players[index];
            return player && player.totalPoints.length > 0 ? player.totalPoints[player.totalPoints.length - 1] : 0;
        },
    },
    persist: true,
});