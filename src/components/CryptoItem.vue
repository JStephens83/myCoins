<template>
    <div class="card">
        <td id="rank">
            <!-- rank -->
            <p>{{ detail.rank }}</p>
        </td>
        <td id="name" class="pl-3">
            <!-- name -->
            <p>{{ detail.name }}</p>
        </td>
        <td id="imgcur">
            <img class="card-img-top mr-3" v-bind:src="detail.iconUrl">
            <!-- Symbol -->
            <h5>{{ detail.symbol }}</h5>
        </td>
        <td id="sparkline">
            <!-- Price -->
            <p v-if="detail.sparkline[detail.sparkline.length-1] > detail.sparkline[detail.sparkline.length-2]" style="color: #7DE8BA;">{{ parseFloat(detail.price).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }} $ &nearr;</p>
            <p v-else style="color:#F5716C;">{{ parseFloat(detail.price).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }} $ &searr;</p>
        </td>
        <td id="change24h">
            <!-- evolution 24h -->
            <p v-if="detail.change < 0" style="color: #F5716C;">{{ parseFloat(detail.change).toFixed(2) }} %</p>
            <p v-else-if="detail.change >= 0" style="color: #7DE8BA;">{{ parseFloat(detail.change).toFixed(2) }} %</p>
        </td>
        <td id="change7d"> 
            <!-- evolution 7 days -->
            <p v-if="detail.change7d < 0" style="color: #F5716C;">{{ parseFloat(detail.change7d).toFixed(2) }} %</p>
            <p v-if="detail.change7d >= 0" style="color: #7DE8BA;">{{ parseFloat(detail.change7d).toFixed(2) }} %</p>
        </td>
        <td id="change30d">
            <!-- evolution 30 days -->
            <p v-if="detail.change30d < 0" style="color: #F5716C;">{{ parseFloat(detail.change30d).toFixed(2) }} %</p>
            <p v-if="detail.change30d >= 0" style="color: #7DE8BA;">{{ parseFloat(detail.change30d).toFixed(2) }} %</p>
        </td>
        <td class="volume24">
            <!-- Volume (24h) -->
            <p>{{ parseFloat(detail["24hVolume"]).toFixed().toLocaleString() }}</p>
        </td>
        <td id="webLink">
            <!-- website -->
            <a v-bind:href="detail.websiteUrl" target="_blank" class="btn">Trade & Details</a>

        </td>
    </div>    
</template>

<script>

export default {
    name: "cryptoItem",
    props: ['detail', 'crypto', 'urlIcon', 'cryptoList', 'sparkline', 'change']
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
    .card {
        color: #fff;
        background-color: #043743;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        border: 0;
        border-radius: 0;
    }
    .card td {
        text-align: left;
        min-width: 8vw;
    }
    .card td a {
        width: 100%;
    }
    #rank {
        min-width: 0vw;
    }
    #name {
        overflow-wrap: break-word;
    }
    #imgcur {
        display: flex;
        align-items: center;
    }
    #imgcur img {
        width:3vw;
        height: auto;
        text-align: center;
    }
    #imgcur h5 {
        font-size: 1rem;
    }
    .btn {
        background-color: #95701B;
        color: #fff;
        font-size: 1em;
        font-weight: 200;
    }
    .btn:hover {
        background-color: #6D4D03;
        color: #fff;
    }
    /*------------- MEDIA QUERIES -------------*/
    @media (min-width: 360px) {
        #rank {
            min-width: 10vw;
        }
        .card td {
            min-width: 30vw;
        }
        .card td p {
            word-break: break-word;
        }
        #imgcur img {
            width: 8vw;
        }
    }
    @media (min-width: 580px) {
        #rank {
            min-width: 5vw;
        }
        .card td {
            min-width: 20vw;
        }
        #imgcur img {
            width: 6vw;
        }
    }
    @media (min-width: 768px) {
        .card td {
            min-width: 13vw;
        }
        #rank {
            min-width: 0vw;
        }
        #imgcur img {
            width: 5vw;
        }
    }
    @media (min-width: 992px) {
        .card td {
            min-width: 10vw;
        }
        #rank {
            min-width: 0vw;
        }
        #imgcur img {
            width: 3vw;
        }
    }
    @media (min-width: 1280px) {
        .card td {
            min-width: 8vw;
        }
    }
</style>