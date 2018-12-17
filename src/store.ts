import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemCount: 0,    
    productList : [
      {Id: 1, Name: 'Vivo V-Max', Currency: '$', Price: 140, Details: 'The Vivo V3Max is powered by 1.4GHz octa-core processor and it comes with 4GB of RAM.... The Vivo V3Max is a Dual-SIM (GSM and GSM) smartphone LTPS IPS LCD display', ImageURL: 'https://static.toiimg.com/photo/64428999/Vivo-NEX.jpg'},
      {Id: 2, Name: 'Honor 10', Currency: '$', Price: 130, Details: 'Huawei Honor View 10 Android smartphone. Announced Dec 2017. Features 5.99″ LTPS IPS LCD display, HiSilicon Kirin 970 chipset, Dual: 16 MP (f/1.8) + 20', ImageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc1lzy6DifkGwhmDjxZ8LioEWi2yq9CW_q4gKE3DoG2dcn7RbO'},
      {Id: 2, Name: 'Honor 10', Currency: '$', Price: 130, Details: 'Huawei Honor View 10 Android smartphone. Announced Dec 2017. Features 5.99″ LTPS IPS LCD display, HiSilicon Kirin 970 chipset, Dual: 16 MP (f/1.8) + 20', ImageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc1lzy6DifkGwhmDjxZ8LioEWi2yq9CW_q4gKE3DoG2dcn7RbO'},
      {Id: 2, Name: 'Honor 10', Currency: '$', Price: 130, Details: 'Huawei Honor View 10 Android smartphone. Announced Dec 2017. Features 5.99″ LTPS IPS LCD display, HiSilicon Kirin 970 chipset, Dual: 16 MP (f/1.8) + 20', ImageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc1lzy6DifkGwhmDjxZ8LioEWi2yq9CW_q4gKE3DoG2dcn7RbO'},
      {Id: 2, Name: 'Honor 10', Currency: '$', Price: 130, Details: 'Huawei Honor View 10 Android smartphone. Announced Dec 2017. Features 5.99″ LTPS IPS LCD display, HiSilicon Kirin 970 chipset, Dual: 16 MP (f/1.8) + 20', ImageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc1lzy6DifkGwhmDjxZ8LioEWi2yq9CW_q4gKE3DoG2dcn7RbO'},
      {Id: 3, Name: 'Samsung S9', Currency: '$', Price: 700, Details: 'The Samsung Galaxy S9 offers a 5.8 inch Quad HD+ AMOLED Display that ... The Galaxy S9 captures 4x as many frames per second LTPS IPS LCD display', ImageURL: 'https://assets.mspcdn.net/t_c-desktop-normal,f_auto,q_auto,d_c:noimage.jpg/c/11918-55-1.jpg'}
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
    ProductList: state => {
      return state.productList
    }
  }
})
