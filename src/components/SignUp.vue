<template>
  <div class="bodySignUp">
    <div class="boxSignUp">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap" rel="stylesheet">
      <form @submit.prevent="registerUser" class="formSignup">
        <img id="signinimg" src="https://cdn.glitch.com/db77d28a-8547-4c40-8473-0852380d676e%2Fmando1.ico?v=1607165029366" width="70" height="70"/>
        <h1 class="title flex"> Regístrate </h1>
        <InputText type="text" v-model="user.nickname" id="inputNickname" class="p-inputtext-lg" placeholder="Nombre de usuario" required=""/><br/>
        <InputText type="email" v-model="user.email" id="inputEmail" class="p-inputtext-lg" placeholder="Dirección de correo" required="" autofocus=""/><br/>
        <InputText type="text" v-model="user.name" id="inputName" class="p-inputtext-lg" placeholder="Nombre" required=""/><br/>
        <InputText type="password" v-model="user.password" id="inputPassword1" class="p-inputtext-lg" placeholder="Contraseña" required=""/><br/>
        <InputText type="password" v-model="user.password2" id="inputPassword2" class="p-inputtext-lg" placeholder="Repite la contraseña" required=""/><br/>
        <small id="username2-help" class="msg" ></small><br/>
        <div class="flex"> <button type="submit" class="register-btn"> Regístrate </button></div><br/>
        <p class="copyright flex"> © GamingIt 2020 </p>
      </form>
    </div>
  </div>
</template>

<script>
import { InputText, InlineMessage, Password } from '../utils';
class User {
  constructor(email = '', name = '', password = '', password2 = '', nickname = '') {
    this.email = email;
    this.name = name;
    this.password = password;
    this.password2 = password2;
    this.nickname = nickname;
  }
}

export default {
  name: "SignUp",
  components: {
    'InputText': InputText,
    'InlineMessage': InlineMessage,
    'Password': Password
  },
  data() {
    return {
      user: new User(),
    }
  },

  methods: {
    registerUser() {
      if (!this.checkPasswords()) {
        const msg = document.querySelector(".msg");
        msg.textContent = "Las contraseñas no coinciden.";
        this.user.password = '';
        this.user.password2 = '';
      }
      else {
        fetch("/users", {
          method: "POST",
          body: JSON.stringify(this.user),
          headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
          }
        })
          .then((res) => {
            if (res.status != 200)
              return res.status;
            return res.json();
          })
          .then(data => {
            if (data == 404){
              const msg = document.querySelector(".msg");
              msg.textContent = "Este usuario ya existe.";
            }
            else {
              this.$store.dispatch('signInAction', {
                token: data.response[0].token,
                nickname: data.response[0].user.nickname
              });
              this.$router.push('/');
            } 
          });
      }
    },
    
    checkPasswords() {
      return this.user.password == this.user.password2 ? true: false;
    }
  }
};
</script>

<style>
.bodySignUp {
  height: 100%;
  width: 100%;
  display: flex;
  /*  Image  */
  background-image: url("https://www.xtrafondos.com/wallpapers/paisaje-retro-de-atardecer-5436.jpg");
  background-position: right; 
  background-size: cover;
}

.boxSignUp {
  display: flex;
  width: 100%;
  padding: 20px;
  background-color: rgb(0, 0, 0, 0.8);
}

.formSignup {
  display: flex;
  width: 100%;
  align-items: center;
  margin: auto;
  flex-direction: column;
  padding:2%;
  color: white;
  background-color: rgba(177, 55, 106, 0.2);
  font-family: 'Bungee Inline', cursive;
}

/* .flex {
  display: flex;
  justify-content: center;
  align-items: center;
} */

.register-btn {
  background: #a770ef;
  background: -webkit-linear-gradient(145deg, #fdb99b, #cf8bf3, #a770ef);
  background: linear-gradient(145deg, #fdb99b, #cf8bf3, #a770ef);
  color: #dedede;
  border: 3px solid #eee;
  border-radius: 25px;
  padding: 20px; /* Cambiar por responsive */
  margin: auto;
  font-size: 20px;
}


</style>