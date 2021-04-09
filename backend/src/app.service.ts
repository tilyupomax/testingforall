import { Injectable } from '@nestjs/common';

import { CreateQrCodeDto } from './shared/models/create-qr-code.dto';
import * as QRCode from 'qrcode';
import { IQrCode } from './shared/models/qr-code.interface';


@Injectable()
export class AppService {

  async createQrCode(data: CreateQrCodeDto): Promise<IQrCode> {
    throw new Error();
    const qrCodeDataUrl = await QRCode.toDataURL(JSON.stringify({
      ...data,
      timestamp: (new Date()).toISOString()
    }));
    return {
      img: qrCodeDataUrl
    };
  }
}
