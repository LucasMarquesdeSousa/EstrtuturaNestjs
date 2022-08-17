import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioSchema } from './schemas/usuario.schema';
import { UsuarioService } from './service/Usuario.service';
import { Collection } from '../../shared/tabelas/collection';
import { collections } from '../../shared/tabelas/collections';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectionName: Collection.connectionName,
    }),
    MongooseModule.forFeature(collections, Collection.connectionName),
  ],
  providers: [UsuarioService],
  exports: [UsuarioService],
})
export class UsuarioModule {}
