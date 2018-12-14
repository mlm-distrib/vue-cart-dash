import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemCount: 1,    
    productList : [
      {Id: 1, Name: 'Test 1', Price: 100, Details: 'test test test'},
      {Id: 2, Name: 'Test 2', Price: 100, Details: 'test test test'},
      {Id: 3, Name: 'Test 3', Price: 100, Details: 'test test test'}
  ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    ItemCount: state => {
      return state.itemCount
    },
    ProductList: state =>{
      return state.productList
    }
  }
})
