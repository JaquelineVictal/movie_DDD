import DirectorRepository from '../../../adapters/repositories/director.repository';
import { IDirectorRepository } from '../../repositories/director.repositories.interface';
import { IUseCase } from '../usecase.interface';

class DeleteDirectorUseCase implements IUseCase {
  constructor(private _repository: IDirectorRepository) {}
  async execute(data: { id: number }): Promise<void> {
    return await this._repository.deletedById(data.id);
  }
}

export default new DeleteDirectorUseCase(DirectorRepository);
