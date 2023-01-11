import { IMovieGenreEntity } from '../entities/genre/genre.entity.interface';

export interface IMovieGenreFilter {
  genreId: number[];
}

export interface IMovieGenreRepository {
  getByMovieId(genreId: number): Promise<IMovieGenreEntity | undefined>;
  create(resource: IMovieGenreEntity): Promise<IMovieGenreEntity | undefined>;
  deletedByMovieId(resourceId: number): Promise<void>;
  findAll(resourceFilter: any): Promise<(IMovieGenreEntity | undefined)[]>;
  updateById(
    id: number | undefined,
    resource: IMovieGenreEntity
  ): Promise<IMovieGenreEntity | undefined>;
}
