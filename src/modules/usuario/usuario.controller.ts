import { Controller, Inject, Post, Put } from '@nestjs/common';
import { ServicoUsuarioInterface } from './interfaces/servico-usuario.interface';
import AtualizarUsuarioDto from './dtos/atualizar-usuario.dto';
import CadastrarUsuarioDto from './dtos/cadastrar-usuario.dto';
import { Usuario } from './entidades/usuario.entity';
import { ApiTags } from '@nestjs/swagger/dist/decorators';

@ApiTags('Usuario')
@Controller('usuario')
export class ControllerUsuario {
  public constructor(
    @Inject('ServicoUsuarioInterface')
    private readonly servicoUsuario: ServicoUsuarioInterface,
  ) {}

  @Post()
  async cadastrar(usuarioDto: CadastrarUsuarioDto): Promise<Usuario> {
    return await this.servicoUsuario.cadastrar(usuarioDto);
  }

  @Put()
  async atualizar(
    id: number,
    usuarioDto: AtualizarUsuarioDto,
  ): Promise<Usuario> {
    return await this.servicoUsuario.atualizar(id, usuarioDto);
  }
}
