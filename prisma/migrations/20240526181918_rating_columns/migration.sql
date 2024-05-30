/*
  Warnings:

  - You are about to drop the column `latestRating` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `ratingAgency` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `ratingDate` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `rationale_url` on the `Company` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "latestRating",
DROP COLUMN "ratingAgency",
DROP COLUMN "ratingDate",
DROP COLUMN "rationale_url";
