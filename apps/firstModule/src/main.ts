import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { FirstModule } from './app.module';
import {THIRD_TO_FIRST_CONNECTION} from "../../connect/connections";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      FirstModule,  THIRD_TO_FIRST_CONNECTION,
  );
  app.listen(() => console.log('First microservice is listening'));
}

bootstrap();

