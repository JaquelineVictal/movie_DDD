import { IDatabaseModel } from '../../infrastructure/persistence/database.model.interface';
import { PrismaDatabase } from '../../infrastructure/persistence/postgres.prisma/Prisma.Database';
import {
  GenresPrismaModel,
  prisma,
} from '../../infrastructure/persistence/postgres.prisma/models/PrismaClient.Model';
import modelstoEntities from '../../infrastructure/persistence/postgres.prisma/helpers/genre.modelstoEntities.prisma.DB';
import entitiestoModel from '../../infrastructure/persistence/postgres.prisma/helpers/genre.entitiestoModel.prisma.DB';
import { IMovieGenreEntity } from '../../domain/entities/genre/genre.entity.interface';
import {
  IMovieGenreFilter,
  IMovieGenreRepository,
} from '../../domain/repositories/movieGenre.repositories.interface';

export class MovieGenreRepository implements IMovieGenreRepository {
  constructor(private _database: IDatabaseModel, private _modelGenres: any) {}

  async getByMovieId(dataWhere: any): Promise<IMovieGenreEntity | undefined> {
    try {
      const genre = await this._database.list(this._modelGenres, dataWhere);
      return modelstoEntities(genre);
    } catch (error) {
      console.error(error);
    }
  }

  async create(
    resource: IMovieGenreEntity
  ): Promise<IMovieGenreEntity | undefined> {
    const { genreGeneral } = entitiestoModel(resource);
    const genre = await this._database.create(this._modelGenres, genreGeneral);
    console.log(modelstoEntities(genre));
    return modelstoEntities(genre);
  }

  async deletedByMovieId(dataWhere: any): Promise<void> {
    await this._database.delete(this._modelGenres, dataWhere);
  }

  async findAll(
    resourceFilter: IMovieGenreFilter
  ): Promise<(IMovieGenreEntity | undefined)[]> {
    const genre = await this._database.list(this._modelGenres, resourceFilter);
    const genres = genre.map(modelstoEntities);
    return genres;
  }

  async updateById(
    id: number,
    resource: IMovieGenreEntity
  ): Promise<IMovieGenreEntity | undefined> {
    const { genreGeneral } = entitiestoModel(resource);
    const data = { where: { id }, genreGeneral };
    const genre = await this._database.update(this._modelGenres, data);
    return modelstoEntities(genre);
  }
}
export default new MovieGenreRepository(
  PrismaDatabase.getInstance(),
  prisma.moviesGenres
);
