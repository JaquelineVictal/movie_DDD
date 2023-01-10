import { IDatabaseModel } from '../../../infrastructure/persistence/database.model.interface';

export class PrismaDatabase implements IDatabaseModel {
  private static _instance: PrismaDatabase;

  public static getInstance(): PrismaDatabase {
    if (!PrismaDatabase._instance) {
      PrismaDatabase._instance = new PrismaDatabase();
    }

    return PrismaDatabase._instance;
  }

  create(model: any, data: any): any {
    return model.create(data);
  }

  async update(model: any, data: any): Promise<any> {
    await model.update(data);
    return model.save();
  }

  list(model: any, includes: object): any {
    return model.findMany(includes);
  }

  async delete(model: any, dataWhere: any): Promise<any> {
    const result = await model.delete({
      where: dataWhere,
    });

    return result > 0;
  }

  readById(model: any, dataId: any): any {
    try {
      return model.findFirst({
        where: dataId,
      });
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
}
