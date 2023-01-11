import { IMovieEntity } from '../../entities/movie/movie.entity.interface';
import MovieRepository from '../../../adapters/repositories/movie.repository';
import { IMovieRepository } from '../../repositories/movie.repositories.interface';
import { IUseCase } from '../usecase.interface';

class UpdateMovieUsecase implements IUseCase {
  constructor(private _repository: IMovieRepository) {}
  async execute(data: IMovieEntity): Promise<IMovieEntity | undefined> {
    console.log(data);
    return await this._repository.updateById(data.id, data);
  }
}

export default new UpdateMovieUsecase(MovieRepository);
