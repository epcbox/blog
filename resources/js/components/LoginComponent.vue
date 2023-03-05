<template>
    <HeaderComponent />
    <h2>
        Login?
    </h2>
    <div class="boss-container">
        <div class="container">
            <div class="input">
                <label for="username">Username</label>
                <input v-model="user.username" id="username" type="text" name="username"/>
            </div>

            <div class="input">
                <label for="password">Password</label>
                <input v-model="user.password" id="password" type="password" name="password"/>
            </div>
            <button @click="logIn()">Log In</button>
        </div>
    </div>
</template>
<style>
    .boss-container{
        display: flex;
        justify-content: center;
    }
    .container{
        display: inline-block;
    }
    .input{
        width: 100px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
</style>
<script>
    import HeaderComponent from "./HeaderComponent.vue";
    import AuthService from "../services/AuthService.js"

    let auth = new AuthService;
    auth.login().then(res=>console.log(res))

    export default {
        components: {
            HeaderComponent,
        },
        data(){
            return{
                user: {
                    username: '',
                    password: '',
                },
            }
        },
        methods: {
            logIn () {
                console.log(this.user.password)
            }
        },
    }

</script>
