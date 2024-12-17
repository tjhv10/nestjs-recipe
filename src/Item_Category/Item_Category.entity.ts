import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Items_Categories {
  @PrimaryGeneratedColumn()
  Category_id: number;

  @PrimaryGeneratedColumn()
  Item_id: number;
}
