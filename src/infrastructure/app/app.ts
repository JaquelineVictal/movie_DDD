import * as http from 'http';
import path from 'path';
import express from 'express';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import { debug } from 'debug';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { UserRoutes } from '../../adapters/apis/routes/users.routes';
//import { PostsRoutes } from "../../adapters/apis/routes/posts.routes";
import { CommonRoutesConfig } from '../../adapters/apis/routes/common.routes.config';

const app: express.Application = express();
const server: http.Server = http.createServer();
const PORT = process.env.PORT || 8000;
const routes: CommonRoutesConfig[] = [];
const debugLog: debug.IDebugger = debug('app');

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  ),
};
if (!process.env.DEBUG) {
  loggerOptions.meta = false;
}

app.use(expressWinston.logger(loggerOptions));

routes.push(new UserRoutes(app));
//routes.push(new PostsRoutes(app));

const runningMessage = `Servidor rodando na porta ${PORT}`;

try {
  app.get('/', (request: express.Request, response: express.Response) => {
    response.status(200).send(runningMessage);
  });
} catch (error) {
  console.error(error);
}

app.listen(PORT, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    debugLog(`Rota ${route.getName()} configurada com sucesso!}`);
  });
  console.log(runningMessage);
});

export default app;
