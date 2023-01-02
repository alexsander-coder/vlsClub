import { Router } from 'express';
import PlansController from '../controllers/PlansController';
import { celebrate, Joi, Segments } from 'celebrate';

const plansRouter = Router();
const plansController = new PlansController();


plansRouter.get('/', plansController.index);

plansRouter.get(
  '/:ID_PLANO_CLUB',
  celebrate({
    [Segments.PARAMS]: {
      ID_PLANO_CLUB: Joi.number().required(),
    },
  }),

  plansController.show

);

plansRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      NM_NOME: Joi.string(),
      DS_DESCRICAO: Joi.string().required(),
      CS_STATUS: Joi.string().required(),
      CD_EXTERNO: Joi.string().required(),

    },
  }),

  plansController.create

);

plansRouter.put(
  '/:ID_PLANO_CLUB',
  celebrate({
    [Segments.BODY]: {
      NM_NOME: Joi.string(),
      DS_DESCRICAO: Joi.string().required(),
      CS_STATUS: Joi.string().required(),
      CD_EXTERNO: Joi.string().required(),
    },

    [Segments.PARAMS]: {
      ID_PLANO_CLUB: Joi.number().required(),
    },

  }),

  plansController.update

);

plansRouter.delete(
  '/:ID_PLANO_CLUB',
  celebrate({
    [Segments.PARAMS]: {
      ID_PLANO_CLUB: Joi.number().required(),
    },
  }),
  plansController.delete
);

export default plansRouter;