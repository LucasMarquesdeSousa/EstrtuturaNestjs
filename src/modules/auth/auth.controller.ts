import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../../guards/LocalAuth.guard';
import { ApiTags } from '@nestjs/swagger';
import {AuthService} from "./auth.service";

@ApiTags('Usuários')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async auth(@Request() request) {
    return await this.authService.login(request.user._doc);
  }
}
