<template>
  <div>
    <Timer></Timer>
    <template v-if="$store.getters.game == 'TicTacToe'"><TicTacToe></TicTacToe></template>
    <template v-else-if="$store.getters.game == 'Simon'"><Simon></Simon></template>
  </div>
</template>

<script>
import Timer from "../components/Timer.vue"
import TicTacToe from "../components/games/TicTacToe.vue"
import Simon from "../components/games/Simon.vue"

export default {
  name: "Game",
  components: {
		Timer: Timer,
		TicTacToe: TicTacToe,
		Simon: Simon
  }
}
</script>

<style scoped>
</style>