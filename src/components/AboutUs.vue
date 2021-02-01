<template>
  <div class = "bodyAbout">
		<link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap" rel="stylesheet">
    <div class = "teamBox">
      <div class="card">
				<div class="teamText">
        	<h1> Paula Expósito Estévez </h1>
					<h2> Cerebro conjunto de Gaming It </h2>
				</div>
				<a href="https://github.com/PaulaExposito">
        	<img src="https://vader.news/__export/1589864317677/sites/gadgets/img/2020/05/19/the100-newsvader.jpg_550774285.jpg" class="teamPhoto">  
				</a>
      </div>  
      <div  class="card teamLeft">
				<div class="teamText">
        	<h1> Míriam Núñez García </h1>
					<h2> Cerebro conjunto de Gaming It </h2>
				</div>
				<a href="https://github.com/mnzgarcia">
        	<img src="https://pyxis.nymag.com/v1/imgs/f2c/caf/790143795c3c58b07b6221e11d3f2afcc1-21-clark-100.rsquare.w700.jpg" class="teamPhoto">  
				</a>
      </div>  
      <div  class="card">
				<div class="teamText">
        	<h1> Adán de la Rosa Lugo </h1>
					<h2> Cerebro conjunto de Gaming It </h2>
				</div>
				<a href="https://github.com/AdanRL">
        	<img src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-The-100-Ricky-Whittle.jpg" class="teamPhoto">
				</a>  
      </div>  
      <div  class="card teamLeft">
				<div class="teamText ">
        	<h1> Elena Sacramento Delgado </h1>
					<h2> Cerebro conjunto de Gaming It </h2>
				</div>
				<a href="https://github.com/elenamsd">
        	<img src="https://i.pinimg.com/originals/77/da/5f/77da5fe07dcc9a82f5c3247a59ce93fb.jpg" class="teamPhoto"> 
				</a> 
      </div> 
    </div> 
  </div>
</template>

<script>
import { Card } from '../utils';

export default {
  name: "Home",
  components: {
    Card
	}
};
</script>

<style scoped>
.bodyAbout {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-image: url("https://wallpapercave.com/wp/wp5842177.jpg");
  background-position: center;
  background-size: cover;
  color: white;
	font-family: 'Bungee Inline', cursive;
}

.teamBox {
	width: 100%;
	height: 97%;
	background-color:rgb(0, 0, 0, 0.8);
	padding: 10px;
}

.card {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: auto;
	height: 250px;
	background-color: grey;
	margin: 5%;
	font-size: 10px;
  background: linear-gradient(
		60deg,
		#5073b8,
		#1098ad,
		#07b39b,
		#6fba82);
}

.teamText {
	width: 40%;
	margin: 10%;
}

.teamPhoto {
	width: 60%;
  height: 100px;
  width: 100px;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
  margin: 10%;
}

.teamPhoto:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25), -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
}

.teamLeft {
	flex-direction: row-reverse;
}

/* ORDENADOR */ 
@media screen and (min-width: 1600px) {
	.card {
		font-size: 18px;
	}
	.teamPhoto {
		height: 200px;
  	width: 200px;
	}
}

/* Media pantalla */ 
@media screen and (min-width: 800px) and (max-width: 1600px) {
	.card {
		font-size: 14px;
	}
	.teamPhoto {
		height: 150px;
  	width: 150px;
	}
}
</style>