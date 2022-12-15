import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterRentalUpdateExpectedReturn1671049295346
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn(
      "rentals",
      "expected_date",
      "expected_return_date"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn(
      "rentals",
      "expected_return_date",
      "expected_date"
    );
  }
}
