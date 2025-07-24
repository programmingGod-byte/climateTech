import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb';
import Contact from '../../../models/Contact';
import { ContactFormData } from '../../../types/contact';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body: ContactFormData = await request.json();
    const { name, email, message, phone, location } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      );
    }

    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      phone: phone?.trim() || '',
      location: location?.trim() || '',
      ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    };

    const contact = new Contact(contactData);
    await contact.save();

    console.log('New contact submission:', {
      referenceId: contact.referenceId,
      name: contact.name,
      email: contact.email,
      submittedAt: contact.createdAt
    });

    return NextResponse.json({
      success: true,
      message: 'Your message has been submitted successfully!',
      referenceId: contact.referenceId,
      data: {
        referenceId: contact.referenceId,
        submittedAt: contact.createdAt
      }
    }, { status: 201 });

  } catch (error: any) {
    console.error('Contact form error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Duplicate submission detected. Please try again.' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}