import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(
  request: NextRequest,
  { params }: { params: { shortUrl: string } }
) {
  return NextResponse.json({ shortURL: params.shortUrl }, { status: 200 });
}
