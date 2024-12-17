import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { categories } from './categories.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoriesRepository)
    private categoriesRepository: CategoriesRepository,
  ) {}
  async getCategories(): Promise<categories[]> {
    return await this.categoriesRepository.find();
  }
  async getCategoryById(id: number): Promise<categories> {
    const found = await this.categoriesRepository.findOne(id);
    if (!found) {
      throw new NotFoundException('not found');
    } else return found;
  }
}
