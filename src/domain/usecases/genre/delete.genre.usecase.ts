import GenreRepository from '../../../adapters/repositories/genre.repository';
import { IGenreRepository } from '../../repositories/genre.repositories.interface';
import { IUseCase } from '../usecase.interface';

class DeleteGenreUseCase implements IUseCase {
  constructor(private _repository: IGenreRepository) {}
  async execute(data: { id: number }): Promise<void> {
    return await this._repository.deletedById(data.id);
  }
}

export default new DeleteGenreUseCase(GenreRepository);
