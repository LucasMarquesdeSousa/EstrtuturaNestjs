import { ApiProperty } from '@nestjs/swagger';
import {Usuario} from "./usuario";

export class UsuarioDto extends Usuario {

  @ApiProperty()
  senha: string;
}
