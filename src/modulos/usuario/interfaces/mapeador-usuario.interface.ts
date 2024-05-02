import CadastrarUsuarioDto from '../dtos/cadastrar-usuario.dto';
import { Usuario } from '../entidades/usuario.entity';

export interface MapeadorUsuarioInterface {
  mapearDtoCadastrar(usuarioDto: CadastrarUsuarioDto): Usuario;
}
