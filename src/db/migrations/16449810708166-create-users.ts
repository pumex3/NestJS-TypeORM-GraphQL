/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { query } from 'express';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';
export class createUsers16449810708166 implements MigrationInterface {
  private table = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },

      {
        name: 'email',
        type: 'varchar',
        length: '255',
        isUnique: true,
        generationStrategy: 'increment',
      },
      {
        name: 'created_at',
        type: 'timestamptz',
        isPrimary: false,
        isNullable: false,
        default: 'now()',
    },
    {
        name: 'updated_at',
        type: 'timestamptz',
        isPrimary: false,
        isNullable: false,
        default: 'now()',
    }],
    
  })
  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.createTable(this.table)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.dropTable(this.table)
  }
}
