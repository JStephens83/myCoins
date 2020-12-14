<template>
    <div id="header">
        <ul class="mt-3 mb-3">
            <li>Home</li>
            <li>My Coins</li>
            <li>Register</li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
        }
    }
}
</script>

<style scoped>
    #header {
        display: flex;
        flex-direction: row;
        background-color: #134E5C;
    }
    ul {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        list-style-type: none;
    }
    li {
        transition: transform .2s;
    }
    li:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
</style>