import { defineStore } from "pinia";

export const usePlayerStore = defineStore('playerStore', {
    state: () => ({
        players: []
    }),
    actions: {
        setNumberOfPlayers(number) {
            this.players = Array.from({ length: number }, (_, i) => ({
                name: '',
                score: 0
            }))
        },
        setPlayerName(index, name) {
            if (this.player[index]) {
                this.players[index].name = name;
            }
        },
        addPoints(index, points) {
            if (this.players[index]) {
                this.players[index].score += points;
            }
        },
    },
    persist: true,
});