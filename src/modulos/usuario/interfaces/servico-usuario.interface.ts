import CadastrarUsuarioDto from '../dtos/cadastrar-usuario.dto';
import { Usuario } from '../entidades/usuario.entity';

export interface ServicoUsuarioInterface {
  cadastrar(usuarioDto: CadastrarUsuarioDto): Promise<Usuario>;
}
