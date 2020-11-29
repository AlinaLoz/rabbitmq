import { Controller, OnModuleInit} from "@nestjs/common";

@Controller()
class SecondController implements OnModuleInit {

    onModuleInit(): any {
        console.log('SecondController.onModuleInit');
    }

}

export default SecondController;
