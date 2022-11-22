
<script>
import { store } from '../data/store';
import MovieCard from './MovieCard.vue';
import TvSeriesCard from './TvSeriesCard.vue';



export default {
  props:{
    title: String
  },
  components: {store, MovieCard, TvSeriesCard},
  name: "MainApp",
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-evenly">
      
    <MovieCard 
    v-if="store.searchMovieArray.length > 0"
    :movies="store.searchMovieArray" />
    <TvSeriesCard
    v-if="store.tvSeriesArray.length > 0"
    :movies="store.tvSeriesArray"/>

    <MovieCard title="Trending Movies"
    v-else
    :movies="store.movieTrendArray" />

    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>