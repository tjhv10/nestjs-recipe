import { ItemStatus } from '../item-status.enum';

export class CreateItemDto {
  Id: number;
  Name: string;
  Upload_date: Date;
  Description: string;
  Price: string;
  Seller_name: string;
  Image_url: string;
  Status: ItemStatus;
}
