import { NestFactory } from '@nestjs/core';
import {MicroserviceOptions } from '@nestjs/microservices';
import { ThirdModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        ThirdModule
    );
    app.listen(() => console.log('Third microservice is listening'));
}

bootstrap();

