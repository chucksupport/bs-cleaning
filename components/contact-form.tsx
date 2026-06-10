"use client";

import * as React from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "submitting" | "success" | "error";

const SERVICE_OPTIONS = [
  { value: "trash-bin", label: "Trash bin cleaning" },
  { value: "pressure-washing", label: "Pressure washing" },
  { value: "both", label: "Both" },
] as const;

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      serviceType: formData.get("serviceType"),
      notes: formData.get("notes"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-primary/40 bg-card p-10 text-center">
        <CheckCircle2 className="size-12 text-primary" />
        <h2 className="text-2xl font-bold">Thanks — we&apos;ll be in touch!</h2>
        <p className="max-w-md text-muted-foreground">
          Your quote request is on its way. Expect a reply soon. In the
          meantime, feel free to call or text us directly.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name *</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="address">Service address</Label>
          <Input
            id="address"
            name="address"
            autoComplete="street-address"
            placeholder="Street, city, ZIP"
          />
        </div>
      </div>

      <fieldset className="grid gap-3">
        <legend className="mb-1 text-sm font-medium">
          What do you need? *
        </legend>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          {SERVICE_OPTIONS.map((option, index) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-2 text-sm"
            >
              <input
                type="radio"
                name="serviceType"
                value={option.value}
                defaultChecked={index === 0}
                required
                className="size-4 accent-primary"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="How many bins? How often? Anything we should know?"
        />
      </div>

      {status === "error" && error ? (
        <p className="text-sm text-destructive">{error}</p>
      ) : null}

      <Button
        type="submit"
        size="xl"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="animate-spin" />
            Sending…
          </>
        ) : (
          "Get my free quote"
        )}
      </Button>
    </form>
  );
}
