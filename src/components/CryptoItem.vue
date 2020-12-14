<template>
    <div class="card">
        <td class="rank pl-3">
            <!-- rank -->
            <p>{{ detail.rank }}</p>
        </td>
        <td>
            <!-- name -->
            <p>{{ detail.name }}</p>
        </td>
        <!-- <td> -->
            <!-- symbol -->
            <!-- <p>{{ cryptoList.symbol }}</p> -->
        <!-- </td> -->
        <td class="imgcur">
            <img class="card-img-top mr-3" v-bind:src="detail.iconUrl">
            <!-- Symbol -->
            <h5>{{ detail.symbol }}</h5>
        </td>
        <!-- <td> -->
            <!-- Symbol -->
            <!-- <p>{{ cryptoList.symbol }} </p> -->
        <!-- </td> -->
        <!-- <td> -->
            <!-- Price -->
            <!-- <p>{{ parseFloat(cryptoList.price).toLocaleString() }} $ </p> -->
        <!-- </td> -->
        <td>
            <!-- Price -->
            <p v-if="detail.sparkline[detail.sparkline.length-1] > detail.sparkline[detail.sparkline.length-2]" style="color: #7DE8BA;">{{ parseFloat(detail.price).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }} $ &nearr;</p>
            <p v-else style="color:#F5716C;">{{ parseFloat(detail.price).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }} $ &searr;</p>
        </td>
        <td>
            <!-- evolution 24h -->
            <p>{{ parseFloat(detail.change).toFixed(2) }} %</p>
        </td>
        <td> 
            <table>
                <td v-bind:key="index" v-for="(elt7d, index) in cryptoList7d">
                    <item7d :elt7d="elt7d"></item7d>
                    <!-- {{ elt7d.name }} -->
                </td>
            </table>

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
            <!-- Volume (24h) -->
            <p>{{ parseFloat(detail["24hVolume"]).toFixed().toLocaleString() }}</p>
        </td>
        <td>
            <!-- website -->
            <a v-bind:href="detail.websiteUrl" target="_blank" class="btn">Trade & Details</a>
        </td>
    </div>    
</template>

<script>
// import Item7d from './Item7d'

export default {
    name: "cryptoItem",
    props: ['detail', 'crypto', 'urlIcon', 'lastEvol', 'previousEvol', 'coinUuid', 'listUuids', 'idLinks', 'cryptoList', 'sparkline', 'change', 'index', 'elt7d', 'cryptoList7d'],
    components: {
        // 'item7d' : Item7d
    }
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