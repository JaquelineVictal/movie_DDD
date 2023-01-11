/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express from "express";
import debug from "debug";
import listMovieUsecase from "../../../domain/usecases/movie/list.movie.usecase";
import readMovieUsecase from "../../../domain/usecases/movie/read.movie.usecase";
import createMovieUsecase from "../../../domain/usecases/movie/create.movie.usecase";
import updateMovieUsecase from "../../../domain/usecases/movie/update.movie.usecase";
import deleteMovieUsecase from "../../../domain/usecases/movie/delete.movie.usecase";
import readMovieDirectorUsecase from "../../../domain/usecases/movieDirector/read.movieDirector.usecase";
import createMovieDirectorUsecase from "../../../domain/usecases/movieDirector/create.movieDirector.usecase";
import listDirectorUsecase from "../../../domain/usecases/director/list.director.usecase";
import readDirectorUsecase from "../../../domain/usecases/director/read.director.usecase";
import createDirectorUsecase from "../../../domain/usecases/director/create.director.usecase";

import readMovieGenreUsecase from "../../../domain/usecases/movieGenre/read.movieGenre.usecase";

import listGenreUsecase from "../../../domain/usecases/genre/list.genre.usecase";
import readGenreUsecase from "../../../domain/usecases/genre/read.genre.usecase";
import constantsConfig from "../../../infrastructure/config/constants.config";
import { IDirector } from "../../../domain/entities/director/director.entity.interface";
import { IGenre } from "../../../domain/entities/genre/genre.entity.interface";
import { IMovieEntity } from "../../../domain/entities/movie/movie.entity.interface";

const log: debug.Debugger = debug("app:movie-controller");

class MovieController {
  async listMovie(request: express.Request, response: express.Response) {
    let movieName: string[] | null = [];
    let dataWhere: any = {};
    if (typeof request.query.movieName === "string") {
      movieName = request.query.movieName.split(",") as string[];
      dataWhere = {
        where: { movie_name: { in: movieName } },
      };
    } else {
      movieName = null;
      dataWhere = {};
    }
    const movie = await listMovieUsecase.execute(dataWhere);
    response.status(200).send(movie);
  }

  async getMovieById(request: express.Request, response: express.Response) {
    const movie = await readMovieUsecase.execute({
      id: Number(request.params.id),
    });
    const movieDirector = await readMovieDirectorUsecase.execute({
      movie_id: Number(request.params.id),
    });
    let director: IDirector | undefined | null = null;
    if (movieDirector != undefined) {
      director = await readDirectorUsecase.execute({
        id: Number(movieDirector.id),
      });
    }
    const movieGenre = await readMovieGenreUsecase.execute({
      movie_id: Number(request.params.id),
    });
    let genre: IGenre | undefined | null = null;
    if (movieGenre != undefined) {
      genre = await readGenreUsecase.execute({
        id: Number(movieGenre.id),
      });
    }
    const outputMovie: any = {
      ...movie,
      director: director,
      genre: genre,
    };
    try {
      if (movie) {
        response.status(200).send(outputMovie);
      }
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: constantsConfig.MIDDLEWARE.MESSAGES.ERROR.SERVIDORERROR_YES,
      });
    }
  }

  async createMovie(request: express.Request, response: express.Response) {
    try {
      const createMovie: IMovieEntity = {
        title: request.body.title,
        dateRelease: request.body.dateRelease,
        runTime: request.body.runTime,
      };
      const movie = await createMovieUsecase.execute(createMovie);
      if (movie == undefined || movie.id == undefined) {
        return response.status(500).json({
          message: constantsConfig.MIDDLEWARE.MESSAGES.ERROR.SERVIDORERROR_YES,
        });
      }
      const dataWhereDirector = {
        where: { director_name: request.body.directorName },
      };
      const director = await listDirectorUsecase.execute(dataWhereDirector);
      if (director) {
        director.forEach(async (element) => {
          if (element) {
            await createMovieDirectorUsecase.execute({
              id: element.id as number,
              movieId: movie.id as number,
            });
          }
        });
      } else {
        const newDirector = await createDirectorUsecase.execute({
          directorName: request.body.directorName,
        });
        if (newDirector) {
          await createMovieDirectorUsecase.execute({
            id: newDirector.id as number,
            movieId: movie.id as number,
          });
        }
      }
 
      response.status(201).send(movie);
    } catch (error) {
      console.error(error);
      response.status(400).send(error);
    }
  }

  async updateMovie(request: express.Request, response: express.Response) {
    const movie = await updateMovieUsecase.execute(
      Object.assign({ id: Number(request.params.id) }, request.body)
    );
    response.status(200).send(movie);
  }

  async deleteMovie(request: express.Request, response: express.Response) {
    await deleteMovieUsecase.execute({
      id: Number(request.params.id),
    });
    response.status(204).send();
  }
}

export default new MovieController();
