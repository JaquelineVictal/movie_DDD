import { IGenre } from '../entities/genre/genre.entity.interface';

export interface IGenreFilter {
  genreName: string[];
}

export interface IGenreRepository {
  getById(genreId: number): Promise<IGenre | undefined>;
  create(resource: IGenre): Promise<IGenre | undefined>;
  deletedById(resourceId: number): Promise<void>;
  findAll(resourceFilter: IGenreFilter): Promise<(IGenre | undefined)[]>;
  updateById(
    id: number | undefined,
    resource: IGenre
  ): Promise<IGenre | undefined>;
}
