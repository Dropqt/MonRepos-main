"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

// Prati klikove na sve tel: i mailto: linkove na sajtu (footer, kontakt, sticky dugmad)
// bez potrebe da svaka komponenta bude klijentska.
export default function AnalyticsListener() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";

      if (href.startsWith("tel:")) {
        sendGAEvent("event", "contact_click", {
          method: "phone",
          contact_value: href.replace("tel:", ""),
        });
      } else if (href.startsWith("mailto:")) {
        sendGAEvent("event", "contact_click", {
          method: "email",
          contact_value: href.replace("mailto:", ""),
        });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
