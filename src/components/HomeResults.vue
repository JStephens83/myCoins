<template>
    <div class="globalCard container mt-2 mr-2 ml-2 mx-auto">
        <p class="title">Global Market Statistics</p>
        <ul class="globalData card pt-3 pb-3 pl-3 pr-3s">
            <li>Total Volume (24h) : {{ parseFloat(globVol24).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }} $</li>
            <li>Total Coins : {{ totalCoins }} </li>
            <li>Global Cryptocurrency Market Capitalization : {{ parseFloat(marketCap).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }} $
            </li>
        </ul>
        <p class="title list">Crypto-currencies</p>
        <table>
            <thead class="pl-3 pr-3 pt-3 pb-3">
                <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Name</th>
                    <th scope="col">Symbol</th>
                    <th scope="col">Price</th>
                    <th scope="col">24h</th>
                    <th scope="col">7j</th>
                    <th scope="col">30j</th>
                    <th scope="col">Volume (24h)</th>
                    <th scope="col">Website</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(detail, index) in cryptoList" v-bind:key="index">
                    <cryptoItem 
                    :detail="detail"
                    class="mt-1 mb-1 pt-3 pb-3 pl-3 pr-3"></cryptoItem>
                </tr>
                <div class="showMore btn mt-4 mb-4" v-on:click="limit = null">Show more</div>
            </tbody>
        </table>
        <!-- <line-chart v-bind:data="chartData"></line-chart> -->
    </div>    
</template>

<script>
import axios from 'axios'
import CryptoItem from './CryptoItem'

const coins_url = "https://api.coinranking.com/v2/coins"
const coins_url_7d = "https://api.coinranking.com/v2/coins?timePeriod=7d"
const coins_url_30d = "https://api.coinranking.com/v2/coins?timePeriod=30d"

// const globStats_url = "https://api.coinranking.com/v2/stats"

// const history_url = "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/history"

//HEROKUAPP DELETED 01.2021, using firefox module instead
// const proxyUrl = "https://cors-anywhere.herokuapp.com/"

// const access_token = 'coinrankingc3527795be2210a2aea7b0677f9aaea396a4656499dc6034'

// const reqHeaders = {
//     headers: {
//         'Access-Control-Allow-Headers': 'x-access-token',
//         'x-access-token': `token ${access_token}`
//     }
// }

export default {
    name: 'HomeResults',
    data(){
        return {
            limit: 5,
            cryptoList: [],
            detail: null,
            globVol24: null,
            totalCoins: null,
            marketCap: null,
            cryptoList7d : [],
            cryptoList30d : [],
            change7dList : [],
            change30dList : []
        }
    },
    mounted(){
        //COINS DATA
        axios
        .get(`${coins_url}`)
        // .get(proxyUrl + coins_url, { 
        //     reqHeaders
        // })
        .then((reponseCoins) => {
            //COINS DATA:
            this.cryptoList = reponseCoins.data.data.coins;
            console.log(this.cryptoList)

            //GLOBAL DATA:
            this.globalStats = reponseCoins.data.data.stats;
            //volume 24h
            this.globVol24 = this.globalStats.total24hVolume;
            //total coins
            this.totalCoins = this.globalStats.total;
            //Market capitalization
            this.marketCap = this.globalStats.totalMarketCap;
        })
        .catch((error) => {
            console.error(error)
        })


        // EVOLUTION 7 DAYS
        axios
        .get(`${coins_url_7d}`)
        .then((reponse7d) => {
            this.cryptoList7d = reponse7d.data.data.coins;
            // console.log(this.cryptoList7d)

            // Adding change element to a new array
            this.cryptoList7d.forEach(elt => {
                this.change7dList.push(elt.change);
            });
            console.log(this.change7dList);
            // Adding change7d property to all elements in cryptoList:
            for (var i = 0; i < this.cryptoList.length; i++) {
                this.cryptoList[i].change7d = this.change7dList[i];
            }
        })
        .catch((error) => {
            console.error(error)
        })

        // // EVOLUTION 30 DAYS
        axios
        .get(`${coins_url_30d}`)
        .then((reponse30d) => {
            // console.log(reponse30d.data)
            this.cryptoList30d = reponse30d.data.data.coins;
            // Adding change element to a new array
            this.cryptoList30d.forEach(elt => {
                this.change30dList.push(elt.change);
            });
            // Adding change30d property to all elements in cryptoList:
            for (var i = 0; i < this.cryptoList.length; i++) {
                this.cryptoList[i].change30d = this.change30dList[i];
            }
        })
        .catch((error) => {
            console.error(error)
        })
    },
    computed: {
        // Limite du nombre de résultats affichés
        // limitCryptoRes: function() {
        //     return this.limit ? this.cryptoList.slice(0, this.limit) : this.cryptoList;
        // },
    },
    components: {
        'cryptoItem' : CryptoItem
    }
}
</script>

<style scoped>
    img {
        width: 20%;
        height: auto;
        text-align: center;
    }
    .title {
        font-size: 1.5em;
    }
    .list {
        margin-top: 2rem;
    }
    .globalData {
        background-color: #043743;
    }
    .globalData li{
        list-style-type: none;
        text-align: left;
        font-size: 0.85em;
    }
    table {
        width: 100%;
        border-collapse: separate;
    }
    thead, tbody {
        display: inline-table;
        width: 100%;
    }
    thead th:nth-last-child(1) {
        text-align: center;
    }
    th {
        text-align: left;
        width: calc(100%/9);
    }
    tbody tr .card {
        font-size: 0.85em;
    }
    .showMore {
        background-color: #95701B;
        color: #fff;
    }
    .showMore:hover {
        background-color: #6D4D03;
        color: #fff;
    }
</style>