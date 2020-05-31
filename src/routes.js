import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

/* {  index()  { } !/ Listagem de usuários
      show()   { } !/ Exibir um único usuário
      store()  { } !/ Cadastrar usuário
      update() { } !/ Alterar usuário
      delete() { } !/ Remover usuário } */

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
export default routes;
