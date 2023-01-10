export default function (movieDirector: any): any {
  if (!movieDirector) return;

  const userGeneralMovieDirector: any = {
    id: movieDirector.id,
    movieId: movieDirector.movie_id,
    directorId: movieDirector.director_id,
  };

  if (movieDirector.logado) {
    userGeneralMovieDirector.id = movieDirector.id;
    userGeneralMovieDirector.movieId = movieDirector.movie_id;
    userGeneralMovieDirector.directorId = movieDirector.director_id;
  }
  return userGeneralMovieDirector;
}
