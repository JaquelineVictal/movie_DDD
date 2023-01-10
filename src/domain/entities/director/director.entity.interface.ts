export interface IMovieDirectorEntity {
  id?: number;
  movieId: number;
}

export interface IDirectorEntity extends IMovieDirectorEntity {
  directorName: string;
}
