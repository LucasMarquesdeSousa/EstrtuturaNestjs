import { UsuarioSchema } from '../../modules/usuario/schemas/usuario.schema';
import { collectionsName } from './collectionsName';

export const collections = [
  {
    name: collectionsName.USUARIO,
    schema: UsuarioSchema,
    collection: collectionsName.USUARIO,
  },
];
