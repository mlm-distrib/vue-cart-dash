<template>
  <v-container grid-list-xl>
    <v-layout  justify-center>
        <v-flex xs2 flexbox fluid v-for="product in $store.getters.ProductList">
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

@Component({
    components:{
        Product
    }
})
export default class ProductList extends Vue{}
</script>
