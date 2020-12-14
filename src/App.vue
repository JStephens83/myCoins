<template>
  <div id="app">
    <header-top></header-top>
    <h1 class="mt-3 mb-0">Welcome to MyCoins !</h1>
    <formulaire></formulaire>
    <home-results></home-results>
    <p class="footLink">Powered by <a href="https://coinranking.com" target="_blank">Coinranking</a> </p>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import searchForm from './components/Form.vue'
import HomeResults from './components/HomeResults.vue'

export default {
  name: 'App',
  components: {
    'header-top': Header,
    'formulaire': searchForm,
    'home-results' : HomeResults
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap');

#app {
  font-family: 'Ubuntu', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 2vw;
  background : #01222A;
  color: #fff;
}
.footLink {
  font-size: 0.75rem;
  font-style: italic;
}
.footLink a{
  color: #95701B;
}
</style>
