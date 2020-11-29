import { Controller, OnModuleInit, Get, Inject, Req, Res} from "@nestjs/common";
import {ClientProxy} from "@nestjs/microservices";
import { timeout} from "rxjs/operators";

import { AMQP_CONFIG, AMQP_MESSAGES } from "./third.contsants";

@Controller('third')
class ThirdController implements OnModuleInit {

    constructor(@Inject(AMQP_CONFIG.THIRD_FIRST_1.SERVICE) private readonly clientAmqp: ClientProxy) {}

    onModuleInit(): any {}

    @Get('sendToFirst')
    async sendToFirst(@Req() req, @Res() resp) {
        try {
            console.log('sendToFirst before');
            const result = await this.clientAmqp.send(AMQP_MESSAGES.SEND_MESSAGE_TO_FIRST, 'qwerty')
                .pipe(timeout(5000))
                .toPromise();
            console.log('sendToFirst after', result);
        } catch (err) {
            console.log('err', err);
        }
        resp.send(200, 'sendToFirst ok');
    }

    @Get('emitToFirst')
    async emitToFirst(@Req() req, @Res() resp) {
        try {
            console.log('emitToFirst before');
            const result = await this.clientAmqp.emit(AMQP_MESSAGES.SEND_EVENT_TO_FIRST, 'qwerty').toPromise();
            console.log('emitToFirst after', result);
        } catch (err) {
            console.log('err', err);
        }
        resp.send(200, 'emitToFirst ok');
    }

    @Get('sendToSecond')
    sendToSecond(@Req() req, @Res() resp) {
        console.log('sendToSecond');
        resp.send(200, 'sendToSecond ok');
    }

}

export default ThirdController;
