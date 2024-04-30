import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'data-source';
import { UsuarioModule } from './modulos/usuario/usuario.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
