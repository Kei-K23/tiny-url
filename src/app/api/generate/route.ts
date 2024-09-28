import { db } from "@/db/drizzle";
import { urlMappings } from "@/db/schema";
import { generateHash } from "@/lib/hash";
import { NextRequest, NextResponse } from "next/server";
import { createId } from "@paralleldrive/cuid2";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  const resBody = await request.json();
  const longURL = resBody.longURL;

  try {
    // Generated hash value is shortURL
    const shortURLHashValue = await generateHash(longURL);

    const [urlMapping] = await db
      .insert(urlMappings)
      .values({ id: createId(), longUrl: longURL, shortUrl: shortURLHashValue })
      .returning({
        shortURL: urlMappings.shortUrl,
      });

    return NextResponse.json(
      { shortURL: urlMapping.shortURL },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
