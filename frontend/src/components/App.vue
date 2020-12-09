<template>
    <div class="alfo">
        <div class="container">
            <form  @submit.prevent="addUser" id="formSignIn" class="form-signin">
                <img class="mb-4" src="" alt="" width="72" height="72">
                <h1 class="h3 mb-3 font-weight-normal">¡Inicia sesión Gamer!</h1> 

                <label class="sr-only">Introduce tu correo electrónico:</label>
                <input type="email" v-model="user.email" id="inputEmail" class="form-control" placeholder="Dirección de correo" required="" autofocus="">
                
            
                <label class="sr-only">Contraseña</label>
                <input type="password" v-model="user.password" id="inputPassword" class="form-control" placeholder="Contraseña" required="">  
            
                <button type="submit" class="btn btn-funky-moon btn-lg btn-primary btn-block button btn-rounded">Inicia sesión</button>
                <button type="button" class="btn btn-link">¿Olvidaste tu contraseña?</button>   
                <button type="button" class="btn btn-link">Regístrate</button>
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
        name: "App",
        data() {
            return {
                user: new User(),
                users : []
            }
        },

        created() {
            this.getUsers();
        },

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
                    .then(res => res.json())
                    .then(data => this.getUsers());
                this.user = new User();
            },
            
            getUsers() {
                fetch('/users')
                    .then(res => res.json())
                    .then(data => {
                        this.users = data;
                        console.log(this.users);
                    });
            }
        }
    }
</script>
