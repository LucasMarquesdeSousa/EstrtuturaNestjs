import * as mongoose from 'mongoose';
import { collectionsName } from '../../../shared/tabelas/collectionsName';
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
// export const UsuarioSchema = new mongoose.Schema(
//   {
//     nome: { type: String, unique: false },
//     email: { type: String, unique: true },
//     senha: { type: String, unique: false },
//   },
//   { timestamps: true, collection: collectionsName.USUARIO },
// );
