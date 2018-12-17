<template>
  <v-app>
    <v-toolbar app>
      <Menu />
    </v-toolbar>
    <v-spacer></v-spacer>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
import Menu from './components/Menu'
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    Home,
    Menu
  },
  data () {
    return {
      //
    }
  }
}
</script>
