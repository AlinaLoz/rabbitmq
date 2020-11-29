import { Module } from '@nestjs/common';
import {FirstModule} from "./modules/firstService/app.module";
import {SecondModule} from "./modules/secondService/app.module";
import {ThirdModule} from "./modules/thirdModule/app.module";

@Module({
  imports: [
      FirstModule,
      SecondModule,
      ThirdModule,
  ],
})
export class AppModule {}
