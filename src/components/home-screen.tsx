"use client";

import React, { useState } from "react";
import CreateShortenUrl from "./create-shorten-url";
import CopyShortenedUrl from "./copy-shortened-url";

export default function HomeScreen() {
  const [longURL, setLongURL] = useState<string>("");
  const [shortURL, setShortURL] = useState<string>("");

  return (
    <main className="p-4">
      <h1 className="text-center mt-8 md:mt-10 text-2xl md:text-4xl font-bold text-sky-500">
        Tiny-URL
      </h1>
      <h2 className="mt-3 text-center text-2xl md:text-4xl text-neutral-300">
        Shorten Your URLs with Ease
      </h2>
      {shortURL === "" && (
        <CreateShortenUrl
          longURL={longURL}
          setLongURL={setLongURL}
          setShortURL={setShortURL}
        />
      )}
      {shortURL !== "" && (
        <CopyShortenedUrl
          longURL={
            "https://chat.openai.com/c/c592b21c-aeff-4b8b-b6d0-d906b19cdd9a"
          }
          shortURL="https://chat.openai.com"
        />
      )}
    </main>
  );
}
