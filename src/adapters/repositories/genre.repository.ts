import { IDatabaseModel } from '../../infrastructure/persistence/database.model.interface';
import { PrismaDatabase } from '../../infrastructure/persistence/postgres.prisma/Prisma.Database';
import {
  GenresPrismaModel,
  prisma,
} from '../../infrastructure/persistence/postgres.prisma/models/PrismaClient.Model';
import modelstoEntities from '../../infrastructure/persistence/postgres.prisma/helpers/genre.modelstoEntities.prisma.DB';
import entitiestoModel from '../../infrastructure/persistence/postgres.prisma/helpers/genre.entitiestoModel.prisma.DB';
import { IGenre } from '../../domain/entities/genre/genre.entity.interface';
import {
  IGenreFilter,
  IGenreRepository,
} from '../../domain/repositories/genre.repositories.interface';

export class GenreRepository implements IGenreRepository {
  constructor(private _database: IDatabaseModel, private _modelGenres: any) {}

  async getById(resourceId: number): Promise<IGenre | undefined> {
    try {
      const genre = await this._database.readById(
        this._modelGenres,
        resourceId
      );
      return modelstoEntities(genre);
    } catch (error) {
      console.error(error);
    }
  }

  async create(resource: IGenre): Promise<IGenre | undefined> {
    const { genreGeneral } = entitiestoModel(resource);
    const genre = await this._database.create(this._modelGenres, genreGeneral);
    console.log(modelstoEntities(genre));
    return modelstoEntities(genre);
  }

  async deletedById(resourceId: number): Promise<void> {
    await this._database.delete(this._modelGenres, { id: resourceId });
  }

  async findAll(resourceFilter: any): Promise<(IGenre | undefined)[]> {
    const genre = await this._database.list(this._modelGenres, resourceFilter);
    const genres = genre.map(modelstoEntities);
    return genres;
  }

  async updateById(id: number, resource: IGenre): Promise<IGenre | undefined> {
    const { genreGeneral } = entitiestoModel(resource);
    const data = { where: { id }, genreGeneral };
    const genre = await this._database.update(this._modelGenres, data);
    return modelstoEntities(genre);
  }
}
export default new GenreRepository(PrismaDatabase.getInstance(), prisma.genres);
