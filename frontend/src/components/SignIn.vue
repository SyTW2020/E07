<template>
  <div class="bodySignIn">
    <form @submit.prevent="userSignIn" class="formSignIn"><br/>
      <img id="signinimg" src="https://cdn.pixabay.com/photo/2020/07/14/15/12/controller-5404616_960_720.png" width="96" height="72"/>
      <h1> ¡Inicia sesión Gamer! </h1>

      <label> Introduce tu usuario: </label>
      <input v-model="user.nickname" id="inputNickname" class="form-control" placeholder="Usuario" required="" autofocus=""/><br/>
      <label> Introduce tu contraseña </label>
      <input type="password" v-model="user.password" id="inputPassword" class="form-control" placeholder="Contraseña" required=""/><br/><br/>
      <button type="submit" class="btn-funky-moon" id="submitButton"> Inicia sesión </button><br/>
      <router-link to="/signup" type="button" class="btn-link"> ¿Olvidaste tu contraseña? </router-link>
      <router-link to="/signup" type="button" class="btn-link"> Regístrate </router-link><br/>
      <p id="copyright" class="copyright"> © Gaming It 2020 </p>
    </form>
  </div>
</template>

<script>
class User {
  constructor(nickname, password) {
    this.nickname = nickname;
    this.password = password;
  }
}

export default {
  name: "SignIn",
  data() {
    return {
      user: new User()
    };
  },

  methods: {
    // Pruebas
    userSignIn() { 
      // Accedemos a la API
      fetch(`/users/${this.user.nickname}&${this.user.password}`)
        .then(res => {
          if (res.status == 400)
            return 400;
          else 
            return res.json();
        })
        .then(data => {
          if (data == 400)
            window.alert('Usuario o contraseña incorrectos');
          else {
            this.$store.dispatch('signInAction', {
              token: data.response[0].token
            });
            this.$router.push('/games');
          }
        })
        .catch(err => console.log(err));
    }

    // fetch(`/users/${this.user.nickname}&${this.user.password}`)
    //     .then(res => { 
    //       return res.json()
    //     })
    //     .then(data => console.log(data.response[0].token));
  }
};
</script>

<style scoped>
.bodySignIn {
  height: 100%;
  color: #dedede;

  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: left;

  /*  Image  */
  background-image: url("https://www.xtrafondos.com/wallpapers/paisaje-retro-de-atardecer-5436.jpg");
  background-position: center;
  background-size: cover;
}

.formSignIn {
  display: flex;
  flex-direction: column;

  max-width: 330px;
  padding: 20px;
  margin: auto;

  border: 4px outset #f61067;
  background-color: #1c221f;
}

.formSignIn .form-control {
  padding: 10px;
  font-size: 16px;
}

.btn-funky-moon {
  background: #a770ef;
  background: -webkit-linear-gradient(145deg, #fdb99b, #cf8bf3, #a770ef);
  background: linear-gradient(145deg, #fdb99b, #cf8bf3, #a770ef);
  color: #dedede;
  border: 3px solid #eee;
  border-radius: 35px;
  padding: 10px; /* Cambiar por responsive */
  margin: auto;
}

.btn-link, #signinimg, #copyright {
  color: #dedede; 
  padding: 10px; /* Cambiar por responsive */
  margin: auto;
}

.copyright {
  color: #e8e8e8;
  font-size: 12px;
}

.form-control::-webkit-input-placeholder {
  font-family: serif;
}
</style>