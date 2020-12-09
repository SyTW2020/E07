<template>
    <div class="bodySignIn">
        <form  @submit.prevent="addUser" class="formSignIn">
            <img class="mb-4" src="https://cdn.pixabay.com/photo/2020/07/14/15/12/controller-5404616_960_720.png" alt="" width="96" height="72">
            <h1 class="h3 mb-3 font-weight-normal">¡Inicia sesión Gamer!</h1> 

            <label class="sr-only">Introduce tu correo electrónico:</label>
            <input type="email" v-model="user.email" id="inputEmail" class="form-control" placeholder="Dirección de correo" required="" autofocus="">
                
            <label class="sr-only">Contraseña</label>
            <input type="password" v-model="user.password" id="inputPassword" class="form-control" placeholder="Contraseña" required="">  
        
            <button @click="logIn()" type="submit" class="btn btn-funky-moon btn-lg btn-primary btn-block button btn-rounded">Inicia sesión</button>
            <button type="obutton" class="btn btn-link">¿Olvidaste tu contraseña?</button>   
            <button v-on:click="signUp()" type="button" class="btn btn-link">Regístrate</button>
            <p class="mt-5 mb-3 text-muted">© Gaming It 2020</p>
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
            user: new User()
            // users : []
        }
    },

    // created() {
    //     this.getUsers();
    // },

    methods: {
        addUser() {
            fetch('/users', {
                method: 'POST',
                body: JSON.stringify(this.user),
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            })
                .then(res => res.json());
                // .then(data => this.getUsers());
            this.user = new User();
        },
        signUp() {
            console.log('Clickeado \"registrate\" antes de emitir evento');
            this.$emit("evento");
            console.log('despues de emitir evento')
            // FLUX
            // Actualizar el estado  --> estado es usario logueado --> mostrar otro template desde App.vue
        },
        logIn() {
            console.log("TODO");
        }
        // getUsers() {
        //     fetch('/users')
        //         .then(res => res.json())
        //         .then(data => {
        //             this.users = data;
        //             console.log(this.users);
        //         });
        // }
    }
}
</script>

<style scoped>

.bodySignIn {
    height: 100%;
    width: 100%;
    display: -ms-flexbox; 
    display: flex;
    -ms-flex-align: center;
    align-items: center;

    /*  Image  */
    background-image: url("https://www.xtrafondos.com/wallpapers/paisaje-retro-de-atardecer-5436.jpg");
    background-position: center;
    background-size: cover;
}

.formSignIn {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
    border: 4px outset #f61067;
    background-color: #1C221F;
    color: #ffffff;
}

.formSignIn .checkbox {
    font-weight: 400;
}

.formSignIn .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
}

.formSignIn .form-control:focus {
    z-index: 2;
}

.formSignIn input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.formSignIn input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
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