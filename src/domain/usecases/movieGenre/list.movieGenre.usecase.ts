import { IMovieGenreEntity } from '../../entities/genre/genre.entity.interface';
import MovieGenreRepository from '../../../adapters/repositories/movieGenre.repository';
import { IUseCase } from '../usecase.interface';
import { IMovieGenreRepository } from '../../repositories/movieGenre.repositories.interface';

class ListMovieGenreUseCase implements IUseCase {
  constructor(private _repository: IMovieGenreRepository) {}
  async execute(data: any): Promise<(IMovieGenreEntity | undefined)[]> {
    return await this._repository.findAll(data);
  }
}

export default new ListMovieGenreUseCase(MovieGenreRepository);
