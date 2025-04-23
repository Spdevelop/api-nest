import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './employee.schema';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeesService.findAll();
  }

  @Post()
  async create(@Body() data: Partial<Employee>): Promise<Employee> {
    return this.employeesService.create(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Employee> {
    return this.employeesService.delete(id);
  }
}
