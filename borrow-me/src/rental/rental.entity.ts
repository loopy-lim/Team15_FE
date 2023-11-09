import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rental {
  @PrimaryGeneratedColumn("increment")
  rentalPk: number;

  @Column("integer")
  productPk: number;

  @Column("integer")
  userPk: number;

  @Column("datetime")
  startAt: Date;

  @Column("datetime")
  endAt: Date;

  @Column("text")
  status: string;
}
