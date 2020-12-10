<template>
  <div class = "bodyHome">
    <div class = "containerHome">
      <h1 class="txtHome"> Gaming It </h1>
      <a class="btn-neon"><b> > PLAY </b></a><br/>
      <!-- <button type="button" class="btn-funky-moon"> Inicia sesión </button><br/> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
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
  background-color: rgb(0, 0, 0, 0.7);
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
    background-color: rgb(0, 0, 0, 0.2);
    padding: 20px 20px; 
    display: inline-block; 
    color: #008000; 
    letter-spacing: 2px; 
    /* text-transform: uppercase; 
    text-decoration: none;  */
    font-size: 3em; 
    overflow: hidden; 
} 

/*creating animation effect*/ 
.btn-neon:hover { 
    color: #111; 
    background: #39ff14; 
    box-shadow: 0 0 50px #39ff14; 
} 
</style>