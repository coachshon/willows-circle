"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="mb-4 text-4xl font-bold">Error</h1>
      <p className="mb-8 text-xl text-muted-foreground">
        Something went wrong!{" "}
        {error.digest ? `(Error ID: ${error.digest})` : ""}
      </p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
