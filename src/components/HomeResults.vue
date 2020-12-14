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
                <tr v-bind:key="index" v-for="(detail, index) in limitCryptoRes">
                    <cryptoItem 
                    v-bind:cryptoList="detail"
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

// const globStats_url = "https://api.coinranking.com/v2/stats"

const proxyUrl = "https://cors-anywhere.herokuapp.com/"

const coins_url = "https://api.coinranking.com/v2/coins"
const coins_url_7d = "https://api.coinranking.com/v2/coins?timePeriod=7d"
const coins_url_30d = "https://api.coinranking.com/v2/coins?timePeriod=30d"

// const history_url = "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/history"

const access_token = 'coinrankingc3527795be2210a2aea7b0677f9aaea396a4656499dc6034'

const reqHeaders = {
    headers: {
        'Access-Control-Allow-Headers': 'x-access-token',
        'x-access-token': `token ${access_token}`
    }
}

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
            evol7d: null,
            evol30d: null
        }
    },
    mounted(){
        //COINS DATA
        axios
        .get(proxyUrl + coins_url, { 
            reqHeaders
        })
        .then((reponseCoins) => {
            // console.log(reponseCoins.data)
            //COINS DATA:
            // this.cryptoList = reponseCoins.data.data.coins;
            this.cryptoList.push(reponseCoins.data.data.coins);
            console.log(this.cryptoList)
            //test1
            // this.cryptoList.push(reponseCoins.data.data.coins);
            // console.log(this.cryptoList)
            // this.cryptoList.forEach( elt => {
            //     console.log(elt.sparkline)
            // })


            //GLOBAL DATA:
            this.globalStats = reponseCoins.data.data.stats;
            //volume 24h
            this.globVol24 = this.globalStats.total24hVolume;
            //total coins
            this.totalCoins = this.globalStats.total;
            //Market capitalization
            this.marketCap = this.globalStats.totalMarketCap;


            //RELOAD REQUETE:
            // this.crypto = setInterval(() => {
            // reponseCoins.data.data.coins;
            // },5000)
            // console.log(this.crypto);
        })
        .catch((error) => {
            console.error(error)
        })


        // EVOLUTION 7 DAYS
        axios
        .get(proxyUrl + coins_url_7d, { 
            reqHeaders
        })
        .then((reponse7d) => {
            // console.log(reponse7d.data)
            this.evol7d = reponse7d.data.data.coins;
            //test1 : fonctionne mais pas utile pour le moment
            this.cryptoList.push(this.evol7d)
            //test2 : fail, fait tout planter
            // this.cryptoList = reponse7d.data.data.coins;
            console.log(this.cryptoList)

            //test foreach pour voir si on accede aux donnée : SUCCESS
            // this.evol7d.forEach(evolelt => {
            //     console.log(evolelt.change);
            // })
            //RELOAD REQUETE:
            // this.crypto = setInterval(() => {
            // reponseCoins.data.data.coins;
            // },5000)
            // console.log(this.crypto);
        })
        .catch((error) => {
            console.error(error)
        })

        // EVOLUTION 30 DAYS
        axios
        .get(proxyUrl + coins_url_30d, { 
            reqHeaders
        })
        .then((reponse30d) => {
            console.log(reponse30d.data)
            this.evol30d = reponse30d.data.data.coins;
            //Test1 :  fonctionne mais pas utile pour le moment
            this.cryptoList.push(this.evol30d);
            //Test2 : fail, fait tout planter 
            // this.cryptoList = reponse30d.data.data.coins;
            console.log(this.cryptoList)

        //     //RELOAD REQUETE:
        //     // this.crypto = setInterval(() => {
        //     // reponseCoins.data.data.coins;
        //     // },5000)
        //     // console.log(this.crypto);
        })
        .catch((error) => {
            console.error(error)
        })


        // //GLOBAL DATA (fait directement dans COINS DATA)
        // axios
        // .get(proxyUrl + globStats_url, { 
        //     reqHeaders
        // })
        // .then((reponseGlobalData) => {
        //     console.log(reponseGlobalData.data)
        //     //volume 24h
        //     this.globVol24 = reponseGlobalData.data.data.total24hVolume;
        //     //total coins
        //     this.totalCoins = reponseGlobalData.data.data.totalCoins;
        //     //Market capitalization
        //     this.marketCap = reponseGlobalData.data.data.totalMarketCap
        // })
        // .catch((error) => {
        //     console.error(error)
        // })


        // COIN HISTORY - pour plus tard
        // axios
        // .get(proxyUrl + history_url, { 
        //     reqHeaders
        // })
        // .then((reponseHistory) => {
        //     // console.log(reponseHistory.data)
        //     // get data from last element
        //     const history = reponseHistory.data.data.history
        //     this.lastItem = history[history.length-1]
        //     // console.log(this.lastItem)
        //     this.lastEvol = this.lastItem.price
        //     // console.log(this.lastEvol)
        //     //get data from previous element:
        //     this.previousItem = history[history.length-2]
        //     this.previousEvol = this.previousItem.price
        //     // console.log(this.previousEvol)
            
        //     //Evolution entrée précédente
        //     //comparaison à faire direct sur cryptoitem
        // })
        // .catch((error) => {
        //     console.error(error)
        // })


        //GET ALL COINS UUIDs
        // axios
        // .get(proxyUrl + coins_url, { 
        //     reqHeaders
        // })
        // .then((reponseUuid) => {
        //     this.cryptoUuidList = reponseUuid.data.data.coins;
        //     console.log(this.cryptoUuidList)
        //     //accès à chaque uuid de chaque crypto:
        //     this.cryptoUuidList.forEach(coinUuid => {
        //         console.log("id is: " + coinUuid.uuid)
        //         //stockage des valeurs dans tableau  listUuids
        //         this.listUuids.push(coinUuid.uuid);
        //     });
        //     // console.log("listUuids is : " + this.listUuids)

        //     //Creation of all links for each uuid:
        //     // this.listUuids.forEach(coinUuid => {
        //     //     var idLinks = "https://api.coinranking.com/v2/coin/" + coinUuid + "/history"
        //     //     console.log(idLinks)
        //     // })
        //     // console.log("idLinks is : " + idLinks)
        // })
        // .catch((error) => {
        //     console.error(error)
        // })
    },
    computed: {
        // Limite du nombre de résultats affichés
        limitCryptoRes: function() {
            return this.limit ? this.cryptoList.slice(0, this.limit) : this.cryptoList;
        }
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