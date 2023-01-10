import { IMovieGenreEntity } from '../entities/genre/genre.entity.interface';

export interface IMovieGenreFilter {
  genreId: number[];
}

export interface IMovieRepository {
  getByGenreId(genreId: number): Promise<IMovieGenreEntity | undefined>;
  create(resource: IMovieGenreEntity): Promise<IMovieGenreEntity | undefined>;
  deletedByGenreId(resourceId: number): Promise<void>;
  findAll(
    resourceFilter: IMovieGenreFilter
  ): Promise<(IMovieGenreEntity | undefined)[]>;
  updateById(
    id: number | undefined,
    resource: IMovieGenreEntity
  ): Promise<IMovieGenreEntity | undefined>;
}
