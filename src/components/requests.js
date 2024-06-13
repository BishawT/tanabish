const API_KEY="5fb52467c39e33ed0dbec4758f16966f"

const requests={
fetchTrendingNow :`/trending/all/week?api_key=${API_KEY}&language=en-us`,
fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTopRatedMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-us`,
fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`

};
export default requests;