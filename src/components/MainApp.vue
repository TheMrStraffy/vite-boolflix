
<script>
import { store } from '../data/store';
import MovieCard from './MovieCard.vue';
export default {
  components: {store, MovieCard},
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
    v-if="store.movieSearchString !== ''"
    :movies="store.searchMovieArray" />
    <MovieCard 
    v-else
    :movies="store.movieTrendArray" />

    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>