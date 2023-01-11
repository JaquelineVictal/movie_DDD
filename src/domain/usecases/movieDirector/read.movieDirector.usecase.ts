import { IMovieDirectorEntity } from '../../entities/director/director.entity.interface';
import MovieDirectorRepository from '../../../adapters/repositories/movieDirector.repository';
import { IUseCase } from '../usecase.interface';
import { IMovieDirectorRepository } from '../../repositories/movieDirector.repositories.interface';

class ReadMovieDirectorUseCase implements IUseCase {
  constructor(private _repository: IMovieDirectorRepository) {}
  async execute(data: {
    movie_id: number;
  }): Promise<IMovieDirectorEntity | undefined> {
    return await this._repository.getByMovieId(data);
  }
}

export default new ReadMovieDirectorUseCase(MovieDirectorRepository);
