import React, { useState } from "react";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type CopyShortenedUrlProps = {
  shortURL: string;
  longURL: string;
  setLongURL: React.Dispatch<React.SetStateAction<string>>;
  setShortURL: React.Dispatch<React.SetStateAction<string>>;
};

export default function CopyShortenedUrl({
  longURL,
  shortURL,
  setLongURL,
  setShortURL,
}: CopyShortenedUrlProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const shortUrl = `${process.env.NEXT_PUBLIC_APP_URL}/${shortURL}`;

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
          className="flex h-10 md:h-12 gap-1"
        >
          <Input
            value={shortUrl}
            className="h-full text-sm md:text-[16px]"
            placeholder="Paste your long URL here..."
            readOnly
          />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => {
                    setIsCopied(true);
                    navigator.clipboard.writeText(shortUrl);
                    setTimeout(() => {
                      setIsCopied(false);
                    }, 2000);
                  }}
                  variant={"secondary"}
                  className="h-full text-sm md:text-[16px]"
                >
                  Copy URL
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {isCopied ? <p>Copied</p> : <p>Copy</p>}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </form>
        <p className="mt-4">Long URL: {longURL}</p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => {
            setLongURL("");
            setShortURL("");
          }}
        >
          Shorten another URL
        </Button>
      </CardFooter>
    </Card>
  );
}
