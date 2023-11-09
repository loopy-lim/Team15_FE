import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductImage {
  @PrimaryGeneratedColumn("increment")
  imagePk: number;

  @Column("integer")
  productPk: number;

  @Column("text")
  productImagePath: string;
}
