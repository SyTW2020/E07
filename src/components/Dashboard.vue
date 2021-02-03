<template>
	<div class="dashboard flex wrap">
		<Card v-for="(i, j) in games" :key="j" :name="i" class="card flex">
			<template #header @click="gToGame(i)">
				<img alt="user header" :src="getUrl(i)" :id="i" @click="goToGame(i)">
			</template>
			<template #title> <h3> {{ i }} </h3> </template>
		</Card>
	</div>
</template>

<script>
import { Card } from '../utils';
import * as imgGames from "../assets/games";
 
export default {
	name: "Dashboard",
	components: {
		Card
	},

	data() {
		return {
			games: ["TicTacToe", "Simon", "MirsBall"],
			imgGames
		}
	},
	
	methods: {
		goToGame(game) {
			this.$store.dispatch('setGameAction', game);
			this.$router.push('/game');
		},

		getUrl(index) {
			return this.imgGames[index];
		}
	}
}
</script>

<style scoped>
.dashboard {
	width: 95%;
	background-color:rgb(0, 0, 0, 0.8);
}

h3 {
	font-family: 'Bungee Inline', cursive;
	font-size: 20px;
	margin-top: -10px;
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
	padding: 5px;
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
	}
	.card {
		height: 320px;
	}
} 
</style>