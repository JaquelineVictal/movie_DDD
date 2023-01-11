import { IGenre } from '../../entities/genre/genre.entity.interface';
import GenreRepository from '../../../adapters/repositories/genre.repository';
import { IGenreRepository } from '../../repositories/genre.repositories.interface';
import { IUseCase } from '../usecase.interface';

class UpdateGenreUsecase implements IUseCase {
  constructor(private _repository: IGenreRepository) {}
  async execute(data: IGenre): Promise<IGenre | undefined> {
    console.log(data);
    return await this._repository.updateById(data.id, data);
  }
}

export default new UpdateGenreUsecase(GenreRepository);
