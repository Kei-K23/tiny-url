"use client";

import React, { useState } from "react";
import CreateShortenUrl from "./create-shorten-url";

export default function HomeScreen() {
  const [longURL, setLongURL] = useState<string>("");

  return (
    <main className="p-4">
      <h1 className="text-center mt-16 md:mt-20 text-2xl md:text-4xl font-bold text-sky-500">
        Tiny-URL
      </h1>
      <h2 className="mt-3 text-center text-2xl md:text-4xl text-neutral-300">
        Shorten Your URLs with Ease
      </h2>
      <CreateShortenUrl longURL={longURL} setLongURL={setLongURL} />
    </main>
  );
}
