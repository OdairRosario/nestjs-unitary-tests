import { Injectable } from '@nestjs/common';
import { RepositorioUsuarioInterface } from './interfaces/repositorio-usuario.interface';
import { Usuario } from './entidades/usuario.entity';
import AtualizarUsuarioDto from './dtos/atualizar-usuario.dto';
import CadastrarUsuarioDto from './dtos/cadastrar-usuario.dto';

@Injectable()
export class RepositorioUsuario implements RepositorioUsuarioInterface {
  public constructor() {}

  async cadastrar(usuarioDto: CadastrarUsuarioDto): Promise<Usuario> {
    return await this.pegarUsuario(usuarioDto);
  }

  async atualizar(
    id: number,
    usuarioDto: AtualizarUsuarioDto,
  ): Promise<Usuario> {
    return await this.pegarUsuario(usuarioDto);
  }

  private readonly pegarUsuario = async ({
    nome,
    email,
  }: AtualizarUsuarioDto | CadastrarUsuarioDto) => {
    return Promise.resolve({
      id: 6926,
      nome,
      email,
    });
  };
}
