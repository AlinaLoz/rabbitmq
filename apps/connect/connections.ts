import {RmqOptions, Transport} from "@nestjs/microservices";
import {AMQP_CONFIG} from "../thirdModule/third.contsants";

export const THIRD_TO_FIRST_CONNECTION: RmqOptions = {
    transport: Transport.RMQ,
    // name: AMQP_CONFIG.THIRD_FIRST_1.SERVICE,
    options: {
        noAck: false,
        urls: ['amqp://lozita:651003@127.0.0.1:27184'],
        queue: AMQP_CONFIG.THIRD_FIRST_1.QUEUE,
        queueOptions: {
            durable: false,
            deadLetterExchange: '',
            deadLetterRoutingKey: `dl_${AMQP_CONFIG.THIRD_FIRST_1.QUEUE}`,
        },
    },
};

export const DL_THIRD_TO_FIRST_CONNECTION: RmqOptions =  {
    // name: AMQP_CONFIG.THIRD_FIRST_1.SERVICE,
    transport: Transport.RMQ,
    options: {
        urls: ['amqp://lozita:651003@127.0.0.1:27184'],
        noAck: false,
        queue: `dl_${AMQP_CONFIG.THIRD_FIRST_1.QUEUE}`,
        queueOptions: {
            durable: false,
            deadLetterExchange: '',
            deadLetterRoutingKey: AMQP_CONFIG.THIRD_FIRST_1.QUEUE,
            messageTtl: 5000,
        },
    },
};
