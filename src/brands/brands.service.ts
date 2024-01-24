import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';
import { UUID } from 'crypto';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Tesla',
    //   createdAt: new Date().getTime(),
    // },
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createdAt: Date.now(),
    // },
    // {
    //   id: uuid(),
    //   name: 'Chevrolet',
    //   createdAt: Date.now(),
    // },
  ];
  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const brand: Brand = {
      id: uuid(),
      name,
      createdAt: Date.now(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: UUID) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException();
    return brand;
  }

  update(id: UUID, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDB = {
          ...brand,
          ...updateBrandDto,
          updatedAt: new Date().getTime(),
        };
        return brandDB;
      }
      return brand;
    });
    return brandDB;
  }

  remove(id: UUID) {
    this.findOne(id);
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }
  fillBrandsWhitSeed(brands: Brand[]) {
    this.brands = brands;
  }
}
