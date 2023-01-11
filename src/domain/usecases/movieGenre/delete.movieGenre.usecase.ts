import { IMovieGenreEntity } from '../../entities/genre/genre.entity.interface';
import MovieGenreRepository from '../../../adapters/repositories/movieGenre.repository';
import { IMovieGenreRepository } from '../../repositories/movieGenre.repositories.interface';
import { IUseCase } from '../usecase.interface';

class DeleteMovieGenreUseCase implements IUseCase {
  constructor(private _repository: IMovieGenreRepository) {}
  async execute(data: { movie_id: number }): Promise<void> {
    return await this._repository.deletedByMovieId(data);
  }
}

export default new DeleteMovieGenreUseCase(MovieGenreRepository);
