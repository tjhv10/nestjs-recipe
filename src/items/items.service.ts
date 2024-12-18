import { Injectable, NotFoundException } from '@nestjs/common';
import { ItemStatus } from './item-status.enum';
import { CreateItemDto } from './dto/create-item.dto';
// import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { ItemRepository } from './items.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Items } from './item.entity';
import { Item_CategoryRepository } from '../Item_Category/Item_Category.repository';
import { Items_Categories } from 'src/Item_Category/Item_Category.entity';
import { CategoriesRepository } from 'src/categories/categories.repository';
import { categories } from 'src/categories/categories.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemRepository)
    private itemRepository: ItemRepository,
  ) {}
  @InjectRepository(Item_CategoryRepository)
  private item_CategoryRepository: Item_CategoryRepository;
  @InjectRepository(CategoriesRepository)
  private categoriesRepository: CategoriesRepository;
  async getItems_CategoriesByItemId(id: number): Promise<Items_Categories[]> {
    const found = await this.item_CategoryRepository.find({
      where: { Item_id: id },
    });
    if (!found || found.length === 0) {
      throw new NotFoundException('Not found');
    }
    return found;
  }
  async getCategoryById(id: number): Promise<categories> {
    const found = await this.categoriesRepository.findOne(id);
    if (!found) {
      throw new NotFoundException('not found');
    } else return found;
  }
  async getItems() {
    const allItems = (await this.itemRepository.find()).filter(
      (item) => item.Status === ItemStatus.ACTIVE,
    );
    const itemsWithCategories = [];
    for (let i = 0; i < allItems.length; i++) {
      const categories: categories[] = [];
      const this_item = await this.getItems_CategoriesByItemId(allItems[i].Id);
      for (let j = 0; j < this_item.length; j++) {
        categories.push(await this.getCategoryById(this_item[j].Category_id));
      }
      itemsWithCategories.push([allItems[i], categories]);
    }
    return itemsWithCategories;
  }
  async getItemById(id: number): Promise<Items> {
    const found = await this.itemRepository.findOne(id);
    if (!found) {
      throw new NotFoundException('not found');
    } else return found;
  }
  async isIdExist(id: number): Promise<boolean> {
    const found = await this.itemRepository.findOne(id);
    if (!found) {
      throw new NotFoundException('not found');
    } else return true;
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
  async deleteItem(id: number) {
    const result = await this.itemRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  async updateItemStatus(id: number, status: ItemStatus): Promise<Items> {
    const task = await this.getItemById(id);

    task.Status = status;
    await this.itemRepository.save(task);

    return task;
  }
  async updateItemPrice(id: number, price: number): Promise<Items> {
    const task = await this.getItemById(id);

    task.Price = price;
    await this.itemRepository.save(task);

    return task;
  }
}
