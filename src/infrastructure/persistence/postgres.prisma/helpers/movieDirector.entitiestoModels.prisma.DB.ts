export default function (movieDirector: any) {
  const userGeneralMovieDirector = {
    movie_id: movieDirector.movieId,
    director_id: movieDirector.directorId,
  };

  return {
    userGeneralMovieDirector: userGeneralMovieDirector,
  };
}
