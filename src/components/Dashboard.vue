<template>
	<div class="dashboard flex wrap">
		<Card v-for="(i,j) in games" :key="j" :name="i" class="card flex">
			<template #header>
				<img alt="user header" src="https://i.pinimg.com/originals/77/da/5f/77da5fe07dcc9a82f5c3247a59ce93fb.jpg" @click="goToGame(i)">  <!-- Cambiar por foto en mongo -->
			</template>
			<template #title>	{{ i.name }} </template>
		</Card>
	</div>

</template>

<script>
import { Card } from '../utils'
import TicTacToe from './games/TicTacToe.vue';
import MirsBall from './games/MirsBall.vue';
import Simon from './games/Simon.vue';

export default {
	name: "Dashboard",
	methods: {
		goToGame(game) {
			this.$router.push(game.data().path);
		}
	},
	components: {
		Card: Card,
		TicTacToe: TicTacToe,
		MirsBall: MirsBall,
		Simon: Simon
	},
	data() {
		return {
			games: [TicTacToe, MirsBall, Simon]
		}
	}
}
</script>

<style scoped>

/* MOVIL */
.dashboard{
	width: 95%;
	background-color:rgb(0, 0, 0, 0.8);
}

.flex {
	display: flex;
	justify-content: center;
	align-items: center;
}

.wrap {
  flex-wrap: wrap;
}

.card {
	width: 200px;
	height: 200px;

	flex-direction: column;
	justify-content: space-between;

	margin: 30px;
	padding: 10px;

	font-size: 20px;
	color: white;
	border-radius: 10px 10px 10px 10px;
	box-shadow: 1px 1px 12px 1px rgba(0,0,0,0.8);
} 

img {
	width: 150px;
	height: 150px;
	padding: 10px;
}

.card:hover { 
  color: #111; 
  background: #57E2E5; 
  box-shadow: 0 0 50px #57E2E5; 
}  

/* ORDENADOR */ 
@media screen and (min-width: 800px) {
	.flex {
		display: flex;
		justify-content: left;
	}
} 

</style>