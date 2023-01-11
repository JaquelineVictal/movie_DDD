import { IDatabaseModel } from '../../infrastructure/persistence/database.model.interface';
import { PrismaDatabase } from '../../infrastructure/persistence/postgres.prisma/Prisma.Database';
import {
  MovieDirectorsPrismaModel,
  prisma,
} from '../../infrastructure/persistence/postgres.prisma/models/PrismaClient.Model';
import modelstoEntities from '../../infrastructure/persistence/postgres.prisma/helpers/movieDirector.modelstoEntities.prisma.DB';
import entitiestoModel from '../../infrastructure/persistence/postgres.prisma/helpers/movieDirector.entitiestoModel.prisma.DB';
import { IMovieDirector } from '../../domain/entities/movieDirector/movieDirector.entity.interface';
import {
  IMovieDirectorFilter,
  IMovieDirectorRepository,
} from '../../domain/repositories/movieDirector.repositories.interface';

export class MovieDirectorRepository implements IMovieDirectorRepository {
  constructor(
    private _database: IDatabaseModel,
    private _modelMovieDirectors: any
  ) {}

  async getByMovieId(resourceId: number): Promise<IMovieDirector | undefined> {
    try {
      const movieDirector = await this._database.list(
        this._modelMovieDirectors,
        resourceId
      );
      return modelstoEntities(movieDirector);
    } catch (error) {
      console.error(error);
    }
  }

  async create(resource: IMovieDirector): Promise<IMovieDirector | undefined> {
    const { movieDirectorGeneral } = entitiestoModel(resource);
    const movieDirector = await this._database.create(
      this._modelMovieDirectors,
      movieDirectorGeneral
    );
    console.log(modelstoEntities(movieDirector));
    return modelstoEntities(movieDirector);
  }

  async deletedById(resourceId: number): Promise<void> {
    await this._database.delete(this._modelMovieDirectors, { id: resourceId });
  }

  async findAll(
    resourceFilter: IMovieDirectorFilter
  ): Promise<(IMovieDirector | undefined)[]> {
    const movieDirector = await this._database.list(
      this._modelMovieDirectors,
      resourceFilter
    );
    const movieDirectors = movieDirector.map(modelstoEntities);
    return movieDirectors;
  }

  async updateById(
    id: number,
    resource: IMovieDirector
  ): Promise<IMovieDirector | undefined> {
    const { movieDirectorGeneral } = entitiestoModel(resource);
    const data = { where: { id }, movieDirectorGeneral };
    const movieDirector = await this._database.update(this._modelMovieDirectors, data);
    return modelstoEntities(movieDirector);
  }
}
export default new MovieDirectorRepository(
  PrismaDatabase.getInstance(),
  prisma.movieDirectors
);
