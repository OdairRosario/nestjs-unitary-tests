import CadastrarUsuarioDto from '../dtos/cadastrar-usuario.dto';
import { Usuario } from '../entidades/usuario.entity';

export interface ServicoUsuarioInterface {
  cadastrar(usuarioDto: CadastrarUsuarioDto): Promise<Usuario>;
  // atualizar(id: number, usuarioDto: AtualizarUsuarioDto): Promise<Usuario>;
  // deletar(id: number): Promise<void>;
  // listarTodos(): Promise<Usuario[]>;
}
