import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EmployeesModule } from './module/employees/employees.module';
import { ParcelModule } from './module/parcel/parcel.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI!),
    EmployeesModule,
    ParcelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
