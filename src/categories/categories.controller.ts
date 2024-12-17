import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from './categories.service';
import { categories } from './categories.entity';

@Controller('Categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('/')
  getCategories(): Promise<categories[]> {
    return this.categoryService.getCategories();
  }

  @Get('/:id')
  getCategoriesById(@Param('id') id: string): Promise<categories> {
    return this.categoryService.getCategoryById(parseInt(id));
  }
}
