import {
  Body,
  Controller,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ServicoUsuarioInterface } from './interfaces/servico-usuario.interface';
import CadastrarUsuarioDto from './dtos/cadastrar-usuario.dto';
import { Usuario } from './entidades/usuario.entity';
import { ApiTags } from '@nestjs/swagger/dist/decorators';
import AtualizarUsuarioDto from './dtos/atualizar-usuario.dto';

@ApiTags('Usuario')
@Controller('usuario')
export class ControllerUsuario {
  public constructor(
    @Inject('ServicoUsuarioInterface')
    private readonly servicoUsuario: ServicoUsuarioInterface,
  ) {}

  @Post()
  async cadastrar(@Body() usuarioDto: CadastrarUsuarioDto): Promise<Usuario> {
    return await this.servicoUsuario.cadastrar(usuarioDto);
  }

  @Put()
  async atualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() usuarioDto: AtualizarUsuarioDto,
  ): Promise<Usuario> {
    return await this.servicoUsuario.atualizar(id, usuarioDto);
  }
}
