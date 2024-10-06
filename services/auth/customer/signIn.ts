import { getMe } from "@/services/me";

export type TSignIn = {
  email: string;
  password: string;
};

export default async function signIn({
  password,
  email,
}: TSignIn): Promise<{ token: string; ok: boolean } | undefined> {
  try {

   const data = await getMe()

    if (email === data.email && password === data.password) {
      return {
        token: "12345689",
        ok: true,
      };
    }
  } catch (error) {
    return undefined;
  }
}
