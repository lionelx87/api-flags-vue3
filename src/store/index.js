import { createStore } from 'vuex'

export default createStore({
  state: {
    countries: [],
    filterCountries: []
  },
  mutations: {
    setCountries(state, payload) { state.countries = payload },
    setFilterCountries(state, payload) { state.filterCountries = payload }
  },
  actions: {
    async getCountries({ commit }) {
      try{
        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await res.json();
        console.log(data);
        commit('setCountries', data);
      }catch(err) {
        console.log(err);
      }
    }
  },
  modules: {
  }
})
