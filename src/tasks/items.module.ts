import { Module } from '@nestjs/common';
import { itemsController } from './items.controller';
import { ItemService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemRepository } from './items.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ItemRepository])],
  controllers: [itemsController],
  providers: [ItemService],
})
export class TasksModule {}
