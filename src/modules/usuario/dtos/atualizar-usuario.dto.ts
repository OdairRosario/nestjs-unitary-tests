import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export default class AtualizarUsuarioDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public nome: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public email: string;
}
