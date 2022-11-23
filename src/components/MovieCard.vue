<script>
import StarRating from 'vue-star-rating';
export default {
  newStr : '',
  name: "MovieCard",
  components: {StarRating},
  props:{
    movies: Array,
    title: String
  },
  methods: {
    setRating(rating){
      this.rating= rating;
    },
    
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
<h1 class="mb-4" v-if="!title">Movies</h1>
<h1 class="mb-4" v-else>{{title}}</h1>
  <div 
  v-for="(movie) in movies" :key="movie.id"
  class="mc-card col-4 mb-3">
    <div class="img-box d-flex align-items-end mb-0"
    :style="{backgroundImage : 'url(' + `${movie.poster_path !== null ? 'https://image.tmdb.org/t/p/w342' + movie.poster_path : 'public/imgNotAvailable.jpg'}` + ')' }"
    >
      <div class="details">
        <p>{{movie.title}} <span>{{movie.title !==  movie.original_title ? movie.original_title : ''}}</span></p>
        

        <p>
          <img :src="`node_modules/flag-icons/flags/1x1/${movie.original_language}.svg`" :alt="`${movie.original_language}`">
          <span>  
            <StarRating 
            v-bind:read-only ="true"
            v-bind:increment="0.5"
            v-bind:max-rating="5"
            
            v-bind:star-size="20"
            :rating="movie.vote_average / 2">  </StarRating>

          </span>
        </p>
        <p class="overview">Overview: {{movie.overview.slice(0, 150)}}...</p>
        
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
.details{
  visibility: hidden;
  color: rgb(0, 0, 0);
   height: 100%;
  width: 100%;
  font-weight: 600;
  opacity: 0;
  transition: all 0.4s linear;
  .overview{
  font-size: 0.8rem;
  }
}
.img-box{
  cursor: pointer;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  &:hover .details{
    visibility: visible;
    opacity: 1;
    height: 100%;
    width: 100%;
    background-color: rgba(109, 109, 109, 0.849);
    
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