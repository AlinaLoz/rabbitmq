import {Controller, OnModuleInit} from "@nestjs/common";
import {MessagePattern, Payload, Ctx, EventPattern, RmqContext} from "@nestjs/microservices";
import {AMQP_MESSAGES} from "../../thirdModule/third.contsants";

@Controller()
class FirstController implements OnModuleInit {

    onModuleInit(): any {
        console.log('FirstController.onModuleInit');
    }

    @MessagePattern(AMQP_MESSAGES.SEND_MESSAGE_TO_FIRST)
    async handleMessageFromThird_1(
        @Payload() payload,
        @Ctx() ctx: RmqContext,
    ) {
        console.log('1');
        const channel = ctx.getChannelRef();
        const originalMsg = ctx.getMessage();
        // channel.ack(originalMsg);
        channel.nack(originalMsg, false, false);
        return 'response message:' + originalMsg;
    }

    @EventPattern(AMQP_MESSAGES.SEND_EVENT_TO_FIRST)
    handleEventFromThird(
        @Payload() payload,
    ) {
        return 'response event:' + payload;
    }

}

export default FirstController;
