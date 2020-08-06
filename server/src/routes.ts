import express from 'express';
import ClassesController from './controllers/ClassesController';

const routes = express.Router();
const classesController = new ClassesController();

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string
}

routes.post('/classes', classesController.create);

export default routes;