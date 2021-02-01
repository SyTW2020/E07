<template>
	<div class="dashboard flex wrap">
		<Card v-for="(i, j) in games" :key="j" :name="i" class="card flex">
			<template #header>
				<img alt="user header" src="https://i.pinimg.com/originals/77/da/5f/77da5fe07dcc9a82f5c3247a59ce93fb.jpg" @click="goToGame(i)">  <!-- Cambiar por foto en mongo -->
			</template>
			<template #title>	{{ i }} </template>
		</Card>
	</div>
</template>

<script>
import { Card } from '../utils';

export default {
	name: "Dashboard",
	components: {
		Card
	},

	data() {
		return {
			games: ["TicTacToe", "MirsBall", "Simon"]
		}
	},
	
	methods: {
		goToGame(game) {
			this.$store.dispatch('setGameAction', game);
			this.$router.push('/game');
		}
	}
}
</script>

<style scoped>
.dashboard {
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
	flex-direction: column;
	justify-content: space-between;

	margin: 30px;
	padding: 10px;
	height: 220px;

	font-size: 20px;
	color: white;
	border-radius: 10px 10px 10px 10px;
	box-shadow: 1px 1px 12px 1px rgba(0,0,0,0.8);
	background-color:rgb(0, 0, 0, 0.8);
} 

img {
	width: 150px;
	height: 150px;
	padding: 10px;
}

.card:hover { 
  color: #111; 
  background: #4594FB; 
  box-shadow: 0 0 50px #4594FB; 
}  

@media screen and (min-width: 800px) {
	.flex {
		display: flex;
		justify-content: left;
	}
	img {
		width: 250px;
		height: 250px;
		padding: 10px;
	}
	.card {
		height: 320px;
		padding: 10px;
	}
} 
</style>