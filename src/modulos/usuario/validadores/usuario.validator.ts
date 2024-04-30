import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Usuario } from '../entidades/usuario.entity';

@Injectable()
export class ValidadorUsuario {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async verificarDuplicidadeEmail(email: string): Promise<boolean> {
    const filtro: FindOneOptions<Usuario> = {
      where: {
        email: email,
      },
    };

    const usuario = await this.usuarioRepository.findOne(filtro);
    return !!usuario;
  }
}
