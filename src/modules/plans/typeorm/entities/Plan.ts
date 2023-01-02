import { PrimaryColumn, Column, Entity, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "S_PLANOS_CLUB", schema: "VLS_CLUB_INTEGRA" })
class Plan {
  @PrimaryColumn({ type: "number", nullable: false })
  ID_PLANO_CLUB: number;

  @Column({ type: "varchar2", length: 200 })
  NM_NOME: string;

  @Column({ type: "varchar2", length: 2000 })
  DS_DESCRICAO: string;

  @Column({ type: "char" })
  CS_STATUS: string;

  @Column({ type: "varchar2", length: 200 })
  CD_EXTERNO: string;

  @UpdateDateColumn()
  DT_UPDATE_STATUS: Date;

  // @Column()
  // DT_UPDATE_STATUS: Date = 


  // @Column({
  //   type: "timestamp",
  //   name: "DT_UPDATE_STATUS"
  // })

  // @Column({ type: "timestamp", default: () => "now()"))
  // time: string;
}
export default Plan;