import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ServicoUsuarioInterface } from './interfaces/servico-usuario.interface';
import CadastrarUsuarioDto from './dtos/cadastrar-usuario.dto';
import { Usuario } from './entidades/usuario.entity';
import { RepositorioUsuarioInterface } from './interfaces/repositorio-usuario.interface';
import { MapeadorUsuarioInterface } from './interfaces/mapeador-usuario.interface';
import { ValidadorUsuario } from './validadores/usuario.validator';

@Injectable()
export class ServicoUsuario implements ServicoUsuarioInterface {
  public constructor(
    @Inject('RepositorioUsuarioInterface')
    private readonly repositorioUsuario: RepositorioUsuarioInterface,
    @Inject('MapperUsuarioInterface')
    private readonly usuarioMapper: MapeadorUsuarioInterface,

    @Inject(ValidadorUsuario)
    private readonly validadorUsuario: ValidadorUsuario,
  ) {}

  async cadastrar(usuarioDto: CadastrarUsuarioDto): Promise<Usuario> {
    const usuario = this.usuarioMapper.mapearDtoCadastrar(usuarioDto);

    const emailEhDuplicado = this.validadorUsuario.verificarDuplicidadeEmail(
      usuario.email,
    );

    if (emailEhDuplicado) {
      throw new BadRequestException(
        'Já existe um usuario adastrado com este email',
      );
    }

    return await this.repositorioUsuario.cadastrar(usuario);
  }

  // async atualizar(
  //   id: number,
  //   usuarioDto: AtualizarUsuarioDto,
  // ): Promise<Usuario> {
  //   // const usuarioAntigo = await this.repositorioUsuario.listarTodos()[0];

  //   const usuario = new Usuario();

  //   usuario.nome = usuarioDto.nome;
  //   usuario.email = usuarioDto.email;

  //   await this.repositorioUsuario.atualizar(id, usuario);

  //   const usuarioAtualizado = await this.repositorioUsuario.listarTodos()[0];

  //   return usuarioAtualizado;
  // }

  // async deletar(id: number): Promise<void> {
  //   return this.repositorioUsuario.deletar(id);
  // }

  // async listarTodos(): Promise<Usuario[]> {
  //   return this.repositorioUsuario.listarTodos();
  // }
}
