
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
      games: [],
      tictactoe: [] //Paula te va a cambiar el nombre en el futuro :)
		}
  },
  // updated: function () {
  //     console.log("activated")
  //     allGamesRankings();
  // },
  created: function () {
    fetch(`/games/`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        for (let x of data.response[0].allGames)
          this.games.push(x.name); 
      })
      .catch(err => console.log(err));

    // Bucle aquí para hacer un get de cada juego
    fetch(`/rankings/TicTacToe`)
      .then(res => {
        if (res.status != 200)  // Si recibe 404 es que no hay datos de ese ranking
          return res.status;
        return res.json();
      })
      .then(data => {
        if (data == 404)
          console.log("No hay ranking de este juego");
        else {
          console.log(data)
          for (let x of data.response[0].ranking) {
            this.tictactoe.push(x);
            console.log(x.score + x.nickname)
          }
        }
      })
      .catch(err => console.log(err));
  },
  methods: {
    allGamesRankings() {
      // Para cada juego llamar a crear tabla:
      // this.getAllGames();
      this.gameRanking("TicTacToe");   // Hay que rellenar en algún momento mongo con los datos de cada juego
    },
    gameRanking(game) {
      let gamesRankings = document.getElementById("gamesRankings");
      let table = document.createElement("table");
      let tableHead = document.createElement("thead");
      let tableBody = document.createElement("tbody");
      let head = ["position", "nickname", "score", "time"];

      let row = document.createElement("tr");
      for (let x of head) {
        let cell = document.createElement("td");
        let text = document.createTextNode(x.toUpperCase());      
        cell.appendChild(text);
        row.appendChild(cell);
      }
      tableHead.appendChild(row);

      console.log(this.tictactoe[0]["nickname"])
      for (let i = 0; i < this.numberOfRows(game); i++) {
        row = document.createElement("tr");

        for (let j of head) {
          let cell = document.createElement("td");
          let content;
          
          switch(j) {
            case "position":
              content = i + 1;
              break;
            case "nickname":
              content = this.tictactoe[i]["nickname"];
              break;
            case "score":
              content = this.tictactoe[i]["score"];
              break;
            case "time": 
              content = this.tictactoe[i]["time"];
          }
          
          
          let text = document.createTextNode(content);      
          
          cell.appendChild(text);
          row.appendChild(cell);
        }
        tableBody.appendChild(row);
      }

      table.appendChild(tableHead);
      table.appendChild(tableBody);
      gamesRankings.appendChild(table);
    },
    numberOfRows(game) {
      if (this.tictactoe.length < 10)
        return this.tictactoe.length;
      else
        return 10;
    }
  }
}
</script>

<style scoped>
.container {
  height: 1000px;
}
</style>