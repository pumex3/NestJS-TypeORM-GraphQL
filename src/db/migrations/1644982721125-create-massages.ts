/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { query } from 'express';
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';
export class createUsers1644981070816 implements MigrationInterface {
  private table = new Table({
    name: 'messages',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },

      {
        name: 'user_id',
        type: 'integer',
        isNullable: false

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
    },


],
    
  })

  private foreignKey = new TableForeignKey({
    columnNames: ['user_id'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'users',
});

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.createTable(this.table)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.dropTable(this.table)
  }
}
