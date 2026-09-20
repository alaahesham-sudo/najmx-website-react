
import { NextRequest, NextResponse } from "next/server";
import { validatePhoneByCountry } from "@/utils/phoneValidation";

const QUOTE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbywtgblNfUqkIuOWZmIanKf1Hp6nKxmGSY8w5g5FvPRjFzIilUkoDKz4_KSkBuqhwWc2g/exec";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = [
      "name",
      "email",
      "company",
      "phone",
      "country",
      "service",
      "contactMethod",
      "hearAbout",
      "message",
      "consent",
    ];

    const missingFields = requiredFields.filter((field) => {
      const value = body[field];

      if (typeof value === "boolean") {
        return !value;
      }

      return !value || String(value).trim() === "";
    });

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields",
          missingFields,
        },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid email format",
          field: "email",
        },
        { status: 400 }
      );
    }

    // Validate phone
    const phoneValidation = validatePhoneByCountry(
      body.phone,
      body.country || ""
    );

    if (!phoneValidation.valid) {
      return NextResponse.json(
        {
          success: false,
          error: phoneValidation.error || "Invalid phone number",
          field: "phone",
        },
        { status: 400 }
      );
    }

    // Validate message length
    if (body.message.trim().length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide more details about your requirements.",
          field: "message",
        },
        { status: 400 }
      );
    }

    // Collect submission metadata
    const userAgent = request.headers.get("user-agent") || "";
    const referrer = request.headers.get("referer") || "";

    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");

    const ip =
      realIp ||
      forwardedFor?.split(",")[0].trim() ||
      "Unknown";

    // Format timestamp in Cairo timezone
    const now = new Date();

    const cairoTime = new Intl.DateTimeFormat("en-US", {
      timeZone: "Africa/Cairo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(now);

    // Submit to Google Sheets via Apps Script
    const response = await fetch(QUOTE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        company: body.company,
        phone: body.phone,
        country: body.country,
        service: body.service,
        contactMethod: body.contactMethod,
        hearAbout: body.hearAbout,
        message: body.message,
        consent: body.consent,

        // Submission metadata
        ip,
        userAgent,
        referrer,
        pageUrl: body.pageUrl || "",

        timestamp: cairoTime,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit quote to Google Sheets");
    }

    await response.json();

    return NextResponse.json({
      success: true,
      message:
        "Your request has been submitted successfully. Thank you — the NajmX team will review your details and contact you shortly.",
    });
  } catch (error) {
    console.error("Error submitting quote form:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}
