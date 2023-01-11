import { IDirector } from '../../entities/director/director.entity.interface';
import DirectorRepository from '../../../adapters/repositories/director.repository';
import { IUseCase } from '../usecase.interface';
import { IDirectorRepository } from '../../repositories/director.repositories.interface';

class CreateDirectorUsecase implements IUseCase {
  constructor(private _repository: IDirectorRepository) {}
  async execute(data: IDirector): Promise<IDirector | undefined> {
    return await this._repository.create(data);
  }
}

export default new CreateDirectorUsecase(DirectorRepository);
