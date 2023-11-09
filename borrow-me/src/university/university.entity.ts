import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class University {
  @PrimaryGeneratedColumn("increment")
  universityPk: number;

  @Column("text")
  name: string;
}
