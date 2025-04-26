import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `3..2..1..🚀🚀🚀 Application is runningg `;
  }
}
