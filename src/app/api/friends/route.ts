import { friends, friends_category } from "@prisma/client";

import { prisma } from "@/core/db";
import { promises as fs } from "fs";
import { join } from "path";
export async function GET() {
  // let friendGroups: friends_category[] = await prisma.friends_category.findMany(
  //   {
  //     include: {
  //       friends: {
  //         select: {
  //           id: true,
  //           siteName: true,
  //           siteLink: true,
  //           siteImg: true,
  //           siteBanner: true,
  //           bio: true,
  //           acceptPush: true,
  //           rss: true,
  //           wlUserID: true,
  //           wl_users: {
  //             select: {
  //               id: true,
  //               display_name: true,
  //               email: true,
  //               url: true,
  //               label: true,
  //               createdat: true,
  //             },
  //           },
  //         },
  //         orderBy: {
  //           id: "asc"
  //         }
  //       },
  //     },
  //     orderBy: {
  //       id: "asc"
  //     }
  //   }
  // );

  // return Response.json(friendGroups);
  try {
    const data = await fs.readFile(join(process.cwd(), "src/app/api/friends/friends.json"), { encoding: 'utf-8' });
    return Response.json(JSON.parse(data));
  } catch (err) {
    return Response.json(
      {
        msg: `error: ${err}`,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  let data: friends = await req.json();
  try {
    await prisma.friends.create({
      data: data,
    });
  } catch (e) {
    return Response.json(
      {
        msg: `error: ${e}`,
      },
      { status: 500 }
    );
  }
  return Response.json(
    {
      msg: "success",
    },
    { status: 200 }
  );
}
