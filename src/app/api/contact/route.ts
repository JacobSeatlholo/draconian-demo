import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(120),
  email: z.string().email("Please provide a valid email address").max(200),
  phone: z.string().max(40).optional().nullable(),
  service: z.string().max(80).optional().nullable(),
  message: z.string().min(5, "Message must be at least 5 characters").max(4000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      const firstError =
        parsed.error.issues[0]?.message ?? "Please check the form fields";
      return NextResponse.json(
        { success: false, error: firstError },
        { status: 400 }
      );
    }

    const lead = await db.contactLead.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        service: parsed.data.service || null,
        message: parsed.data.message,
      },
    });

    return NextResponse.json({ success: true, id: lead.id }, { status: 201 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Unable to submit right now — please email info@draconian.co.za" },
      { status: 500 }
    );
  }
}
