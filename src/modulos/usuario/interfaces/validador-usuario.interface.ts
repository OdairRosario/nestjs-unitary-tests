import { Usuario } from '../entidades/usuario.entity';

export interface ValidadorUsuarioInterface {
  verificaDuplicidadeEmail({ email }: Usuario): Promise<boolean>;
}
