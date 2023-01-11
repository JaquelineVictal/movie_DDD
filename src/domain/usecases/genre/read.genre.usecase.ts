import { IGenre } from '../../entities/genre/genre.entity.interface';
import GenreRepository from '../../../adapters/repositories/genre.repository';
import { IUseCase } from '../usecase.interface';
import { IGenreRepository } from '../../repositories/genre.repositories.interface';

class ReadGenreUseCase implements IUseCase {
  constructor(private _repository: IGenreRepository) {}
  async execute(data: { id: number }): Promise<IGenre | undefined> {
    return await this._repository.getById(data.id);
  }
}

export default new ReadGenreUseCase(GenreRepository);
