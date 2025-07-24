import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../../lib/mongodb';
import Contact from '../../../../../models/Contact';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const { id } = params;
    const updates = await request.json();
    
    const contact = await Contact.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );

    if (!contact) {
      return NextResponse.json(
        { error: 'Contact not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, contact });

  } catch (error) {
    console.error('Update contact error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const { id } = params;
    
    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      return NextResponse.json(
        { error: 'Contact not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Contact deleted successfully' 
    });

  } catch (error) {
    console.error('Delete contact error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
