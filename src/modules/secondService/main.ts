import {NestFactory} from '@nestjs/core';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';
import {SecondModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        SecondModule,
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
    app.listen(() => console.log('Second microservice is listening'));
}

bootstrap();

