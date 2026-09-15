"use client";

import { useEffect, useState } from "react";

const ABACUS_URL = "https://abacus.jasoncameron.dev";
const NAMESPACE = "nadoo-ai-lab";
const KEY = "visits";
const STORAGE_KEY = "nadoo-ai-lab-visits-date";

function localDateKey() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

let visitCountPromise: Promise<number | null> | null = null;

function loadVisitCount() {
  if (!visitCountPromise) {
    visitCountPromise = (async () => {
      const alreadyCountedToday = (() => {
        try {
          return localStorage.getItem(STORAGE_KEY) === localDateKey();
        } catch {
          return false;
        }
      })();

      const endpoint = alreadyCountedToday ? "get" : "hit";
      const response = await fetch(
        `${ABACUS_URL}/${endpoint}/${NAMESPACE}/${KEY}`,
        { cache: "no-store" }
      );
      if (!response.ok) return null;

      const data: unknown = await response.json();
      const value =
        typeof data === "object" &&
        data !== null &&
        "value" in data &&
        Number.isFinite(Number((data as { value: unknown }).value))
          ? Number((data as { value: unknown }).value)
          : NaN;
      if (!Number.isFinite(value)) return null;

      if (!alreadyCountedToday) {
        try {
          localStorage.setItem(STORAGE_KEY, localDateKey());
        } catch {
          // Ignore storage failures; the count still displays for this visit.
        }
      }

      return value;
    })().catch(() => null);
  }

  return visitCountPromise;
}

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    loadVisitCount().then((value) => {
      if (!cancelled && value !== null) setCount(value);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null;

  return (
    <span className="inline-flex items-center gap-1 tabular-nums">
      <span aria-hidden="true">👁</span>
      <span>{count.toLocaleString()}</span>
    </span>
  );
}
