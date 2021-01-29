<template>
  <div class="tictactoe-board">
    <div v-bind:key="i" v-for="(n, i) in 3">
      <div v-bind:key="j" v-for="(n, j) in 3">
        <cell @click="performMove(j, i)" :value="board.cells[j][i]"></cell>
      </div>
    </div>
    <div class="game-over-text" v-if="gameOver"> {{ gameOverText }} </div>
  </div>
</template>

<script>
import cell from "./TicTacToe_Cell.vue";
import Board from "../../games/TicTacToe";

export default {
  name: "TicTacToe",
  components: {
    cell
  },
  data() {
    return {
      path: '/tictactoe',
      gameOver: false,
      gameStarted: false,
      gameOverText: '',
      board: new Board()
    }
  },

  methods: {
    performMove(x, y) {
      if (!this.gameStarted) {
        this.$store.dispatch('setTimerAction')
        this.gameStarted = true;
      }
      if (this.gameOver) {
        this.gameStarted = false;
        this.$store.dispatch('setTimerAction');
        return;
      }
      if (!this.board.doMove(x, y, 'x')) {
        console.log("movimiento no válido")
        return;
      }
      this.$forceUpdate();
      
      if (this.board.isGameOver()) {
        this.gameOver = true;
        this.gameStarted = false;
        this.$store.dispatch('setTimerAction');
        this.gameOverText = this.board.playerHas3InARow('x') ? 'You win' : 'Draw';
        return;
      }
      let aiMove = this.minimax(this.board.clone(), 'o');
      this.board.doMove(aiMove.move.x, aiMove.move.y, 'o');
      if (this.board.isGameOver()) {
        this.gameOver = true;
        this.gameStarted = false;
        this.$store.dispatch('setTimerAction');
        this.gameOverText = this.board.playerHas3InARow('o') ? 'You lose!' : 'Draw';
      }
      this.$forceUpdate();
    },

    minimax(board, player, depth = 1) {
      if (board.isGameOver()) {
        return {
          score: board.getScore() + depth,
          move: null
        }
      }
      let bestScore = player === 'o' ? -10000 : 10000;
      let bestMove = null;
      let moves = board.getPossibleMoves();
      for (let i = 0; i < moves.length; i ++) {
        let move = moves[i];
        let newBoard = board.clone();
        newBoard.doMove(move.x, move.y, player);
        const score = this.minimax(newBoard, player === 'x' ? 'o' : 'x', depth + 1).score;
        if ((player === 'o' && score > bestScore) || (player === 'x' && score < bestScore)) {
          bestScore = score;
          bestMove = move;
        }
      }
      return {
        score: bestScore,
        move: bestMove
      }
    }
  }
};
</script>

<style scoped>
.tictactoe-board {
  display: flex;
  flex-wrap: wrap;
  width: 204px;
  height: 204px;
}

.flexcontainer{
  display: flex;
  margin: auto;
}

.bodyTicTacToe {
  background-color: white;
  width: 700px;
  height: 700px;
}

.boardGame {
  border: 2px solid black;
  width: 60%;
  height: 60%;
  flex-flow: row wrap;
}

.gameBox {
  margin: auto;
  border: 1px groove black;
  width: 30%;
  height: 30%;
}
</style>