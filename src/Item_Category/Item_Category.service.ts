import { Injectable, NotFoundException } from '@nestjs/common';
import { Item_CategoryRepository } from './Item_Category.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Items_Categories } from './Item_Category.entity';

@Injectable()
export class Items_CategoriesService {
  constructor(
    @InjectRepository(Item_CategoryRepository)
    private item_CategoryRepository: Item_CategoryRepository,
  ) {}
  async getItems_Categories(): Promise<Items_Categories[]> {
    return await this.item_CategoryRepository.find();
  }
  async getItems_CategoriesByItemId(id: number): Promise<Items_Categories[]> {
    const found = await this.item_CategoryRepository.find({
      where: { Item_id: id },
    });

    if (!found || found.length === 0) {
      throw new NotFoundException('Not found');
    }
    return found;
  }
}
