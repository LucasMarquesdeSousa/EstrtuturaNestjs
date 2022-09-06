import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type IUsuario = Usuario & Document;

@Schema()
export class Usuario {
  @Prop()
  nome: string;

  @Prop()
  senha: string;

  @Prop()
  email: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
