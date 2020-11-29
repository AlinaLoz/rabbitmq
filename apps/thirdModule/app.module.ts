import {Module} from '@nestjs/common';
import {ClientsModule, Transport} from '@nestjs/microservices';

import ThirdController from './controller';
import { AMQP_CONFIG } from './third.contsants';

@Module({
  imports: [
      // ClientsModule.register([
      //     {
      //         name: AMQP_CONFIG.THIRD_FIRST_1.SERVICE,
      //         transport: Transport.RMQ,
      //         options: {
      //             urls: ['amqp://lozita:651003@127.0.0.1:27184'],
      //             noAck: false,
      //             queue: 'DL Queue',
      //             queueOptions: {
      //                 durable: false,
      //                 deadLetterExchange: '',
      //                 deadLetterRoutingKey: AMQP_CONFIG.THIRD_FIRST_1.QUEUE,
      //                 messageTtl: 25000,
      //             },
      //         },
      //     },
      // ]),
      ClientsModule.register([
          {
            name: AMQP_CONFIG.THIRD_FIRST_1.SERVICE,
            transport: Transport.RMQ,
            options: {
              noAck: false,
              urls: ['amqp://lozita:651003@127.0.0.1:27184'],
              queue: AMQP_CONFIG.THIRD_FIRST_1.QUEUE,
              queueOptions: {
                durable: false,
                // deadLetterExchange: 'Dead Letters Exchange',
                // deadLetterRoutingKey: 'DL Queue',
              },
            },
          },
          ]
      ),
  ],
  controllers: [
      ThirdController
  ],
})
export class ThirdModule { }
