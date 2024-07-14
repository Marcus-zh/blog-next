import { createKysely } from '@vercel/postgres-kysely';

import { Database } from '@/interface/db';
import { createFriendsTable, deleteFriendsTable } from '@/core/friends';

export const db = createKysely<Database>();

export async function initDatabase(){
  await createFriendsTable();
  // 添加更多表初始化
}

export async function deleteDatabase(){
  await deleteFriendsTable();
  // 添加更多表删除
}