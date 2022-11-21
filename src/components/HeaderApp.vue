<script>
import { store } from '../data/store'

export default {
  components: {store},
  name: "HeaderApp",
  data(){
    return{
      store
    }
  },
  methods:{
      
    }

}
</script>

<template>
  <header class="d-flex justify-content-between align-items-center px-3">
    <div class="logo">
      <div class="inner-logo">
        <img src="strafflyx.png" alt="strafflyx">
      </div>
    </div>
      <div class="searchBar">
        <input type="text" placeholder="Search a movie"
        v-model="store.movieSearchString"
        v-on:keyup.enter="$emit('getSearchedMovies')"
        >
      </div>
  </header>
</template>

<style lang="scss" scoped>
header{
   background: rgb(70,70,70);
  background: linear-gradient(180deg, rgba(70,70,70,0.9528011888349089) 0%, rgba(139, 139, 139, 0.493) 50%, rgba(255, 255, 255, 0) 100%); 
}
</style>