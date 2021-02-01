<template>
  <div class="container">
    <template v-if="$store.getters.user != null">
      <h1> Rankings por usuario </h1>
      <h3> Holi {{ $store.getters.user.name }} </h3>
    </template>
    <hr>

    <h1> Rankings por juego </h1>
    <div id="gamesRankings">

    </div>

    <button @click="allGamesRankings"> Mostrar rankings </button>

  </div>
</template>

<script>
export default {
  name: "Rankings",
  data() {
		return {

		}
  },
  // updated: function () {
  //     console.log("activated")
  //     allGamesRankings();
  // },
  methods: {
    allGamesRankings() {
      // Para cada juego llamar a crear tabla:
      this.gameRanking("TicTacToe");   // Hay que rellenar en algún momento mongo con los datos de cada juego
      console.log("created")
    },
    gameRanking(game) {
      let gamesRankings = document.getElementById("gamesRankings");
      let table = document.createElement("table");
      let tableHead = document.createElement("thead");
      let tableBody = document.createElement("tbody");

      // Guardad datos de la API
      let data = this.getGameRanking(game);

      let i = 0;
      // while (i < 10 || )
    },
    getGameRanking(game) {
      console.log("getGameRanking")
      let ranking;
      fetch(`/rankings/${game}`)
        .then(res => {
          if (res.status != 200)  // Si recibe 404 es que no hay datos de ese ranking
            return res.status;
          return res.json();
        })
        .then(data => {
          if (data == 404) {
            console.log("no hay ranking de este juego");
          }
          else {
            ranking = data.response[0];
            console.log(ranking);
          }
          console.log("then")
        })
        .catch(err => console.log(err));
    },
  }
}
</script>

<style scoped>
.container {
  height: 1000px;
}
</style>