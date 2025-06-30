import nodemailer from 'nodemailer';
import { ContactSubmission } from './models/Contact';

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactNotification(submission: ContactSubmission) {
  const urgencyEmoji = {
    low: '🟢',
    medium: '🟡',
    high: '🟠',
    emergency: '🔴'
  };

  const priorityText = {
    low: 'Low Priority',
    medium: 'Medium Priority', 
    high: 'High Priority',
    urgent: '🚨 URGENT'
  };

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission - ClimateTech.life</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2563eb, #06b6d4); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; }
        .footer { background: #1e293b; color: white; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; }
        .priority-badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; }
        .priority-urgent { background: #fee2e2; color: #dc2626; }
        .priority-high { background: #fef3c7; color: #d97706; }
        .priority-medium { background: #dbeafe; color: #2563eb; }
        .priority-low { background: #f0fdf4; color: #16a34a; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
        .info-item { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #2563eb; }
        .info-label { font-weight: bold; color: #64748b; font-size: 12px; text-transform: uppercase; }
        .info-value { margin-top: 5px; font-size: 14px; }
        .message-box { background: white; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #06b6d4; }
        .action-buttons { margin: 20px 0; }
        .btn { display: inline-block; padding: 12px 24px; margin: 5px; text-decoration: none; border-radius: 6px; font-weight: bold; }
        .btn-primary { background: #2563eb; color: white; }
        .btn-secondary { background: #64748b; color: white; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🌊 New Contact Submission</h1>
          <p>ClimateTech.life Flood Prevention System</p>
          <span class="priority-badge priority-${submission.priority}">${urgencyEmoji[submission.urgency || 'medium']} ${priorityText[submission.priority]}</span>
        </div>
        
        <div class="content">
          <div class="info-grid">
            <div class="info-item">
              <div class="info-label">Contact Person</div>
              <div class="info-value"><strong>${submission.name}</strong></div>
              <div class="info-value">${submission.email}</div>
              ${submission.phone ? `<div class="info-value">📞 ${submission.phone}</div>` : ''}
            </div>
            
            <div class="info-item">
              <div class="info-label">Organization</div>
              <div class="info-value"><strong>${submission.organization}</strong></div>
              <div class="info-value">${submission.role}</div>
              <div class="info-value">${submission.organizationType}</div>
            </div>
            
            <div class="info-item">
              <div class="info-label">Request Details</div>
              <div class="info-value"><strong>${submission.requestType}</strong></div>
              ${submission.urgency ? `<div class="info-value">Urgency: ${submission.urgency}</div>` : ''}
              ${submission.timelineExpectation ? `<div class="info-value">Timeline: ${submission.timelineExpectation}</div>` : ''}
            </div>
            
            <div class="info-item">
              <div class="info-label">Risk Assessment</div>
              ${submission.currentFloodRisk ? `<div class="info-value">Current Risk: ${submission.currentFloodRisk}</div>` : ''}
              ${submission.populationSize ? `<div class="info-value">Population: ${submission.populationSize}</div>` : ''}
              ${submission.location ? `<div class="info-value">📍 ${submission.location}</div>` : ''}
            </div>
          </div>
          
          ${submission.message ? `
            <div class="message-box">
              <div class="info-label">Message</div>
              <div class="info-value">${submission.message.replace(/\n/g, '<br>')}</div>
            </div>
          ` : ''}
          
          ${submission.existingSystems ? `
            <div class="info-item">
              <div class="info-label">Existing Systems</div>
              <div class="info-value">${submission.existingSystems}</div>
            </div>
          ` : ''}
          
          ${submission.estimatedBudget ? `
            <div class="info-item">
              <div class="info-label">Estimated Budget</div>
              <div class="info-value">${submission.estimatedBudget}</div>
            </div>
          ` : ''}
          
          <div class="action-buttons">
            <a href="mailto:${submission.email}" class="btn btn-primary">Reply to Contact</a>
            <a href="tel:${submission.phone || ''}" class="btn btn-secondary">Call Contact</a>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
            <p><strong>Submission Details:</strong></p>
            <p>Submitted: ${submission.submittedAt.toLocaleString()}</p>
            <p>Source: ${submission.source}</p>
            <p>IP: ${submission.ipAddress || 'Unknown'}</p>
            ${submission.tags.length > 0 ? `<p>Tags: ${submission.tags.join(', ')}</p>` : ''}
          </div>
        </div>
        
        <div class="footer">
          <p>ClimateTech.life - Smart Flood Prevention for India</p>
          <p>Protecting communities through advanced technology</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
New Contact Form Submission - ClimateTech.life

Priority: ${priorityText[submission.priority]}
Urgency: ${submission.urgency || 'medium'}

Contact Information:
- Name: ${submission.name}
- Email: ${submission.email}
- Phone: ${submission.phone || 'Not provided'}
- Organization: ${submission.organization}
- Role: ${submission.role}
- Type: ${submission.organizationType}

Request Details:
- Type: ${submission.requestType}
- Timeline: ${submission.timelineExpectation || 'Not specified'}
- Budget: ${submission.estimatedBudget || 'Not specified'}

Risk Assessment:
- Current Flood Risk: ${submission.currentFloodRisk || 'Not assessed'}
- Population Size: ${submission.populationSize || 'Not specified'}
- Location: ${submission.location || 'Not provided'}

Message:
${submission.message || 'No message provided'}

Existing Systems:
${submission.existingSystems || 'Not specified'}

Submission Details:
- Submitted: ${submission.submittedAt.toLocaleString()}
- Source: ${submission.source}
- IP Address: ${submission.ipAddress || 'Unknown'}
- Tags: ${submission.tags.join(', ') || 'None'}

Please respond within 24 hours for standard requests, or immediately for emergency situations.
  `;

  try {
    // Send to internal team
    await transporter.sendMail({
      from: `"ClimateTech.life Contact System" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'sales@climatetech.life',
      cc: submission.priority === 'urgent' ? process.env.EMERGENCY_EMAIL : undefined,
      subject: `${urgencyEmoji[submission.urgency || 'medium']} New ${submission.requestType} Request - ${submission.organization}`,
      text: textContent,
      html: htmlContent,
    });

    // Send confirmation to user
    await sendUserConfirmation(submission);

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

async function sendUserConfirmation(submission: ContactSubmission) {
  const confirmationHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thank you for contacting ClimateTech.life</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2563eb, #06b6d4); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
        .content { background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; }
        .footer { background: #1e293b; color: white; padding: 20px; border-radius: 0 0 8px 8px; text-align: center; }
        .highlight-box { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #06b6d4; margin: 20px 0; }
        .contact-info { background: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .emergency-note { background: #fee2e2; border: 1px solid #fecaca; padding: 15px; border-radius: 8px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🌊 Thank You for Contacting Us!</h1>
          <p>Your flood prevention inquiry is important to us</p>
        </div>
        
        <div class="content">
          <p>Dear ${submission.name},</p>
          
          <p>Thank you for reaching out to ClimateTech.life regarding flood prevention solutions for <strong>${submission.organization}</strong>. We have received your ${submission.requestType.toLowerCase()} request and our team is reviewing your requirements.</p>
          
          <div class="highlight-box">
            <h3>What happens next?</h3>
            <ul>
              <li><strong>Within 2 hours:</strong> Our team will review your submission and assess your flood risk requirements</li>
              <li><strong>Within 24 hours:</strong> A flood prevention specialist will contact you to discuss your specific needs</li>
              <li><strong>Within 48 hours:</strong> We'll provide a customized solution proposal for your organization</li>
            </ul>
          </div>
          
          ${submission.urgency === 'emergency' ? `
            <div class="emergency-note">
              <h3>🚨 Emergency Response Activated</h3>
              <p>We understand this is an emergency situation. Our emergency response team has been notified and will contact you within the next 30 minutes. If you need immediate assistance, please call our emergency hotline: <strong>+91 98765 43210</strong></p>
            </div>
          ` : ''}
          
          <div class="contact-info">
            <h3>Your Submission Summary:</h3>
            <p><strong>Request Type:</strong> ${submission.requestType}</p>
            <p><strong>Organization:</strong> ${submission.organization}</p>
            <p><strong>Contact Email:</strong> ${submission.email}</p>
            <p><strong>Submitted:</strong> ${submission.submittedAt.toLocaleString()}</p>
            <p><strong>Reference ID:</strong> CT-${submission._id?.toString().slice(-8).toUpperCase()}</p>
          </div>
          
          <div class="highlight-box">
            <h3>In the meantime, here are some resources:</h3>
            <ul>
              <li><a href="https://climatetech.life/resources/flood-preparedness">Flood Preparedness Guide for Indian Communities</a></li>
              <li><a href="https://climatetech.life/case-studies">Success Stories from Mandi & Other Regions</a></li>
              <li><a href="https://climatetech.life/technology">Learn About Our Technology</a></li>
            </ul>
          </div>
          
          <p>If you have any urgent questions or need to update your request, please reply to this email or call us at <strong>+91 98765 43210</strong>.</p>
          
          <p>Thank you for choosing ClimateTech.life to protect your community from flood disasters.</p>
          
          <p>Best regards,<br>
          <strong>The ClimateTech.life Team</strong><br>
          Flood Prevention Specialists</p>
        </div>
        
        <div class="footer">
          <p><strong>ClimateTech.life</strong> - Smart Flood Prevention for India</p>
          <p>📧 sales@climatetech.life | 📞 +91 98765 43210 | 🌐 climatetech.life</p>
          <p>Protecting Indian communities through advanced flood prevention technology</p>
        </div>
      </div>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: `"ClimateTech.life Team" <${process.env.SMTP_USER}>`,
    to: submission.email,
    subject: `Thank you for contacting ClimateTech.life - Reference: CT-${submission._id?.toString().slice(-8).toUpperCase()}`,
    html: confirmationHtml,
  });
}