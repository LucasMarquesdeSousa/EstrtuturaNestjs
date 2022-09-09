import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LocalAuthGuard } from './guards/LocalAuth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  //swagger
  const config = new DocumentBuilder()
    .setTitle('NOME DA APLICAÇÃO')
    .setDescription('API REST')
    .setVersion('1.0')
    .addBasicAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: true,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true,
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
