import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function accessOrigin() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  await app.listen(3000);
}
accessOrigin();
