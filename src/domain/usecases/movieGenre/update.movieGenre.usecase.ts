import { IMovieGenreEntity } from '../../entities/genre/genre.entity.interface';
import MovieGenreRepository from '../../../adapters/repositories/movieGenre.repository';
import { IMovieGenreRepository } from '../../repositories/movieGenre.repositories.interface';
import { IUseCase } from '../usecase.interface';

class UpdateMovieGenreUsecase implements IUseCase {
  constructor(private _repository: IMovieGenreRepository) {}
  async execute(
    data: IMovieGenreEntity
  ): Promise<IMovieGenreEntity | undefined> {
    console.log(data);
    return await this._repository.updateById(data.id, data);
  }
}

export default new UpdateMovieGenreUsecase(MovieGenreRepository);
