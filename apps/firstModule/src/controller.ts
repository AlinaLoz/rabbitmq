import {Controller, OnModuleInit} from "@nestjs/common";
import {MessagePattern, Payload, Ctx, EventPattern} from "@nestjs/microservices";
import {AMQP_MESSAGES} from "../../thirdModule/third.contsants";

@Controller()
class FirstController implements OnModuleInit {

    onModuleInit(): any {
        console.log('FirstController.onModuleInit');
    }

    @MessagePattern(AMQP_MESSAGES.SEND_MESSAGE_TO_FIRST)
    handleMessageFromThird(
        @Payload() payload,
        @Ctx() ctx,
    ) {
        return 'response message:' + payload;
    }

    @EventPattern(AMQP_MESSAGES.SEND_EVENT_TO_FIRST)
    handleEventFromThird(
        @Payload() payload,
    ) {
        return 'response event:' + payload;
    }

}

export default FirstController;
