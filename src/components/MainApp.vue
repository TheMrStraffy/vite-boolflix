
<script>
import { store } from '../data/store';
import MovieCard from './MovieCard.vue';
import TvSeriesCard from './TvSeriesCard.vue';
import JumbotronAppVue from './JumbotronApp.vue';


export default {
  props:{
    title: String
  },
  components: {store, MovieCard, TvSeriesCard, JumbotronAppVue},
  name: "MainApp",
  data(){
    return{
      store
    }
  }
}
</script>

<template>
<JumbotronAppVue 
v-if="(store.searchMovieArray.length && store.tvSeriesArray.length) === 0" 
v-show="true"
/>

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