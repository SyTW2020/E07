
      <template>
  <div class="container">
    <template v-if="$store.getters.user != null">
      <h1> Rankings por usuario </h1>
      <h3> Holi {{ $store.getters.user.name }} </h3>
      <div id="userRankings">
      </div>
    </template>
    <hr>

    <h1> Rankings por juego </h1>
    <div id="gamesRankings">
    </div>


    <!--<button @click="allGamesRankings"> Mostrar rankings </button>-->

  </div>
</template>

<script>
import "@babel/polyfill";

export default {
  name: "Rankings",
  data() {
		return {
      gamesName: [],
      tictactoe: [], //Paula te va a cambiar el nombre en el futuro :),
      gamesRankings: [],
      userGamesRankings: []
		}
  },

  created: async function () {

    /*****************************************************
    RANKINGS POR JUEGO
    *****************************************************/
    await fetch(`/games/`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        for (let x of data.response[0].allGames)
          this.gamesName.push(x.name); 
      })
      .catch(err => console.log(err));

    // Bucle aquí para hacer un get de cada juego
    for (let y in this.gamesName) {
      this.gamesRankings.push([]);
      await fetch(`/rankings/${this.gamesName[y]}`)
        .then(res => {
          if (res.status != 200)  // Si recibe 404 es que no hay datos de ese ranking
            return res.status;
          return res.json();
        })
        .then(data => {
          if (data == 404)
            console.log("No hay ranking de este juego");
          else {
            for (let x of data.response[0].ranking) {
              this.gamesRankings[y].push(x);
            }
          }
        })
        .catch(err => console.log(err));
    }

    this.allGamesRankings();

    /*****************************************************
    RANKINGS POR USUARIO
    *****************************************************/
    if (this.$store.getters.user != null) {
      await this.createUsersRankings();
      for (let x in this.userGamesRankings)
        this.userRanking(this.gamesName[x], x);
    }
  },
  methods: {
    allGamesRankings() {
      for (let x in this.gamesName)
        this.gameRanking( this.gamesName[x], x);   // Hay que rellenar en algún momento mongo con los datos de cada juego
    },
    gameRanking(name, index) {
      let gamesRankings = document.getElementById("gamesRankings");
      let gameTitle = document.createElement("h2")
      gameTitle.textContent = name;
      let table = document.createElement("table");
      let tableHead = document.createElement("thead");
      let tableBody = document.createElement("tbody");
      let head = ["position", "nickname", "score", "time"];

      let row = document.createElement("tr");
      for (let i of head) {
        let cell = document.createElement("td");
        let text = document.createTextNode(i.toUpperCase());      
        cell.appendChild(text);
        row.appendChild(cell);
      }
      tableHead.appendChild(row);

      for (let i = 0; i < this.numberOfGameRankingRows(index); i++) {
        row = document.createElement("tr");

        for (let j of head) {
          let cell = document.createElement("td");
          let content = j === "position" ? i + 1 : this.gamesRankings[index][i][j];
          let text = document.createTextNode(content);      
          
          cell.appendChild(text);
          row.appendChild(cell);
        }
        tableBody.appendChild(row);
      }

      table.appendChild(tableHead);
      table.appendChild(tableBody);
      gamesRankings.appendChild(gameTitle);
      gamesRankings.appendChild(table);
    },
    numberOfGameRankingRows(index) {
      return this.gamesRankings[index].length < 10 ? this.gamesRankings[index].length : 10;
    },
    numberOfUserRankingRows(index) {
      return this.userGamesRankings[index].length < 5 ? this.userGamesRankings[index].length : 5;
    },
    async createUsersRankings() {
      for (let y in this.gamesName) {
        this.userGamesRankings.push([]);
        await fetch(`/rankings/${this.$store.getters.user.nickname}&${this.gamesName[y]}`)
          .then(res => {
            if (res.status != 200)  // Si recibe 404 es que no hay datos de ese ranking
              return res.status;
            return res.json();
          })
          .then(data => {
            if (data == 404)
              console.log("No hay ranking de este juego");
            else {
              console.log(data);
              for (let x of data.response[0].ranking) {
                this.userGamesRankings[y].push(x);
              }
              console.log(this.userGamesRankings[y]);
            }
          })
          .catch(err => console.log(err));
      }
    },
    userRanking(name, index) {
      let gamesRankings = document.getElementById("userRankings");
      let gameTitle = document.createElement("h2");
      gameTitle.textContent = name;
      let table = document.createElement("table");
      let tableHead = document.createElement("thead");
      let tableBody = document.createElement("tbody");
      let head = ["position", "score", "time"];

      let row = document.createElement("tr");
      for (let i of head) {
        let cell = document.createElement("td");
        let text = document.createTextNode(i.toUpperCase());      
        cell.appendChild(text);
        row.appendChild(cell);
      }
      tableHead.appendChild(row);

      for (let i = 0; i < this.numberOfUserRankingRows(index); i++) {
        row = document.createElement("tr");

        for (let j of head) {
          let cell = document.createElement("td");

          let content = j === "position" ? i + 1 : this.userGamesRankings[index][i][j];
          let text = document.createTextNode(content);      
          
          cell.appendChild(text);
          row.appendChild(cell);
        }
        tableBody.appendChild(row);
      }

      table.appendChild(tableHead);
      table.appendChild(tableBody);
      gamesRankings.appendChild(gameTitle);
      gamesRankings.appendChild(table);      
    }
  }
}
</script>

<style scoped>
.container {
  height: 1000px;
}
</style>