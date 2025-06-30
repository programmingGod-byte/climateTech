import { ObjectId } from 'mongodb';

export interface ContactSubmission {
  _id?: ObjectId;
  name: string;
  email: string;
  organization: string;
  role: string;
  organizationType: string;
  message: string;
  requestType: string;
  phone?: string;
  location?: string;
  urgency?: 'low' | 'medium' | 'high' | 'emergency';
  preferredContactTime?: string;
  followUpRequired: boolean;
  status: 'new' | 'contacted' | 'in-progress' | 'completed' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignedTo?: string;
  tags: string[];
  source: string;
  ipAddress?: string;
  userAgent?: string;
  submittedAt: Date;
  lastUpdated: Date;
  notes?: string;
  estimatedBudget?: string;
  timelineExpectation?: string;
  currentFloodRisk?: 'low' | 'medium' | 'high' | 'critical';
  populationSize?: string;
  existingSystems?: string;
}

export interface ContactStats {
  totalSubmissions: number;
  newSubmissions: number;
  inProgressSubmissions: number;
  completedSubmissions: number;
  averageResponseTime: number;
  conversionRate: number;
  topOrganizationTypes: Array<{ type: string; count: number }>;
  monthlyTrends: Array<{ month: string; count: number }>;
}