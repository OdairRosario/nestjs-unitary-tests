import { Injectable } from '@nestjs/common';
import { RepositorioUsuarioInterface } from './interfaces/repositorio-usuario.interface';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Usuario } from './entidades/usuario.entity';

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
}
