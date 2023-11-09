import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("increment")
  userPk: number;

  @Column("integer")
  universityPk: number;

  @Column("text")
  email: string;

  @Column("text")
  password: string;

  @Column("text")
  nickname: string;

  @Column("text")
  role: string;

  @Column("text")
  idCardImagePath: string;

  @Column("text", { nullable: true })
  profileImagePath?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date | null;
}
