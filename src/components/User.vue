<template>
   <div class="bodyUser">
     <div class="boxUser">
       <div class="boxProfile">
        <h1>¡Hola {{ user.nickname }}!</h1>
        <img class="mb-4 user-photo" alt="" width="96" height="72"><br/>
        {{ user.photo }}
        <label class="sr-only"> Cambia tu foto: </label>
        <InputText type="file" class="p-inputtext-sm"/><br/>
        <Button type="button" class="p-button-danger"> Eliminar cuenta </Button>
       </div>

      <form  @submit.prevent="modifyUser" class="formModifyUser">
        <h1 class="h3 mb-3 font-weight-normal"> Editar perfil </h1>

        <label class="sr-only"> Nickname: </label>
        <InputText type="text" v-model="user.nickname" id="inputNickname" class="p-inputtext-lg" placeholder="Nickname" required="" autofocus=""/>
            
        <label class="sr-only"> Email: </label>
        <InputText type="email" v-model="user.email" id="inputEmail" class="p-inputtext-lg" placeholder="Email" required="" autofocus=""/>

        <label class="sr-only"> Introduce tu nombre: </label>
        <InputText type="text" v-model="user.name" id="inputName" class="p-inputtext-lg" placeholder="Nombre"/>

        <label class="sr-only"> Introduce tu fecha de nacimiento: </label>
        <InputText class="p-inputtext-lg" v-model="user.birthDate" type="date" value="1993-08-19" id="inputDate"/>

        <label class="sr-only"> Introduce una descripción: </label>
        <Textarea type="text" v-model="user.description" id="inputDescription" class="p-inputtext-lg" placeholder="Descripción"></textarea><br/>
        
        <Button> Guardar </Button>

      </form>
    </div>
    <!-- >> {{ user.email }} <br>
    >> {{ user.nickname }}<br>
    >> {{ user.name }}<br>
    >> {{ user.photo }}<br>
    >> {{ user.birthdate }}<br>
    >> {{ user.description }}<br> -->

   <router-link to="/myuseredit"> Modificar </router-link> 

  </div>
</template>

<script>
import { InputText, InlineMessage, InputMask,  Dropdown, Textarea, Button } from '../utils';
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
  components: {
    'InputText': InputText,
    'InlineMessage': InlineMessage,
    'InputMask': InputMask,
    'Dropdown': Dropdown,
    'Textarea': Textarea,
    'Button': Button
  },
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

</style>