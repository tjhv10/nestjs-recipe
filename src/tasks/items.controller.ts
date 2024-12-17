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
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { ItemStatus } from './item-status.enum';
import { ItemService } from './items.service';
import { Item } from './item.entity';

@Controller('items')
export class itemsController {
  constructor(private itemService: ItemService) {}

  // @Get()
  // getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTasksWithFilters(filterDto);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }
  @Get('/:id')
  getTaskById(@Param('id') id: number): Promise<Item> {
    return this.itemService.getItemById(id);
  }

  @Post()
  createTask(@Body() CreateItemDto: CreateItemDto): Promise<Item> {
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
