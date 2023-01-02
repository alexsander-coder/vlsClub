import { Request, Response } from "express";
import CreatePlanService from "../services/CreatePlanService";
import DeletePlanService from "../services/DeletePlanService";
import ListPlanService from "../services/ListPlanService";
import ShowPlanService from "../services/ShowPlanService";
import UpdatePlanService from "../services/UpdatePlanService";


export default class PlansController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listPlans = new ListPlanService();

    const plans = await listPlans.execute()

    return response.json(plans);
  }

  public async show(request: Request, response: Response): Promise<Response> {

    const ID_PLANO_CLUB = parseInt(request.params.ID_PLANO_CLUB)

    const showPlan = new ShowPlanService()

    const plan = await showPlan.execute(ID_PLANO_CLUB)

    return response.json(plan)
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { NM_NOME, DS_DESCRICAO, CS_STATUS, CD_EXTERNO } = request.body

    const createPlan = new CreatePlanService()

    const plan = await createPlan.execute({
      NM_NOME,
      DS_DESCRICAO,
      CS_STATUS,
      CD_EXTERNO
    })

    return response.json(plan)
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { NM_NOME, DS_DESCRICAO, CS_STATUS, CD_EXTERNO } = request.body

    const ID_PLANO_CLUB = parseInt(request.params.ID_PLANO_CLUB);

    console.log(NM_NOME, 'AQUI');

    const updatePlan = new UpdatePlanService()

    const plan = await updatePlan.execute({
      ID_PLANO_CLUB,
      NM_NOME,
      DS_DESCRICAO,
      CS_STATUS,
      CD_EXTERNO
    })

    return response.json(plan);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const ID_PLANO_CLUB = parseInt(request.params.ID_PLANO_CLUB);
    console.log(ID_PLANO_CLUB);

    const deletePlan = new DeletePlanService()

    await deletePlan.execute(ID_PLANO_CLUB)

    return response.json({ message: `Plano ${ID_PLANO_CLUB} deletado com sucesso.` })
  }
}