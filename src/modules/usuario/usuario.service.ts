import { Inject, Injectable } from '@nestjs/common';
import { ServicoUsuarioInterface } from './interfaces/servico-usuario.interface';
import AtualizarUsuarioDto from './dtos/atualizar-usuario.dto';
import CadastrarUsuarioDto from './dtos/cadastrar-usuario.dto';
import { Usuario } from './entidades/usuario.entity';
import { RepositorioUsuarioInterface } from './interfaces/repositorio-usuario.interface';
import { MapperUsuarioInterface } from './interfaces/mapper-usuario.interface';

@Injectable()
export class ServicoUsuario implements ServicoUsuarioInterface {
  public constructor(
    @Inject('RepositorioUsuarioInterface')
    private readonly repositorioUsuario: RepositorioUsuarioInterface,
    @Inject('MapperUsuarioInterface')
    private readonly usuarioMapper: MapperUsuarioInterface,
  ) {}

  async cadastrar(usuarioDto: CadastrarUsuarioDto): Promise<Usuario> {
    console.log('teste');
    const usuario = this.usuarioMapper.mapearDtoCadastrar(usuarioDto);
    return this.repositorioUsuario.cadastrar(usuario);
  }

  async atualizar(
    id: number,
    usuarioDto: AtualizarUsuarioDto,
  ): Promise<Usuario> {
    const usuarioAntigo = await this.repositorioUsuario.listarTodos()[0];

    const usuario = this.usuarioMapper.mapearDtoAtualizar(
      usuarioAntigo,
      usuarioDto,
    );

    await this.repositorioUsuario.atualizar(id, usuario);

    const usuarioAtualizado = await this.repositorioUsuario.listarTodos()[0];

    return usuarioAtualizado;
  }

  async deletar(id: number): Promise<void> {
    return this.repositorioUsuario.deletar(id);
  }

  async listarTodos(): Promise<Usuario[]> {
    return this.repositorioUsuario.listarTodos();
  }
}
