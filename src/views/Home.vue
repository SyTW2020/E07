<template>
  <div class = "bodyHome">
    <div class = "containerHome">
      <!-- <h1 class="txtHome"> Gaming It </h1> -->
      <Timer></Timer>
      <TicTacToe></TicTacToe>
      <a class="btn-neon"><b> > Play </b></a><br/>
      <router-link to="/signin" class="btn-neon btn-secundary"><b> > Inicia sesión o regístrate </b></router-link><br/>
    </div>
  </div>
</template>

<script>
import TicTacToe from "../components/games/TicTacToe.vue";
import Timer from "../components/games/Timer.vue";

export default {
  name: "Home",
  components: {
    TicTacToe,
    Timer /* Crear una vista de juego y meter el Timer ahí mejor */
  }
};
</script>

<style scoped>
.bodyHome {
  height: 100%;
  color: #ffffff;

  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: left;
  align-items: center;
  justify-content: center;
  margin:auto;

  /*  Image  */
  background-image: url("https://images8.alphacoders.com/105/1054256.jpg");
  background-position: center;
  background-size: cover;
}

.containerHome{
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10%;
  margin: auto;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.8);
}

.btn-funky-moon {
  background: #a770ef;
  background: -webkit-linear-gradient(145deg, #fdb99b, #cf8bf3, #a770ef);
  background: linear-gradient(145deg, #fdb99b, #cf8bf3, #a770ef);
  color: #fff;
  border: 3px solid #eee;
  border-radius: 35px;
  padding: 10px;  /* Cambiar por responsive */
  margin: auto;
}
.btn-neon { 
  background-color: rgb(0, 0, 0, 0.7);
  padding: 20px 20px; 
  display: inline-block; 
  color: whitesmoke; 
  letter-spacing: 2px; 
  font-size: 2em; 
  overflow: hidden; 
} 

/*creating animation effect*/ 
.btn-neon:hover { 
  color: #111; 
  background: #57E2E5; 
  box-shadow: 0 0 50px #57E2E5; 
} 

.btn-secundary {  
  font-size: 1.5em; 
} 
</style>