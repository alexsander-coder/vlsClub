import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { PlanRepository } from "../typeorm/repositories/PlansRepository";

// interface IRequest {
//   ID_PLANO_CLUB: number;
// }
class DeletePlanService {
  public async execute(ID_PLANO_CLUB: number): Promise<void> {
    const plansRepository = getCustomRepository(PlanRepository);

    const plan = await plansRepository.findOne(ID_PLANO_CLUB);

    if (!plan) {
      throw new AppError('Plano não encontrado!');
    }

    await plansRepository.remove(plan);
  }
}

export default DeletePlanService;