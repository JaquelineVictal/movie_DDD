import { IMovieEntity } from '../../entities/movie/movie.entity.interface';
import MovieRepository from '../../../adapters/repositories/movie.repository';
import { IUseCase } from '../usecase.interface';
import { IMovieRepository } from '../../repositories/movie.repositories.interface';

class ListMovieUseCase implements IUseCase {
  constructor(private _repository: IMovieRepository) {}
  async execute(data: any): Promise<(IMovieEntity | undefined)[]> {
    return await this._repository.findAll(data);
  }
}

export default new ListMovieUseCase(MovieRepository);
