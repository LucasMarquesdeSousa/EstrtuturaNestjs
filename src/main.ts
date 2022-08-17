import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors({
    origin: true,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true,
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
