import {NestFactory} from '@nestjs/core';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';
import {SecondModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        SecondModule,
        {
            transport: Transport.RMQ,
            options: {
                urls: ['amqp://lozita:651003@127.0.0.1:27184'],
                queue: 'test',
                queueOptions: {
                    durable: false,
                },
            },
        },
    );
    app.listen(() => console.log('Second microservice is listening'));
}

bootstrap();

