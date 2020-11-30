import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Client, ClientProxy } from '@nestjs/microservices';
import { defer } from 'rxjs';
import retry from './retry';
import { THIRD_TO_FIRST_CONNECTION, DL_THIRD_TO_FIRST_CONNECTION } from './connections';

@Injectable()
export class ConnectService implements OnApplicationBootstrap {

  @Client(THIRD_TO_FIRST_CONNECTION)
  client: ClientProxy;

  @Client(DL_THIRD_TO_FIRST_CONNECTION)
  clientRecovery: ClientProxy;

  async onApplicationBootstrap() {
    await defer(async () => {
      await this.client.connect();
      await this.clientRecovery.connect();
    }).pipe(retry(10, 5000)).toPromise();
  }

}
