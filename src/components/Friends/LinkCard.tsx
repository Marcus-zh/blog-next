"use client";
import type { friends } from "@prisma/client";
import Card from "@/components/Card";
import { motion } from "framer-motion";

export function LinkCardLarge({
  id,
  siteName,
  siteLink,
  siteImg,
  siteBanner,
  bio,
}: friends) {
  return (
    <motion.div
      animate={{ x: 0, y: 0, opacity: 1 }}
      initial={{ x: -5, y: -10, opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * id + 0.2 }}
      className="w-[calc(100%/6-1.25rem)]"
    >
      <Card>
        <a href={siteLink} className="flex flex-col" target="_blank">
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
    </motion.div>
  );
}

export function LinkCardMedium({
  id,
  siteName,
  siteLink,
  siteImg,
  bio,
  time,
}: friends & { time: number }) {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 10, opacity: 0,scale:1.0}}
      whileHover={{ scale: 1.05 }}
      transition={{
        // 仅对 y 和 opacity 添加 delay
        y: { duration: 0.1, delay: time },
        opacity: { duration: 0.1, delay: time },
        // scale 的动画保持无延迟
        scale: { duration: 0.1 }
      }}
      className="w-[calc(100%/5-1.25rem)]"
    >
      <Card className="items-center h-full">
        <a href={siteLink} className="flex flex-row p-2 w-full" target="_blank">
          <div className="cover w-[40%] flex items-center">
            <img
              src={siteImg}
              alt={siteName}
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <div className="info flex flex-col items-start gap-1 w-[60%] h-full pl-2">
            <span className="name overflow-hidden text-ellipsis whitespace-nowrap">
              {siteName}
            </span>
            <span className="bio text-sm line-clamp-2 text-ellipsis">
              {bio}
            </span>
          </div>
        </a>
      </Card>
    </motion.div>
  );
}

export function LinkCardForRedish({
  id,
  siteName,
  siteLink,
  siteImg,
  bio,
  time,
}: friends & { time: number }) {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 10, opacity: 0,scale:1.0}}
      whileHover={{ scale: 1.05 }}
      transition={{
        // 仅对 y 和 opacity 添加 delay
        y: { duration: 0.1, delay: time },
        opacity: { duration: 0.1, delay: time },
        // scale 的动画保持无延迟
        scale: { duration: 0.1 }
      }}
      className="group w-[calc(100%/5-1.25rem)]"
    >
      <Card className="items-center h-full">
        <a href={siteLink} className="flex flex-row p-2 w-full" target="_blank">
            <div className="cover w-[40%] flex items-center">
              <motion.img
              src="https://q1.qlogo.cn/g?b=qq&nk=3974549032&s=5"
              alt={siteName}
              className="object-cover w-full h-full rounded-full"
              whileHover={{ rotate: 36000000, scale: 10 }}
              transition={{duration: 3600}}
              />
            </div>
          <div className="info flex flex-col items-start gap-1 w-[60%] h-full pl-2">
            <span className="name overflow-hidden text-ellipsis whitespace-nowrap">
              {siteName}
            </span>
            <span className="bio text-sm line-clamp-2 text-ellipsis">
              {bio}
            </span>
          </div>
        </a>
      </Card>
    </motion.div>
  );
}

export function LinkCardSmall({
  siteName,
  siteLink,
  time,
}: friends & { time: number }) {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 10, opacity: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{
        // 仅对 y 和 opacity 添加 delay
        y: { duration: 0.1, delay: time },
        opacity: { duration: 0.1, delay: time },
        // scale 的动画保持无延迟
        scale: { duration: 0.1 }
      }}
      className="w-[calc(100%/5-1.25rem)]"
    >
      <Card className="flex-row p-2 gap-2">
        <span className="name w-full overflow-hidden text-ellipsis whitespace-nowrap max-w-[calc(100%-0.5rem)]">
          {siteName}
          <br />
          {siteLink}
        </span>
      </Card>
    </motion.div>
  );
}

export function Title({ text, time }: { text: string; time: number }) {
  return (
    <motion.h3
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 10, opacity: 0 }}
      transition={{ duration: 0.2, delay: time }}
      className="text-xl"
    >
      {text}
    </motion.h3>
  );
}
