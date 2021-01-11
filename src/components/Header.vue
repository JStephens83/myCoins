<template>
    <div id="header">
        <div class="logoName">
            <img src="../assets/coin_colored.png" alt="icon of a coin">
            <p>COINSTATION.COM</p>
        </div>
        <ul class="mt-3 mb-3">
            <li>Home</li>
            <li>My Coins</li>
            <li>Register</li>
        </ul>        
        <!-- <font-awesome-icon icon="twitter" type="fab"></font-awesome-icon> -->
    </div>
</template>

<script>

// import FontAwesomeIcon from "../../libs/FontAwesomeIcon.vue";


export default {
    data: function(){
        return {
        }
    },
    // component: {
    //     'font-awesome-icon': FontAwesomeIcon
    // }
}
</script>

<style scoped>
    #header {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #000;
    }
    #header .logoName img {
        width: 5vw;
        height: 5vw;
        margin: 0 1rem;
    }
    .logoName {
        display: flex;
        align-items: center;
    }
    .logoName p {
        margin-bottom: 0;
    }
    ul {
        display: flex;
        justify-content: space-evenly;
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
</style>