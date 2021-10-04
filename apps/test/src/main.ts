import { NestFactory } from '@nestjs/core';
import { TestModule } from './test.module';

// console.log(process.env.THEMOVIEDB_API_KEY);

async function bootstrap() {
  const app = await NestFactory.create(TestModule);
  await app.listen(3000);
}
bootstrap();
