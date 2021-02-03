<template>
	<div class="bodyFooter">
		<div class="boxFooter">
			<div class="footerUp">
				<div class="about">
					<h1> Gaming It 🕹️ </h1>
					<p> Es una web de videojuegos arcade en la que podrás entretenerte.</p>
				</div>
				<div class="links">
					<a href="https://github.com/SyTW2020/E07"> <h1> GitHub 🚀 </h1> </a>
					<router-link to="/aboutus" id="BAboutUs"> <h3> About Us </h3> </router-link>
				</div>
			</div>
			<div class="footerDown">
				<p> &copy; Gaming It 2021 </p>
			</div>
		</div>
	</div>
</template>
 
<script>
export default {
	name: "Footer"
};
</script>

<style scoped>
.bodyFooter {
	color: white;
	width: auto;
	height: 150px;
}

.boxFooter {
	margin: auto;
	display: flex;
	flex-direction: column;
	text-align: center;
	background-color: #111111;
}

.footerUp {
	display: flex;
	width: 90%;
	margin: auto;
	align-items: center;
}

.about, .links {
	width: 50%;
}

a:link, a:visited {
  color: white;
	text-decoration: none;
}

a:hover {
	color: #00BCF2;
}

.footerDown {
	background: linear-gradient(
		60deg,
		#5073b8,
		#1098ad,
		#07b39b,
		#6fba82
	);
  font-family: 'Bungee Inline', cursive;
	color: black;
}
</style>