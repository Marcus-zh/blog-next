import type { friends, friends_category } from "@prisma/client";
import Card from "@/components/Card";
import { AsideLeft, AsideRight } from "@/components/Aside";
import { Config } from "@/Config";
import Waline from "@/components/Posts/Comments";
import {
  LinkCardLarge,
  LinkCardMedium,
  LinkCardSmall,
} from "@/components/Friends/LinkCard";
import { getFriendsData } from "@/utils/getData";

export default async function Friends() {
  try {
    const data = await fetch("http://localhost:3000/api/friends", {
      method: "GET",
      cache: "force-cache",
    });

    if (!data.ok) {
      throw new Error(`HTTP error! status: ${data.status}`);
    }

    const friendGroups: (friends_category & { friends: friends[] })[] =
      await data.json();
    return (
      <>
        <div className="post flex flex-col gap-5 w-[90%] max-md:w-[90%]">
          <Card className="flex-wrap w-full">
            <h2 className="text-lg">友联</h2>
            <div className="friends flex flex-col justify-center gap-5">
              {friendGroups.map((friendGroup) => (
                <div
                  className="friends flex flex-col gap-5 p-5"
                  key={friendGroup.id}
                >
                  <h3 className="text-xl">{friendGroup.name}</h3>
                  <div
                    className="friends flex flex-wrap justify-start gap-5 "
                    key={friendGroup.id}
                  >
                    {friendGroup.friends.map((friend: friends) => {
                      switch (friendGroup.type) {
                        case "large":
                          return <LinkCardLarge key={friend.id} {...friend} />;
                        case "medium":
                          return <LinkCardMedium key={friend.id} {...friend} />;
                        case "small":
                          return <LinkCardSmall key={friend.id} {...friend} />;
                        default:
                          return null;
                      }
                    })}
                  </div>
                </div>
              ))}
            </div>
          </Card>
          {Config.waline && <Waline {...Config.waline} path="/friends" />}
        </div>
      </>
    );
  } catch (error) {
    console.error("Failed to fetch friends data:", error);
    return <p>加载友联数据失败，请稍后再试。</p>;
  }
}
