export default function (genre: any): any {
  if (!genre) return;

  const userGeneralGenre: any = {
    id: genre.id,
    genreName: genre.genre_nane,
  };

  if (genre.logado) {
    userGeneralGenre.id = genre.id;
    userGeneralGenre.genreNane = genre.genre_nane;
  }
  return userGeneralGenre;
}
