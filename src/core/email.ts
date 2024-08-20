import { render } from '@react-email/components';
import nodemailer from 'nodemailer';
// import { getAllFriends } from './friends';
import { Friend } from '@/interface/friends';

export const sender = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export function getMailOpinion(to: string, subject: string,emailHtml: string) {
  return {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html: emailHtml,
  };
}

// export async function getAllEmail(){
//   const allFriends = await getAllFriends()
//   const emailList = allFriends.map((friend: Friend) => friend.acceptPush && friend.email)
//   return emailList
// }