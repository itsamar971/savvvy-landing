import { NextResponse } from "next/server";

interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  phone?: string;
  teamSize?: string;
  createdAt: string;
}

const leads: Lead[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, teamSize } = body;

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Name, email, and company are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const lead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      phone: phone?.trim(),
      teamSize,
      createdAt: new Date().toISOString(),
    };

    leads.push(lead);
    console.log("Lead captured:", lead);

    return NextResponse.json(
      { message: "Lead captured successfully", id: lead.id },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ leads, total: leads.length });
}
