import AtualizarUsuarioDto from '../dtos/atualizar-usuario.dto';
import CadastrarUsuarioDto from '../dtos/cadastrar-usuario.dto';
import { Usuario } from '../entidades/usuario.entity';

export interface MapperUsuarioInterface {
  mapearDtoCadastrar(usuarioDto: CadastrarUsuarioDto): Usuario;

  mapearDtoAtualizar(
    usuario: Usuario,
    usuarioDto: AtualizarUsuarioDto,
  ): Usuario;
}
