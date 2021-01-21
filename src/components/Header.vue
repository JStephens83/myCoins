<template>
    <div id="header">
        <div class="logoName">
            <img src="../assets/coin_colored.png" alt="icon of a coin">
            <p>COINSTATION.COM</p>
        </div>
        <ul class="headerMenu mt-3 mb-3">
            <li>Home</li>
            <li>My Coins</li>
            <li>Register</li>
        </ul>        
        <fa icon="bars" type="fas" class="burgerIcon" v-on:click="openMenu"></fa>
    </div>
</template>

<script>

import FontAwesomeIcon from "../../libs/FontAwesomeIcon.vue";


export default {
    data: function(){
        return {
        }
    },
    methods: {
        openMenu: function() {
            //Open/Close mobile menu
            var burger = document.querySelector(".burgerIcon");
            console.log(burger);
            var mobileMenu = document.querySelector(".headerMenu");
            console.log(mobileMenu);
            // mobileMenu.classList.toggle ("hideMobile");
            alert('tu as cliqué');
        }
    },
    component: {
        'font-awesome-icon': FontAwesomeIcon
    }
}
</script>

<style scoped>
    #app #header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #000;
        padding: 2vh 0;
        position: relative;
    }
    #header .logoName img {
        width: 5vw;
        height: 5vw;
        margin: 0 1rem;
        transform: rotate(1080deg);
        transition: transform 60s;
        transition-delay : 2s
    }
    .logoName {
        display: flex;
        align-items: center;
    }
    .logoName p {
        margin-bottom: 0;
    }
    .burgerIcon {
        width: 2vw;
        margin-right: 2vw;
        cursor: pointer;
        display: none;
    }
    .headerMenu {
        flex-direction: row;
        justify-content: flex-end;
        width: 100%;
        list-style-type: none;
        padding: 0;
    }
    /* li {
        transition: transform .2s;
    } */
    li:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
    /*------------- MEDIA QUERIES -------------*/
    @media (min-width: 360px) {
       #header {
           padding: 0;
       }
        ul {
            display: flex;
            flex-direction: column;
        }
        li {
            display: flex;
            justify-content: flex-end;
            margin-right: 1rem;
        }
    }
    @media (max-width: 768px) {
        .burgerIcon {
            display: flex;
        }
        .headerMenu {
            flex-direction: column;
            position: absolute;
            right: -200px;
        }
    }
</style>