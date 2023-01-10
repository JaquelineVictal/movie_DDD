import { IMovieEntity } from '../../../../domain/entities/movie/movie.entity.interface';

export default function (movie: any): IMovieEntity| undefined {
  if (!movie) return;

  const userGeneralMovie: IMovieEntity = {
    id: movie.id,
    title: movie.title,
    dateRelease: movie.date_release,
    runTime: movie.run_time,
  };

  if (movie.logado) {
    (userGeneralMovie as IMovieEntity).id = movie.id;
    (userGeneralMovie as IMovieEntity).title = movie.title;
    (userGeneralMovie as IMovieEntity).dateRelease = movie.date_release;
    (userGeneralMovie as IMovieEntity).runTime = movie.run_time;
  }

  return userGeneralMovie as IMovieEntity;
}
