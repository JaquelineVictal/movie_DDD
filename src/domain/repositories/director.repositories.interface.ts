import { IDirector } from '../entities/director/director.entity.interface';

export interface IDirectorFilter {
  directorName: string[];
}

export interface IDirectorRepository {
  getById(directorId: number): Promise<IDirector | undefined>;
  create(resource: IDirector): Promise<IDirector | undefined>;
  deletedById(resourceId: number): Promise<void>;
  findAll(resourceFilter: IDirectorFilter): Promise<(IDirector | undefined)[]>;
  updateById(
    id: number | undefined,
    resource: IDirector
  ): Promise<IDirector | undefined>;
}
