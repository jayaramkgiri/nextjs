/*
  Warnings:

  - A unique constraint covering the columns `[cin]` on the table `Company` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UQ_Company_Cin" ON "Company"("cin");

-- AddForeignKey
ALTER TABLE "Issuance" ADD CONSTRAINT "company_foreign_key" FOREIGN KEY ("cin") REFERENCES "Company"("cin") ON DELETE NO ACTION ON UPDATE NO ACTION;
