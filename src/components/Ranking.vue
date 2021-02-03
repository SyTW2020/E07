<template>
  <div class="container flex">
    <h1 class="title"> RANKINGS TITLE </h1>
    <div class="boxRankings flex">

      <div class="userRankingContainer">
        <template v-if="$store.getters.user != null">
          <h2 class="title"> Tus rankings {{ $store.getters.user.name }} </h2>

          <div v-bind:key="i" v-for="(n, i) in gamesName" id="userRankings" class="Tcontainer">
            <h3 class="gameTitle">{{ gamesName[i] }} </h3>
            <table class="table" :id="'tableUserGame'+i">
              <thead class="thead">
                <tr class="row">
                  <div v-bind:key="x" v-for="x in headerUser.length"  class="rowContainer">
                    <td class="cell"> {{ headerUser[x - 1] }} </td>
                  </div>      
                </tr>
              </thead>
              <tbody class="tbody" :id="'tbodyUser'+i"></tbody>
            </table>
          </div>
        </template> 
      </div>

      <div class="gamesRankingContainer">
        <h2 class="title"> Rankings por juego </h2>
        <div v-bind:key="i" v-for="(n, i) in gamesName" id="gamesRankings" class="Tcontainer">
          <h3 class="gameTitle"> {{ gamesName[i] }} </h3>
          <table class="table" :id="'tableGame'+ i" >
            <thead class="thead">
              <tr class="row" style="background: yellow;">
                <div v-bind:key="x" v-for="x in headerGames.length" class="rowContainer">
                  <td class="cell">{{ headerGames[x - 1] }} </td>
                </div>
              </tr>
            </thead>
            <tbody class="tbody" :id="'tbodyGame' + i"></tbody>
          </table>
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
    for (let x in this.gamesRankings)
      this.ranking(this.gamesName[x], x, false);

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
      // let table = (!user) ? document.getElementById("tableGame"+index) : document.getElementById("tableUserGame"+index);
      let tableBody = (!user) ? document.getElementById("tbodyGame"+index) : document.getElementById("tbodyUser"+index);
      // tableBody.classList.add("tbody");
      tableBody.style = `
        background: white;
      `;


      let numberOfRows = !user ? this.numberOfGameRankingRows(index) : this.numberOfUserRankingRows(index);
      let head = !user ? this.headerGames : this.headerUser;
      
      for (let i = 0; i < numberOfRows; i++) {
        let row = document.createElement("tr");
        row.style = `
          background: black;
          display:flex;
          flex-direction:row;
          width: 100%;
          align-content: center;
        `
        // row.classList.add("row");

        for (let j of head) {
          let cell = document.createElement("td");
          cell.style = `
            background: darkred;
            border: 3px solid black;
            align-content: center;
            width: 100%;
            font-family: 'Bungee Inline', cursive;
            font-size: 13px;
            text-align: center;
          `;
          // cell.classList.add("cell");
      
          let content;
          if (!user) {
            if ( j === "position" )
              content = i + 1;
            else if ( j === "time" )
              content = this.getTime(this.gamesRankings[index][i][j]);
            else
              content = this.gamesRankings[index][i][j];
          }
          else {
            if ( j === "position" )
              content = i + 1;
            else if ( j === "time" )
              content = this.getTime(this.userGamesRankings[index][i][j]);
            else
              content = this.userGamesRankings[index][i][j];
          }

          let text = document.createTextNode(content);
    
          cell.appendChild(text);
          row.appendChild(cell);
        }
        tableBody.appendChild(row);
      }

      // table.appendChild(tableBody);

    },
    numberOfGameRankingRows(index) {
      return this.gamesRankings[index].length < 10 ? this.gamesRankings[index].length : 10;
    },
    numberOfUserRankingRows(index) {
      return this.userGamesRankings[index].length < 5 ? this.userGamesRankings[index].length : 5;
    },
    getTime(time) {
      return time.slice(11, 23);
    }
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
  padding-bottom:5%;
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
  height: 90%;
  display: flex;
  align-content: center;
  flex-direction:row;
}

.userRankingContainer {
  margin:1%;
  width: 50%;
  background-color: darkred;
  min-height: 200px;
}

.gamesRankingContainer {
  width: 50%;
  min-height: 200px;
  background-color: darkgreen;
  margin: 1%;
}

/* .Tcontainer{
  display: flex;
  width: 85%;
} */

.table {
  display:flex;
  width: 100%;
  /*height: 100%;*/
  flex-direction: column;
  background: darkorange;
}


.gameTitle {
  color: white;
  font-family: 'Bungee Inline', cursive;
}

.rowContainer, .row {
  display: flex;
  flex-direction:row;
  width: 100%;
  height: 100%;
  background: blue;
}

.cell {
  background: orange;
  border: solid black 3px;
  width:100%;
  /* height: 70%; */
  align-content: center;
  font-family: 'Bungee Inline', cursive;
  font-size: 15px;
  text-align: center;
}
</style>