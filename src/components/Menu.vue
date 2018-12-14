<template>
  <div class="text-xs-center">
    <v-menu offset-y>
        <v-btn slot="activator" color="primary" dark > <v-icon small> home </v-icon> &nbsp;Home </v-btn>
        <v-btn slot="activator" color="primary" dark> <v-icon small> assignment </v-icon> &nbsp;My Orders </v-btn>           
        <v-btn slot="activator" color="primary" dark> 
            <v-icon small> shopping_cart </v-icon> &nbsp;Cart                 
                <v-badge color="red" v-if="$store.getters.ItemCount>0">
                  <span slot="badge">{{ $store.getters.ItemCount}}</span>
                  <span>&nbsp;</span>
                </v-badge>
        </v-btn> 
    </v-menu>    
        
  </div>  
</template>

<script>

</script>

<style>
</style>
