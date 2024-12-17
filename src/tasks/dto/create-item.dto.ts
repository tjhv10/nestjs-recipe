import { ItemStatus } from '../item-status.enum';

export class CreateItemDto {
  Id: number;
  Name: string;
  Upload_date: string;
  Description: string;
  Price: string;
  Seller_name: string;
  Image_url: string;
  Status: ItemStatus;
}
