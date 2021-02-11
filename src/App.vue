<template>
  <div id="app">
    <header-top></header-top>
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
  background : no-repeat center #01222A;
  color: #fff;
  height: 100%;
}
.footLink {
  font-size: 0.75rem;
  font-style: italic;
}
.footLink a{
  color: #95701B;
}
p {
  font-weight: 200;
}
</style>
