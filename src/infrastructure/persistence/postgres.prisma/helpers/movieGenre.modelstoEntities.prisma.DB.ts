export default function (movieGenre: any): any {
  if (!movieGenre) return;

  const userGeneralMovieGenre: any = {
    id: movieGenre.id,
    movieId: movieGenre.movie_id,
    genreId: movieGenre.genre_id,
  };

  if (movieGenre.logado) {
    userGeneralMovieGenre.id = movieGenre.id;
    userGeneralMovieGenre.movieId = movieGenre.movie_id;
    userGeneralMovieGenre.genreId = movieGenre.genre_id;
  }
  return userGeneralMovieGenre;
}
