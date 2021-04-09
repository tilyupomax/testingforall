import { AppService } from './app.service';
import { CreateQrCodeDto } from './shared/models/create-qr-code.dto';
import { IQrCode } from './shared/models/qr-code.interface';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(createQrCodeDto: CreateQrCodeDto): Promise<IQrCode | Error>;
}
