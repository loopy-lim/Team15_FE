import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn("increment")
  categoryPk: number;

  @Column("text")
  name: string;
}
