<template>
  <div class="parent">
    <form @submit.prevent="registerUser" class="form-signup">
      <div class="flex"> <img class="flex" src="https://cdn.pixabay.com/photo/2020/07/14/15/12/controller-5404616_960_720.png"
        width="96" height="72"/></div>
      <h1 class="title flex"> Regístrate </h1>

      <label class="form-label"> Introduce tu correo electrónico: </label>
      <input type="email" v-model="user.email" id="inputEmail" class="form-input" placeholder="Dirección de correo" required="" autofocus=""/><br/>
      <label class="form-label"> Introduce tu nombre: </label>
      <input type="text" v-model="user.nickname" id="inputNickname" class="form-input" placeholder="Nombre" required=""/><br/>
      <label class="form-label"> Contraseña: </label>
      <input type="password" v-model="user.password1" id="inputPassword1" class="form-input" placeholder="Contraseña" required=""/><br/>
      <label class="form-label"> Repite la contraseña: </label>
      <input type="password" v-model="user.password2" id="inputPassword2" class="form-input" placeholder="Repite la contraseña" required=""/><br/>
      <div class="flex"> <button type="submit" class="register-btn"> Regístrate </button></div><br/>
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
      if (!this.checkPasswords()) {
        window.alert('Las contraseñas no coinciden');
        this.user.password1 = '';
        this.user.password2 = '';
      }
      else {
        fetch("/users", {
          method: "POST",
          body: JSON.stringify(this.user),
          headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
          },
        })
          .then((res) => {
            if (res.status == 400)
                window.alert('Ese usuario ya existe');
            else {
              // Hacer algo jwt
              this.$store.dispatch('signInAction');
              this.$router.push('/games');
            } 
          });
      }
    },
    checkPasswords() {
      return this.user.password1 == this.user.password2 ? true: false;
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
  display: flex;
  flex-direction: column;

  padding: 20px;
  margin: auto;
  border: 4px outset #f61067;
  background-color: #1c221f;
  color: #dedede;
  width: 330px;
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

.form-input::-webkit-input-placeholder {
  font-family: serif;
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
  margin: auto;
}
</style>