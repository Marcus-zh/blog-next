-- AlterTable
ALTER TABLE "friends" ADD COLUMN     "label" VARCHAR(255);

-- AlterTable
ALTER TABLE "friends_category" ADD COLUMN     "type" VARCHAR DEFAULT 'medium';

