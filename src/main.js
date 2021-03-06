//Main components
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from "../plugins/font-awesome.ts";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { FontAwesomeIcon } from "@/plugins/font-awesome.ts";

// import Vue from 'vue'
// import Chartkick from 'vue-chartkick'
// import Chart from 'chart.js'


createApp(App)
.component("fa", FontAwesomeIcon)
.mount('#app')
// Vue.use(Chartkick.use(Chart))
// Vue.component('font-awesome-icon', FontAwesomeIcon)