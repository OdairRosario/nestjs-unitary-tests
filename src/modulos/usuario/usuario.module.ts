import { Module } from '@nestjs/common';
import { ControllerUsuario } from './usuario.controller';
import providers from './provider';
import { Usuario } from './entidades/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [ControllerUsuario],
  providers: providers,
})
export class UsuarioModule {}
