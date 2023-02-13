import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, {
      cors: {
        origin: 'http://127.0.0.1:5173',
        credentials: true,
      },
    });

    await app.listen(3000);
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
