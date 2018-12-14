import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemCount: 1
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    ItemCount: state => {
      return state.itemCount
    }
  }
})
