/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cashin` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cashout` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "value" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "balance" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "cashin" BOOLEAN NOT NULL,
ADD COLUMN     "cashout" BOOLEAN NOT NULL,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");
