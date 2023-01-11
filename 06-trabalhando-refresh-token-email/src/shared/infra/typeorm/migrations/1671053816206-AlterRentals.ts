import { query } from "express";
import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterRentals1671053816206 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "rentals" ALTER COLUMN "total" DROP NOT NULL`
    );

    await queryRunner.query(
      `ALTER TABLE "rentals" ALTER COLUMN "end_date" DROP NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "rentals" ALTER COLUMN "total" SET NOT NULL`
    );

    await queryRunner.query(
      `ALTER TABLE "rentals" ALTER COLUMN "end_date" SET NOT NULL`
    );
  }
}
