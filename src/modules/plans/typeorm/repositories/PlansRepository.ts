import { EntityRepository, Repository } from 'typeorm';
import Plan from '../entities/Plan'

@EntityRepository(Plan)
export class PlanRepository extends Repository<Plan> {

  public async findByName(CD_EXTERNO: string): Promise<Plan[]> {
    const plan = this.find({
      where: {
        CD_EXTERNO,
      }
    });

    return plan;
  }
}