<template>
  <Timer></Timer>
  <template v-if="$store.getters.game == 'TicTacToe'"><TicTacToe></TicTacToe></template>
  <template v-if="$store.getters.game == 'Simon'"><Simon></Simon></template>
</template>

<script>
import Timer from "../components/Timer.vue"
import TicTacToe from "../components/TicTacToe.vue"
import Simon from "../components/Simon.vue"

export default {
  name: Game,
  components: {
		Timer: Timer,
		TicTacToe: TicTacToe,
		Simon: Simon
  }
}
</script>

<style scoped>
</style>