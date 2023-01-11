import { IMovieDirectorEntity } from '../../entities/director/director.entity.interface';
import MovieDirectorRepository from '../../../adapters/repositories/movieDirector.repository';
import { IUseCase } from '../usecase.interface';
import { IMovieDirectorRepository } from '../../repositories/movieDirector.repositories.interface';

class CreateMovieDirectorUsecase implements IUseCase {
  constructor(private _repository: IMovieDirectorRepository) {}
  async execute(
    data: IMovieDirectorEntity
  ): Promise<IMovieDirectorEntity | undefined> {
    return await this._repository.create(data);
  }
}

export default new CreateMovieDirectorUsecase(MovieDirectorRepository);
