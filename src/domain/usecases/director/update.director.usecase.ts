import { IDirector } from '../../entities/director/director.entity.interface';
import DirectorRepository from '../../../adapters/repositories/director.repository';
import { IDirectorRepository } from '../../repositories/director.repositories.interface';
import { IUseCase } from '../usecase.interface';

class UpdateDirectorUsecase implements IUseCase {
  constructor(private _repository: IDirectorRepository) {}
  async execute(data: IDirector): Promise<IDirector | undefined> {
    console.log(data);
    return await this._repository.updateById(data.id, data);
  }
}

export default new UpdateDirectorUsecase(DirectorRepository);
