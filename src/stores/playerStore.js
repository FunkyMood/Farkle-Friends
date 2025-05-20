import { defineStore } from "pinia";

export const usePlayerStore = defineStore('playerStore', {
    state: () => ({
        players: []
    }),
    actions: {
        setNumberOfPlayers(number) {
            this.players = Array.from({ length: number }, (_, i) => ({
                name: '',
                score: []
            }))
        },
        setPlayerName(index, name) {
            if (this.player[index]) {
                this.players[index].name = name;
            }
        },
        addPoints(index, points) {
            if (this.players[index]) {
                this.players[index].score.push(points);
            }
        },
        undoTotalScore(index) {
            const player = this.players[index];
            if (player && player.score && player.score.length > 0) {
                player.score.pop();
            }
        }
    },
    getters: {
        getTotalScore: (state) => (index) => {
            const player = state.players[index];
            const scores = (player && player.score) ? player.score : [];
            return scores.length <= 0 ? 0 : scores.reduce((a, b) => a + b, 0)
        },
    },
    persist: true,
});