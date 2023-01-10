import express from "express";
import usersControllers from "../controllers/users.controllers";
import usersMiddlewares from "../middlewares/users.middlewares";
import { CommonRoutesConfig } from "./common.routes.config";

export class UserRoutes extends CommonRoutesConfig{
    constructor(app: express.Application){
        super(app, 'UserRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/users`)
        .get(
            // usersMiddlewares.compareSync,
            usersControllers.listUsers,
        ) // listar usuários,
        this.app.route(`/users`)
        .post(
            //usersMiddlewares.validateUserRepeated,
            usersControllers.createUser,
        )

        this.app.route(`/users/:idUser`)
        .all(
            usersMiddlewares.validateUserExists)
        .put(
            usersMiddlewares.compareSync,
            usersMiddlewares.validateUserExists,
            usersControllers.updateUsers)
        .delete(
            usersMiddlewares.compareSync,
            usersMiddlewares.validateUserExists,
            usersControllers.deleteUsers)
        .get(
            usersMiddlewares.compareSync,
            usersControllers.getUsersById
            );
            
     
        return this.app
    }
}