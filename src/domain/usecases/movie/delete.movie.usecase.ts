import { IMovieEntity } from '../../entities/movie/movie.entity.interface';
import MovieRepository from '../../../adapters/repositories/movie.repository';
import { IMovieRepository } from '../../repositories/movie.repositories.interface';
import { IUseCase } from '../usecase.interface';

class DeleteMovieUseCase implements IUseCase {
  constructor(private _repository: IMovieRepository) {}
  async execute(data: { id: number }): Promise<void> {
    return await this._repository.deletedById(data.id);
  }
}

export default new DeleteMovieUseCase(MovieRepository);
