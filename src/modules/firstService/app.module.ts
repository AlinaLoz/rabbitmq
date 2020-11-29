import { Module } from '@nestjs/common';
import FirstController from './controller';

@Module({
  imports: [],
  controllers: [
      FirstController,
  ],
})
export class FirstModule { }
