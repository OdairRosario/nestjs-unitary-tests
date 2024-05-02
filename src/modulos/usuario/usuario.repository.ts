import { Injectable } from '@nestjs/common';
import { RepositorioUsuarioInterface } from './interfaces/repositorio-usuario.interface';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Usuario } from './entidades/usuario.entity';
import { FindOneOptions } from 'typeorm';

@Injectable()
export class RepositorioUsuario implements RepositorioUsuarioInterface {
  public constructor(
    @InjectRepository(Usuario)
    private readonly repositorioUsuario: Repository<Usuario>,
  ) {}

  async cadastrar(usuario: Usuario): Promise<Usuario> {
    return await this.repositorioUsuario.save(usuario);
  }

  async atualizar(id: number, usuario: Usuario): Promise<Usuario> {
    return await this.repositorioUsuario.save(usuario);
  }

  async buscarPorEmail(email: string): Promise<Usuario> {
    const filtro: FindOneOptions<Usuario> = {
      where: {
        email: email,
      },
    };

    return await this.repositorioUsuario.findOne(filtro);
  }
}
