"use client";

import { X } from "lucide-react";
import Link from "next/link";

export default function SearchFormReset() {
  function handleReset() {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) {
      form.reset();
    }
  }

  return (
    <button onClick={handleReset} type="reset">
      <Link href="/" className="search-btn text-white">
        <X className="size-5"/>
      </Link>
    </button>
  );
}