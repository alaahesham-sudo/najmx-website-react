import { NextRequest, NextResponse } from 'next/server';

// Get this URL from Google Apps Script deployment
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || '';

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
    
    // Validate phone format if provided
    if (body.phone && !/^[\d\s\-\+\(\)]+$/.test(body.phone)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid phone number format',
          field: 'phone'
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
    
    if (!GOOGLE_SCRIPT_URL) {
      console.error('GOOGLE_SCRIPT_URL environment variable is not set');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Server configuration error. Please contact support.' 
        },
        { status: 500 }
      );
    }
    
    // Submit to Google Sheets
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formType: 'contact',
        name: body.name.trim(),
        email: body.email.trim(),
        company: body.company.trim(),
        phone: body.phone || '',
        country: body.country,
        hearAbout: body.hearAbout,
        department: body.department,
        service: body.service,
        message: body.message.trim(),
      }),
    });
    
    const result = await response.json();
    
    if (result.success) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Contact form submitted successfully!' 
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { 
          success: false, 
          error: result.error || 'Failed to submit contact form' 
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred. Please try again later.' 
      },
      { status: 500 }
    );
  }
}
