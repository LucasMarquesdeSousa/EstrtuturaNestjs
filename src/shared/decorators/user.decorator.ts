import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UsuarioModule } from '../../modules/usuario/usuario.module';
import { UsuarioInterface } from '../../modules/usuario/interface/usuario.interface';

export const AuthUser: UsuarioInterface | any = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
