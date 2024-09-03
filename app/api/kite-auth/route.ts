import { KiteConnect } from 'kiteconnect';
import { setSession } from '@/app/actions';
import { redirect } from 'next/navigation';
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const kc = new KiteConnect({ api_key: process.env.KITE_API_KEY! });
  const searchParams = request.nextUrl.searchParams

  console.log(searchParams.get('request_token'));
  if ( searchParams.get('request_token') !== undefined) {
    const response = await kc.generateSession(
      searchParams.get('request_token')!,
      process.env.KITE_API_SECRET!,
    );
    const accessToken = response.access_token;
    kc.setAccessToken(accessToken);
    const profile = await kc.getProfile();
    console.log(response.access_token);
    console.log('Profile:', profile);
    setSession(accessToken);
  }
  redirect('/market');
}
