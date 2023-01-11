import { IDirector } from '../../entities/director/director.entity.interface';
import DirectorRepository from '../../../adapters/repositories/director.repository';
import { IUseCase } from '../usecase.interface';
import { IDirectorRepository } from '../../repositories/director.repositories.interface';

class ReadDirectorUseCase implements IUseCase {
  constructor(private _repository: IDirectorRepository) {}
  async execute(data: { id: number }): Promise<IDirector | undefined> {
    return await this._repository.getById(data.id);
  }
}

export default new ReadDirectorUseCase(DirectorRepository);
