<template>
  <div class="container flex">
    <h1 class="title"> RANKINGS TITLE </h1>
    <div class="boxRankings flex">
      <div class="userRankingContainer">
 <!--       <template v-if="$store.getters.user != null">
          <h2 class="title"> Rankings de {{ $store.getters.user.name }} </h2>
          <div id="userRankings"></div>
        </template> -->
        <div v-bind:key="i" v-for="(n, i) in gamesName">
           <!-- this.ranking( this.gamesName[x], x, false); -->
          <h3 class="gameTitle">{{ gamesName[i] }} </h3>
          <table class="table">
            <thead class="thead">
              <tr class="row">
                <div v-bind:key="y" v-for="y in headerUser.length">
                  <td class="cell"> {{ headerUser[y - 1] }} </td>
                </div>      
              </tr>
            </thead>
            <tbody class="tbody" id="userRankingBody">

  <!--            <div v-bind:key="x" v-for="x in 4">
                <tr class="row">
                  <div v-bind:key="y" v-for="y in headerUser.length">
                    <td class="cell">
                      <div v-if="headerUser[y] === 'position'"> {{ x + 1 }} </div>
                      <div v-else> {{userGamesRankings}}  </div> 
                    </td>
                  </div>      
                </tr>
              </div> -->
            </tbody>
          </table>
        </div>
      </div> 

      <div class="gamesRankingContainer">
        <h2 class="title"> Rankings por juego </h2>
        <div id="gamesRankings" class="Tcontainer">
          <div v-bind:key="i" v-for="(n, i) in gamesName">
            <h3 class="gameTitle"> {{ gamesName[i] }} </h3>
            <table class="table">
              <thead class="thead">
                <tr class="row">
                  <div v-bind:key="x" v-for="x in headerGames.length">
                    <td class="cell">{{ headerGames[x - 1] }} </td>
                  </div>
                </tr>
              </thead>
              <tbody class="tbody" id="gameRankingBody">
                <div v-bind:key="x" v-for="x in 4">
                  <tr class="row">
                    <div v-bind:key="y" v-for="y in headerGames.length">
                      <td class="cell"> 
                        <!-- <div v-if="headerGames[y] === 'position'"> {{ x + 1 }} </div>
                        <div v-else> {{ gamesRankings[] }}  </div>  -->
                      </td>
                    </div>      
                  </tr>
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
      userGamesRankings: [],
      headerUser: ["position", "score", "time"],
      headerGames: ["position", "nickname", "score", "time"],
      userRankingRows: null,
      gameRankingRows: null,
		}
  },
  created: async function () {
    await this.getGames();

    // // RANKINGS POR JUEGO
    await this.getRankingsByGame();
    for (let x in this.gamesName)
      this.ranking( this.gamesName[x], x, false);

    // // RANKINGS POR USUARIO
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
      let tableBody = (!user) ? document.getElementById("gameRankingBody") : document.getElementById("userRankingBody");
      // tableBody.classList.add("tbody");

      let numberOfRows = !user ? this.numberOfGameRankingRows(index) : this.numberOfUserRankingRows(index);
      let head = !user ? this.headerGames : this.headerUser;
      
      for (let i = 0; i < numberOfRows; i++) {
        let row = document.createElement("tr");
        // row.classList.add("row");

        for (let j of head) {
          let cell = document.createElement("td");
          // cell.classList.add("cell");
      
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
.flex {
  display: flex;
  justify-content: center;
}

.container {
  width: 100%;
  background-color: grey;
}

.title {
  background-color: white;
  font-family: 'Bungee Inline', cursive;
  text-align: center;
}

.boxRankings {
  width: 85%;
  background-color: darkblue;
  display: flex;
  align-content: center;
  flex-direction:row;
}

.userRankingContainer {
  width: 50%;
  background-color: darkred;
  min-height: 200px;
}

.gamesRankingContainer {
  width: 50%;
  min-height: 200px;
  background-color: darkgreen;
}

.table {
  width: 100%;
}

/* .Tcontainer{
  display: flex;
  width: 85%;
} */

.gameTitle {
  color: white;
  font-family: 'Bungee Inline', cursive;
}

.row {
  display: flex;
  flex-direction:row;
  width: 500px;
}

.cell {
  background: orange;
  border: solid black 1px;
  width: 50px;
  height: 20px;
}
/* thead {
  background: green;
} */
</style>