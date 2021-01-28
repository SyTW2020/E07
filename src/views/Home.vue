<template>
  <div class = "bodyHome">
      <Dashboard></Dashboard>
      <!-- <h1 class="txtHome"> Gaming It </h1> -->
      <!-- <Timer></Timer>
      <TicTacToe></TicTacToe>
      <a class="btn-neon"><b> > Play </b></a><br/>
      <router-link to="/signin" class="btn-neon btn-secundary"><b> > Inicia sesión o regístrate </b></router-link><br/> -->

  </div>
</template>

<script>
// import TicTacToe from "../components/games/TicTacToe.vue";
// import Timer from "../components/Timer.vue";
import Dashboard from "../components/Dashboard.vue";

export default {
  name: "Home",
  components: {
    // TicTacToe,
    // Timer /* Crear una vista de juego y meter el Timer ahí mejor */
    Dashboard
  }
};
</script>

<style scoped>
.bodyHome {

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  margin:auto;

  /*  Image  */
  background-image: url("https://images8.alphacoders.com/105/1054256.jpg");
  background-position: center;
  background-size: cover;

}



/* .btn-neon { 
  background-color: rgb(0, 0, 0, 0.7);
  padding: 20px 20px; 
  display: inline-block; 
  color: whitesmoke; 
  letter-spacing: 2px; 
  font-size: 2em; 
  overflow: hidden; 
} 

.btn-neon:hover { 
  color: #111; 
  background: #57E2E5; 
  box-shadow: 0 0 50px #57E2E5; 
}  */


</style>