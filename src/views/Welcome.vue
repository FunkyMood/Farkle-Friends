<template>
    <section class="container-welcome">
        <h1>Welcome to Farkle&Friends!</h1>
        <button class="btn-start" @click="setPlayers(1)">Points Counter</button>
        <button class="btn-start" @click="setPlayers()">Game</button>
    </section>
</template>

<script>
import { usePlayerStore } from '../stores/playerStore'

export default {
  data() {
    return {
      numberOfPlayers: 0,
      playerStore: usePlayerStore(),
    }
  },
  mounted() {
    this.numberOfPlayers = this.playerStore.players.length;
  },
  methods: {
    setPlayers(number) {
      this.playerStore.setNumberOfPlayers(number);
      switch (number) {
        case 1:
          this.$router.push('/game');
          break;
        default:
          this.$router.push('/players');
          break;
      }
    }

  }
}
</script>

<style lang="less" scoped>
    .container-welcome {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        height: 100%;
        justify-content: center;
        padding: 0px 16px;
        h1 {
            color: #ffffff;
            font-family: @font-family-primary;
        }
    }
</style>