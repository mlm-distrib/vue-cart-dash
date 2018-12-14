<template>
  <div class="home">   
    <ProductList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
//import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import ProductList from '@/components/Product/ProductList.vue';

@Component({
  components: {
    ProductList
  }
})
export default class Home extends Vue {}
</script>
