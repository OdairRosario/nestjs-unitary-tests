import { Injectable } from '@nestjs/common';
import { MapperUsuarioInterface } from '../interfaces/mapper-usuario.interface';
import CadastrarUsuarioDto from '../dtos/cadastrar-usuario.dto';
import { Usuario } from '../entidades/usuario.entity';
import AtualizarUsuarioDto from '../dtos/atualizar-usuario.dto';

@Injectable()
export class UsuarioMapper implements MapperUsuarioInterface {
  public mapearDtoCadastrar(bannerDto: CadastrarUsuarioDto): Usuario {
    const banner = new Usuario();

    banner.nome = bannerDto.nome;
    banner.email = bannerDto.email;

    return banner;
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
