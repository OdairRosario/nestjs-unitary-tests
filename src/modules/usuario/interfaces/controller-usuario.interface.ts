import AtualizarUsuarioDto from '../dtos/atualizar-usuario.dto';
import CadastrarUsuarioDto from '../dtos/cadastrar-usuario.dto';
import { Usuario } from '../entidades/usuario.entity';

export interface ControllerUsuarioInterface {
  cadastrar(usuarioDto: CadastrarUsuarioDto): Promise<Usuario>;
  atualizar(id: number, usuarioDto: AtualizarUsuarioDto): Promise<Usuario>;
}
