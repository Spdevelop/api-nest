import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SpdevLogger } from './core/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: `${process.env.CORS_URI}`,
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
  new SpdevLogger().log(
    `3..2..1..🚀🚀🚀 Application is running on: ${await app.getUrl()}`,
    process.env.NODE_ENV,
  );
}
bootstrap();
