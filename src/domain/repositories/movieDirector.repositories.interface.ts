import { IMovieDirectorEntity } from '../entities/director/director.entity.interface';

export interface IMovieDirectorFilter {
  directorId: number[];
}

export interface IMovieRepository {
  getByDirectorId(
    directorId: number
  ): Promise<IMovieDirectorEntity | undefined>;
  create(
    resource: IMovieDirectorEntity
  ): Promise<IMovieDirectorEntity | undefined>;
  deletedByDirectorId(resourceId: number): Promise<void>;
  findAll(
    resourceFilter: IMovieDirectorFilter
  ): Promise<(IMovieDirectorEntity | undefined)[]>;
  updateById(
    id: number | undefined,
    resource: IMovieDirectorEntity
  ): Promise<IMovieDirectorEntity | undefined>;
}
