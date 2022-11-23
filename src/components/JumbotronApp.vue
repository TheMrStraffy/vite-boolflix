<script>
 import { Navigation, Pagination} from 'swiper';
import { Swiper , SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import {store} from '../data/store';

export default {
  name:"JumbotronApp",
  components:{
    Swiper,
    SwiperSlide,
  },
  setup(){
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return{
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination],
    };
  },
  data(){
    return{
      store
    }
  }

}

</script>

<template>
  <h2 class="text-center w-100">Popular Movies</h2>
<div class="jumbotron d-flex my-4">

  <swiper
    :slidesPerView="6"
    :spaceBetween="30"
    :loop="true"
    :loopFillGroupWithBlank="false"
    :navigation="true"
    :modules="modules"
    class="mySwiper align-self-end"
  >
    <swiper-slide
    v-for="movie in store.popularArray" :key="movie.id"
    >
    <img :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path" alt="public/imgNotAvailable.jpg">
    </swiper-slide>
  </swiper>
</div>
  
</template>


<style lang="scss" scoped>
.jumbotron{
  width: 100%;
  height: 500px;
}
.imageSlider{
  width: 295px;
  height: 160px;
  background-size: cover;
  background-position: center;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>