import { EntityRepository, Repository } from 'typeorm';
import { Items_Categories } from './Item_Category.entity';

@EntityRepository(Items_Categories)
export class Item_CategoryRepository extends Repository<Items_Categories> {}
