<template>
    <div class="bodyUser">
        <div class="containerUser">
            <h1 class="h3 mb-3 font-weight-normal">Editar perfil</h1>
            <form  @submit.prevent="modifyUser" class="formModifyUser">
                <img class="mb-4"  alt="" width="96" height="72">   <!-- v-model="user.photo" (Imagen user) Se puede hacer eso?  -->

                <label class="sr-only">Nickname:</label>
                <input type="text" v-model="user.nickname" id="inputNickname" class="form-control" placeholder="Nickname" required="" autofocus="">
                    
                <label class="sr-only">Email:</label>
                <input type="email" v-model="user.email" id="inputEmail" class="form-control" placeholder="Email" required="" autofocus="">

                <label class="sr-only">Introduce tu nombre:</label>
                <input type="text" v-model="user.name" id="inputName" class="form-control" placeholder="Nombre">
                
                <label class="sr-only">Introduce tu foto:</label>
                <input type="file">

                <label class="sr-only">Introduce tu fecha de nacimiento:</label>
                <input class="form-control" type="date" value="1993-08-19" id="inputDate">

                <label class="sr-only">Introduce una descripción:</label>
                <textarea type="text" v-model="user.description" id="inputDescription" class="form-control" placeholder="Nombre"></textarea>
                
                <button type="button" class="btn btn-success">Guardar</button>
                <button type="button" class="btn btn-danger">Eliminar cuenta</button>
            </form>
        </div>
    </div>
</template>

<script>
class User {
    constructor(email, password, nickname, name) {
        this.email = email;
        this.password = password;
    }
}

export default {
    name: "User",
    data() {
        return {
            user: new User()
        }
    }
}
</script>

<style scoped>

</style>