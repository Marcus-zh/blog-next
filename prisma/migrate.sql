-- AlterTable
ALTER TABLE "friends" DROP COLUMN "category",
ADD COLUMN     "categoryId" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "friends_category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL DEFAULT '',
    "desc" VARCHAR(255),

    CONSTRAINT "friends_category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "friends" ADD CONSTRAINT "friends_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "friends_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

