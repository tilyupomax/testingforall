import { CreateQrCodeDto } from './shared/models/create-qr-code.dto';
import { IQrCode } from './shared/models/qr-code.interface';
export declare class AppService {
    createQrCode(data: CreateQrCodeDto): Promise<IQrCode>;
}
