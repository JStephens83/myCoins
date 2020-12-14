<template>
    <div class="card">
        <td class="rank pl-3">
            <!-- rank -->
            <!-- test 1: fail, tout dans une seule cellule/ligne-->
            <!-- <p v-bind:key="indexCrypt" v-for="(elt,indexCrypt) in cryptoList">{{ elt.rank }}</p> -->
            <!-- test 2 : fail, itération sur le 1er rank de chaque tableau donc seulement 3 réponses -->
            <p>{{ cryptoList[0].rank }}</p>
            <p>{{ cryptoList[1].rank }}</p>
            <p>{{ cryptoList[2].rank }}</p>
        </td>
        <td class="imgcur">
            <!-- <img class="card-img-top mr-3" v-bind:src="cryptoList.iconUrl"> -->
            <!-- name -->
            <!-- <h5>{{ cryptoList.name }}</h5> -->
        </td>
        <td>
            <!-- Symbol -->
            <!-- <p>{{ cryptoList.symbol }} </p> -->
        </td>
        <!-- <td> -->
            <!-- Price -->
            <!-- <p>{{ parseFloat(cryptoList.price).toLocaleString() }} $ </p> -->
        <!-- </td> -->
        <td>
            <!-- Evolution -->
            <!-- <p v-if="cryptoList.sparkline[cryptoList.sparkline.length-1] > cryptoList.sparkline[cryptoList.sparkline.length-2]" style="color: #7DE8BA;">{{ parseFloat(cryptoList.price).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }} &nearr;</p> -->
            <!-- <p v-else style="color:#F5716C;">{{ parseFloat(cryptoList.price).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }} &searr;</p> -->
        </td>
        <td>
            <!-- evolution 24h -->
            <!-- <p>{{ parseFloat(cryptoList.change).toFixed(2) }} %</p> -->
        </td>
        <td>
            <!-- evolution 7 days -->
            <!-- <p>{{ evol7d.change }} %</p> -->
            <!-- <p>{{ parseFloat(evol7d.change).toFixed(2) }} %%</p> -->
        </td>
        <td>
            <!-- evolution 30 days -->
            <!-- <p>{{ evol30d.uuid }} %</p> -->
            <!-- <p>{{ parseFloat(evol30d.change).toFixed(2) }} %</p> -->
        </td>
        <td>
            <!-- <p>{{ parseFloat(cryptoList["24hVolume"]).toFixed().toLocaleString() }}</p> -->
        </td>
        <td>
            <!-- website -->
            <!-- <a v-bind:href="cryptoList.websiteUrl" target="_blank" class="btn">Trade & Details</a> -->
        </td>
    </div>    
</template>

<script>
export default {
    name: "cryptoItem",
    props: ['detail', 'crypto', 'urlIcon', 'lastEvol', 'previousEvol', 'coinUuid', 'listUuids', 'idLinks', 'cryptoList', 'elt','sparkline', 'evol7d', 'evol30d']
}
</script>

<style scoped>
    p {
        margin: 0;
        padding: 0;
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }
    .card-body .btn {
        background-color: #000;
    }
    .card {
        color: #fff;
        background-color: #043743;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .card:hover {
        background-color: #134E5C;
    }
    .card td {
        text-align: left;
        width: calc(100%/6);
    }
    .card td a {
        width: 100%;
    }
    .imgcur {
        display: flex;
        align-items: center;
    }
    .imgcur img {
        width:3vw;
        height: auto;
        text-align: center;
    }
    .imgcur h5 {
        font-size: 1em;
    }
    .btn {
        background-color: #95701B;
        color: #fff;
        font-size: 1em;
    }
    .btn:hover {
        background-color: #6D4D03;
        color: #fff;
    }
</style>