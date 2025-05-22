<template>
  <section class="welcome-header">
    <button v-if="showInstallButton" class="cta-install" @click="handleInstall">Install as App</button>
  </section>
  <section class="container-welcome">
      <h1>Welcome to Farkle&Friends!</h1>
      <button class="btn-start" @click="setPlayers(1)">Points Counter</button>
      <button class="btn-start" disabled @click="setPlayers()">Game</button>
  </section>
</template>

<script>
import { usePlayerStore } from '../stores/playerStore'

export default {
  data() {
    return {
      deferredPrompt: null,
      showInstallButton: false,
      numberOfPlayers: 0,
      playerStore: usePlayerStore(),
    }
  },
  mounted() {
    this.checkAppInstallation();
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
    },
    checkAppInstallation() {
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        this.deferredPrompt = e;
        this.showInstallButton = true;
      })
    },
    async handleInstall() {
      if(this.deferredPrompt) {
        this.deferredPrompt.prompt();
        const {outcome} = await this.deferredPrompt.userChoice;
        this.deferredPrompt = null;
        this.showInstallButton = false;
      }
    }

  }
}
</script>

<style lang="less" scoped>
    .welcome-header {
      display: flex;
        justify-content: flex-start;
        margin: 10px;
        .cta-install {
          font-size: 10px;
        }
    }
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