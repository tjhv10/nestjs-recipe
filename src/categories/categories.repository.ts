import { EntityRepository, Repository } from 'typeorm';
import { categories } from './categories.entity';

@EntityRepository(categories)
export class CategoriesRepository extends Repository<categories> {}
