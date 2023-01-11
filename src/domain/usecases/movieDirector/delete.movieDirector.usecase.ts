import { IMovieDirectorEntity } from '../../entities/director/director.entity.interface';
import MovieDirectorRepository from '../../../adapters/repositories/movieDirector.repository';
import { IMovieDirectorRepository } from '../../repositories/movieDirector.repositories.interface';
import { IUseCase } from '../usecase.interface';

class DeleteMovieDirectorUseCase implements IUseCase {
  constructor(private _repository: IMovieDirectorRepository) {}
  async execute(data: { movie_id: number }): Promise<void> {
    return await this._repository.deletedByMovieId(data);
  }
}

export default new DeleteMovieDirectorUseCase(MovieDirectorRepository);
