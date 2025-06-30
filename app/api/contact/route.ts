
// import { NextRequest, NextResponse } from 'next/server';
// import { getDatabase } from '@/lib/mongodb';
// import { ContactSubmission } from '@/lib/models/Contact';
// import { sendContactNotification } from '@/lib/email';

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
    
//     // Validate required fields
//     const requiredFields = ['name', 'email', 'organization', 'role', 'organizationType', 'requestType'];
//     for (const field of requiredFields) {
//       if (!body[field]) {
//         return NextResponse.json(
//           { error: `Missing required field: ${field}` },
//           { status: 400 }
//         );
//       }
//     }

//     // Get client IP and user agent
//     const forwarded = request.headers.get('x-forwarded-for');
//     const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';
//     const userAgent = request.headers.get('user-agent') || 'unknown';

//     // Determine priority and urgency based on request type and content
//     let priority: 'low' | 'medium' | 'high' | 'urgent' = 'medium';
//     let urgency: 'low' | 'medium' | 'high' | 'emergency' = 'medium';
    
//     // Auto-assign priority based on organization type and request
//     if (body.organizationType === 'emergency' || body.organizationType === 'government') {
//       priority = 'high';
//       urgency = 'high';
//     }
    
//     if (body.requestType === 'emergency' || body.message?.toLowerCase().includes('emergency')) {
//       priority = 'urgent';
//       urgency = 'emergency';
//     }

//     // Auto-generate tags based on content
//     const tags: string[] = [];
//     if (body.organizationType) tags.push(body.organizationType);
//     if (body.requestType) tags.push(body.requestType);
//     if (body.currentFloodRisk === 'high' || body.currentFloodRisk === 'critical') tags.push('high-risk');
//     if (body.message?.toLowerCase().includes('monsoon')) tags.push('monsoon');
//     if (body.message?.toLowerCase().includes('urgent')) tags.push('urgent');

//     // Create contact submission object
//     const contactSubmission: ContactSubmission = {
//       name: body.name,
//       email: body.email,
//       organization: body.organization,
//       role: body.role,
//       organizationType: body.organizationType,
//       message: body.message || '',
//       requestType: body.requestType,
//       phone: body.phone || '',
//       location: body.location || '',
//       urgency: body.urgency || urgency,
//       preferredContactTime: body.preferredContactTime || '',
//       followUpRequired: true,
//       status: 'new',
//       priority: body.priority || priority,
//       assignedTo: '',
//       tags,
//       source: 'website-contact-form',
//       ipAddress: ip,
//       userAgent,
//       submittedAt: new Date(),
//       lastUpdated: new Date(),
//       notes: '',
//       estimatedBudget: body.estimatedBudget || '',
//       timelineExpectation: body.timelineExpectation || '',
//       currentFloodRisk: body.currentFloodRisk || 'medium',
//       populationSize: body.populationSize || '',
//       existingSystems: body.existingSystems || ''
//     };

//     // Save to database
//     const db = await getDatabase();
//     const result = await db.collection('contacts').insertOne(contactSubmission);
    
//     // Add the generated ID to the submission for email
//     contactSubmission._id = result.insertedId;

//     // Send email notifications
//     const emailResult = await sendContactNotification(contactSubmission);
    
//     if (!emailResult.success) {
//       console.error('Email notification failed:', emailResult.error);
//       // Still return success since the data was saved
//     }

//     // Update analytics
//     await updateContactAnalytics(db, contactSubmission);

//     return NextResponse.json({
//       success: true,
//       message: 'Contact form submitted successfully',
//       referenceId: `CT-${result.insertedId.toString().slice(-8).toUpperCase()}`,
//       estimatedResponseTime: urgency === 'emergency' ? '30 minutes' : '24 hours'
//     });

//   } catch (error) {
//     console.error('Contact form submission error:', error);
//     return NextResponse.json(
//       { error: 'Failed to submit contact form' },
//       { status: 500 }
//     );
//   }
// }

// export async function GET(request: NextRequest) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const page = parseInt(searchParams.get('page') || '1');
//     const limit = parseInt(searchParams.get('limit') || '10');
//     const status = searchParams.get('status');
//     const priority = searchParams.get('priority');
    
//     const db = await getDatabase();
    
//     // Build query
//     const query: any = {};
//     if (status) query.status = status;
//     if (priority) query.priority = priority;
    
//     // Get contacts with pagination
//     const contacts = await db.collection('contacts')
//       .find(query)
//       .sort({ submittedAt: -1 })
//       .skip((page - 1) * limit)
//       .limit(limit)
//       .toArray();
    
//     const total = await db.collection('contacts').countDocuments(query);
    
//     return NextResponse.json({
//       contacts,
//       pagination: {
//         page,
//         limit,
//         total,
//         pages: Math.ceil(total / limit)
//       }
//     });
    
//   } catch (error) {
//     console.error('Failed to fetch contacts:', error);
//     return NextResponse.json(
//       { error: 'Failed to fetch contacts' },
//       { status: 500 }
//     );
//   }
// }

// async function updateContactAnalytics(db: any, submission: ContactSubmission) {
//   try {
//     const today = new Date();
//     const monthYear = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
    
//     await db.collection('contact_analytics').updateOne(
//       { month: monthYear },
//       {
//         $inc: {
//           totalSubmissions: 1,
//           [`organizationTypes.${submission.organizationType}`]: 1,
//           [`requestTypes.${submission.requestType}`]: 1,
//           [`priorities.${submission.priority}`]: 1
//         },
//         $setOnInsert: {
//           month: monthYear,
//           createdAt: new Date()
//         }
//       },
//       { upsert: true }
//     );
//   } catch (error) {
//     console.error('Failed to update analytics:', error);
//   }
// }


