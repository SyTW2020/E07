<template>
  <div class="bodyUser">
    <form class="formModifyUser">
      <h1 class="h3 mb-3 font-weight-normal"> Editar perfil </h1>
      <img class="mb-4 user-photo" alt="" width="96" height="72">   <!--v-model="user.photo" (Imagen user) Se puede hacer eso? -->

      <label class="sr-only"> Nickname: </label>
      <input type="text" v-model="user.nickname" id="inputNickname" class="form-control">
          
      <label class="sr-only"> Email: </label>
      <input type="email" v-model="user.email" id="inputEmail" class="form-control">

      <label class="sr-only"> Introduce tu nombre: </label>
      <input type="text" v-model="user.name" id="inputName" class="form-control">

      <label class="sr-only"> Introduce tu contraseña: </label>
      <input type="password" v-model="user.password" id="inputPass" class="form-control">
      
      <label class="sr-only"> Introduce tu foto: </label>
      <input type="file">

      <label class="sr-only"> Introduce tu fecha de nacimiento: </label>
      <input class="form-control" type="date" v-model="user.birthDate" id="inputDate">

      <label class="sr-only"> Introduce una descripción: </label>
      <textarea type="text" v-model="user.description" id="inputDescription" class="form-control"></textarea>
      
      <button type="button" @click="modifyUser" class="btn btn-funky-moon"> Guardar </button>
      <button type="button" @click="deleteUser" class="btn btn-danger"> Eliminar cuenta </button>
    </form>
  </div>
</template>

<script>
class User {
  constructor() {
    this.email = '';
    this.nickname = '';
    this.name = '';
    this.photo = '';
    this.birthDate = null;
    this.description = '';
    this.password = '';
  }
}

export default {
  name: "User",
  data() {
    return {
      user: new User()
    }
  },
  
  created: function () {
    fetch(`/users/${this.$store.getters.user}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "x-access-token": this.$store.getters.token
      } 
    })
      .then(res => {
        if (res.status != 200)
          return res.status;
        return res.json();
      })
      .then(data => {
        this.user.email = data.response[0].userInformation.email;
        this.user.nickname = data.response[0].userInformation.nickname;
        this.user.name = data.response[0].userInformation.name;
        this.user.photo = data.response[0].userInformation.photo;
        this.user.birthDate = data.response[0].userInformation.birthDate;
        this.user.description = data.response[0].userInformation.description;
        this.user.password = data.response[0].userInformation.password;
      })
  },
  
  methods: {
    modifyUser() {
      console.log(this.user)
      fetch(`/users/${this.$store.getters.user}`, {
        method: "PUT",
        body: JSON.stringify(this.user),
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json",
          "x-access-token": this.$store.getters.token
        }
      })
        .then(res => {
          if (res.status == 404)
            return res.status;
          return res.json();
        })
        .then(data => {
          if (data == 404)
            window.alert("Operación no válida");
          else {
            window.alert("Usuario modificado");
            this.$router.push("/myuser");
          }
        })
        .catch(err => console.log(err));
    },

    deleteUser() {
      fetch(`/users/${this.$store.getters.user}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          "x-access-token": this.$store.getters.token
        } 
      })
        .then(res => {
          if (res.status == 404)
            return res.status;
          return res.json();
        })
        .then(data => {
          if (data == 404)
            window.alert("Operación no válida");
          else {
            window.alert("Usuario eliminado");
            this.$store.dispatch('logOutAction');
            this.$router.push("/");
          }
        })
    }
  }
}
</script>

<style scoped>
.bodyUser {
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
.containerUser {
    width: 700px;
    height: 900px;
    background-color: red;
}
.formModifyUser {
  display: flex;
  flex-direction: column;

  max-width: 330px;
  padding: 20px;
  margin: auto;

  border: 4px outset #f61067;
  background-color: #1c221f;

}
.formModifyUser h1 {
  margin: auto;
}
.sr-only{
  color: #dedede; 
  padding: 10px; /* Cambiar por responsive */
  margin: auto;

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
.btn-danger {
  background: #a770ef;
  background: -webkit-linear-gradient(145deg, #fdb99b, #cf8bf3, #a770ef);
  background: linear-gradient(145deg, #fdb99b, #fc6767, #ec008c);
  color: #dedede;
  border: 3px solid #eee;
  border-radius: 35px;
  padding: 10px; /* Cambiar por responsive */
  margin: auto;
}
.user-photo {
    margin: auto;
}

.form-control::-webkit-input-placeholder {
  font-family: serif;
}
</style>