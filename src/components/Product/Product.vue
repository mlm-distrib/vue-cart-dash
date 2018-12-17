<template>    
    <v-card color="#fff" height="100%" width="110%">
        <v-card-text><b>{{ product.Name }}</b></v-card-text>
        <v-spacer></v-spacer>
        <img v-bind:src="product.ImageURL" align="center" width="100"/>
        <v-card-text>Details: {{ product.Details }}</v-card-text>
        <v-card-text>Price: {{ product.Currency }} {{ product.Price }}</v-card-text>
        <v-select
            v-model="select"
            :items="[1,2,3,4,5,6,7,8,9,10]"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required 
        ></v-select>
        <v-btn v-on:click.native="" color="primary  "> Add</v-btn>
        <v-spacer></v-spacer>
    </v-card> 
</template>

<script lang="ts">
      export default {
        name: 'Product',
        props: ['product'],
        components: {}
    }
</script>

<style>

</style>