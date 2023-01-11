import { IMovieDirectorEntity } from '../../entities/director/director.entity.interface';
import MovieDirectorRepository from '../../../adapters/repositories/movieDirector.repository';
import { IUseCase } from '../usecase.interface';
import { IMovieDirectorRepository } from '../../repositories/movieDirector.repositories.interface';

class ListMovieDirectorUseCase implements IUseCase {
  constructor(private _repository: IMovieDirectorRepository) {}
  async execute(data: any): Promise<(IMovieDirectorEntity | undefined)[]> {
    return await this._repository.findAll(data);
  }
}

export default new ListMovieDirectorUseCase(MovieDirectorRepository);
