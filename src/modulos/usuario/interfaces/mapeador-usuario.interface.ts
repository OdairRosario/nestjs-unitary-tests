import AtualizarUsuarioDto from '../dtos/atualizar-usuario.dto';
import CadastrarUsuarioDto from '../dtos/cadastrar-usuario.dto';
import { Usuario } from '../entidades/usuario.entity';

export interface MapeadorUsuarioInterface {
  mapearDtoCadastrar(usuarioDto: CadastrarUsuarioDto): Usuario;

  mapearDtoAtualizar(id: number, usuarioDto: AtualizarUsuarioDto): Usuario;
}
