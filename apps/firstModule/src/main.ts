import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { FirstModule } from './app.module';
import {AMQP_CONFIG} from "../../thirdModule/third.contsants";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      FirstModule,
      {
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://lozita:651003@127.0.0.1:27184'],
          queue: AMQP_CONFIG.THIRD_FIRST.QUEUE,
            noAck: true,
          queueOptions: {
            durable: false,
          },
        },
      },
  );
  app.listen(() => console.log('First microservice is listening'));
}

bootstrap();

