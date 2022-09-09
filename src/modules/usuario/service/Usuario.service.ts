import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsuarioInterface } from '../Interface/usuario.interface';
import { collectionsName } from '../../../shared/tabelas/collectionsName';
import { collections } from '../../../shared/tabelas/collections';
import { Collection } from '../../../shared/tabelas/collection';
import { IUsuario } from '../schemas/usuario.schema';
import { UsuarioDto } from '../dto/usuario.dto';

@Injectable({})
export class UsuarioService {
  constructor(
    @InjectModel(collectionsName.USUARIO, Collection.connectionName)
    private usuarioModel: Model<IUsuario>,
  ) {}

  async findOne(email: string): Promise<UsuarioInterface | undefined> {
    return await this.usuarioModel.findOne({ email: email }).exec();
  }

  async getUsuarios() {
    return await this.usuarioModel.find().exec();
  }

  async criarUsuario(usuario: UsuarioDto): Promise<UsuarioDto> {
    return usuario;
  }
}
