/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express from 'express';
import debug from 'debug';
import listGenreUsecase from '../../../domain/usecases/genre/list.genre.usecase';
import readGenreUsecase from '../../../domain/usecases/genre/read.genre.usecase';
import createGenresUsecase from '../../../domain/usecases/genre/create.genre.usecase';
import updateGenreUsecase from '../../../domain/usecases/genre/update.genre.usecase';
import deleteGenreUsecase from '../../../domain/usecases/genre/delete.genre.usecase';
import constantsConfig from '../../../infrastructure/config/constants.config';

const log: debug.Debugger = debug('app:genre-controller');

class GenresController {
  async listGenres(request: express.Request, response: express.Response) {
    let genreName: string[] | null = [];
    let dataWhere: any = {};
    if (typeof request.query.genreName === 'string') {
      genreName = request.query.genreName.split(',') as string[];
      dataWhere = {
        where: { genre_name: { in: genreName } },
      };
    } else {
      genreName = null;
      dataWhere = {};
    }

    const genre = await listGenreUsecase.execute(dataWhere);
    response.status(200).send(genre);
  }

  async getGenresById(request: express.Request, response: express.Response) {
    const genre = await readGenreUsecase.execute({
      id: Number(request.params.id),
    });
    try {
      if (genre) {
        response.status(200).send(genre);
      }
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: constantsConfig.MIDDLEWARE.MESSAGES.ERROR.SERVIDORERROR_YES,
      });
    }
  }

  async createGenre(request: express.Request, response: express.Response) {
    try {
      const genre = await createGenresUsecase.execute(request.body);
      log(genre);
      response.status(201).send(genre);
    } catch (error) {
      console.error(error);
      response.status(400).send(error);
    }
  }

  async updateGenres(request: express.Request, response: express.Response) {
    const genre = await updateGenreUsecase.execute(
      Object.assign({ id: Number(request.params.id) }, request.body)
    );
    response.status(200).send(genre);
  }

  async deleteGenres(request: express.Request, response: express.Response) {
    await deleteGenreUsecase.execute({
      id: Number(request.params.id),
    });
    response.status(204).send();
  }
}

export default new GenresController();
