import { generateHash } from "@/lib/hash";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  const resBody = await request.json();
  const longURL = resBody.longURL;

  // Generated hash value is shortURL
  const shortURL = await generateHash(longURL);

  return NextResponse.json({ shortURL }, { status: 200 });
}
