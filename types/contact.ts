export interface IContact {
  _id?: string;
  name: string;
  email: string;
  phone?: string;
  location?: string;
  message: string;
  referenceId: string;
  status: 'new' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  ipAddress?: string;
  userAgent?: string;
  source: string;
  notes: Array<{
    content: string;
    addedBy: string;
    addedAt: Date;
  }>;
  createdAt: Date;
  updatedAt: Date;
  formattedDate?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  referenceId: string;
  data?: {
    referenceId: string;
    submittedAt: Date;
  };
}

export interface ContactListResponse {
  contacts: IContact[];
  totalPages: number;
  currentPage: number;
  total: number;
}

export interface ContactApiError {
  error: string;
  details?: string[];
}