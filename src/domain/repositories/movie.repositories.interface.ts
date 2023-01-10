import { MovieEntity } from '../entities/movie/movie.entity';

export interface IMovieFilter {
  directorName: string[];
  genreName: string[];
}

export interface IMovieRepository {
  getById(idUser: number): Promise<MovieEntity | undefined>;
  create(resource: MovieEntity): Promise<MovieEntity | undefined>;
  deletedById(resourceId: number): Promise<void>;
  findAll(resourceFilter: IMovieFilter): Promise<(MovieEntity | undefined)[]>;
  updateById(
    id: number | undefined,
    resource: MovieEntity
  ): Promise<MovieEntity | undefined>;
}
