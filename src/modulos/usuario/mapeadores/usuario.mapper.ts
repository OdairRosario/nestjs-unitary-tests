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
    id: number,
    usuarioDto: AtualizarUsuarioDto,
  ): Usuario {
    const usuario = new Usuario();

    usuario.nome =
      usuario.nome !== usuarioDto.nome ? usuarioDto.nome : usuario.nome;

    usuario.email =
      usuario.email !== usuarioDto.email ? usuarioDto.email : usuario.email;

    usuario.id = id;
    return usuario;
  }
}
