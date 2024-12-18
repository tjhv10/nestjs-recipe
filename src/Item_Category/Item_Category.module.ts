import { Module } from '@nestjs/common';
import { Items_CategoriesController } from './Item_Category.controller';
import { Items_CategoriesService } from './Item_Category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item_CategoryRepository } from './Item_Category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Item_CategoryRepository])],
  controllers: [Items_CategoriesController],
  providers: [Items_CategoriesService],
  exports: [
    Items_CategoriesService,
    TypeOrmModule.forFeature([Item_CategoryRepository]),
  ],
})
export class Item_CategoriesModule {}
