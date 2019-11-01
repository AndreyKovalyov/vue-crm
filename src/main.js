import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from "./filters/date.filter";
import currencyFilter from "./filters/currency.filter";
import messagePlugin from "./utils/message.plugin";
import Loader from "./components/app/Loader";
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyBWBtwAdJntatLhr6EPlKsEIypCA-pBH_M",
  authDomain: "vue-crm-a74f6.firebaseapp.com",
  databaseURL: "https://vue-crm-a74f6.firebaseio.com",
  projectId: "vue-crm-a74f6",
  storageBucket: "vue-crm-a74f6.appspot.com",
  messagingSenderId: "154059872174",
  appId: "1:154059872174:web:822a31cb84bb6775955a3f",
  measurementId: "G-Q7PCSFFYZ5"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
