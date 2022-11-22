//trending movies https://api.themoviedb.org/3/trending/movie/day?api_key=4d9a7488239fa09d4d9a883918f9c769

//search movies https://api.themoviedb.org/3/search/movie/?api_key=4d9a7488239fa09d4d9a883918f9c769&query={movie}

//movie list by popularity https://api.themoviedb.org/3/discover/movie?api_key=4d9a7488239fa09d4d9a883918f9c769&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate

//apikey = 4d9a7488239fa09d4d9a883918f9c769

import { reactive } from "vue";

export const store = reactive({
  apiSearchUrl: "https://api.themoviedb.org/3/search/movie/?api_key=4d9a7488239fa09d4d9a883918f9c769",
  apiTrendingUrl: "https://api.themoviedb.org/3/trending/movie/day?api_key=4d9a7488239fa09d4d9a883918f9c769",
  apiTvSeriesUrl: "https://api.themoviedb.org/3/search/tv?api_key=4d9a7488239fa09d4d9a883918f9c769",
  tvSeriesArray: [],
  movieTrendArray: [],
  searchMovieArray: [],
  movieSearchString : '',

});