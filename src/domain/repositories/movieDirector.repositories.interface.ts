import { IMovieDirectorEntity } from '../entities/director/director.entity.interface';

export interface IMovieDirectorFilter {
  directorId: number[];
}

export interface IMovieDirectorRepository {
  getByMovieId(dataWhere: any): Promise<IMovieDirectorEntity | undefined>;
  create(
    resource: IMovieDirectorEntity
  ): Promise<IMovieDirectorEntity | undefined>;
  deletedByMovieId(dataWhere: any): Promise<void>;
  findAll(resourceFilter: any): Promise<(IMovieDirectorEntity | undefined)[]>;
  updateById(
    id: number | undefined,
    resource: IMovieDirectorEntity
  ): Promise<IMovieDirectorEntity | undefined>;
}
