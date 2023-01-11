import { IDatabaseModel } from '../../infrastructure/persistence/database.model.interface';
import { PrismaDatabase } from '../../infrastructure/persistence/postgres.prisma/Prisma.Database';
import {
  DirectorsPrismaModel,
  prisma,
} from '../../infrastructure/persistence/postgres.prisma/models/PrismaClient.Model';
import modelstoEntities from '../../infrastructure/persistence/postgres.prisma/helpers/director.modelstoEntities.prisma.DB';
import entitiestoModel from '../../infrastructure/persistence/postgres.prisma/helpers/director.entitiestoModel.prisma.DB';
import { IDirector } from '../../domain/entities/director/director.entity.interface';
import {
  IDirectorFilter,
  IDirectorRepository,
} from '../../domain/repositories/director.repositories.interface';

export class DirectorRepository implements IDirectorRepository {
  constructor(
    private _database: IDatabaseModel,
    private _modelDirectors: any
  ) {}

  async getById(resourceId: number): Promise<IDirector | undefined> {
    try {
      const director = await this._database.readById(
        this._modelDirectors,
        resourceId
      );
      return modelstoEntities(director);
    } catch (error) {
      console.error(error);
    }
  }

  async create(resource: IDirector): Promise<IDirector | undefined> {
    const { directorGeneral } = entitiestoModel(resource);
    const director = await this._database.create(
      this._modelDirectors,
      directorGeneral
    );
    console.log(modelstoEntities(director));
    return modelstoEntities(director);
  }

  async deletedById(resourceId: number): Promise<void> {
    await this._database.delete(this._modelDirectors, { id: resourceId });
  }

  async findAll(
    resourceFilter: IDirectorFilter
  ): Promise<(IDirector | undefined)[]> {
    const director = await this._database.list(
      this._modelDirectors,
      resourceFilter
    );
    const directors = director.map(modelstoEntities);
    return directors;
  }

  async updateById(
    id: number,
    resource: IDirector
  ): Promise<IDirector | undefined> {
    const { directorGeneral } = entitiestoModel(resource);
    const data = { where: { id }, directorGeneral };
    const director = await this._database.update(this._modelDirectors, data);
    return modelstoEntities(director);
  }
}
export default new DirectorRepository(
  PrismaDatabase.getInstance(),
  prisma.directors
);
