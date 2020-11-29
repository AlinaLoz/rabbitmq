import {Module} from '@nestjs/common';
import {ClientsModule, Transport} from '@nestjs/microservices';

import ThirdController from './controller';
import { AMQP_CONFIG } from './third.contsants';

console.log('AM');
@Module({
  imports: [
      ClientsModule.register([
          {
            name: AMQP_CONFIG.THIRD_FIRST.SERVICE,
            transport: Transport.RMQ,
            options: {
              prefetchCount: 4,
              noAck: true,
              urls: ['amqp://lozita:651003@127.0.0.1:27184'],
              queue: AMQP_CONFIG.THIRD_FIRST.QUEUE,
              queueOptions: {
                durable: false
              },
            },
          },]
      ),
  ],
  controllers: [
      ThirdController
  ],
})
export class ThirdModule { }
