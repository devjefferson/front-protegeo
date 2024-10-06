'use server'

import { TCustomer } from '@/models/customer'
import cryptoJS from 'crypto-js'
import { cookies } from 'next/headers'



const ME_KEY = 'MY_ME'

export async function setMe(user: TCustomer | null) {
  const encrypted = cryptoJS.AES.encrypt(
    JSON.stringify(user),
    process.env.NEXTAUTH_SECRET as string,
  ).toString()

  const expires = new Date()

  // Expires in 23 hours
  expires.setTime(expires.getTime() + 23 * 60 * 60 * 1000 - 3 * 60 * 60 * 1000)

  cookies().set(ME_KEY, encrypted, {
    expires,
    secure: true,
  })
}

export async function getMe() {
  const me = cookies().get(ME_KEY)


  if (!me) return

  const bytes = cryptoJS.AES.decrypt(
    me?.value as string,
    process.env.NEXTAUTH_SECRET as string,
  )

  try {
    return JSON.parse(bytes.toString(cryptoJS.enc.Utf8))
  } catch (error) {
    return {}
  }
}

export async function deleteMe() {
  cookies().delete(ME_KEY)
}
