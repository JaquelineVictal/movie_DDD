export default function (director: any) {
  const userGeneralDirector = {
    director_name: director.directorName,
  };

  return {
    userGeneralDirector: userGeneralDirector,
  };
}
