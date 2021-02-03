<template>
  <div>
    <div class="tictactoe-board">
      <div v-bind:key="i" v-for="(n, i) in 3">
        <div v-bind:key="j" v-for="(n, j) in 3">
          <Cell class="cell" @click="performMove(j, i);" :value="board.cells[j][i]"></Cell>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cell from "./TicTacToe_Cell.vue";
import Board from "../../games/TicTacToe";

export default {
  name: "TicTacToe",
  components: {
    Cell
  },
  data() {
    return {
      gameOver: false,
      gameStarted: false,
      board: new Board(),
      score: null
    }
  },

  mounted() {
		this.$root.$on('TicTacToe', () => {
			this.reset();
		})
	},

  methods: {
    reset() {
      this.gameOver = false;
      this.gameStarted = false;
      this.board = new Board();
      this.score = null;
      this.$store.dispatch('setTimerAction', this.gameStarted);
      this.$store.dispatch('setGameStatusAction', {
        msg: this.gameOver,
        msgText: ''
      });
    },

    performMove(x, y) {
      if (!this.gameStarted) {
        this.gameStarted = true;
        this.$store.dispatch('setTimerAction', this.gameStarted);
      }
      if (this.gameOver) {
        this.gameStarted = false;
        this.$store.dispatch('setTimerAction', this.gameStarted);
        return;
      }
      if (!this.board.doMove(x, y, 'x')) {
        window.alert("Movimiento no válido");
        return;
      }
      this.$forceUpdate();
      
      if (this.board.isGameOver()) {
        this.gameOver = true;
        this.gameStarted = false;
        this.$store.dispatch('setTimerAction', this.gameStarted);
        this.$store.dispatch('setGameStatusAction', {
          msg: this.gameOver,
          msgText: this.board.playerHas3InARow('x') ? '¡Ganaste! (No ocurrirá)' : 'Empate'
        });
        this.score = this.board.getScore();
        this.sendResults();
        return;
      }
      let aiMove = this.minimax(this.board.clone(), 'o');
      this.board.doMove(aiMove.move.x, aiMove.move.y, 'o');
      if (this.board.isGameOver()) {
        this.gameOver = true;
        this.gameStarted = false;
        this.$store.dispatch('setTimerAction', false);
        this.$store.dispatch('setGameStatusAction', {
          msg: this.gameOver,
          msgText: this.board.playerHas3InARow('o') ? '¡Perdiste!' : 'Empate'
        });
        this.score = this.board.getScore();
        this.sendResults();
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
    },
    
    sendResults() {
      fetch("/rankings", {
        method: "POST",
        body: JSON.stringify({
          nickname: this.$store.getters.user != null ? this.$store.getters.user.nickname : "Anónimo",
          game: this.$options.name,
          score: -this.score,
          time: this.$store.getters.valueTimer 
        }),
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
        }
      })
      .then(res => {
        return res.json()
      })
      .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.tictactoe-board {
  display: flex;
  flex-wrap: wrap;
}

.flexcontainer {
  display: flex;
  margin: auto;
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