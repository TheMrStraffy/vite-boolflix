<script>
import HeaderApp from "./components/HeaderApp.vue";
import MainApp from "./components/MainApp.vue";
import axios from "axios";
import {store} from "./data/store";
export default {
  name: "App",
  components: {HeaderApp, MainApp},
  data(){
    return{
      store,
    }
  },
  methods: {
    // getMoviesList(){
    //   axios.get(store.apiPopularListUrl)
    //   .then( result => {
    //     store.movieListArray = result.data.results;
    //   })
    //   .catch(error =>{
    //     console.log(error);
    //   })
    // },
    getTrendingMovies(){
      axios.get(store.apiTrendingUrl)
      .then( result => {
        store.movieTrendArray = result.data.results;
      })
    },
    getSearchedMovies(){
      axios.get(store.apiSearchUrl, {
        params:{
          query: store.movieSearchString
        }
      })
      .then( result => {
        store.searchMovieArray = result.data.results;
      })
    }
  },
  mounted(){
    // this.getMoviesList();
    this.getTrendingMovies();
    this.getSearchedMovies();
  }
}
</script>

<template>

<HeaderApp @getSearchedMovies="getSearchedMovies()" />
<MainApp/>
  
</template>

<style lang="scss">
@use './styles/generals';
</style>