import { Injectable } from '@nestjs/common';
import { MapeadorUsuarioInterface } from '../interfaces/mapeador-usuario.interface';
import CadastrarUsuarioDto from '../dtos/cadastrar-usuario.dto';
import { Usuario } from '../entidades/usuario.entity';
import AtualizarUsuarioDto from '../dtos/atualizar-usuario.dto';

@Injectable()
export class MapeadorUsuario implements MapeadorUsuarioInterface {
  public mapearDtoCadastrar(usuarioDto: CadastrarUsuarioDto): Usuario {
    const usuario = new Usuario();

    usuario.nome = usuarioDto.nome;
    usuario.email = usuarioDto.email;

    return usuario;
  }

  public mapearDtoAtualizar(
    usuario: Usuario,
    usuarioDto: AtualizarUsuarioDto,
  ): Usuario {
    usuario.nome = usuarioDto.nome;
    usuario.email = usuarioDto.email;

    return usuario;
  }
}
