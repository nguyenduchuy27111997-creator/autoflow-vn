"use client";

import { useEffect } from "react";
import { fbpixelEvent } from "@/lib/fbpixel";

interface Props {
  contentName: string;
}

/**
 * Fires a Facebook Pixel ViewContent event on mount.
 * Renders nothing — pure side-effect client component.
 * Safe no-op when Pixel is not loaded (consent denied).
 */
export default function PixelViewContent({ contentName }: Props) {
  useEffect(() => {
    fbpixelEvent("ViewContent", { content_name: contentName });
  }, [contentName]);

  return null;
}
