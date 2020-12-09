<template>
    <div class="container">

       <Menu></Menu>
       <!-- <User></User> -->
        
       <template v-if="register == true">
            <SignIn @evento="eventoFunction"> </SignIn>
        </template>
        <template v-else>
            <SignUp> </SignUp>
        </template>
    </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import SignIn from "./components/SignIn.vue";
import SignUp from "./components/SignUp.vue";
import User from "./components/User.vue";

export default {
    name: "App",
    data() {
        return {
            register: ''
        }
    },

    created() {
        this.register = true;
    },
    
    components: {
        "Menu": Menu,
        "SignIn": SignIn,
        "SignUp": SignUp,
        "User": User
    }, 
    methods: {
        eventoFunction() {
            console.log('Cambiando valor de register');
            this.register = false;
        }
    }
}

</script>

<style>
    SignUp {
        background: green;
        border-style: dotted dashed solid double; 
    }

    body, html{
        margin: 0;
        height: 100%;
    }

    .container {
        height: 100%;
        
        /*  Image  */
        /* background-image: url("https://www.xtrafondos.com/wallpapers/paisaje-retro-de-atardecer-5436.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat; */
        /* background-color: grey;
        border: red 5px solid; */
    }

</style>