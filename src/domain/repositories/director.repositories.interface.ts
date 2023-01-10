import { IDirector } from '../entities/director/director.entity.interface';

export interface IDirectorFilter {
  directorName: string[];
}

export interface IMovieRepository {
  getByDirectorId(directorId: number): Promise<IDirector | undefined>;
  create(resource: IDirector): Promise<IDirector | undefined>;
  deletedByDirectorId(resourceId: number): Promise<void>;
  findAll(resourceFilter: IDirectorFilter): Promise<(IDirector | undefined)[]>;
  updateById(
    id: number | undefined,
    resource: IDirector
  ): Promise<IDirector | undefined>;
}
