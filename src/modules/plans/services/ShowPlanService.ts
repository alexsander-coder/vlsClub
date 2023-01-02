import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Plan from "../typeorm/entities/Plan";
import { PlanRepository } from "../typeorm/repositories/PlansRepository";

// interface IRequest {
//   ID_PLANO_CLUB: number;
// }

class ShowPlanService {
  public async execute(ID_PLANO_CLUB: number): Promise<Plan> {
    const plansRepository = getCustomRepository(PlanRepository)

    const plan = await plansRepository.findOne(ID_PLANO_CLUB)



    if (!plan) {
      throw new AppError('Plano não encontrado!')
    }

    // console.log(ID_PLANO_CLUB)
    //id plano club retornando number

    return plan
  }


}

export default ShowPlanService