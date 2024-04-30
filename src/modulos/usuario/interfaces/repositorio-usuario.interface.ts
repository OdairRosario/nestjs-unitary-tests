import { Usuario } from '../entidades/usuario.entity';

export interface RepositorioUsuarioInterface {
  cadastrar(usuario: Usuario): Promise<Usuario>;
  atualizar(id: number, usuario: Usuario): Promise<Usuario>;
}
