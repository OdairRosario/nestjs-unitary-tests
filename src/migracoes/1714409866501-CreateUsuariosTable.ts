import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsuariosTable1631178615078 implements MigrationInterface {
  name = 'CreateUsuariosTable1631178615078';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE TBL_USUARIOS (
                CD_ID INTEGER PRIMARY KEY AUTOINCREMENT,
                DS_NOME VARCHAR NOT NULL,
                DS_EMAIL VARCHAR NOT NULL
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE TBL_USUARIOS`);
  }
}
