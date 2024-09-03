'use server'
import { cookies } from 'next/headers';
 
export async function setSession(accessToken: string)
{
  const expiresAt = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000);
  cookies().set('access-token', accessToken, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
}