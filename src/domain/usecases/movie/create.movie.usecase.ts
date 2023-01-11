import { IMovieEntity } from '../../entities/movie/movie.entity.interface';
import MovieRepository from '../../../adapters/repositories/movie.repository';
import { IUseCase } from '../usecase.interface';
import { IMovieRepository } from '../../repositories/movie.repositories.interface';

class CreateMovieUsecase implements IUseCase {
  constructor(private _repository: IMovieRepository) {}
  async execute(data: IMovieEntity): Promise<IMovieEntity | undefined> {
    return await this._repository.create(data);
  }
}

export default new CreateMovieUsecase(MovieRepository);
