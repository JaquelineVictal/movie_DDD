import { IGenre } from '../../entities/genre/genre.entity.interface';
import GenreRepository from '../../../adapters/repositories/genre.repository';
import { IUseCase } from '../usecase.interface';
import { IGenreRepository } from '../../repositories/genre.repositories.interface';

class CreateGenreUsecase implements IUseCase {
  constructor(private _repository: IGenreRepository) {}
  async execute(data: IGenre): Promise<IGenre | undefined> {
    return await this._repository.create(data);
  }
}

export default new CreateGenreUsecase(GenreRepository);
