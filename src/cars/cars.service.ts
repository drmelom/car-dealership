import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { UUID } from 'crypto';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Tesla',
    //   color: 'red',
    //   model: 'Model X',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Ford',
    //   color: 'blue',
    //   model: 'Mustang',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   color: 'green',
    //   model: 'Prius',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Tesla',
    //   color: 'white',
    //   model: 'Model 3',
    // },
  ];
  findAll() {
    return this.cars;
  }
  findOneById(id: UUID) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }
  create(createCarDto: CreateCarDto) {
    const newCar = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }
  update(id: UUID, updateCarDto: UpdateCarDto) {
    let cardB = this.findOneById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        cardB = {
          ...cardB,
          ...updateCarDto,
        };
        return cardB;
      }
      return car;
    });
    return cardB;
  }
  delete(id: UUID) {
    this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return `Car with id ${id} deleted`;
  }
  fillCarsWithSeed(cars: Car[]) {
    this.cars = cars;
  }
}
