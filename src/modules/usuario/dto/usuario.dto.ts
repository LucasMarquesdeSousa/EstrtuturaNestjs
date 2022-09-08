import { ApiProperty } from '@nestjs/swagger';

export class UsuarioDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  senha: string;
}
