import { IDatabaseModel } from '../../infrastructure/persistence/database.model.interface';
import { PrismaDatabase } from '../../infrastructure/persistence/postgres.prisma/Prisma.Database';
import { UserEntity } from '../../domain/entities/users/users.entity';
import { IUsersRepository } from '../../domain/repositories/users.repositories.interface';
import {
  MoviesPrismaModel,
  prisma,
} from "../../infrastructure/persistence/postgres.prisma/models/PrismaClient.Model";
import modelstoEntities from '../../infrastructure/persistence/postgres.prisma/helpers/users.modelstoEntities.prisma.DB';
import entitiestoModel from '../../infrastructure/persistence/postgres.prisma/helpers/users.entitiestoModel.prisma.DB';

export class UsersRepository implements IUsersRepository {
  constructor(private _database: IDatabaseModel, private _modelMovies: any) {}

  async getById(resourceId: number): Promise<UserEntity | undefined> {
    try {
      const user = await this._database.readById(this._modelMovies, resourceId);
      return modelstoEntities(user);
    } catch (error) {
      console.error(error);
    }
  }

  async create(resource: UserEntity): Promise<UserEntity | undefined> {
    const { userGeneral } = entitiestoModel(resource);
    const user = await this._database.create(this._modelMovies, userGeneral);
    console.log(modelstoEntities(user));
    return modelstoEntities(user);
  }

  async deletedById(resourceId: number): Promise<void> {
    await this._database.delete(this._modelMovies, { idUser: resourceId });
  }

  async findAll(resourceFilter): Promise<(UserEntity | undefined)[]> {
    const user = await this._database.list(this._modelMovies,resourceFilter);
    const clients = user.map(modelstoEntities);
    return clients;
  }

  async updateById(
    idUser: number,
    resource: UserEntity
  ): Promise<UserEntity | undefined> {
    const { userGeneral } = entitiestoModel(resource);
    const data = { where: { idUser }, userGeneral };
    const user = await this._database.update(this._modelMovies, data);
    return modelstoEntities(user);
  }
}
export default new UsersRepository(PrismaDatabase.getInstance(), prisma.users);
