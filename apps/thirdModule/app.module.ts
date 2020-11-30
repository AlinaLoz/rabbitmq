import {Module} from '@nestjs/common';
import {ClientsModule} from '@nestjs/microservices';

import ThirdController from './controller';
import { THIRD_TO_FIRST_CONNECTION, DL_THIRD_TO_FIRST_CONNECTION } from '../connect/connections';
import { AMQP_CONFIG } from './third.contsants';

@Module({
  imports: [
      ClientsModule.register([
          { ...THIRD_TO_FIRST_CONNECTION, name: AMQP_CONFIG.THIRD_FIRST_1.SERVICE },
          { ...DL_THIRD_TO_FIRST_CONNECTION, name: AMQP_CONFIG.THIRD_FIRST_1.SERVICE },
      ]),
  ],
  controllers: [
      ThirdController
  ],
})
export class ThirdModule { }
