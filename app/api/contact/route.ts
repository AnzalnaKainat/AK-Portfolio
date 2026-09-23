import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { siteConfig } from "@/lib/site-config";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  budget: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, budget, message } = parsed.data;

    // Resend requires RESEND_API_KEY to be set in your environment.
    // Add it to .env.local — see .env.example.
    if (!process.env.RESEND_API_KEY) {
      console.warn(
        "RESEND_API_KEY is not set — skipping email send. Configure it in .env.local to enable delivery."
      );
      return NextResponse.json({ ok: true, delivered: false });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: `Portfolio Contact <onboarding@resend.dev>`,
      to: siteConfig.email,
      replyTo: email,
      subject: `New message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Budget: ${budget || "Not specified"}`,
        "",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
