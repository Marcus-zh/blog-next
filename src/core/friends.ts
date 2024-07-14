import { Friend } from '@/interface/friends';
import { db } from './db';

export async function createFriendsTable() {
  await db.schema
    .createTable('friends')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('name', 'varchar(255)', (col) => col.notNull())
    .addColumn('email', 'varchar(255)', (col) => col.notNull().unique())
    .addColumn('acceptPush', 'boolean', (col) => col.notNull())
    .addColumn('avatar', 'varchar(255)', (col) => col.notNull())
    .addColumn('link', 'varchar(255)', (col) => col.notNull())
    .addColumn('bio', 'varchar(255)', (col) => col.notNull())
    .execute();
}

export async function addFriend(friend: Friend) {
  await db.insertInto('friends').values(friend).execute();
}

export async function updateFriend(id: number, friend: Partial<Friend>) {
  await db.updateTable('friends')
    .set(friend)
    .where('id', '=', id)
    .execute();
}

export async function deleteFriend(id: number) {
  await db.deleteFrom('friends').where('id', '=', id).execute();
}

export async function getAllFriends() {
  return await db.selectFrom('friends')
    .select(['id', 'name', 'email', 'acceptPush', 'avatar', 'link', 'bio'])
    .execute();
}

export async function deleteFriendsTable() {
  await db.schema.dropTable('friends').execute();
}
