<template>
  <div class="bodyGame">
    <div class="boxGame">
      <div class="boxTitle">
        <h1> {{ $store.getters.game }} </h1>
      </div>
      <div class="boxBoard">
        <div class="boardGame">
          <template v-if="$store.getters.game == 'TicTacToe'"><TicTacToe></TicTacToe></template>
          <template v-else-if="$store.getters.game == 'Simon'"><Simon></Simon></template>
        </div>
        <div class="boardScore">
          <Timer></Timer>
          <div class="gameOverText" v-if="$store.getters.gameStatus.gameOver == true">
            <h1> {{ $store.getters.gameStatus.gameOverText }} </h1>
          </div>
          <div class="buttons">
            <Button class="BRestart"> Restart </Button>
            <Button class="BBack" @click="goBack"> Back </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timer from "../components/Timer.vue"
import TicTacToe from "../components/games/TicTacToe.vue"
import Simon from "../components/games/Simon.vue"
import { Button} from '../utils';

export default {
  name: "Game",
  components: {
    Timer,
		TicTacToe,
    Simon,
    Button
  },

  created: function () {
    this.$store.dispatch('setGameStatusAction', {
      gameOver: false,
      gameOverText: ''
    });
  },

  methods: {
    goBack() {
      this.$router.push('/');
      this.$store.dispatch('setTimerAction', false);
    }
  }
}
</script>

<style scoped>

.bodyGame {
  display: flex;
  width: auto;
  height: 1000px; 
  text-align: center;
  background-image: url("https://wallpapercave.com/wp/wp4809774.jpg");
  background-position: right right;
  background-size: cover;
}

.boxGame {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
}

.boxTitle {
  width: 80%;
  height: 100px; 
  margin: auto;
  color:white;
  font-family: 'Bungee Inline', cursive;
}

.boxBoard {
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.boardGame {
  display: flex;
  background-color: rgba(0, 0, 0, 0.97);
  justify-content: center;
  align-items: center;
  /* height: 80%; */
}

.boardGame, .boardScore {
  width: 100%;
}

.boardScore {
  background-color: rgb(17, 17, 17, 0.8);
  display: flex;
  flex-direction: column;
}

.gameOverText {
  color: white;
  font-family: 'Bungee Inline', cursive;
}

.buttons {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;

}

.BBack, .BRestart {
  font-family: 'Bungee Inline', cursive;
  margin: 4%;
}

@media screen and (min-width: 1000px) {
  .boxBoard {
    width: 80%;
    height: 80%;
    margin: auto;
    flex-direction: row;
  }
  .boardGame {
    width: 70%;
  }
  .boardScore {
    width: 30%;
  }
  .buttons{
    width: 70%;
    /* display:flex; */
    flex-direction: column;
  }
}
</style>