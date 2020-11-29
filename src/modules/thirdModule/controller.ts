import { Controller, OnModuleInit} from "@nestjs/common";

@Controller()
class ThirdController implements OnModuleInit {

    onModuleInit(): any {
        console.log('ThirdController.onModuleInit');
    }

}

export default ThirdController;
