import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { UsuarioDto } from '../usuario/dto/usuario.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(usuario: UsuarioDto): Promise<any> {
    const user = await this.authService.validateUser(
      usuario.email,
      usuario.senha,
    );
    if (!user) {
      throw new UnauthorizedException('Email ou senha incorretos');
    }
    return user;
  }
}
