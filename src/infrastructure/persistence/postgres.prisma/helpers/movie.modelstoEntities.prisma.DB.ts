import { IMovieEntity } from '../../../../domain/entities/movie/movie.entity.interface';

export default function (movie: any): IMovieEntity | undefined {
  if (!movie) return;

  const userGeneralMovieGenre: any = {
    id: movie.id,
    movieId: movie.movie_id,
    genreId: movie.genre_id,
  };

  if (movie.logado) {
    userGeneralMovieGenre.id = movie.id;
    userGeneralMovieGenre.movieId = movie.movie_id;
    userGeneralMovieGenre.genreId = movie.genre_id;
  }

  return userGeneralMovieGenre;
}
