import { Inject, Injectable } from '@nestjs/common';
import { Usuario } from '../entidades/usuario.entity';
import { RepositorioUsuarioInterface } from '../interfaces/repositorio-usuario.interface';
import { ValidadorUsuarioInterface } from '../interfaces/validador-usuario.interface';

@Injectable()
export class ValidadorUsuario implements ValidadorUsuarioInterface {
  constructor(
    @Inject('RepositorioUsuarioInterface')
    private readonly repositorioUsuario: RepositorioUsuarioInterface,
  ) {}

  public async verificaDuplicidadeEmail({ email }: Usuario): Promise<boolean> {
    const usuario = await this.repositorioUsuario.buscarPorEmail(email);
    return Boolean(usuario);
  }
}
