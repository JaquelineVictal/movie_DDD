import { IMovieEntity } from '../../../../domain/entities/movieGenre/movieGenre.entity.interface';

export default function (movieGenre: any): any| undefined {
  if (!movieGenre) return;

  const userGeneralMovie: IMovieEntity = {
    id: movieGenre.id,
    title: movieGenre.title,
    dateRelease: movieGenre.date_release,
    runTime: movieGenre.run_time,
  };

  if (movieGenre.logado) {
    (userGeneralMovie as IMovieEntity).id = movieGenre.id;
    (userGeneralMovie as IMovieEntity).title = movieGenre.title;
    (userGeneralMovie as IMovieEntity).dateRelease = movieGenre.date_release;
    (userGeneralMovie as IMovieEntity).runTime = movieGenre.run_time;
  }

  return userGeneralMovie as IMovieEntity;
}
