import React from "react";

export default function FooterSection() {
  return (
    <footer>
      <p className="text-center text-neutral-400">
        Copyright @ {new Date().getFullYear()} tiny-url
      </p>
      <p className="text-center text-neutral-400">
        Build with 💙 by{" "}
        <a
          href="https://github.com/Kei-K23"
          target="_blank"
          className="text-sky-500 hover:underline"
        >
          Kei-K23
        </a>
      </p>
    </footer>
  );
}
