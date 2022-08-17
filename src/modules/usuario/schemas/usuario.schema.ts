import * as mongoose from 'mongoose';
import { collectionsName } from '../../../shared/tabelas/collectionsName';

export const UsuarioSchema = new mongoose.Schema(
  {
    nome: { type: String, unique: false },
    email: { type: String, unique: true },
    senha: { type: String, unique: false },
  },
  { timestamps: true, collection: collectionsName.USUARIO },
);
