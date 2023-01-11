import { IDirector } from '../../entities/director/director.entity.interface';
import DirectorRepository from '../../../adapters/repositories/director.repository';
import { IUseCase } from '../usecase.interface';
import { IDirectorRepository } from '../../repositories/director.repositories.interface';

class ListDirectorUseCase implements IUseCase {
  constructor(private _repository: IDirectorRepository) {}
  async execute(data: any): Promise<(IDirector | undefined)[]> {
    return await this._repository.findAll(data);
  }
}

export default new ListDirectorUseCase(DirectorRepository);
