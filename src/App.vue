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
    getPopularMovies(){
      axios.get(store.apiPopularUrl)
      .then(result => {
        store.popularArray = result.data.results;
      })
      .catch(err => {
        console.log(err);
      })
    },
    getTrendingMovies(){
      axios.get(store.apiTrendingUrl)
      .then( result => {
        store.movieTrendArray = result.data.results;
      })
      .catch( err =>{
        console.log(err);
      })
    },
    getSearchedMovies(){
      store.searchMovieArray = [];
      axios.get(store.apiSearchUrl , {
        params:{
          query: store.movieSearchString
        }
      })
      .then( result => {
        store.searchMovieArray = result.data.results;
      })
      .catch( err =>{
        console.log(err);
      })
    },
    getTvSeries(){
      store.tvSeriesArray = [];
      axios.get(store.apiTvSeriesUrl , {
        params:{
          query: store.movieSearchString
        }
      })
      .then( result => {
        store.tvSeriesArray = result.data.results;
      })
      .catch( err =>{
        console.log(err);
      })
    },
    generalSearch(){
      this.getSearchedMovies();
    this.getTvSeries();
    }
  },
  mounted(){
    this.getTrendingMovies();
    this.generalSearch();
    this.getPopularMovies();
  }
}
</script>

<template>

<HeaderApp @generalSearch="generalSearch" />
<MainApp/>
  
</template>

<style lang="scss">
@use './styles/generals';
</style>