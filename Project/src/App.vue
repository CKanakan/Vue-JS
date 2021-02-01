<template>
  <div id="app">

    
<Header />
    <NavBar/>
    <carousel>
      <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
      <img :src="slide" :alt="slide">
      </carousel-slide>
    </carousel>

    <Content/>
    <Footer />

    
    
  </div>
</template>

<script>
import Header from './components/Header.vue'
import NavBar from  './components/NavBar.vue'
import Carousel from './components/Carousel.vue'
import CarouselSlide from './components/CarouselSlide.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',

     data(){
        return {
            slides: [
                'https://picsum.photos/id/1015/1000/1000',
                'https://picsum.photos/id/1022/1000/1000',
                'https://picsum.photos/id/1002/1000/1000',
                'https://picsum.photos/id/233/1000/1000',
                'https://picsum.photos/id/234/1000/1000',
                'https://picsum.photos/id/235/1000/1000',
                'https://picsum.photos/id/236/1000/1000',
            ]
        }
    },


  components: {
    Header,
    NavBar,
    Carousel,
    CarouselSlide,
    Content,
    Footer

   
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb) ;
  color: #32a6b6;
  overflow: hidden;
}

  .carousel {
        position:relative;
        overflow: hidden;
        width:100%;
        height:500px;
    }


    .btn {
        padding:5px 10px;
        background-color:red;
        border:1px solid transparent;
        margin:5px 10px;
        height:50px;
        width:50px;
        position:absolute;
        margin-top:-25px;
    }
    .btn:hover {
        cursor: pointer;
        background-color:black;
    }
    .btn:focus{
        outline:none;
    }
    .btn-next {
        top:50%;
        right:0;
    }
    .btn-prev {
        top:50%;
        left:0;
    }
    .carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    .carousel-slider img {
        width:100%;
        height:100%;
    }

img {

  position:center;
  
}


/*
  .carousel {
    position: relative;
    overflow: hidden;
    width:800px;
    height: 500px;
    z-index: 10;
  }
  .btn{
    padding: 5px 10px;
    background-color:rgba(0,0,0,0.5);
    border:1px solid transparent;
    margin:5px 10px;
    color:#fff;
    height:50px;
    width:50px;
    position:absolute;
    margin-top:-25px;
    z-index:2;
  }
  .btn:hover{
    cursor:pointer;
    background-color:black;
  }
  .btn:focus{
    outline: none;
  }
  .btn-next{
    top:50%;
    right:0;
  }
  .btn-prev{
    top:50%;
    left:0;
  }
  .carousel-slider{
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
  }
  .carousel-slider img{
    width: 100%;
    height: 100%;
  }
  img{
    position: center;
  }
*/



</style>
