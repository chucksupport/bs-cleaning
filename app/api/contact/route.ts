import { NextResponse } from "next/server";

import { sendQuoteRequest, type QuoteRequest } from "@/lib/email";

const SERVICE_TYPES = ["trash-bin", "pressure-washing", "both"] as const;

export async function POST(request: Request) {
  let body: Partial<QuoteRequest>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const serviceType = body.serviceType?.trim();

  if (!name || !email || !serviceType) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and service type are required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (!SERVICE_TYPES.includes(serviceType as (typeof SERVICE_TYPES)[number])) {
    return NextResponse.json(
      { ok: false, error: "Please choose a valid service type." },
      { status: 400 }
    );
  }

  const result = await sendQuoteRequest({
    name,
    email,
    phone: body.phone?.trim(),
    address: body.address?.trim(),
    serviceType,
    notes: body.notes?.trim(),
  });

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: "Something went wrong sending your request." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
