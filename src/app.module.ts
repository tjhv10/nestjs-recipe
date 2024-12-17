import { Module } from '@nestjs/common';
import { ItemModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoiesModule } from './categories/categories.module';
import { Item_CategoiesModule } from './Item_Category/Item_Category.module';

@Module({
  imports: [
    ItemModule,
    CategoiesModule,
    Item_CategoiesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '02082003',
      database: 'Items',
      autoLoadEntities: true,
      // synchronize: true,
    }),
  ],
})
export class AppModule {}
