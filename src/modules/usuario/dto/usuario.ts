import { ApiProperty } from '@nestjs/swagger';

export class Usuario {
  @ApiProperty()
  email: string;
}
