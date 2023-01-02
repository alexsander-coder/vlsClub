import plansRouter from '@modules/plans/routes/plans.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/plans', plansRouter);

export default routes;