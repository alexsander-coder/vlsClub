import { getCustomRepository } from "typeorm";
import Plan from "../typeorm/entities/Plan";
import { PlanRepository } from "../typeorm/repositories/PlansRepository";


// interface IPaginationCustomer {
//   "from": 1,
//   "to": 2,
//   "per_page": 10,
//   "total": 2,
//   "current_page": 1,
//   "prev_page": number | null,
//   "next_page": number | null,
//   "last_page": 1,
//   "data": Plan
// }

class ListPlanService {
  public async execute(): Promise<Plan[]> {
    const plansRepository = getCustomRepository(PlanRepository);
    const plans = await plansRepository.find();

    return plans;
  }
}

export default ListPlanService;
//const plans = await plansRepository.createQueryBuilder().paginate();
