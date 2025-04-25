<template>
    <div class="container-welcome">
        <h1>Welcome to Farkle&Friends!<br>How many players?</h1>
        <input class="w-50" type="number" v-model="numberOfPlayers" placeholder="Enter number"/>
        <button class="btn-start" @click="setPlayers">Start Game</button>
    </div>
    

</template>

<script>
import { usePlayerStore } from '../stores/playerStore'

export default {
  data() {
    return {
      numberOfPlayers: 0
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

<style lang="less">


    .container-welcome {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        h1 {
            color: #ffffff;
        }
    }
</style>