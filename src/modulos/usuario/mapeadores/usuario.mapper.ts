import { Injectable } from '@nestjs/common';
import CadastrarUsuarioDto from '../dtos/cadastrar-usuario.dto';
import { Usuario } from '../entidades/usuario.entity';
import { MapeadorUsuarioInterface } from '../interfaces/mapeador-usuario.interface';

@Injectable()
export class MapeadorUsuario implements MapeadorUsuarioInterface {
  public mapearDtoCadastrar(usuarioDto: CadastrarUsuarioDto): Usuario {
    const usuario = new Usuario();
    usuario.nome = usuarioDto.nome;
    usuario.email = usuarioDto.email;
    return usuario;
  }
}
