import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from './employee.schema';
import { NotFoundException } from '@nestjs/common';
import { ErrorException } from 'core/exceptions';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {}

  async findAll() {
    return this.employeeModel.find().exec();
  }
  async findById(id: string) {
    if (!isValidObjectId(id)) {
      throw ErrorException.BAD_REQUEST_WITH({ message: 'Invalid employee ID' });
    }
    const employee = await this.employeeModel.findById(id);

    if (!employee) {
      throw ErrorException.BAD_REQUEST_WITH({ message: 'Employee not found' });
    }

    return employee;
  }

  async create(data: Partial<Employee>) {
    const newEmp = new this.employeeModel(data);
    return newEmp.save();
  }

  async delete(id: string) {
    const deleted = await this.employeeModel.findByIdAndDelete(id).exec();
    if (!deleted) {
      throw new NotFoundException(`Employee with id ${id} not found`);
    }
    return deleted;
  }
}
