import { IMovieEntity } from '../../../../domain/entities/movie/movie.entity.interface';

export default function (movie: IMovieEntity) {
  const userGeneralMovie = {
    title: movie.title,
    date_release: movie.dateRelease,
    run_time: movie.runTime,
  };

  return {
    userGeneralMovie: userGeneralMovie,
  };
}
