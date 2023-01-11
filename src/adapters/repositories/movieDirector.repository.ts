import { IDatabaseModel } from '../../infrastructure/persistence/database.model.interface';
import { PrismaDatabase } from '../../infrastructure/persistence/postgres.prisma/Prisma.Database';
import {
  DirectorsPrismaModel,
  prisma,
} from '../../infrastructure/persistence/postgres.prisma/models/PrismaClient.Model';
import modelstoEntities from '../../infrastructure/persistence/postgres.prisma/helpers/director.modelstoEntities.prisma.DB';
import entitiestoModel from '../../infrastructure/persistence/postgres.prisma/helpers/director.entitiestoModel.prisma.DB';
import { IMovieDirectorEntity } from "../../domain/entities/director/director.entity.interface";
import {
  IMovieDirectorFilter,
  IMovieDirectorRepository,
} from "../../domain/repositories/movieDirector.repositories.interface";

export class MovieDirectorRepository implements IMovieDirectorRepository {
  constructor(
    private _database: IDatabaseModel,
    private _modelDirectors: any
  ) {}

  async getByMovieId(
    dataWhere: any
  ): Promise<IMovieDirectorEntity | undefined> {
    try {
      const director = await this._database.list(
        this._modelDirectors,
        dataWhere
      );
      return modelstoEntities(director);
    } catch (error) {
      console.error(error);
    }
  }

  async create(
    resource: IMovieDirectorEntity
  ): Promise<IMovieDirectorEntity | undefined> {
    const { directorGeneral } = entitiestoModel(resource);
    const director = await this._database.create(
      this._modelDirectors,
      directorGeneral
    );
    console.log(modelstoEntities(director));
    return modelstoEntities(director);
  }

  async deletedByMovieId(dataWhere: any): Promise<void> {
    await this._database.delete(this._modelDirectors, dataWhere);
  }

  async findAll(
    resourceFilter: IMovieDirectorFilter
  ): Promise<(IMovieDirectorEntity | undefined)[]> {
    const director = await this._database.list(
      this._modelDirectors,
      resourceFilter
    );
    const directors = director.map(modelstoEntities);
    return directors;
  }

  async updateById(
    id: number,
    resource: IMovieDirectorEntity
  ): Promise<IMovieDirectorEntity | undefined> {
    const { directorGeneral } = entitiestoModel(resource);
    const data = { where: { id }, directorGeneral };
    const director = await this._database.update(this._modelDirectors, data);
    return modelstoEntities(director);
  }
}
export default new MovieDirectorRepository(
  PrismaDatabase.getInstance(),
  prisma.moviesDirectors
);
