import { Module } from '@nestjs/common';
import { ConnectService } from './connect.service';

@Module({
  imports: [],
  exports: [ConnectService],
  controllers: [],
  providers: [ConnectService],
})
export class ConnectModule {}

