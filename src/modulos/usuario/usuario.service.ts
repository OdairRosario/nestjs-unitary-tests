import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ServicoUsuarioInterface } from './interfaces/servico-usuario.interface';
import CadastrarUsuarioDto from './dtos/cadastrar-usuario.dto';
import { Usuario } from './entidades/usuario.entity';
import { RepositorioUsuarioInterface } from './interfaces/repositorio-usuario.interface';
import { MapeadorUsuarioInterface } from './interfaces/mapeador-usuario.interface';
import { ValidadorUsuarioInterface } from './interfaces/validador-usuario.interface';

@Injectable()
export class ServicoUsuario implements ServicoUsuarioInterface {
  public constructor(
    @Inject('RepositorioUsuarioInterface')
    private readonly repositorioUsuario: RepositorioUsuarioInterface,
    @Inject('MapeadorUsuarioInterface')
    private readonly mapeadorUsuario: MapeadorUsuarioInterface,
    @Inject('ValidadorUsuarioInterface')
    private readonly validadorUsuario: ValidadorUsuarioInterface,
  ) {}

  async cadastrar(usuarioDto: CadastrarUsuarioDto): Promise<Usuario> {
    const usuario = this.mapeadorUsuario.mapearDtoCadastrar(usuarioDto);

    const emailEhDuplicado =
      await this.validadorUsuario.verificaDuplicidadeEmail(usuario);

    console.log(emailEhDuplicado);

    if (emailEhDuplicado) {
      throw new BadRequestException(
        'Já existe um usuário cadastrado com este e-mail',
      );
    }

    return this.repositorioUsuario.cadastrar(usuario);
  }
}
