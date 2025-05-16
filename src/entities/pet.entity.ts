import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 100})
  name: string;

  @Column()
  type: string;

  @Column()
  age: number

  @Column()
  breed?: string;

  @Column()
  isDangerous: boolean;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

}
