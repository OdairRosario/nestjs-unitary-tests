import { Module } from '@nestjs/common';
import { ControllerUsuario } from './usuario.controller';
import providers from './provider';

@Module({
  controllers: [ControllerUsuario],
  providers: providers,
  exports: providers.filter((provider) => provider.shouldExport),
})
export class UsuarioModule {}
