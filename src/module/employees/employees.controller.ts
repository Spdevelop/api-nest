import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './employee.schema';
import { ResponseDto } from '../../core/dto';
import { validateMongoId } from 'utils/mongo';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  async findAll() {
    const employees = await this.employeesService.findAll();

    return ResponseDto.ok({
      data: employees,
      meta: {
        total: employees.length,
        limit: 0,
        offset: 0,
      },
    });
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    validateMongoId(id);
    const employee = await this.employeesService.findById(id);

    return ResponseDto.ok({
      data: employee,
    });
  }

  @Post()
  async create(@Body() data: Partial<Employee>) {
    const employees = await this.employeesService.create(data);
    return ResponseDto.ok({
      data: employees,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.employeesService.delete(id);
    return ResponseDto.ok({
      message: 'delete success',
    });
  }
}
