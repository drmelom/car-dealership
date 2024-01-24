import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';
export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Tesla',
    color: 'red',
    model: 'Model 3',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    color: 'white',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Chevrolet',
    color: 'black',
    model: 'Camaro',
  },
];
