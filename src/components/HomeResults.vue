<template>
    <div class="globalCard container-xl mt-2 mr-2 ml-2 mx-auto">
        <p class="title">Global Market Statistics</p>
        <div class="globalData">
            <div class="topMarketCard">Total Volume (24h) : {{ parseFloat(globVol24).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }} $</div>
            <div class="topMarketCard middle">
                <p>Total Coins : </p>
                <p>{{ totalCoins }}</p>
                <!-- tolocalestring seems to be causing issues -->
                <!-- <p>{{ totalCoins.toLocaleString(undefined, { maximumFractionDigits: 0}) }}</p> -->
            </div>
            <div class="topMarketCard last">Global Cryptocurrency Market Capitalization : <br/> {{ parseFloat(marketCap).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }} $
            </div>
        </div>
        <p class="title list">Crypto-currencies</p>
        <table>
            <thead class="pr-3 pb-3">
                <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Name</th>
                    <th scope="col">Symbol</th>
                    <th scope="col">Price</th>
                    <th scope="col">24h</th>
                    <th scope="col">7j</th>
                    <th scope="col">30j</th>
                    <th scope="col" id="vol24">Volume (24h)</th>
                    <th scope="col">Website</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(detail, index) in cryptoList" v-bind:key="index">
                    <cryptoItem 
                    :detail="detail"
                    class="pt-3 pb-3 pl-3 pr-3"></cryptoItem>
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
            // console.log(this.cryptoList)

            //GLOBAL DATA:
            this.globalStats = reponseCoins.data.data.stats;
            // console.log(this.globalStats)
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
            console.log(this.cryptoList7d)

            // Adding change element to a new array
            this.cryptoList7d.forEach(elt => {
                this.change7dList.push(elt.change);
            });
            // console.log(this.change7dList);
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
        display: flex;
        justify-content: center;
    }
    .topMarketCard {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #043743;
        width: 15vw;
        margin: 0 1rem;
        padding: 1rem;
        font-weight: 200;
    }
    .middle {
        display: flex;
        flex-direction: column;
    }
    .middle p {
        margin-bottom: 0;
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
    thead tr th:first-child {
        min-width: 3vw;
    }
    thead th {
        text-align: left;
        min-width: 8vw;
        font-weight: 200;
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
/*------------- MEDIA QUERIES -------------*/
    @media (min-width: 360px) {
        .topMarketCard {
            min-width: 30vw;
            margin: 0 0.2rem;
            padding: 0.2rem;
            overflow-wrap: break-word;
            font-size: 0.7rem;
        }
        table {
            display: block;
            overflow-x: auto;
            min-width: 100%;
        }
        thead th {
            min-width: 29vw;
        }
        thead th:first-child {
            min-width: 15vw;
        }
    }
     @media (min-width: 580px) {
        .topMarketCard {
            padding: 1rem;
            font-size: 0.8rem;
            line-height: 1.3rem;
        }
        thead th {
            min-width: 19vw;
        }
        thead th:first-child {
            min-width: 10vw;
        }
     }
    @media (min-width: 768px) {
        .topMarketCard {
            font-size: 1rem;
        }
        #vol24 {
            font-size: 0.9rem;
        }
        thead th {
            min-width: 12vw;
        }
        thead th:first-child {
            min-width: 6vw;
        }        
    }
    @media (min-width: 992px) {
        table {
            overflow-x: auto;
        }
        #vol24 {
            font-size: 1rem;
        }
        thead th {
            min-width: 8vw;
        }
        thead th:first-child {
            min-width: 3vw;
        }  
    }
    @media (min-width: 992px){
        .globalData {
            min-height: 30vh;
        }
        .topMarketCard {
            min-width: 20vw;
            line-height: 2rem;
        }
    } 
    /* @media screen and (min-width: 1280px) {
        thead th {
            min-width: 8vw;
        }
        thead th:first-child {
            min-width: 3vw;
        }  
    } */
</style>