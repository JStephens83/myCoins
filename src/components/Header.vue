<template>
    <div id="header">
        <div class="logoName">
            <img src="../assets/coin_colored.png" alt="icon of a coin">
            <p>COINSTATION.COM</p>
        </div>
        <div class="headerMenu">
            <ul class="mt-3 mb-3">
                <li v-on:click="closeMenu" class="arrowIcon"><fa icon="arrow-right" type="fas"></fa></li>
                <li class="menuList">Home</li>
                <li class="menuList">My Coins</li>
                <li class="menuList">Register</li>
            </ul>
        </div>
        <div v-on:click="openMenu" class="burgerIcon">
            <fa icon="bars" type="fas"></fa>
        </div>       
    </div>
</template>

<script>

import FontAwesomeIcon from "../../lib/FontAwesomeIcon.vue";


export default {
    data(){
        return {
        }
    },
    methods: {
        openMenu: function() {
            // Open mobile menu:
            var burger = document.querySelector(".burgerIcon");
            // console.log(burger);
            var mobileMenu = document.querySelector(".headerMenu");
            // console.log(mobileMenu);
                // show menu + animation
            mobileMenu.classList.add("showHide");
                // Hide burger icon
            burger.classList.add("hide");
                // Show arrow:
            var arrow = document.querySelector(".arrowIcon");
            arrow.style.visibility="visible";
        },
        closeMenu: function() {
            // Close mobile menu:
            var arrow = document.querySelector(".arrowIcon");
                // Hide arrow
            arrow.style.visibility="hidden";
                //hide menu + animation
            var mobileMenu = document.querySelector(".headerMenu");
            mobileMenu.classList.remove("showHide");
                //Show burger icon
            var burger = document.querySelector(".burgerIcon");
            burger.classList.remove("hide");
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
        z-index: 100;
    }
    .headerMenu {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width: 100%;
        padding: 0;
        z-index: 0;
        transition-property: all;
        transition-timing-function: ease-in-out;
        transition-duration: 1s;
    }
    .arrowIcon {
        display: none;
    }
    .showHide {
        right: 0 !important;
        transition-property: all;
        transition-timing-function: ease-in-out;
        transition-duration: 1s;
    }
    .hide {
        display: none !important;
    }
    li {
        cursor: pointer;
        list-style-type: none;
        
    }
    .headerMenu ul {
        display: flex;
        flex-direction: row;
    }
    .menuList:hover, .arrowIcon:hover {
        transform: scale(1.1);
    }
    /*------------- MEDIA QUERIES -------------*/
    /* @media (max-width: 360px) {
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
    } */
    @media (max-width: 768px) {
        .arrowIcon {
            display: flex;
            padding: 0 0.5em 0.5em 0.5em;
        }
        .burgerIcon {
            display: flex;
        }
        .headerMenu {
            position: absolute;
            right: -200px;
            top: 0;
            display: flex;
            align-items: flex-end;
        }
        .headerMenu ul {
            flex-direction: column;
            min-width: 20vw;
            background-color: rgba(0,0,0,0.7);
            padding: 0.5em;
        }
        .menuList {
            padding: 0.5em;
        }
        .menuList:hover, .arrowIcon:hover {
            transform: none;
            color: grey;
        }
    }
</style>