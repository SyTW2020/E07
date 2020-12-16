<template>
  <div class="bodySignIn">
    <form @submit.prevent="addUser" class="formSignIn"><br/>
      <img id="signinimg" src="https://cdn.pixabay.com/photo/2020/07/14/15/12/controller-5404616_960_720.png" width="96" height="72"/>
      <h1> ¡Inicia sesión Gamer! </h1>

      <!-- <label id="prueba"> Introduce tu correo electrónico: </label> -->
      <input type="email" v-model="user.email" id="inputEmail" name="inputEmail" class="form-control" placeholder="Dirección de correo" required="" autofocus=""/><br/>
      <label> Contraseña </label>
      <input type="password" v-model="user.password" id="inputPassword" class="form-control" placeholder="Contraseña" required=""/><br/><br/>
      <button type="submit" class="btn-funky-moon"> Inicia sesión </button><br/>
      <router-link to="/signup" type="button" class="btn-link"> ¿Olvidaste tu contraseña? </router-link>
      <router-link to="/signup" type="button" class="btn-link"> Regístrate </router-link><br/>
      <p id="copyright" class="copyright"> © Gaming It 2020 </p>
    </form>
  </div>
</template>

<script>
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

export default {
  name: "SignIn",
  data() {
    return {
      user: new User(),
      // users : []
    };
  },

  // created() {
  //     this.getUsers();
  // },

  methods: {
    addUser() {
      fetch("/users", {
        method: "POST",
        body: JSON.stringify(this.user),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      }).then((res) => res.json());
      // .then(data => this.getUsers());
      this.user = new User();
    },
    // getUsers() {
    //     fetch('/users')
    //         .then(res => res.json())
    //         .then(data => {
    //             this.users = data;
    //             console.log(this.users);
    //         });
    // }
  },
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