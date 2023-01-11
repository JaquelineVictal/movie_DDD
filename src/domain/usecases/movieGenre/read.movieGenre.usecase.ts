import { IMovieGenreEntity } from '../../entities/genre/genre.entity.interface';
import MovieGenreRepository from '../../../adapters/repositories/movieGenre.repository';
import { IUseCase } from '../usecase.interface';
import { IMovieGenreRepository } from '../../repositories/movieGenre.repositories.interface';

class ReadMovieGenreUseCase implements IUseCase {
  constructor(private _repository: IMovieGenreRepository) {}
  async execute(data: {
    movie_id: number;
  }): Promise<IMovieGenreEntity | undefined> {
    return await this._repository.getByMovieId(data);
  }
}

export default new ReadMovieGenreUseCase(MovieGenreRepository);
