export default function (genre: any) {
  const userGeneralGenre = {
    genre_name: genre.genreName,
  };

  return {
    userGeneralGenre: userGeneralGenre,
  };
}
