import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SpdevLogger } from './core/logger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.enableCors({
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
  });

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
  new SpdevLogger().log(
    `3..2..1..🚀🚀🚀 Application is running on: ${await app.getUrl()}`,
    process.env.NODE_ENV,
  );
}
bootstrap();
