import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TBL_USUARIOS')
export class Usuario {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'CD_ID' })
  public id: number;

  @ApiProperty()
  @Column({ name: 'DS_NOME', type: 'varchar' })
  public nome: string;

  @ApiProperty()
  @Column({ name: 'DS_NOME', type: 'varchar' })
  public email: string;
}
