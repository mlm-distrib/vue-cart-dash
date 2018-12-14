<template>
    <v-layout>
        <v-flex>
            <div>        
                <div>Title</div>
                <div>Image</div>
                <div>Details</div>
                <v-btn slot="activator" color="primary" dark >Add to cart</v-btn>
            </div>
        </v-flex>        
    </v-layout>
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