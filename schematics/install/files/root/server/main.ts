import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export async function app() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(process.env['PORT'] || 4200);
}

app().catch((err) => console.error(err));
