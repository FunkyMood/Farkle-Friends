<template>
    <section class="container-welcome">
        <h1>Welcome to Farkle&Friends!<br>How many players?</h1>
        <input class="w-50" type="number" v-model="numberOfPlayers" placeholder="Enter number"/>
        <button class="btn-start" @click="setPlayers">Start Game</button>
    </section>
</template>

<script>
import { usePlayerStore } from '../stores/playerStore'

export default {
  data() {
    return {
      numberOfPlayers: 0,

    }
  },
  mounted() {
    const playerStore = usePlayerStore()
    this.numberOfPlayers = playerStore.numberOfPlayers
  },
  methods: {
    setPlayers() {
      const playerStore = usePlayerStore()
      playerStore.setNumberOfPlayers(this.numberOfPlayers);
      this.$router.push('/game');
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