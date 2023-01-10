export default function (movieGenre: any) {
  const userGeneralMovieGenre = {
    movie_id: movieGenre.movieId,
    genre_id: movieGenre.genreId,
  };

  return {
    userGeneralMovieGenre: userGeneralMovieGenre,
  };
}
