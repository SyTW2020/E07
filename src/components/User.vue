<template>
  <div class="bodyUser">
    <!-- <form  @submit.prevent="modifyUser" class="formModifyUser">
      <h1 class="h3 mb-3 font-weight-normal"> Editar perfil </h1>
      <img class="mb-4 user-photo" alt="" width="96" height="72">

      <label class="sr-only"> Nickname: </label>
      <input type="text" v-model="user.nickname" id="inputNickname" class="form-control" placeholder="Nickname" required="" autofocus="">
          
      <label class="sr-only"> Email: </label>
      <input type="email" v-model="user.email" id="inputEmail" class="form-control" placeholder="Email" required="" autofocus="">

      <label class="sr-only"> Introduce tu nombre: </label>
      <input type="text" v-model="user.name" id="inputName" class="form-control" placeholder="Nombre">
      
      <label class="sr-only"> Introduce tu foto: </label>
      <input type="file">

      <label class="sr-only"> Introduce tu fecha de nacimiento: </label>
      <input class="form-control" type="date" value="1993-08-19" id="inputDate">

      <label class="sr-only"> Introduce una descripción: </label>
      <textarea type="text" v-model="user.description" id="inputDescription" class="form-control" placeholder="Nombre"></textarea>
      
      <button type="button" class="btn btn-funky-moon"> Guardar </button>
      <button type="button" class="btn btn-danger"> Eliminar cuenta </button>
    </form> -->
    {{ user.email }}<br>
    {{ user.nickname }}<br>
    {{ user.name }}<br>
    >> {{ user.photo }}<br>
    >> {{ user.birthdate }}<br>
    >> {{ user.description }}<br>

    <router-link to="/myuseredit"> Modificar </router-link>

  </div>
</template>

<script>
class User {
  constructor() {
    this.email = '';
    this.nickname = '';
    this.name = '';
    this.photo = '';
    this.birthdate = null;
    this.description = '';
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
        this.user.birthdate = data.response[0].userInformation.birthdate;
        this.user.description = data.response[0].userInformation.description;
      })
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