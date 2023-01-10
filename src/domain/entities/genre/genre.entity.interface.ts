export interface IMovieGenreEntity {
  id?: number;
  movieId: number;
}

export interface IGenreEntity extends IMovieGenreEntity {
  genreName: string;
}
