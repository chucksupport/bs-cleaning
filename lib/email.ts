import { Resend } from "resend";

import { siteConfig } from "@/lib/site";

/**
 * Thin wrapper around the Resend SDK that gracefully no-ops when no API key is
 * configured. Mirrors the Homeroomie email helper: in local dev (or any env
 * without RESEND_API_KEY) the message is logged instead of sent, so the contact
 * form keeps working end-to-end without credentials.
 */
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Where quote requests are delivered. Falls back to the placeholder inbox.
const toAddress = process.env.CONTACT_FORM_TO || siteConfig.email;

// Resend requires a verified sender. `onboarding@resend.dev` works out of the
// box for testing; swap to a verified domain address once DNS is set up.
const fromAddress =
  process.env.CONTACT_FORM_FROM ||
  "B's Trash Bin Cleaning <onboarding@resend.dev>";

export type QuoteRequest = {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  serviceType: string;
  notes?: string;
};

type SendResult = { ok: true; skipped: boolean } | { ok: false; error: string };

export async function sendQuoteRequest(
  data: QuoteRequest
): Promise<SendResult> {
  const subject = `New quote request from ${data.name}`;
  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    `Address: ${data.address || "—"}`,
    `Service: ${data.serviceType}`,
    "",
    "Notes:",
    data.notes || "(none)",
  ];
  const text = lines.join("\n");

  if (!resend) {
    // No API key configured — log instead of sending so dev still works.
    console.info(
      `[email] RESEND_API_KEY not set — quote request logged instead of sent.\nTo: ${toAddress}\nSubject: ${subject}\n${text}`
    );
    return { ok: true, skipped: true };
  }

  try {
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: data.email,
      subject,
      text,
    });

    if (error) {
      console.error("[email] Resend returned an error:", error);
      return { ok: false, error: error.message };
    }

    return { ok: true, skipped: false };
  } catch (err) {
    console.error("[email] Failed to send quote request:", err);
    return { ok: false, error: "Failed to send email." };
  }
}
