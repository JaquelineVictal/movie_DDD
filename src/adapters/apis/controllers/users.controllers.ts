import express from 'express';
import debug from 'debug'
import listUserUsecase from '../../../domain/usecases/users/list.user.usecase';
import readUserUsecase from '../../../domain/usecases/users/read.user.usecase';
import createUsersUsecase from '../../../domain/usecases/users/create.users.usecase';
import updateUserUsecase from '../../../domain/usecases/users/update.user.usecase';
import deleteUserUsecase from '../../../domain/usecases/users/delete.user.usecase';
import constantsConfig from '../../../infrastructure/config/constants.config';




const log: debug.Debugger = debug('app:users-controller');

class UsersController {
    async listUsers(request: express.Request, response: express.Response){
        const users = await listUserUsecase.execute();
        response.status(200).send(users);
};

    async getUsersById(request: express.Request, response: express.Response){
        const users = await readUserUsecase.execute({
            idUser: Number(request.params.idUser)
        });
        try {
            if (users){
                response.status(200).send(users);
            }
        } catch (error) {
            console.log(error);
            return response.status(500).json({ message: constantsConfig.MIDDLEWARE.MESSAGES.ERROR.SERVIDORERROR_YES})
        } 
    };

    async createUser(request: express.Request, response: express.Response){
       
        try {
            const users = await createUsersUsecase.execute(request.body);
            log(users);
        response.status(201).send(users);
        } catch (error) {
            console.error(error)
            response.status(400).send(error)
        }
    }

    async updateUsers(request: express.Request, response: express.Response){
        const user = await updateUserUsecase.execute(Object.assign({idUser: Number(request.params.idUser)}, request.body));
        console.log("CONSOLE DO CONTROLLER")
        response.status(200).send(user)
    }

    async deleteUsers(request: express.Request, response: express.Response){
        await deleteUserUsecase.execute({
            idUser: Number(request.params.idUser)
        });
        response.status(204).send();
    }

    
}

export default new UsersController();