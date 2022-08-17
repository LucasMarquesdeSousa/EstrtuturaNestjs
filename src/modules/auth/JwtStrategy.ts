import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtContants } from './constants';
import { UsuarioInterface } from '../usuario/interface/usuario.interface';
import { PayloadInterface } from './payload.interface';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtContants.secret,
    });
  }

  async validate(payload: PayloadInterface) {
    const user = await this.authService.findOne(payload);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
