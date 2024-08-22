import type { friends } from "@prisma/client";
import Card from "@/components/Card";

export function LinkCardBig({
  siteName,
  siteLink,
  siteImg,
  siteBanner,
  bio,
}: friends) {
  return (
    <Card className="rounded-2xl h-52">
      <div className="cover rounded-t-2xl w-full h-[80%]">
        <img src={siteBanner || siteImg} alt={siteName} />
      </div>
      <div className="info w-full h-[20%] p-4 flex flex-row items-start gap-2">
        <img
          src={siteImg}
          alt={siteName}
          className="avatar h-5 w-5 rounded-full"
        />
        <div className="text flex flex-col gap-1">
          <span>{siteName}</span>
          {bio}
        </div>
      </div>
    </Card>
  );
}
