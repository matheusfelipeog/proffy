import express from 'express';
import ClassesController from './controllers/ClassesController';

const routes = express.Router();
const classesController = new ClassesController();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

export default routes;