import { Module } from '@nestjs/common';
import { itemsController } from './items.controller';
import { ItemService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemRepository } from './items.repository';
import { Item_CategoriesModule } from 'src/Item_Category/Item_Category.module';

@Module({
  controllers: [itemsController],
  providers: [ItemService],
  imports: [TypeOrmModule.forFeature([ItemRepository]), Item_CategoriesModule],
})
export class ItemModule {}
