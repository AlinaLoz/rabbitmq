import {Module} from '@nestjs/common';
import SecondController from './controller';

@Module({
  imports: [],
  controllers: [
      SecondController
  ],
})
export class SecondModule { }
