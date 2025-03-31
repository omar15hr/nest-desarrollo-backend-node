import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cars = ['Toyota', 'Ford', 'Nissan'];

  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarById(id) {
    return {
      id
    }
  }
}
