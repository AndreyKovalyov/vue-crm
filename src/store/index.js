import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import category from './category'
import record from './record'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    cleaerError(state) {
      state.error = null
    }
  },
  actions: {
    async fetchCurrency() {
      const key = process.env.VUE_APP_FIXER
      // const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&format=1&symbols=USD,EUR,RUB`)
      const res = {
        base: "EUR",
        date: "2019-11-03",
        rates: {
          USD: 1.11675,
          EUR: 1,
          RUB: 70.957286
        },
        EUR: 1,
        RUB: 70.957286,
        USD: 1.11675,
        success: true,
        timestamp: 1572808745,
      }
      // return await res.json()
      return res
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth, info, category, record
  }
})
