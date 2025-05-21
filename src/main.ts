// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['https://spigify-front.onrender.com'],
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
