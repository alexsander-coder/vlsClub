import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePlans1668628830853 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'S_PLANOS_CLUB',
            columns: [
                {
                    name: 'ID_PLANO_CLUB',
                    type: 'serial',
                    isNullable: true,
                },
                {
                    name: 'NM_NOME',
                    type: 'varchar',
                },
                {
                    name: 'DS_DESCRICAO',
                    type: 'varchar'
                },
                {
                    name: 'CS_STATUS',
                    type: 'char',
                    isNullable: true,
                },
                {
                    name: 'CD_EXTERNO',
                    type: 'varchar',
                },
                {
                    name: 'DT_UPDATE_STATUS',
                    type: 'timestamp',
                    default: 'now()',
                },

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('S_PLANOS_CLUB');
    }

}
