import { IMovieGenreEntity } from '../../entities/genre/genre.entity.interface';
import MovieGenreRepository from '../../../adapters/repositories/movieGenre.repository';
import { IUseCase } from '../usecase.interface';
import { IMovieGenreRepository } from '../../repositories/movieGenre.repositories.interface';

class CreateMovieGenreUsecase implements IUseCase {
  constructor(private _repository: IMovieGenreRepository) {}
  async execute(
    data: IMovieGenreEntity
  ): Promise<IMovieGenreEntity | undefined> {
    return await this._repository.create(data);
  }
}

export default new CreateMovieGenreUsecase(MovieGenreRepository);
