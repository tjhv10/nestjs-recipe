import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemStatus } from './item-status.enum';
import { ItemService } from './items.service';
import { Items } from './item.entity';

@Controller('Items')
export class itemsController {
  constructor(private itemService: ItemService) {}

  @Get('/')
  getItems(): Promise<Items[]> {
    return this.itemService.getItems();
  }
  @Get('/:id')
  getItemById(@Param('id') id: string): Promise<Items> {
    return this.itemService.getItemById(parseInt(id));
  }

  @Post()
  createTask(@Body() CreateItemDto: CreateItemDto): Promise<Items> {
    return this.itemService.createItem(CreateItemDto);
  }

  // @Delete('/:id')
  // deleteTask(@Param('id') id: string): void {
  //   return this.tasksService.deleteTask(id);
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body('status') status: TaskStatus,
  // ): Task {
  //   return this.tasksService.updateTaskStatus(id, status);
  // }
}
