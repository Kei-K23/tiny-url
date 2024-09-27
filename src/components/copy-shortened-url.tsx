import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CopyShortenedUrlProps = {
  shortURL: string;
  longURL: string;
};

export default function CopyShortenedUrl({
  longURL,
  shortURL,
}: CopyShortenedUrlProps) {
  return (
    <Card className="max-w-2xl mt-10 md:mt-12 mx-auto">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Your shortened URL</CardTitle>
        <CardDescription>
          Copy the short link and share it in messages, texts, posts, websites
          and other locations with tiny amount of text.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex h-10 md:h-12"
        >
          <Input
            value={shortURL}
            className="h-full text-sm md:text-[16px]"
            placeholder="Paste your long URL here..."
            readOnly
          />
          <Button
            variant={"secondary"}
            className="h-full text-sm md:text-[16px]"
          >
            Copy URL
          </Button>
        </form>
        <p className="mt-4">Long URL: {longURL}</p>
      </CardContent>
      <CardFooter>
        <Button>Shorten another URL</Button>
      </CardFooter>
    </Card>
  );
}
