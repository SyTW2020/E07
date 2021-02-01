
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

  </div>
</template>

<script>
import "@babel/polyfill";

export default {
  name: "Rankings",
  data() {
		return {
      gamesName: [],
      gamesRankings: [],
      userGamesRankings: []
		}
  },
  created: async function () {
    await this.getGames();

    // RANKINGS POR JUEGO
    await this.getRankingsByGame();
    for (let x in this.gamesName)
      this.ranking( this.gamesName[x], x, false);

    // RANKINGS POR USUARIO
    if (this.$store.getters.user != null) {
      await this.getRankingsByUser();
      for (let x in this.userGamesRankings)
        this.ranking(this.gamesName[x], x, true);
    }
  },
  methods: {
    async getGames() {
      await fetch(`/games/`)
        .then(res => {
          return res.json();
        })
        .then(data => {
          for (let x of data.response[0].allGames)
            this.gamesName.push(x.name); 
        })
        .catch(err => console.log(err));
    },
    async getRankingsByGame() {
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
    },
    async getRankingsByUser() {
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
              for (let x of data.response[0].ranking) {
                this.userGamesRankings[y].push(x);
              }
            }
          })
          .catch(err => console.log(err));
      }
    },
    ranking(name, index, user = false) {
      let ranking = !user ? document.getElementById("gamesRankings") : document.getElementById("userRankings");
      let gameTitle = document.createElement("h2");
      gameTitle.textContent = name;
      let table = document.createElement("table");
      let tableHead = document.createElement("thead");
      let tableBody = document.createElement("tbody");
      let head = !user ? ["position", "nickname", "score", "time"] : ["position", "score", "time"];

      let row = document.createElement("tr");
      for (let i of head) {
        let cell = document.createElement("td");
        let text = document.createTextNode(i.toUpperCase());      
        cell.appendChild(text);
        row.appendChild(cell);
      }
      tableHead.appendChild(row);

      let numberOfRows = !user ? this.numberOfGameRankingRows(index) : this.numberOfUserRankingRows(index);
      for (let i = 0; i < numberOfRows; i++) {
        row = document.createElement("tr");

        for (let j of head) {
          let cell = document.createElement("td");
          let content;
          if (!user)
            content = j === "position" ? i + 1 : this.gamesRankings[index][i][j];
          else
            content = j === "position" ? i + 1 : this.userGamesRankings[index][i][j];

          let text = document.createTextNode(content);      
          
          cell.appendChild(text);
          row.appendChild(cell);
        }
        tableBody.appendChild(row);
      }

      table.appendChild(tableHead);
      table.appendChild(tableBody);
      ranking.appendChild(gameTitle);
      ranking.appendChild(table);
    },
    numberOfGameRankingRows(index) {
      return this.gamesRankings[index].length < 10 ? this.gamesRankings[index].length : 10;
    },
    numberOfUserRankingRows(index) {
      return this.userGamesRankings[index].length < 5 ? this.userGamesRankings[index].length : 5;
    },
  }
}
</script>

<style scoped>
.container {
  height: 1000px;
}

thead {
  background: green;
}
</style>