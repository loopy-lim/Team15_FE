import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Location {
  @PrimaryGeneratedColumn("increment")
  locationPk: number;

  @Column("integer")
  universityPk: number;

  @Column("text")
  latitude: string;

  @Column("text")
  longitute: string;

  @Column("text")
  name: string;
}
