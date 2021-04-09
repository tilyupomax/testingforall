import { BadRequestException, Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';

import { AppService } from './app.service';
import { CreateQrCodeDto } from './shared/models/create-qr-code.dto';
import { IQrCode } from './shared/models/qr-code.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('qr-code')
  async getHello(@Body() createQrCodeDto: CreateQrCodeDto): Promise<IQrCode | Error> {
    return await this.appService.createQrCode(createQrCodeDto).catch((error) => {
      console.error(error)
      throw new BadRequestException()
    });
  }
}
