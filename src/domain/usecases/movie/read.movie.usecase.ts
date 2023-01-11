import { IMovieEntity } from '../../entities/movie/movie.entity.interface';
import MovieRepository from '../../../adapters/repositories/movie.repository';
import { IUseCase } from '../usecase.interface';
import { IMovieRepository } from '../../repositories/movie.repositories.interface';

class ReadMovieUseCase implements IUseCase {
  constructor(private _repository: IMovieRepository) {}
  async execute(data: { id: number }): Promise<IMovieEntity | undefined> {
    return await this._repository.getById(data.id);
  }
}

export default new ReadMovieUseCase(MovieRepository);
