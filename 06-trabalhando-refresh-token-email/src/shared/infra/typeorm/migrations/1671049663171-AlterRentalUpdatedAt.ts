import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterRentalUpdatedAt1671049663171 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn("rentals", "update_at", "updated_at");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn("rentals", "updated_at", "update_at");
  }
}
