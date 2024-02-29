const key = "85b932d224dc243ef027845930e0f52a";

const request = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&include_adult=false&language=en-US&page=1 `,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&include_adult=false&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&include_adult=false&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&include_adult=false&language=en-US&page=1`,
  requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27_adult=false&language=en-US&page=1`,
  requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28_adult=false&language=en-US&page=1`,
  requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35_adult=false&language=en-US&page=1`,
};

export default request;
