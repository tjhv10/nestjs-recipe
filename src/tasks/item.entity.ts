import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ItemStatus } from './item-status.enum';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  Name: string;

  @Column()
  Upload_date: string;

  @Column()
  Description: string;

  @Column()
  Price: string;

  @Column()
  Seller_name: string;

  @Column()
  Image_url: string;

  @Column()
  Status: ItemStatus;
}
