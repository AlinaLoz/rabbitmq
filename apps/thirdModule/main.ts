import { NestFactory } from '@nestjs/core';
import {MicroserviceOptions } from '@nestjs/microservices';
import { ThirdModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        ThirdModule,
        {
            // options: {
            //     urls: ['amqp://lozita:651003@127.0.0.1:27184'],
            //     queue: 'test',
            //     queueOptions: {
            //         durable: false,
            //     },
            // },
        },
    );
    app.listen(() => console.log('Third microservice is listening'));
}

bootstrap();

