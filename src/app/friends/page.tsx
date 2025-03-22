import type { friends, friends_category } from "@prisma/client";
import Card from "@/components/Card";
import { AsideLeft, AsideRight } from "@/components/Aside";
import { Config } from "@/Config";
import Waline from "@/components/Posts/Comments";
import {
  LinkCardForRedish,
  LinkCardLarge,
  LinkCardMedium,
  LinkCardSmall,
  Title,
} from "@/components/Friends/LinkCard";

export default async function Friends() {
  // try {
  const data = await fetch("https://blog-next.marcus233.top/api/friends", {
    method: "GET",
  });

  if (!data.ok) {
    throw new Error(`HTTP error! status: ${data.status}`);
  }

  const friendGroups: (friends_category & { friends: friends[] })[] =
    await data.json();
  let item = 0;
  return (
    <>
      <div className="post flex flex-col gap-5 w-[90%] max-md:w-[90%]">
        <Card className="flex-wrap w-full" hidden>
          <div className="markdown">
            <h1>友情链接</h1>
          </div>

          <div className="friendsgroup flex flex-col justify-center gap-5 ">
            {friendGroups.map((friendGroup, group) => (
              <div
                className="friends flex flex-col gap-5"
                key={friendGroup.id}
              >
                <Title
                  text={friendGroup.name}
                  time={item * 0.1 + (group - 1) * 0.2}
                />
                <div
                  className="friends flex flex-wrap justify-start gap-5 "
                  key={friendGroup.id}
                >
                  {friendGroup.friends.map((friend: friends, index) => {
                    item++;
                    if (friend.id == 114)
                      return (
                        <LinkCardForRedish
                          key={friend.id}
                          {...friend}
                          time={(item - 1) * 0.1 + group * 0.2}
                        />
                      );
                    switch (friendGroup.type) {
                      case "large":
                        return <LinkCardLarge key={friend.id} {...friend} />;
                      case "medium":
                        return (
                          <LinkCardMedium
                            key={friend.id}
                            {...friend}
                            time={(item - 1) * 0.1 + group * 0.2}
                          />
                        );
                      case "small":
                        return (
                          <LinkCardSmall
                            key={friend.id}
                            {...friend}
                            time={(item - 1) * 0.1 + group * 0.2}
                          />
                        );
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
  // } catch (error) {
  //   console.error("Failed to fetch friends data:", error);
  //   return <p>加载友联数据失败，请稍后再试。</p>;
  // }
}
