<template>
  <div id="app">

  <Header />


  <NavBar />
  <Article />
     <Card/>
          




     <Banner/>

    <Footer/>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import NavBar from './components/NavBar.vue'
import Article from './components/Article.vue'
import Card from './components/Card.vue'
import Banner from './components/Banner.vue'
import Footer from './components/Footer.vue'





export default {
  name: 'App',

    

  components: {
    Header,
    NavBar,
    Card,
    Article,
    Banner,
    Footer,
    
  },

    

  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: linear-gradient(blue, cyan, black );
  color: #32a6b6;
  overflow: hidden;
}



img {

  position:center;
  
}


</style>
