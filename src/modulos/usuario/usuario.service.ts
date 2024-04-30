import { Inject, Injectable } from '@nestjs/common';
import { ServicoUsuarioInterface } from './interfaces/servico-usuario.interface';
import CadastrarUsuarioDto from './dtos/cadastrar-usuario.dto';
import { Usuario } from './entidades/usuario.entity';
import { RepositorioUsuarioInterface } from './interfaces/repositorio-usuario.interface';
import { MapeadorUsuarioInterface } from './interfaces/mapeador-usuario.interface';
import { ValidadorUsuario } from './validadores/usuario.validator';
import AtualizarUsuarioDto from './dtos/atualizar-usuario.dto';

@Injectable()
export class ServicoUsuario implements ServicoUsuarioInterface {
  public constructor(
    @Inject('RepositorioUsuarioInterface')
    private readonly repositorioUsuario: RepositorioUsuarioInterface,
    @Inject('MapeadorUsuarioInterface')
    private readonly mapeadorUsuario: MapeadorUsuarioInterface,

    @Inject('ValidadorUsuario')
    private readonly validadorUsuario: ValidadorUsuario,
  ) {}

  async cadastrar(usuarioDto: CadastrarUsuarioDto): Promise<Usuario> {
    const usuario = this.mapeadorUsuario.mapearDtoCadastrar(usuarioDto);

    await this.validadorUsuario.validar(usuario);

    return await this.repositorioUsuario.cadastrar(usuario);
  }

  async atualizar(
    id: number,
    usuarioDto: AtualizarUsuarioDto,
  ): Promise<Usuario> {
    const usuario = this.mapeadorUsuario.mapearDtoAtualizar(id, usuarioDto);

    await this.validadorUsuario.validar(usuario);

    return await this.repositorioUsuario.atualizar(id, usuario);
  }
}
