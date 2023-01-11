import { IDatabaseModel } from '../../infrastructure/persistence/database.model.interface';
import { PrismaDatabase } from '../../infrastructure/persistence/postgres.prisma/Prisma.Database';
import { MovieEntity } from '../../domain/entities/movie/movie.entity';
import { IMovieFilter, IMovieRepository } from '../../domain/repositories/movie.repositories.interface';
import {
  MoviesPrismaModel,
  prisma,
} from '../../infrastructure/persistence/postgres.prisma/models/PrismaClient.Model';
import modelstoEntities from '../../infrastructure/persistence/postgres.prisma/helpers/movie.modelstoEntities.prisma.DB';
import entitiestoModel from '../../infrastructure/persistence/postgres.prisma/helpers/movie.entitiestoModel.prisma.DB';

export class MoviesRepository implements IMovieRepository {
  constructor(private _database: IDatabaseModel, private _modelMovies: any) {}

  async getById(resourceId: number): Promise<MovieEntity | undefined> {
    try {
      const movie = await this._database.readById(
        this._modelMovies,
        resourceId
      );
      return modelstoEntities(movie);
    } catch (error) {
      console.error(error);
    }
  }

  async create(resource: MovieEntity): Promise<MovieEntity | undefined> {
    const { movieGeneral } = entitiestoModel(resource);
    const movie = await this._database.create(this._modelMovies, movieGeneral);
    console.log(modelstoEntities(movie));
    return modelstoEntities(movie);
  }

  async deletedById(resourceId: number): Promise<void> {
    await this._database.delete(this._modelMovies, { id: resourceId });
  }

  async findAll(
    resourceFilter: IMovieFilter
  ): Promise<(MovieEntity | undefined)[]> {
    const movie = await this._database.list(this._modelMovies, resourceFilter);
    const movies = movie.map(modelstoEntities);
    return movies;
  }

  async updateById(
    id: number,
    resource: MovieEntity
  ): Promise<MovieEntity | undefined> {
    const { movieGeneral } = entitiestoModel(resource);
    const data = { where: { id }, movieGeneral };
    const movie = await this._database.update(this._modelMovies, data);
    return modelstoEntities(movie);
  }
}
export default new MoviesRepository(
  PrismaDatabase.getInstance(),
  prisma.movies
);
