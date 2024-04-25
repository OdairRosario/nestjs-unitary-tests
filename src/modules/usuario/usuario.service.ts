import { Inject, Injectable } from '@nestjs/common';
import { ServicoUsuarioInterface } from './interfaces/servico-usuario.interface';
import AtualizarUsuarioDto from './dtos/atualizar-usuario.dto';
import CadastrarUsuarioDto from './dtos/cadastrar-usuario.dto';
import { Usuario } from './entidades/usuario.entity';
import { RepositorioUsuarioInterface } from './interfaces/repositorio-usuario.interface';

@Injectable()
export class ServicoUsuario implements ServicoUsuarioInterface {
  public constructor(
    @Inject('RepositorioUsuarioInterface')
    private readonly repositorioUsuario: RepositorioUsuarioInterface,
  ) {}
  async cadastrar(usuarioDto: CadastrarUsuarioDto): Promise<Usuario> {
    return this.repositorioUsuario.cadastrar(usuarioDto);
  }
  async atualizar(
    id: number,
    usuarioDto: AtualizarUsuarioDto,
  ): Promise<Usuario> {
    return this.repositorioUsuario.atualizar(id, usuarioDto);
  }
}
