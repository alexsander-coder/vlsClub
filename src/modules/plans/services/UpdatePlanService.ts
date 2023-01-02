import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Plan from "../typeorm/entities/Plan";
import { PlanRepository } from "../typeorm/repositories/PlansRepository";

interface IRequest {
  ID_PLANO_CLUB: number;
  NM_NOME: string;
  DS_DESCRICAO: string;
  CS_STATUS: string;
  CD_EXTERNO: string;
}

class UpdatePlanService {
  public async execute({ ID_PLANO_CLUB, NM_NOME, DS_DESCRICAO, CS_STATUS, CD_EXTERNO }: IRequest): Promise<Plan> {
    const plansRepository = getCustomRepository(PlanRepository);

    const plan = await plansRepository.findOne(ID_PLANO_CLUB);

    if (!plan) {
      throw new AppError(`Plano ${ID_PLANO_CLUB} não encontrado`);
    }

    const planExists = await plansRepository.findByName(CD_EXTERNO);

    for (let i = 0; i < planExists.length; i++) {
      if (planExists && CD_EXTERNO !== plan.CD_EXTERNO) {
        throw new AppError(`Plano em uso, confira o código externo ${CD_EXTERNO}`)
      }
    }

    plan.NM_NOME = NM_NOME;
    plan.DS_DESCRICAO = DS_DESCRICAO;
    plan.CS_STATUS = CS_STATUS;
    plan.CD_EXTERNO = CD_EXTERNO;
    await plansRepository.save(plan);

    return plan;
  }
}

export default UpdatePlanService;