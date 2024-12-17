import { Controller, Get, Param } from '@nestjs/common';
import { Items_CategoriesService } from './Item_Category.service';
import { Items_Categories } from './Item_Category.entity';

@Controller('items_categories')
export class Items_CategoriesController {
  constructor(private Items_CategoriesService: Items_CategoriesService) {}

  @Get('/')
  getItems_Categories(): Promise<Items_Categories[]> {
    return this.Items_CategoriesService.getItems_Categories();
  }

  @Get('/:id')
  getItems_CategoriesById(
    @Param('id') id: string,
  ): Promise<Items_Categories[]> {
    return this.Items_CategoriesService.getItems_CategoriesByItemId(
      parseInt(id),
    );
  }
}
