import {Module} from '@nestjs/common';
import ThirdController from './controller';

@Module({
  imports: [],
  controllers: [
      ThirdController
  ],
})
export class ThirdModule { }
