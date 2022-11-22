<script>
import StarRating from 'vue-star-rating';
export default {
  name: "TvSeriesCard",
  components: {StarRating},
  props:{
    movies: Array
  },
  methods: {
    setRating(rating){
      this.rating= rating;
    }
  },
  data() {
    return{

      rating: 10
    }
  },
  mounted(){
    this.setRating(this.rating);
  }
}
</script>
<template>
<h1>Tv Series</h1>
  <div 
  v-for="(movie) in movies" :key="movie.id"
  class="mc-card col-4 mb-3">
    <div class="img-box d-flex align-items-end mb-0"
    :style="{ backgroundImage: 'url(https://image.tmdb.org/t/p/w342'+`${movie.poster_path}`+')'}"
    >
      <div class="details">
        <p>{{movie.name}} <span>{{movie.original_name}}</span></p>
        <p>
          <img :src="`node_modules/flag-icons/flags/1x1/${movie.original_language}.svg`" :alt="`${movie.original_language}`">
          
          <span>  
            <StarRating 
            v-bind:read-only ="true"
            v-bind:increment="0.5"
            v-bind:max-rating="5"
            
            v-bind:star-size="15"
            :rating="movie.vote_average / 2">  </StarRating>

          </span>
        </p>
        
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.mc-card{
  width: 300px;
  height: 300px;
  // border: 1px solid black;
}
.img-box{
  height: 100%;
  width: 100%;
  background-size: cover;
  .details{
    width: 100%;
    background-color: rgba(179, 179, 179, 0.767);
  }
  p{
    margin-bottom: 0.5rem;
    span{
      font-size: 0.8rem;
    }
    img{
      width: 30px;
      height: 20px;
      margin-right: 20px;
    }
  }
}
</style>