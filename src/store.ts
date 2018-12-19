import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const API_ROOT = 'http://localhost:8090'
const ALL_PRODUCTS = 'ALL_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'


export default new Vuex.Store({
  state: {
    showLoader: false,
    itemCount: 0,
    productList : [],
    myChart: [],
    myChartCurr: []
  },
  mutations: {
    [ALL_PRODUCTS](state, payload){
      state.showLoader = true;
      state.productList = payload;
    },
    [ADD_PRODUCT]: (state, payload) => {
      //console.log(payload)
      payload.IsRemove = true
      state.myChart.push(payload)
      state.itemCount = state.myChart.length
      state.myChartCurr = payload.Currency
    },
    [REMOVE_PRODUCT]: (state, payload) => {
      //console.log(payload)
      const index = state.myChart.findIndex(p => p.Id === payload.Id)
      console.log(index)
      state.myChart.splice(index,1)
      state.itemCount = state.myChart.length
    }
  },
  actions: {
    allProducts({commit}){
      //commit(ALL_PRODUCTS)      
      axios.get(API_ROOT+'/products').then(res => {
          console.log(res.data);
          commit(ALL_PRODUCTS,  res.data)
      }).catch(err=>{
        console.log(err);
      })
    },
    addProduct({commit}){
      commit(ADD_PRODUCT)      
    },
    removeProduct({commit}){
      commit(REMOVE_PRODUCT)
    }
  },
  getters: {
    ItemCount: state => {
      return state.itemCount
    },
    ProductList: state => {
      return state.productList
    },
    MyCartDetails: state => {
      return state.myChart
    },
    MyCartTotal: state => state.myChart.reduce((acc, itm) => acc + itm.Total, 0),
    MyCartCurrency: state => state.myChartCurr
  }
})
