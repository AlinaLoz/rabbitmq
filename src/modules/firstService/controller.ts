import {Controller, OnModuleInit} from "@nestjs/common";

@Controller()
class FirstController implements OnModuleInit {

    onModuleInit(): any {
        console.log('FirstController.onModuleInit');
    }

}

export default FirstController;
