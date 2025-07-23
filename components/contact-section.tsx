'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [referenceId, setReferenceId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(result.message);
        setReferenceId(result.referenceId || 'CTL-' + Date.now());
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please try again.');
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email Us",
      content: "admin@climmatech.life",
      secondary: "admin@climmatech.life"
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Call Us",
      content: "+91 74880 11618",
      secondary: "24/7 Emergency Hotline"
    },
    {
      icon: <MapPin className="h-6 w-6 text-purple-600" />,
      title: "Headquarters",
      content: "Mandi Himachal Pradesh, India",
      secondary: ""
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      title: "Response Time",
      content: "Within 24 hours",
      secondary: "Emergency: Immediate"
    }
  ];

  if (submitStatus === 'success') {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Card className="shadow-2xl border-0 bg-white">
              <CardContent className="p-12">
                <div>
                  <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Thank You for Contacting Us!
                </h2>
                
                <p className="text-xl text-gray-600 mb-6">
                  Your message has been successfully submitted.
                </p>
                
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <p className="text-lg font-semibold text-blue-900 mb-2">
                    Reference ID: <span className="font-mono">{referenceId}</span>
                  </p>
                  <p className="text-blue-700">
                    Please save this reference ID for your records. Our team will contact you within 24 hours.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold">Response Time</p>
                    <p className="text-sm text-gray-600">Within 24 hours</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Mail className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold">Confirmation Email</p>
                    <p className="text-sm text-gray-600">Check your inbox</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Phone className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="font-semibold">Direct Contact</p>
                    <p className="text-sm text-gray-600">+91 74880 11618</p>
                  </div>
                </div>
                
                <Button
                  onClick={() => {
                    setSubmitStatus('idle');
                    setSubmitMessage('');
                    setReferenceId('');
                  }}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Submit Another Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans text-gray-900 mb-4">
            Get Started with <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ClimateTech.life</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl font-sans mx-auto">
            Contact us for a personalized demonstration 
            and learn how ClimateTech.life can safeguard your area.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="flex-shrink-0">{info.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">{info.title}</h4>
                  <p className="text-gray-700">{info.content}</p>
                  <p className="text-sm text-gray-500">{info.secondary}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="Enter your location/city"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your requirements or any questions you have..."
                      rows={5}
                      required
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                      <AlertCircle className="h-5 w-5" />
                      <span>{submitMessage}</span>
                    </div>
                  )}

                  <Button 
                    onClick={handleSubmit}
                    size="lg" 
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white transition-all duration-200 hover:scale-105 "
                    disabled={submitStatus === 'loading'}
                  >
                    {submitStatus === 'loading' ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}