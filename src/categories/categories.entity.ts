import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class categories {
  @PrimaryGeneratedColumn()
  Category_Id: number;

  @Column()
  Name: string;
}
