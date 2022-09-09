import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PayloadInterface } from '../interface/payload.interface';
import { JwtService } from '@nestjs/jwt';
import { UsuarioInterface } from '../../usuario/Interface/usuario.interface';
import { UsuarioService } from '../../usuario/service/Usuario.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async findOne(paylod: PayloadInterface) {
    const usuario = await this.usuarioService.findOne(paylod.username);
    return usuario;
  }
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usuarioService.findOne(email);
    if (!user) {
      throw new HttpException(
        'Email ou senha incorretos',
        HttpStatus.BAD_REQUEST,
      );
    }
    const isMatch = bcrypt.compareSync(pass, user.senha);
    if (isMatch) {
      const { senha, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: UsuarioInterface) {
    const payload: PayloadInterface = { username: user.email, nome: user.nome };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
