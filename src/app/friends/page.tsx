import type { friends } from "@prisma/client";

import Card from "@/components/Card";
import { AsideLeft, AsideRight } from "@/components/Aside";
import { Config } from "@/Config";
import Waline from "@/components/Posts/Comments";
import { LinkCardBig } from "@/components/friends/LinkCard";

export default async function Friends() {
  const data = await fetch("http://localhost:3000/api/friends", {
    method: "GET",
  });
  const friends: { [key: string]: friends[] }[] = await data.json();
  console.log(friends);
  return (
    <>
      <AsideLeft types={Config.aside.friends.left} />
      <div className="post flex flex-col gap-4 w-[40%] max-md:w-[90%]">
        <Card className="flex-wrap w-full">
          <h2>友联</h2>
          {Object.entries(friends).map((category) => {
            return category[0].map((friend) => (
              <LinkCardBig key={friend.id} {...friend} />
            ));
          })}
        </Card>
        {Config.waline && <Waline {...Config.waline} path="/friends" />}
      </div>
      <AsideRight types={Config.aside.friends.right} />
    </>
  );
}
