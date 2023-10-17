import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnEmailToUserTable1697558909903 implements MigrationInterface {
    name = 'AddColumnEmailToUserTable1697558909903'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
    }

}
