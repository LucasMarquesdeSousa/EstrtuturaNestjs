import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { UsuarioSchema } from './modules/usuario/schemas/usuario.schema';
import { Collection } from './shared/tabelas/collection';
import { collections } from './shared/tabelas/collections';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectionName: Collection.connectionName,
    }),
    MongooseModule.forFeature(collections, Collection.connectionName),
    AuthModule,
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
