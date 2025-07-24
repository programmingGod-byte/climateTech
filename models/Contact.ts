import mongoose, { Document, Schema, Model } from 'mongoose';
import { IContact } from '../types/contact';

interface IContactDocument extends Omit<IContact, '_id'>, Document {}

const ContactSchema = new Schema<IContactDocument>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Please provide a valid email address'
    ]
  },
  phone: {
    type: String,
    trim: true,
    maxlength: [20, 'Phone number cannot exceed 20 characters'],
    default: ''
  },
  location: {
    type: String,
    trim: true,
    maxlength: [100, 'Location cannot exceed 100 characters'],
    default: ''
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  referenceId: {
    type: String,
    default: function(this: IContactDocument) {
      return 'CTL-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    }
  },
  status: {
    type: String,
    enum: ['new', 'in-progress', 'resolved'],
    default: 'new'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  ipAddress: {
    type: String,
    required: false,
    default: ''
  },
  userAgent: {
    type: String,
    required: false,
    default: ''
  },
  source: {
    type: String,
    default: 'website'
  },
  notes: [{
    content: { type: String, required: true },
    addedBy: { type: String, required: true },
    addedAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better performance - define unique constraint here only
ContactSchema.index({ email: 1 });
ContactSchema.index({ referenceId: 1 }, { unique: true });
ContactSchema.index({ createdAt: -1 });
ContactSchema.index({ status: 1 });

// Virtual for formatted creation date
ContactSchema.virtual('formattedDate').get(function(this: IContactDocument) {
  return this.createdAt.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
});

// Pre-save middleware to ensure unique referenceId
ContactSchema.pre('save', async function(this: IContactDocument, next) {
  if (this.isNew && !this.referenceId) {
    let referenceId: string;
    let isUnique = false;
    
    while (!isUnique) {
      referenceId = 'CTL-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
      const existing = await mongoose.models.Contact?.findOne({ referenceId });
      if (!existing) {
        this.referenceId = referenceId;
        isUnique = true;
      }
    }
  }
  next();
});

const Contact: Model<IContactDocument> = mongoose.models.Contact || mongoose.model<IContactDocument>('Contact', ContactSchema);

export default Contact;