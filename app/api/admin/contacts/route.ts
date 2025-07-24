import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import Contact from '../../../../models/Contact';

export const dynamic = 'force-dynamic';

interface ContactQuery {
  status?: string;
  $or?: Array<{
    [key: string]: { $regex: string; $options: string };
  }>;
}

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '10';
    const status = searchParams.get('status');
    const search = searchParams.get('search');
    
    const query: ContactQuery = {};
    
    if (status && status !== 'all') {
      query.status = status;
    }
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { referenceId: { $regex: search, $options: 'i' } }
      ];
    }

    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limitNum)
      .skip((pageNum - 1) * limitNum)
      .exec();

    const total = await Contact.countDocuments(query);

    return NextResponse.json({
      contacts,
      totalPages: Math.ceil(total / limitNum),
      currentPage: pageNum,
      total
    });

  } catch (error) {
    console.error('Admin contacts API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}