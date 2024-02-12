import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
// import { Request } from 'express';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors({
    credentials: true,
    origin: ['https://localhost:3000'],
  });
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
