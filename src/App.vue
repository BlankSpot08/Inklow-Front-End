<template>
  <div id="app">
    <Navigation id="navigation"/>
    <router-view id="body"/>
    <Footer id="footer"/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
  }
}
</script>

<style lang="css">
  @import url('https://fonts.googleapis.com/css2?family=Texturina&display=swap');

  body,
  html,
  .App,
  .vue-tempalte,
  .vertical-center {
    width: 100%;
    height: 100%;
  }

  #app {
    font-family: 'Texturina', serif;
    position: relative;
  }

  #navigation {
    position: sticky;
  }

  #body {
    min-height: 900px;
  }

  #footer {

  }
</style>
