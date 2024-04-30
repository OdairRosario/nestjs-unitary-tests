import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions, Not } from 'typeorm';
import { Usuario } from '../entidades/usuario.entity';

@Injectable()
export class ValidadorUsuario {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  public async validar(usuario: Usuario) {
    const emailEhDuplicado = await this.verificarDuplicidadeEmail(
      usuario.email,
      usuario.id,
    );

    if (emailEhDuplicado) {
      throw new BadRequestException(
        'Já existe um usuario adastrado com este email',
      );
    }
  }

  private async verificarDuplicidadeEmail(
    email: string,
    idUsuario?: number,
  ): Promise<boolean> {
    const filtro: FindOneOptions<Usuario> = {
      where: {
        email: email,
      },
    };

    if (idUsuario) {
      filtro.where['id'] = Not(idUsuario);
    }

    const usuario = await this.usuarioRepository.findOne(filtro);
    return !!usuario;
  }
}
