import {
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Get,
  UseGuards,
  Body,
} from '@nestjs/common';
import { UsuarioService } from '../service/Usuario.service';
import { ApiBasicAuth, ApiBody, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../guards/JwtAuthGuard';
import { LocalAuthGuard } from '../../../guards/LocalAuth.guard';
import { UsuarioDto } from '../dto/usuario.dto';
import { CriarUsuarioDto } from '../dto/criarUsuario.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Usuários')
@Controller('usuario')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Get()
  @ApiBasicAuth()
  @UseGuards(JwtAuthGuard)
  async getUsuarios() {
    try {
      return await this.usuarioService.getUsuarios();
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
  }

  @Post()
  @ApiBasicAuth()
  @UseGuards(AuthGuard('local'))
  async criarUsuario(@Body() usuario: CriarUsuarioDto) {
    try {
      return await this.usuarioService.criarUsuario(usuario);
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
  }
}
