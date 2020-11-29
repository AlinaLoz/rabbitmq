import { Module } from '@nestjs/common';
import FirstController from './controller';
// import {ClientsModule, Transport} from "@nestjs/microservices";
// import {AMQP_CONFIG} from "../../thirdModule/third.contsants";

@Module({
  imports: [],
  controllers: [
      FirstController,
  ],
})
export class FirstModule { }
