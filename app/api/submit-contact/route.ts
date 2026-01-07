import { NextRequest, NextResponse } from 'next/server';
import { validatePhoneByCountry } from '@/utils/phoneValidation';

const CONTACT_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwGhEIMxex7suLQf6GfEIiyc5zvwb7HivcXPFyJBaT-2qRqRn2C1oEFInE0p70RYzYJ/exec';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'company', 'country', 'hearAbout', 'department', 'service', 'message'];
    const missingFields = requiredFields.filter(field => !body[field] || body[field].trim() === '');
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required fields',
          missingFields 
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid email format',
          field: 'email'
        },
        { status: 400 }
      );
    }

    // Validate message length
    if (body.message.trim().length < 10) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Message must be at least 10 characters',
          field: 'message'
        },
        { status: 400 }
      );
    }

    // Validate phone if provided
    if (body.phone && body.phone.trim()) {
      const phoneValidation = validatePhoneByCountry(body.phone, body.country || '');
      if (!phoneValidation.valid) {
        return NextResponse.json(
          { 
            success: false, 
            error: phoneValidation.error || 'Invalid phone number',
            field: 'phone'
          },
          { status: 400 }
        );
      }
    }

    // Format timestamp in Cairo timezone (12-hour format)
    const now = new Date();
    const cairoTime = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Africa/Cairo',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(now);
    
    // Submit to Google Sheets via Apps Script
    const response = await fetch(CONTACT_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        company: body.company,
        phone: body.phone || '',
        country: body.country,
        hearAbout: body.hearAbout,
        department: body.department,
        service: body.service,
        message: body.message,
        timestamp: cairoTime,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Google Sheets');
    }

    const result = await response.json();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Your message has been submitted successfully!' 
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to submit message. Please try again later.' 
      },
      { status: 500 }
    );
  }
}
