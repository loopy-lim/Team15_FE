import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("increment")
  productPk: number;

  @Column("integer")
  locationPk: number;

  @Column("integer")
  companyPk: number;

  @Column("integer")
  categoryPk: number;

  @Column("text")
  name: string;

  @Column("integer")
  rentalPrice: number;

  @Column("integer")
  regularPrice: number;

  @Column("text")
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
