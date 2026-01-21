import { NextResponse } from 'next/server';
import { getBanners } from '@/app/lib/cheeseData';

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const locale = url.searchParams.get('locale') || 'fa';
    const banners = await getBanners(locale);
    return NextResponse.json(banners);
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: 'Failed' }), { status: 500, headers: { 'content-type': 'application/json' } });
  }
}
