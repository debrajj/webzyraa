"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./moving-border";

export function CallNowButton() {
  return (
    <Button
      borderRadius="1.75rem"
      className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      as={Link}
      href="/contact"
    >
      Call Now
    </Button>
  );
}