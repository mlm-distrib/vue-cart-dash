<template>    
    <v-card color="#fff" height="100%" width="110%">
        <v-card-text><b>{{ product.Name }}</b></v-card-text>
        <v-spacer></v-spacer>
        <img v-bind:src="product.ImageURL" align="center" width="100"/>
        <v-card-text>Details: {{ product.Details }}</v-card-text>
        <v-card-text>Price: <b>{{ product.Currency }}{{ product.Price }}</b></v-card-text>
        <v-select
            v-model="product.Qty"
            :items="[1,2,3,4,5,6,7,8,9,10]"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required 
        ></v-select>
        <v-btn v-show="!product.IsRemove" v-on:click.native="addToCart($store, product)" color="primary"> Add</v-btn>
        <v-btn v-show="product.IsRemove" v-on:click.native="removeFromCart($store, product)" color="red"> Remove</v-btn>
        <v-spacer></v-spacer>
    </v-card> 
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    const ADD_PRODUCT = 'ADD_PRODUCT'
    const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

      export default {
        name: 'Product',
        props: ['product'],
        components: {},
        methods:{
            addToCart:(store, product) => {                
                store.commit(ADD_PRODUCT, product);
            },
            removeFromCart:(store, product) => {
                product.IsRemove = false
                store.commit(REMOVE_PRODUCT, product);
            }
        }
    }
</script>

<style>

</style>