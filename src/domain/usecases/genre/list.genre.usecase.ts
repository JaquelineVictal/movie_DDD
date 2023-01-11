import { IGenre } from '../../entities/genre/genre.entity.interface';
import GenreRepository from '../../../adapters/repositories/genre.repository';
import { IUseCase } from '../usecase.interface';
import { IGenreRepository } from '../../repositories/genre.repositories.interface';

class ListGenreUseCase implements IUseCase {
  constructor(private _repository: IGenreRepository) {}
  async execute(data: any): Promise<(IGenre | undefined)[]> {
    return await this._repository.findAll(data);
  }
}

export default new ListGenreUseCase(GenreRepository);
