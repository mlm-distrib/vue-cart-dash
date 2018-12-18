<template>
  <v-container grid-list-xl>
    <v-layout  justify-center>
        <v-flex xs2 flexbox fluid v-for="product in products">
            <Product :product="product"/>       
        </v-flex>
    </v-layout>

    <v-layout>
        
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Product from '@/components/Product/Product.vue'


export default {
    name: 'ProductList',
    created(){
        if(this.products.length === 0){
            this.$store.dispatch('allProducts')
        }
    },
    computed: {
        products(){
            return this.$store.getters.ProductList
        }
    },
    components:{
        Product
    }
}
</script>
