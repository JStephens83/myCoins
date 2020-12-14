<template>
    <div class="container">
        <form>
            <!-- <div class="form-group">
                <label for="addCurrency">Select your Crypto-currency</label>
                <input 
                v-model="req" 
                type="text" 
                id="addCurrency" 
                class="form-control"
                @keypress.enter="goCurrency">
            </div>
            <button class="btn btn-primary">Search</button> -->
        </form>
    </div>
</template>

<script>
import axios from 'axios'

const access_token = 'coinrankingc3527795be2210a2aea7b0677f9aaea396a4656499dc6034'

export default {
    name: 'searchForm',
    data: function() {
        return {
            req: '',
            currency: undefined,
            // search_url: "https://api.coinranking.com/v2/search-suggestions?",
            // api_code: 'coinrankingc3527795be2210a2aea7b0677f9aaea396a4656499dc6034'
        }
    },
    methods : {
        goCurrency(e) {
            if(e.key == 'Enter') {
                axios({
                    method: 'get',
                    baseURL : 'https://api.coinranking.com/v2/search-suggestions?query=',
                    url: `${this.req}`,
                    headers: {
                        'x-access-token': `token ${access_token}`
                    }
                })
                .then(resultat => {
                    console.log(resultat)
                })
                .catch(error => {
                    console.log(error)
                });
            }
        }
    }
}
</script>

<style scoped>

</style>