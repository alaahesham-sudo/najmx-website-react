import { NextRequest, NextResponse } from 'next/server';
import { validatePhoneByCountry } from '@/utils/phoneValidation';

const CAREERS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzeX1LTsDmd2pO8kV4W4E7D6oWqpwknuJPCEAB6xlgIIWKRrOXpEoqtr4Bz1ilRqrVWcQ/exec';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'jobTitle', 'experience', 'country', 'hearAbout', 'resume'];
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

    // Validate phone number
    if (!body.phone || !body.phone.trim()) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Phone number is required',
          field: 'phone'
        },
        { status: 400 }
      );
    }
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

    // Validate URL format for resume
    try {
      new URL(body.resume);
    } catch {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid resume URL format',
          field: 'resume'
        },
        { status: 400 }
      );
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
    const response = await fetch(CAREERS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        phone: body.phone,
        jobTitle: body.jobTitle,
        experience: body.experience,
        country: body.country,
        hearAbout: body.hearAbout,
        resume: body.resume,
        coverLetter: body.coverLetter || '',
        timestamp: cairoTime,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Google Sheets');
    }

    const result = await response.json();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully!' 
    });
  } catch (error) {
    console.error('Error submitting careers form:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to submit application. Please try again later.' 
      },
      { status: 500 }
    );
  }
}
