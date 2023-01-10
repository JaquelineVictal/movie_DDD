import {
  PrismaClient,
  Movies,
  Genres,
  MoviesGenres,
  Directors,
  MoviesDirectors,
} from '@prisma/client';

const prisma = new PrismaClient({
  log: [{ level: 'query', emit: 'event' }],
});

export {
  prisma,
  Movies as MoviesPrismaModel,
  Genres as GenresPrismaModel,
  MoviesGenres as MoviesGenresPrismaModel,
  Directors as DirectorsGenresPrismaModel,
  MoviesDirectors as MoviesDirectorsPrismaModel,
};
