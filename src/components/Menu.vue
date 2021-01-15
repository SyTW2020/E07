<template>
  <div class="bodyMenu">
    <div class="headerMenu">
      <router-link to="/" class="logo"> <div class="home"><div class="logo-img"></div> GamingIt </div></router-link>
     
      <!-- Google Icons: https://material.io/resources/icons/?style=baseline -->
      <input class="burger-menu-btn" type="checkbox" id="burger-btn" />
      <label class="burger-menu-icon" for="burger-btn"><div class="icon-container"><i class="material-icons">menu</i></div></label>

      <div class="items">
        <router-link to="/games" active-class="active"> Juegos </router-link>
        <router-link to="/rankings" active-class="active"> Rankings </router-link>
        <template v-if="$store.getters.loggedin === true">
          <router-link to="/myuser" active-class="active" class="nav-items"><i class="material-icons">account_circle</i> Perfil </router-link>
          <button @click="userLogOut" active-class="active" class="nav-items"><i class="material-icons">exit_to_app</i> Cerrar sesión </button>
        </template>
        <template v-else>
          <router-link to="/signin" active-class="active" class="nav-items"><i class="material-icons">account_circle</i> Inicia sesión </router-link>
          <router-link to="/signup" active-class="active" class="border nav-items"><i class="material-icons">create</i> Regístrate </router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    userLogOut() {
      this.$store.dispatch('logOutAction');
      this.$router.push('/signin');
    }
  }
};
</script>

<style scoped>
.headerMenu {
  overflow: hidden;
  color: #dedede;
  background-color: #1c221f;
  padding: 10px 50px;

  display: block;
  margin: 0 auto;
}

button {
  color: #dedede;
  background-color: #1c221f;
  border: 0;
  font-family: serif;
}

.headerMenu a, .headerMenu button {
  float: left;
  color: #dedede;
  padding: 12px;
  text-decoration: none;
  font-size: 20px;
  line-height: 25px;
  border-radius: 2px;
}

.headerMenu a:hover, .headerMenu button:hover {
  background-color: #4d5451;
  color: #dedede;
}

.headerMenu a.active, .headerMenu button:active {
  background-color: #4d5451;
  color: #dedede;
}

.logo {
  display: block;
  float: left;
}

.home {
  display: flex;
  /*margin: 0 0 0 20px;*/
  align-items: center;
}

.logo-img {
  content: url("https://cdn.glitch.com/db77d28a-8547-4c40-8473-0852380d676e%2Fmando1.ico?v=1607165029366");
  margin: 0 10px 0 0;
}

.items {
  display: none;
  float: left;
}

.border {
  /*margin: 0 50px 0 0;*/
  border: 1px solid #dedede;
}

.nav-items {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

router-link-active, router-link-exact-active {
  background-color: #2d3631;
}

i {
  margin-right: 7px;
}

/* Menú hamburguesa */ 
.icon-container {
  display: flex;
  align-items: center;
  height: 50px;
}

.burger-menu-icon {
	display: inline-block;
	float: right;
}

.burger-menu-icon .material-icons {
  display: block;
  position: relative;
}

.burger-menu-btn {  /* No mostrar el checkbox */
  display: none;
}

.burger-menu-btn:checked ~ .items { /* si checked == true items se transforma */
  display: block;
}

@media screen and (min-width: 800px) {
  .headerMenu {
    display: flex;
    justify-content: space-between;
  }

  .items {
    display: block;
    float: right;
    max-height: none;
  }
  
  .burger-menu-icon {
    display: none;
  }
}
</style>