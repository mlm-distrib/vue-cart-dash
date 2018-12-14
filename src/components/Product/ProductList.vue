<template>
    <div>
        <template v-for="product in $store.getters.ProductList">            
            <Product  />    
        </template>
    </div>
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
