import { UserEntity } from '../entities/users/users.entity';

export interface IUsersRepository {
  getById(idUser: number): Promise<UserEntity | undefined>;
  create(resource: UserEntity): Promise<UserEntity | undefined>;
  deletedById(resourceId: number): Promise<void>;
  findAll(resourceFilter: any): Promise<(UserEntity | undefined)[]>;
  updateById(
    idUser: number | undefined,
    resource: UserEntity
  ): Promise<UserEntity | undefined>;
}
