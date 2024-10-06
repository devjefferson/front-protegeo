import { User } from "next-auth";
import { getMe as me } from '@/services/me';

export default async function getMe(token: string): Promise<User | undefined> {
  try {
    if (token === "12345689") {
      const user = await me()
      
      return {
        ...user,
      };
    }
  } catch (error) {
    return undefined;
  }
}
