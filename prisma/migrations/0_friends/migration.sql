-- CreateTable
CREATE TABLE "friends" (
    "id" SERIAL NOT NULL,
    "siteName" VARCHAR(255) NOT NULL DEFAULT '',
    "siteImg" VARCHAR(255) NOT NULL,
    "bio" VARCHAR(255) NOT NULL,
    "acceptPush" BOOLEAN DEFAULT false,
    "wlUserID" INTEGER,

    CONSTRAINT "friends_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "friends_wlUserID_key" ON "friends"("wlUserID");

-- AddForeignKey
ALTER TABLE "friends" ADD CONSTRAINT "friends_wlUserID_fkey" FOREIGN KEY ("wlUserID") REFERENCES "wl_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

