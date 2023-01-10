export default function (director: any): any {
  if (!director) return;

  const userGeneralDirector: any = {
    id: director.id,
    directorName: director.director_nane,
  };

  if (director.logado) {
    userGeneralDirector.id = director.id;
    userGeneralDirector.directorNane = director.director_nane;
  }
  return userGeneralDirector;
}
