import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

export async function GET() {
  try {
    const db = await getDatabase();
    
    // Get basic stats
    const totalSubmissions = await db.collection('contacts').countDocuments();
    const newSubmissions = await db.collection('contacts').countDocuments({ status: 'new' });
    const inProgressSubmissions = await db.collection('contacts').countDocuments({ status: 'in-progress' });
    const completedSubmissions = await db.collection('contacts').countDocuments({ status: 'completed' });
    
    // Get organization type distribution
    const orgTypeStats = await db.collection('contacts').aggregate([
      {
        $group: {
          _id: '$organizationType',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]).toArray();
    
    // Get monthly trends (last 12 months)
    const twelveMonthsAgo = new Date();
    twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);
    
    const monthlyTrends = await db.collection('contacts').aggregate([
      {
        $match: {
          submittedAt: { $gte: twelveMonthsAgo }
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$submittedAt' },
            month: { $month: '$submittedAt' }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { '_id.year': 1, '_id.month': 1 }
      }
    ]).toArray();
    
    // Get average response time (mock calculation)
    const avgResponseTime = 18; // hours - would be calculated from actual response data
    
    // Get recent high-priority submissions
    const recentHighPriority = await db.collection('contacts')
      .find({ 
        priority: { $in: ['high', 'urgent'] },
        status: { $in: ['new', 'in-progress'] }
      })
      .sort({ submittedAt: -1 })
      .limit(5)
      .toArray();
    
    // Get geographic distribution
    const locationStats = await db.collection('contacts').aggregate([
      {
        $match: { location: { $exists: true, $ne: '' } }
      },
      {
        $group: {
          _id: '$location',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]).toArray();
    
    const stats = {
      overview: {
        totalSubmissions,
        newSubmissions,
        inProgressSubmissions,
        completedSubmissions,
        averageResponseTime: avgResponseTime,
        conversionRate: totalSubmissions > 0 ? Math.round((completedSubmissions / totalSubmissions) * 100) : 0
      },
      organizationTypes: orgTypeStats.map(item => ({
        type: item._id,
        count: item.count
      })),
      monthlyTrends: monthlyTrends.map(item => ({
        month: `${item._id.year}-${String(item._id.month).padStart(2, '0')}`,
        count: item.count
      })),
      recentHighPriority: recentHighPriority.map(contact => ({
        id: contact._id,
        name: contact.name,
        organization: contact.organization,
        priority: contact.priority,
        urgency: contact.urgency,
        submittedAt: contact.submittedAt,
        requestType: contact.requestType
      })),
      locations: locationStats.map(item => ({
        location: item._id,
        count: item.count
      }))
    };
    
    return NextResponse.json(stats);
    
  } catch (error) {
    console.error('Failed to fetch contact stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch statistics' },
      { status: 500 }
    );
  }
}