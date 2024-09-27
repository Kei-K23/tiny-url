import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CreateShortenUrlProps = {
  longURL: string;
  setLongURL: React.Dispatch<React.SetStateAction<string>>;
};

export default function CreateShortenUrl({
  longURL,
  setLongURL,
}: CreateShortenUrlProps) {
  return (
    <Card className="mt-10 md:mt-14">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">
          Paste the URL to be shortened
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex h-10 md:h-14">
          <Input
            value={longURL}
            onChange={(e) => setLongURL(e.target.value)}
            className="h-full text-sm md:text-lg"
            placeholder="Paste your long URL here..."
          />
          <Button className="h-full text-sm md:text-lg">Shorten URL</Button>
        </form>
      </CardContent>
      <CardFooter>
        <p>
          Make your links cleaner, more shareable, and easier to remember. Our
          URL shortener service transforms long, cluttered URLs into simple,
          clickable links in just seconds.
        </p>
      </CardFooter>
    </Card>
  );
}
