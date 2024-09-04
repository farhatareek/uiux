<template>
  <MainNavbar></MainNavbar>
  <div>
    <router-view></router-view>
  </div>
  <MainComponent></MainComponent>
</template>

<script>
import MainNavbar from './components/Navbar.vue'
import MainComponent from './components/MainCommponent.vue'




export default {
  name: 'App',
  components: {
    MainNavbar,
    MainComponent,

  }
}
</script>

<style>
#app {
}
</style>
