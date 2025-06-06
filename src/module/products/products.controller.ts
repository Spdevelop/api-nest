// products/products.controller.ts
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ResponseDto } from '../../core/dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Post()
  async create(@Body() dto: CreateProductDto) {
    const products = await this.service.create(dto);

    return ResponseDto.ok({
      data: products,
      meta: {
        total: 0,
        limit: 0,
        offset: 0,
      },
    });
  }

  @Get()
  async findAll() {
    const products = await this.service.findAll();

    return ResponseDto.ok({
      data: products,
      meta: {
        total: products.length,
        limit: 0,
        offset: 0,
      },
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
