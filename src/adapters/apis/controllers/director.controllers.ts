/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express from 'express';
import debug from 'debug';
import listDirectorUsecase from '../../../domain/usecases/director/list.director.usecase';
import readDirectorUsecase from '../../../domain/usecases/director/read.director.usecase';
import createDirectorUsecase from '../../../domain/usecases/director/create.director.usecase';
import updateDirectorUsecase from '../../../domain/usecases/director/update.director.usecase';
import deleteDirectorUsecase from '../../../domain/usecases/director/delete.director.usecase';
import constantsConfig from '../../../infrastructure/config/constants.config';

const log: debug.Debugger = debug('app:director-controller');

class DirectorController {
  async listDirector(request: express.Request, response: express.Response) {
    let directorName: string[] | null = [];
    let dataWhere: any = {};
    if (typeof request.query.directorName === 'string') {
      directorName = request.query.directorName.split(',') as string[];
      dataWhere = {
        where: { director_name: { in: directorName } },
      };
    } else {
      directorName = null;
      dataWhere = {};
    }
    const director = await listDirectorUsecase.execute(dataWhere);
    response.status(200).send(director);
  }

  async getDirectorById(request: express.Request, response: express.Response) {
    const director = await readDirectorUsecase.execute({
      id: Number(request.params.id),
    });
    try {
      if (director) {
        response.status(200).send(director);
      }
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: constantsConfig.MIDDLEWARE.MESSAGES.ERROR.SERVIDORERROR_YES,
      });
    }
  }

  async createDirector(request: express.Request, response: express.Response) {
    try {
      const director = await createDirectorUsecase.execute(request.body);
      log(director);
      response.status(201).send(director);
    } catch (error) {
      console.error(error);
      response.status(400).send(error);
    }
  }

  async updateDirector(request: express.Request, response: express.Response) {
    const director = await updateDirectorUsecase.execute(
      Object.assign({ id: Number(request.params.id) }, request.body)
    );
    response.status(200).send(director);
  }

  async deleteDirector(request: express.Request, response: express.Response) {
    await deleteDirectorUsecase.execute({
      id: Number(request.params.id),
    });
    response.status(204).send();
  }
}

export default new DirectorController();
