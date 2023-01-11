import { IMovieDirectorEntity } from '../../entities/director/director.entity.interface';
import MovieDirectorRepository from '../../../adapters/repositories/movieDirector.repository';
import { IMovieDirectorRepository } from '../../repositories/movieDirector.repositories.interface';
import { IUseCase } from '../usecase.interface';

class UpdateMovieDirectorUsecase implements IUseCase {
  constructor(private _repository: IMovieDirectorRepository) {}
  async execute(
    data: IMovieDirectorEntity
  ): Promise<IMovieDirectorEntity | undefined> {
    console.log(data);
    return await this._repository.updateById(data.id, data);
  }
}

export default new UpdateMovieDirectorUsecase(MovieDirectorRepository);
