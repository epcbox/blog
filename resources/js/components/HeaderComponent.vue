<script>
</script>
<template>
    <div class="navbar">
        <ul>
            <li>
                <router-link :to="{name: 'home'}">
                   HOME
                </router-link>
            </li>
            <li>ENTRIES</li>
            <li>
                <router-link :to="{name: 'login-component'}">
                   LOGIN
                </router-link>
            </li>
        </ul>
    </div>
</template>
<style>
    /* @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap'); */

    body {
        margin: 0;
        body: 0;
        font-family: "PlayFair Display"
    }
    ul {
        display: flex;
        list-style-type: none;
        gap: 10px;
    }
    .navbar {
        border: solid;
        border-color: black;
        background-color: #AAAAAA;
        border: 1px solid;
        border-color: black;
        display: flex;
        justify-content: center;
    }
    li {
        padding: 10px;
    }

    li a {
        text-decoration: none;
    }
</style>
