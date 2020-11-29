import { Module } from '@nestjs/common';
import {FirstModule} from "../../firstModule/src/app.module";
import {SecondModule} from "../../secondModule/app.module";
import {ThirdModule} from "../../thirdModule/app.module";

@Module({
  imports: [
      FirstModule,
      SecondModule,
      ThirdModule,
  ],
})
export class AppModule {}
