import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Plan from "../typeorm/entities/Plan";
import { PlanRepository } from "../typeorm/repositories/PlansRepository";

interface IRequest {
  NM_NOME: string;
  DS_DESCRICAO: string;
  CS_STATUS: string;
  CD_EXTERNO: string;
}
class CreatePlanService {
  public async execute({ NM_NOME, DS_DESCRICAO, CS_STATUS, CD_EXTERNO }: IRequest): Promise<Plan> {

    const plansRepository = getCustomRepository(PlanRepository);

    const plans = await plansRepository.findByName(CD_EXTERNO);
    console.log(plans)

    const planExists = await plansRepository.findByName(NM_NOME)

    for (let i = 0; i < plans.length; i++) {
      if ((planExists && plans)) {
        throw new AppError(`cod: externo ${CD_EXTERNO} em uso, coloca outro ae caraí :D`);
      }
    }

    const plan = plansRepository.create({
      NM_NOME,
      DS_DESCRICAO,
      CS_STATUS,
      CD_EXTERNO
    });

    await plansRepository.save(plan)

    return plan;
  }
}

export default CreatePlanService;