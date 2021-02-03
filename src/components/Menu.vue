<template>
  <div class="bodyMenu">
    <div class="headerMenu">
      <router-link to="/" class="logo" id="BGamingit"><div class="home" @click="$store.dispatch('setTimerAction', false);"><div class="logo-img"></div> GamingIt </div></router-link>

      <input class="burger-menu-btn" type="checkbox" id="burger-btn" />
      <label class="burger-menu-icon" for="burger-btn"><div class="icon-container"><i class="material-icons"> menu </i></div></label>

      <div class="items">
        <router-link to="/rankings" active-class="active" id="BRanking" class="nav-items"><i class="material-icons"> insert_chart_outlined </i> Rankings </router-link>
        <template v-if="$store.getters.token != null">
          <router-link to="/myuser" active-class="active" id="BMyuser" class="nav-items"><i class="material-icons"> account_circle </i> Perfil </router-link>
          <Button @click="userLogOut" active-class="active" class="p-button-danger nav-items"><i class="material-icons"> exit_to_app </i> Cerrar sesión </Button>
        </template>
        <template v-else>
          <router-link to="/signin" active-class="active" id="BSignin" class="nav-items"><i class="material-icons"> account_circle </i> Inicia sesión </router-link>
          <router-link to="/signup" active-class="active" id="BSignup" class=" nav-items"><i class="material-icons"> create </i> Regístrate </router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from '../utils';

export default {
  name: "Menu",
  components: {
    Button
  },
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
  display: block;
  margin: auto;
}

.headerMenu a {
  float: left;
  color: #dedede;
  padding: 12px;
  text-decoration: none;
  font-size: 120%;
  border-radius: 2%;
}

.headerMenu a:hover {
  background-color: #4d5451;
  color: #dedede;
}

.headerMenu a.active {
  color: #4d5451;
  background-color: #dedede;
}

.logo {
  display: block;
  float: left;
}

.home {
  display: flex;
  align-items: center;
}

.logo-img {
  content: url("https://cdn.glitch.com/db77d28a-8547-4c40-8473-0852380d676e%2Fmando1.ico?v=1607165029366");
  margin: 0 10px 0 0;
}

.items {
  display: none;
  float: left;
  padding-top: 0.25%;
}

.nav-items {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

router-link-active, router-link-exact-active {
  background-color: #2d3631;
}

i {
  margin-right: 7px;
}

.icon-container {
  display: flex;
  align-items: center;
  height: 50px;
}

.burger-menu-icon {
	float: right;
}

.burger-menu-btn {  
  display: none;
}

.burger-menu-btn:checked ~ .items {
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
  }
  .burger-menu-icon {
    display: none;
  }
}
</style>