import { Injectable, NotFoundException } from '@nestjs/common';
import { ItemStatus } from './item-status.enum';
import { CreateItemDto } from './dto/create-item.dto';
// import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { ItemRepository } from './items.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Items } from './item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemRepository)
    private itemRepository: ItemRepository,
  ) {}
  // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //   // do something with status
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  //   return tasks;
  // }
  async getItems(): Promise<Items[]> {
    return await this.itemRepository.find();
  }
  async getItemById(id: number): Promise<Items> {
    const found = await this.itemRepository.findOne(id);
    if (!found) {
      throw new NotFoundException('not found');
    } else return found;
  }
  async createItem(createTaskDto: CreateItemDto): Promise<Items> {
    const {
      Name,
      Upload_date,
      Description,
      Price,
      Seller_name,
      Image_url,
    } = createTaskDto;
    const item = this.itemRepository.create({
      Name,
      Upload_date,
      Description,
      Price,
      Seller_name,
      Image_url,
      Status: ItemStatus.ACTIVE,
    });
    await this.itemRepository.save(item);
    return item;
  }
}
