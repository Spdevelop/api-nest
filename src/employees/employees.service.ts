import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from './employee.schema';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }

  async create(data: Partial<Employee>): Promise<Employee> {
    const newEmp = new this.employeeModel(data);
    return newEmp.save();
  }

  async delete(id: string): Promise<Employee> {
    const deleted = await this.employeeModel.findByIdAndDelete(id).exec();
    if (!deleted) {
      throw new NotFoundException(`Employee with id ${id} not found`);
    }
    return deleted;
  }
}
