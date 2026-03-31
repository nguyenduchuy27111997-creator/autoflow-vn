"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { captureUTM } from "@/lib/utm";

/** Captures UTM params from URL on landing. Mount once in root layout. */
export default function UTMCapture() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams) captureUTM(searchParams);
  }, [searchParams]);

  return null;
}
