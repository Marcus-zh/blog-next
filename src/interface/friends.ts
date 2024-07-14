export interface Friend {
  id: number;
  name: string;
  avatar: string;
  link: string;
  bio: string;
  email: string;
  acceptPush: boolean;
}

export interface FriendsThatAcceptPush {
  id: number;
  name: string;
  email: string;
}