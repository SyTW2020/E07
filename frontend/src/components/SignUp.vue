<template>
  <div class="flex parent">
    <form @submit.prevent="registerUser" class="form-signup">
      <div class="flex"> <img class="flex" src="https://cdn.pixabay.com/photo/2020/07/14/15/12/controller-5404616_960_720.png" alt="" width="96" height="72"/></div>
      <h1 class="title flex"> Regístrate </h1>

      <label class="form-label"> Introduce tu correo electrónico: </label>
      <input type="email" v-model="user.email" id="inputEmail" class="form-input" placeholder="Dirección de correo" required="" autofocus=""/>
      <br/>

      <label class="form-label"> Introduce tu nombre: </label>
      <input type="text" v-model="user.nickname" id="inputText" class="form-input" placeholder="Nombre" required=""/>
      <br/>

      <label class="form-label"> Contraseña: </label>
      <input type="password" v-model="user.password1" name="inputPassword" class="form-input" placeholder="Contraseña" required=""/>
      <br/>

      <label class="form-label"> Repite la contraseña: </label>
      <input type="password" v-model="user.password2" name="inputPassword2" class="form-input" placeholder="Repite la contraseña" required=""/>
      <br/>

      <div class="flex"> <button type="submit" class="register-btn"> Regístrate </button></div>
      <br/>

      <p class="copyright flex"> © GamingIt 2020 </p>
    </form>
  </div>
</template>

<script>
class User {
  constructor(email = '', password1 = '', password2 = '', nickname = '') {
    this.email = email;
    this.password1 = password1;
    this.password2 = password2;
    this.nickname = nickname;
  }
}

export default {
  name: "SignUp",

  data() {
    return {
      user: new User(),
    }
  },

  methods: {
    registerUser() {
      if (this.user.password1 == this.user.password2) {
        alert("las contraseñas coinciden, puedes registrarte");
      } else {
        alert("las contraseñas no coinciden, vuelve a rellenarlas");
      }
    },
  },
};
</script>

<style>

.parent {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: left;

  background-image: url("https://www.xtrafondos.com/wallpapers/paisaje-retro-de-atardecer-5436.jpg");
  background-position: center;
  background-size: cover;
  height: 100%;
}

.form-signup {
  padding: 2% 2% 0 2%;
  border: 4px outset #f61067;
  background-color: #1c221f;
  color: #dedede;
  width: 600px;
}

.icon {
  background-color: black;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-label {
  display: block;
  margin: 8px 0 4px 0;
}

.form-input {
  width: 100%;
  height: 30px;
}

.copyright {
  color: #e8e8e8;
  font-size: 12px;
}

.register-btn {
  background: #a770ef;
  background: linear-gradient(145deg, #fdb99b, #cf8bf3, #a770ef);
  color: #dedede;
  border: 3px solid #dedede;
  border-radius: 35px;
  padding: 10px; /* Cambiar por responsive */
  margin: 20px 0;
  width: 80%;
}
</style>