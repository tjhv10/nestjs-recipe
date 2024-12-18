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
  @Get('/isIdExist/:id')
  isIdExist(@Param('id') id: string): Promise<boolean> {
    return this.itemService.isIdExist(parseInt(id));
  }

  @Post()
  createTask(@Body() CreateItemDto: CreateItemDto): Promise<Items> {
    return this.itemService.createItem(CreateItemDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: number): Promise<void> {
    return this.itemService.deleteItem(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(@Param('id') id: number): Promise<Items> {
    return this.itemService.updateItemStatus(id, ItemStatus.DISABELD);
  }
  @Patch('/:id/:price')
  updateItemPrice(
    @Param('id') id: number,
    @Param('price') price: number,
  ): Promise<Items> {
    return this.itemService.updateItemPrice(id, price);
  }
}
