import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterCarUpdateLincenseToLicense1669407890104
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn("cars", "lincense_place", "license_place");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn("cars", "license_place", "lincense_place");
  }
}
