import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../../guards/LocalAuth.guard';

@Controller('auth')
export class AuthController {
  @Post()
  @UseGuards(LocalAuthGuard)
  async auth(@Request() request) {
    console.log('request', request.user);
  }
}
