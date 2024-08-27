import type { friends } from "@prisma/client";
import Card from "@/components/Card";
import Link from "next/link";

export function LinkCardLarge({
  siteName,
  siteLink,
  siteImg,
  siteBanner,
  bio,
}: friends) {
  return (
    <Card className="w-[calc(100%/6-1.25rem)] bg-zinc-500">
      <a href={siteLink} className="flex flex-col">
        <div className="cover w-full h-[60%]">
          <img
            src={siteBanner || siteImg}
            alt={siteName}
            className="rounded-t-2xl w-full h-full object-cover"
          />
        </div>
        <div className="info w-full h-[40%] p-2 flex flex-row items-start gap-2">
          <img
            src={siteImg}
            alt={siteName}
            className="avatar h-5 w-5 rounded-full"
          />
          <div className="text flex flex-col gap-1">
            <span>{siteName}</span>
            <span className="text-sm line-clamp-2">{bio}</span>
          </div>
        </div>
      </a>
    </Card>
  );
}

export function LinkCardMedium({ siteName, siteLink, siteImg, bio }: friends) {
  return (
    <Card className="group w-[calc(100%/5-1.25rem)] border-zinc-600 border-solid border-[1px] ease-in-out duration-1000 items-center hover:items-start hover:bg-sky-600">
      <a href={siteLink} className="flex flex-row p-2 w-full">
        <div className="cover w-[40%] flex items-center group-hover:w-0">
          <img
            src={siteImg}
            alt={siteName}
            className="object-cover w-full h-full rounded-full group-hover:w-0 group-hover:h-0 group-hover:opacity-0 duration-300 group-hover:duration-500"
          />
        </div>
        <div className="info flex flex-col items-start gap-1 w-[60%] h-full pl-2 group-hover:w-full">
          <span className="name overflow-hidden text-ellipsis whitespace-nowrap">
            {siteName}
          </span>
          <span className="bio text-sm line-clamp-2 text-ellipsis">{bio}</span>
        </div>
      </a>
    </Card>
  );
}

export function LinkCardSmall({ siteName, siteImg }: friends) {
  return (
    <Card className="group w-[calc(100%/5-1.25rem)] bg-zinc-500 flex-row p-2 gap-2">
      <div className="cover w-[20%]">
        <img
          src={siteImg}
          alt={siteName}
          className="object-cover w-full h-full rounded-full"
        />
      </div>
      <span className="name w-[80%] overflow-hidden text-ellipsis whitespace-nowrap max-w-[calc(100%-0.5rem)]">
        {siteName}
      </span>
    </Card>
  );
}
