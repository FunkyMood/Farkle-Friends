import { defineStore } from "pinia";

export const usePlayerStore = defineStore('playerStore', {
    state: () => ({
        numberOfPlayers: 0,
    }),
    actions: {
        setNumberOfPlayers(number) {
            this.numberOfPlayers = number;
        },
    },
    persist: true,
});