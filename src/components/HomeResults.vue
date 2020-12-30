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
                <!-- fonctionne avec "="  -->
                <tr v-bind:key="index" v-for="(detail, index) in cryptoList">
                    <cryptoItem 
                    :detail="detail"
                    :cryptoList7d="cryptoList7d"
                    class="mt-1 mb-1 pt-3 pb-3 pl-3 pr-3"></cryptoItem>
                </tr>
                <!-- Avec limitCryptoRes: 
                    <tr v-bind:key="index" v-for="(detail, index) in limitCryptoRes">
                    <cryptoItem 
                    v-bind:cryptoList="detail"
                    class="mt-1 mb-1 pt-3 pb-3 pl-3 pr-3"></cryptoItem>
                </tr> -->

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


// const proxyUrl = "https://cors-anywhere.herokuapp.com/"


const coins_url = "https://api.coinranking.com/v2/coins"
const coins_url_7d = "https://api.coinranking.com/v2/coins?timePeriod=7d"
const coins_url_30d = "https://api.coinranking.com/v2/coins?timePeriod=30d"

// const history_url = "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/history"


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
            // elt7d: null

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
            // console.log(reponseCoins.data)
            //COINS DATA:
            this.cryptoList = reponseCoins.data.data.coins;
            // this.cryptoList.push(reponseCoins.data.data.coins);
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
            // console.log(reponse7d.data)
            // Test 3 avec composant :
            this.cryptoList7d = reponse7d.data.data.coins;


            // Test 2 avec composant:
            // this.change7d = reponse7d.data.data.coins;
            // console.log(this.change7d);
            // this.change7d.forEach(elt => {
            //     // console.log(elt.change)
            //     this.cryptoList7d.push(elt.change);
            // });
            console.log(this.cryptoList7d);
            //test1 : fonctionne mais pas utile pour le moment
            // FONCTIONNE
            // this.cryptoList7d = this.change7d;
            // this.cryptoList.push(this.change7d);
            // console.log(this.cryptoList7d);

        })
        .catch((error) => {
            console.error(error)
        })


        // // EVOLUTION 30 DAYS
        axios
        .get(`${coins_url_30d}`)
        .then((reponse30d) => {
            // console.log(reponse30d.data)
            this.change30d = reponse30d.data.data.coins;

            this.change30d.forEach(elt => {
                // console.log(elt.change)
                this.cryptoList30d.push(elt.change);
            });
            // console.log(this.cryptoList30d);

            // console.log(this.change30d);
            //Test1 :  fonctionne mais pas utile pour le moment
            // this.cryptoList30d = this.change30d;
            // console.log(this.cryptoList30d);

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
        
        //elt inside elt
        // changes: function() {
        //     var changes7d = [];
        //     for (let i = 0; i < this.cryptoList7d.length; i++) {
        //         console.log("length is " + i)
        //         console.log(this.cryptoList7d.length)
        //     //     for (let j = 0; j < this.cryptoList[i].length; j++) {
        //     //         changes.push(this.cryptoList[i][j].change)
        //     //         console.log(this.cryptoList[i][j].change + " " + [j])
        //     //     }

        //     // test 2:

        //     }


        //     console.log(changes7d)
        //     return changes7d;
        // }

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