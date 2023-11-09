import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Company {
  @PrimaryGeneratedColumn("increment")
  companyPk: number;

  @Column("text")
  name: string;

  @Column("text")
  companyImagePath: string;
}
