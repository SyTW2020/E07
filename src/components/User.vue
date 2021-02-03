<template>
  <div class="bodyUser">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <div class="boxUser">
      <div class="userProfile">
        <h1>¡Hola {{ user.name }}!</h1>
        <div class="cardPhoto" >
          <label for="file-input">
            <img id="userPhoto" width="100" height="100" class="userPhoto" :src="$store.getters.user.photo" @click="chooseImage" label="Toggle" title="Cambia tu avatar">
          </label>
        </div>
        <OverlayPanel ref="op">
          <div v-bind:key="i" v-for="(n, i) in avatars" class="avatarsContainer">
            <img :src="getUrl(i)" @click="changeAvatar(i)" alt="n" class="avatar">
          </div>
        </OverlayPanel>
        <Button type="button" @click="deleteConfirm" class="p-button-danger"> Eliminar cuenta </Button>
      </div>

      <div class="boxForm">
        <form  @submit.prevent="modifyUser" class="userForm">
          <h1 class="h3 mb-3 font-weight-normal"> Editar perfil </h1>

          <label class="sr-only"> Nickname: </label>
          <InputText type="text" v-model="user.nickname" id="inputNickname" class="p-inputtext-lg" placeholder="Nickname" required="" autofocus=""/>
              
          <label class="sr-only"> Email: </label>
          <InputText type="email" v-model="user.email" id="inputEmail" class="p-inputtext-lg" placeholder="Email" required="" autofocus=""/>

          <label class="sr-only"> Introduce tu nombre: </label>
          <InputText type="text" v-model="user.name" id="inputName" class="p-inputtext-lg" placeholder="Nombre"/>

          <label class="sr-only"> Introduce tu nueva contraseña: </label>
          <InputText type="password" v-model="user.password" id="inputPass" class="p-inputtext-lg"/>

          <label class="sr-only"> Introduce tu fecha de nacimiento: </label>
          <InputText class="p-inputtext-lg" v-model="user.birthday" id="inputDate" placeholder="DD-MM-YYYY"/>

          <label class="sr-only"> Introduce una descripción: </label>
          <Textarea type="text" v-model="user.description" id="inputDescription" class="p-inputtext-lg" placeholder="Descripción"></Textarea><br/>
          <Button @click="modifyUser" class="BSave"> Guardar </Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { InputText, InlineMessage, InputMask,  Dropdown, Textarea, Button, OverlayPanel } from '../utils';
import "@babel/polyfill";
import * as avatars from "../assets/avatares";

export default {
  name: "User",
  components: {
    InputText,
    InlineMessage,
    InputMask,
    Dropdown,
    Textarea,
    Button,
    OverlayPanel
  },

  data() {
    return {
      user: this.$store.getters.user,
      prevNickname: null,
      avatars
    }
  },

  created: function () {
    this.prevNickname = this.$store.getters.user.nickname;
  },
  
  methods: {
    getUrl(index) {
      return this.avatars[index];
    },

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
    },
    
    deleteConfirm() {
      if(confirm("¿Estás seguro de eliminar tu cuenta?"))
        this.deleteUser();
    },

    chooseImage(event) {
      this.$refs.op.toggle(event);
    },

    changeAvatar(name) {
      this.user.photo = this.avatars[name];
      this.modifyUser();
      let image = document.querySelector('#userPhoto');
      image.url = this.user.photo;
      this.$refs.op.hide();
    }
  }
}
</script>

<style scoped>
.bodyUser {
  height: 100%;
  color: #dedede;
  background-color: #111111;
  display: flex; 
  font-family: 'Bungee Inline', cursive;
}

.boxUser {
  width: 96%;
  height: 96%;
  background-image: url("https://i.pinimg.com/originals/6c/b7/10/6cb71054aa563bf9d4d56098405c40e6.jpg");
  background-size: cover;
  margin: auto;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
}

.userProfile {
  background-color: #4F5D75;
  display: flex;
  flex-direction: column;
  width: 96%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: auto;
}

.userPhoto {
  height: 150px;
  width: 150px;
  margin: 30px auto;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
}

.userPhoto:hover, .avatar:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25), -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
}

.boxForm {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #2D3142;
  padding: 20px;
  color: #111111;
  border: 4px double #FA7E27;
}

.userForm {
  display: flex;
  flex-direction: column;
  width: 70%;
  height: auto;
  padding: 20px;
  margin: auto;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 1px 1px 12px 1px rgba(0,0,0,0.26);
}

.BSave {
  width: 60%;
  margin: auto;
}

h1 {
  margin: auto;
}

p {
  display: none;
}

form label {
  margin-top: 1%;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
}

@media screen and (min-width: 1000px) {
	.boxUser{
    flex-direction: row;
  }
  .userProfile {
    width: 60%;
    margin-left: 1%;
  }
  .userPhoto {
    width: 250px;
    height: 250px;
  }
  .boxForm {
    margin-left: 1%;
  }
}
</style>