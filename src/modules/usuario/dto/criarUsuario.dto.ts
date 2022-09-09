import { Usuario } from './usuario';
import { ApiProperty } from '@nestjs/swagger';

export class CriarUsuarioDto extends Usuario {
  @ApiProperty()
  nome: string;

  @ApiProperty()
  senha: string;
}
