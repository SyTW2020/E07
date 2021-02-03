<template>
  <div class="bodySignIn">
    <div class="boxSignIn">
      <form @submit.prevent="userSignIn" class="formSignIn"><br/>
        <img id="signinimg" src="https://cdn.glitch.com/db77d28a-8547-4c40-8473-0852380d676e%2Fmando1.ico?v=1607165029366" width="70" height="70"/>
        <h2> ¡Inicia sesión Gamer! </h2>
        <InputText type="text" v-model="user.nickname" id="inputNickname" class="p-inputtext-lg" placeholder="Usuario" required="" autofocus=""/><br/>
        <InputText type="password" v-model="user.password" id="inputPassword" class="p-inputtext-lg" placeholder="Contraseña" required=""/><br/>
        <small id="username2-help" class="p-invalid msg" style= "display: none;">Usuario y/o contraseña incorrectos.</small><br/>
        <button type="submit" class="btn-funky-moon" id="submitButton"> Inicia sesión </button><br/>
        <router-link to="/signup" type="button" class="btn-link"> ¿Olvidaste tu contraseña? </router-link>
        <router-link to="/signup" type="button" class="btn-link"> Regístrate </router-link><br/>
        <p id="copyright" class="copyright"> © Gaming It 2021 </p>
      </form>
    </div>
  </div>
</template>

<script>
import { InputText, InlineMessage } from '../utils';

class User {
  constructor(nickname, password) {
    this.nickname = nickname;
    this.password = password;
  }
}

export default {
  name: "SignIn",
  components: {
    InputText,
    InlineMessage
  },
  data() {
    return {
      user: new User()
    };
  },

  methods: {
    userSignIn() {
      fetch(`/users/${this.user.nickname}&${this.user.password}`)
        .then(res => {
          if (res.status != 200)
            return res.status;
          return res.json();
        })
        .then(data => {
          if (data == 404) {
            const inputs = document.querySelectorAll(".p-inputtext-lg");
            const msg = document.querySelector(".msg");
            inputs.forEach( input => {
              input.className += " p-invalid";
            })
            msg.style.display = "block";
          }
          else {
            this.$store.dispatch('signInAction', {
              token: data.response[0].token,
              user: data.response[0].user
            });
            this.$router.push('/');
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.bodySignIn {
  height: 100%;
  display: flex;
  background-image: url("https://www.xtrafondos.com/wallpapers/paisaje-retro-de-atardecer-5436.jpg");
  background-position: right right;
  background-size: cover;
}
 
.boxSignIn {
  width: 100%;
  margin: 0;
  padding: 20px;
  background-color: rgb(17, 17, 17, 0.8);
  display: flex;
  font-family: 'Bungee Inline', cursive;
}

.formSignIn {
  width: 90%;
  display: flex;
  align-items: center;
  background-color: white;
  margin: auto;
  flex-direction: column;
  padding:2%;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 1px 1px 12px 1px rgba(0,0,0,0.26);
}

.msg {
  font-family: Arial;
}

.btn-funky-moon {
  background: #a770ef;
  background: -webkit-linear-gradient(145deg, #fdb99b, #cf8bf3, #a770ef);
  background: linear-gradient(145deg, #fdb99b, #cf8bf3, #a770ef);
  color: #dedede;
  border: 3px solid #eee;
  border-radius: 25px;
  padding: 20px; 
  margin: auto;
  font-size: 20px;
} 

@media screen and (min-width: 1000px) {
	.boxSignIn{
    width: 50%;
  }
  .formSignIn {
    width: 70%;
  }
}

@media screen and (min-width: 800px) and (max-width: 1000px) {
	.boxSignIn{
    width: 50%;
  }
  .formSignIn {
    width: 80%;
  }
}
</style>