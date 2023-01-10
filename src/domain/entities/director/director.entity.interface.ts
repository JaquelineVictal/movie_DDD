export interface IMovieDirectorEntity {
  id?: number;
  movieId: number;
}

export interface IDirector {
  id?: number;
  directorName: string;
}

export interface IDirectorEntity extends IMovieDirectorEntity {
  directorName: string;
}
