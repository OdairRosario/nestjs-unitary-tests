import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TBL_USUARIOS')
export class Usuario {
  @ApiProperty({ description: 'ID do usuário' })
  @PrimaryGeneratedColumn({ name: 'CD_ID' })
  public id: number;

  @ApiProperty({ description: 'Nome do usuário' })
  @Column({ name: 'DS_NOME', type: 'varchar' })
  public nome: string;

  @ApiProperty({ description: 'Email do usuário' })
  @Column({ name: 'DS_EMAIL', type: 'varchar' })
  public email: string;
}
