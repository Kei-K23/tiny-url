import React, { FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { setStorageItems } from "@/lib/storage";
import { URLMapping } from "@/type";

type CreateShortenUrlProps = {
  longURL: string;
  storedData: URLMapping[];
  setLongURL: React.Dispatch<React.SetStateAction<string>>;
  setShortURL: React.Dispatch<React.SetStateAction<string>>;
  setStoredData: React.Dispatch<React.SetStateAction<URLMapping[]>>;
};

export default function CreateShortenUrl({
  longURL,
  setLongURL,
  setShortURL,
  setStoredData,
}: CreateShortenUrlProps) {
  // Define basic loading and error state (I use manual way because this project is quite small to use other data fetching and state management tools)

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (longURL === "") return;

    setIsLoading(true);

    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        longURL,
      }),
      cache: "no-store",
    });
    const json = await res.json();

    if (res.ok && json.data) {
      setShortURL(json.data.shortUrl);
      setIsLoading(false);

      setStorageItems("tiny_url_shortened", json.data); // Update in the localStorage
      setStoredData((prev) => {
        if (
          !prev.some((prevItem) => prevItem.shortUrl === json.data.shortUrl)
        ) {
          return [...prev, json.data];
        }
        return [...prev];
      }); // Update the state of table
      return;
    } else {
      // Response have error
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
      return;
    }
  };

  return (
    <Card className="max-w-4xl mt-10 md:mt-12 mx-auto">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">
          Paste the URL to be shortened
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex h-10 md:h-12 gap-1">
          <Input
            disabled={isLoading}
            value={longURL}
            onChange={(e) => setLongURL(e.target.value)}
            className="h-full text-sm md:text-[16px]"
            placeholder="Paste your long URL here..."
          />
          <Button
            disabled={isLoading}
            type="submit"
            variant={"secondary"}
            className="h-full text-sm md:text-[16px]"
          >
            Shorten URL
          </Button>
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
