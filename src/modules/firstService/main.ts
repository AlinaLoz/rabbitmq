import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { FirstModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      FirstModule,
      {
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'test',
          queueOptions: {
            durable: false,
          },
        },
      },
  );
  app.listen(() => console.log('First microservice is listening'));
}

bootstrap();

