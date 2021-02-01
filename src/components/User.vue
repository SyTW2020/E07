<template>
  <div class="bodyUser">
    <meta name="viewport" content="width=device-width, initial-scale=1">
      <div class="boxUser">
        <div class="userProfile">
          <h1>¡Hola {{ user.name }}!</h1>
          <div class="cardPhoto" >
            <label for="file-input">
              <!-- <img alt="user header" class="userPhoto" src="${user.photo}" width="250" height="250" ><br/> -->
            </label>
            <InputText type="file" id="file-input" class="p-inputtext-sm" accept="image/png, image/jpeg" style="display: none;"/><br/>
          </div>  
          <Button type="button" @click="deleteUser" class="p-button-danger"> Eliminar cuenta </Button>
        </div>

        <div class="boxForm">
        <form  @submit.prevent="modifyUser" class="userForm">
          <h1 class="h3 mb-3 font-weight-normal"> Editar perfil </h1>

          <label class="sr-only"> Nickname: </label>
          <InputText type="text" v-model="user.nickname" id="inputNickname" class="p-inputtext-lg" placeholder="Nickname" required="" autofocus=""/><br/>
              
          <label class="sr-only"> Email: </label>
          <InputText type="email" v-model="user.email" id="inputEmail" class="p-inputtext-lg" placeholder="Email" required="" autofocus=""/><br/>

          <label class="sr-only"> Introduce tu nombre: </label>
          <InputText type="text" v-model="user.name" id="inputName" class="p-inputtext-lg" placeholder="Nombre"/><br/>

          <label class="sr-only"> Introduce tu nueva contraseña: </label>
          <InputText type="password" v-model="user.password" id="inputPass" class="p-inputtext-lg" /><br/>

          <label class="sr-only"> Introduce tu fecha de nacimiento: </label>
          <InputText class="p-inputtext-lg" v-model="user.birthday" id="inputDate" placeholder="DD-MM-YYYY"/><br/>

          <label class="sr-only"> Introduce una descripción: </label>
          <Textarea type="text" v-model="user.description" id="inputDescription" class="p-inputtext-lg" placeholder="Descripción"></textarea><br/>
          <Button @click="modifyUser" class="BSave"> Guardar </Button><br/>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { InputText, InlineMessage, InputMask,  Dropdown, Textarea, Button } from '../utils';

export default {
  name: "User",
  components: {
    InputText,
    InlineMessage,
    InputMask,
    Dropdown,
    Textarea,
    Button
  },
  data() {
    return {
      user: this.$store.getters.user,
      prevNickname: null
    }
  },
  created: function () {
    this.prevNickname = this.$store.getters.user.nickname;
  },

  methods: {
    modifyUser() {
      fetch(`/users/${this.prevNickname}`, {
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
            this.$store.dispatch('signInAction', {
              token: this.$store.getters.token,
              user: data.response[0].userInformation
            });
            this.user = this.$store.getters.user;
            window.alert("Usuario modificado");
          }
        })
        .catch(err => console.log(err));
    },

    deleteUser() {
      fetch(`/users/${this.$store.getters.user.nickname}`, {
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
  background-color: black;
  display: flex; 
}

.boxUser  {
  width: 96%;
  height: 96%;
  background-color: grey;
  margin: auto;
  display: flex;
  flex-direction:column;
}

.userProfile {
  background-color: darkblue;
  display: flex;
  flex-direction: column;
  width:100%;
  height: 100%;
  align-items: center;
  justify-content:center;
  padding: 20px;
  margin: auto;
}

.userPhoto {
  height: 150px;
  width: 150px;
  margin: 30px auto;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: 0.4s;

}

.userPhoto:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
    -5px -5px 30px 15px rgba(0,0,0,0.22);
}

.boxForm {
  display: flex;
  flex-direction: column;
  width:100%;
  height: 100%;
  background-color: white;
  padding:20px;
}

.userForm {
  display: flex;
  flex-direction: column;
  /* max-width: 700px; */
  width: 70%;

  height: auto;
  padding: 20px;
  margin: auto;
  border: 4px outset #f61067;
  background-color: #1c221f;

}

.BSave {
  width:60%;
  margin: auto;
}

h1 {
  margin:auto;
}

/* ORDENADOR */ 
@media screen and (min-width: 1000px) {
	.boxUser{
    flex-direction: row;
  }
  .userProfile {
    width: 40%;
  }
  .userPhoto{
    width: 250px;
    height: 250px;
  }
}

/* Media pantalla */ 
@media screen and (min-width: 800px) and (max-width: 1000px ){
	/* .boxSignIn{
    width: 50%;
  }
  .formSignIn {
    width: 80%;
  } */
}
</style>