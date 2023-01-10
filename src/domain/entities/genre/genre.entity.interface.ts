export interface IMovieGenreEntity {
  id?: number;
  movieId: number;
}

export interface IGenre {
  id?: number;
  genreName: string;
}

export interface IGenreEntity extends IMovieGenreEntity {
  genreName: string;
}
