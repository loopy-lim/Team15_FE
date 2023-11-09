import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Review {
  @PrimaryGeneratedColumn("increment")
  reviewPk: number;

  @Column("integer")
  rentalPk: number;

  @Column("integer")
  productPk: number;

  @Column("integer")
  star: number;

  @Column("text")
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
