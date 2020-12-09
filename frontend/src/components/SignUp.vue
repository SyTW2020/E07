<template>
    <div class="bodySignUp">
        <div class="containerSignUp">
            <form  @submit.prevent="addUser" class="formSignUn">
                <img class="mb-4" src="https://cdn.pixabay.com/photo/2020/07/14/15/12/controller-5404616_960_720.png" alt="" width="96" height="72">
                <h1 class="h3 mb-3 font-weight-normal">Registrate</h1> 

                <label class="sr-only">Introduce tu correo electrónico:</label>
                <input type="email" v-model="user.email" id="inputEmail" class="form-control" placeholder="Dirección de correo" required="" autofocus="">

                <label class="sr-only">Introduce tu nombre:</label>
                <input type="text" v-model="user.name" id="inputText" class="form-control" placeholder="Nombre" required="">
                    
                <label class="sr-only">Contraseña: </label>
                <input type="password" v-model="user.password" name="inputPassword" class="form-control" placeholder="Contraseña" required="">

                <label class="sr-only">Repite la contraseña: </label>
                <input type="password" v-model="user.password2" name="inputPassword2" class="form-control" placeholder="Repite la contraseña" required="">

                <button @click="checkPassword()" type="submit" class="btn btn-funky-moon btn-lg btn-primary btn-block button btn-rounded">Registrate</button>
                <p class="mt-5 mb-3 text-muted">© Gaming It 2020</p>
            </form>
        </div>
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
    name: "SignUp",

    data() {
        return {
            user: new User()
        }
    },

    methods: {
        checkPasswords() {
            password1 = document.getElementById("inputPassword");
            password2 = document.getElementById("inputPassowrd2");
            if (password1 == password2) {
                alert("las contraseñas coinciden, puedes registrarte")
            }
            else {
                alert("las contraseñas no coinciden, vuelve a rellenarlas")
            }

        }
    }
    
}
</script>

<style scoped>
h3 {
    color: yellow;
}

.btn-funky-moon {
    background: #A770EF;
    background: -webkit-linear-gradient(145deg, #FDB99B, #CF8BF3, #A770EF);
    background: linear-gradient(145deg, #FDB99B, #CF8BF3, #A770EF);
    color: #fff;
    border: 3px solid #eee;
    border-radius: 35px;
}
</style>