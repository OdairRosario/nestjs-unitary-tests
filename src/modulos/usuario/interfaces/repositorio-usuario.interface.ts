import { Usuario } from '../entidades/usuario.entity';

export interface RepositorioUsuarioInterface {
  cadastrar(usuario: Usuario): Promise<Usuario>;
  buscarPorEmail(email: string, idUsuario?: number): Promise<Usuario>;
}
