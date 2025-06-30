'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    organizationType: '',
    location: '',
    message: '',
    requestType: 'demo',
    urgency: 'medium',
    preferredContactTime: '',
    estimatedBudget: '',
    timelineExpectation: '',
    currentFloodRisk: 'medium',
    populationSize: '',
    existingSystems: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [referenceId, setReferenceId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
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
        setReferenceId(result.referenceId);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          role: '',
          organizationType: '',
          location: '',
          message: '',
          requestType: 'demo',
          urgency: 'medium',
          preferredContactTime: '',
          estimatedBudget: '',
          timelineExpectation: '',
          currentFloodRisk: 'medium',
          populationSize: '',
          existingSystems: ''
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

  const handleInputChange = (field: string, value: string) => {
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Card className="shadow-2xl border-0 bg-white">
              <CardContent className="p-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
                </motion.div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Thank You for Contacting Us!
                </h2>
                
                <p className="text-xl text-gray-600 mb-6">
                  Your flood prevention inquiry has been successfully submitted.
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
                    <p className="text-sm text-gray-600">+91 98765 43210</p>
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
                  Submit Another Request
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Started with ClimateTech.life
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to protect your community from monsoon floods? Contact us for a personalized demonstration 
            and learn how ClimateTech.life can safeguard your area.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="flex-shrink-0">{info.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">{info.title}</h4>
                  <p className="text-gray-700">{info.content}</p>
                  <p className="text-sm text-gray-500">{info.secondary}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Request Demo & Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Rajesh Kumar"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="rajesh.kumar@organization.gov.in"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location/City</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        placeholder="Mumbai, Maharashtra"
                      />
                    </div>
                  </div>

                  {/* Organization Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization *</Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        placeholder="Mumbai Municipal Corporation"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Your Role *</Label>
                      <Input
                        id="role"
                        value={formData.role}
                        onChange={(e) => handleInputChange('role', e.target.value)}
                        placeholder="Disaster Management Officer"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="organizationType">Organization Type *</Label>
                      <Select onValueChange={(value) => handleInputChange('organizationType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select organization type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="government">Government Agency</SelectItem>
                          <SelectItem value="municipality">Municipal Corporation</SelectItem>
                          <SelectItem value="emergency">Emergency Services</SelectItem>
                          <SelectItem value="environmental">Environmental Board</SelectItem>
                          <SelectItem value="utility">Water/Power Board</SelectItem>
                          <SelectItem value="research">Research Institution</SelectItem>
                          <SelectItem value="private">Private Company</SelectItem>
                          <SelectItem value="ngo">NGO/Non-Profit</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="requestType">Request Type</Label>
                      <Select 
                        value={formData.requestType}
                        onValueChange={(value) => handleInputChange('requestType', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="demo">Product Demo</SelectItem>
                          <SelectItem value="quote">Get Quote</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                          <SelectItem value="emergency">Emergency Response</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Risk Assessment */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentFloodRisk">Current Flood Risk</Label>
                      <Select 
                        value={formData.currentFloodRisk}
                        onValueChange={(value) => handleInputChange('currentFloodRisk', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low Risk</SelectItem>
                          <SelectItem value="medium">Medium Risk</SelectItem>
                          <SelectItem value="high">High Risk</SelectItem>
                          <SelectItem value="critical">Critical Risk</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="populationSize">Population Size</Label>
                      <Select onValueChange={(value) => handleInputChange('populationSize', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select population" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="<1000">Less than 1,000</SelectItem>
                          <SelectItem value="1000-10000">1,000 - 10,000</SelectItem>
                          <SelectItem value="10000-50000">10,000 - 50,000</SelectItem>
                          <SelectItem value="50000-100000">50,000 - 100,000</SelectItem>
                          <SelectItem value="100000-500000">100,000 - 500,000</SelectItem>
                          <SelectItem value="500000+">500,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="urgency">Urgency Level</Label>
                      <Select 
                        value={formData.urgency}
                        onValueChange={(value) => handleInputChange('urgency', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="emergency">Emergency</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="estimatedBudget">Estimated Budget</Label>
                      <Select onValueChange={(value) => handleInputChange('estimatedBudget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="<5L">Less than ₹5 Lakhs</SelectItem>
                          <SelectItem value="5L-25L">₹5 - 25 Lakhs</SelectItem>
                          <SelectItem value="25L-1Cr">₹25 Lakhs - 1 Crore</SelectItem>
                          <SelectItem value="1Cr-5Cr">₹1 - 5 Crores</SelectItem>
                          <SelectItem value="5Cr+">₹5+ Crores</SelectItem>
                          <SelectItem value="discuss">Discuss Later</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timelineExpectation">Timeline Expectation</Label>
                      <Select onValueChange={(value) => handleInputChange('timelineExpectation', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (Emergency)</SelectItem>
                          <SelectItem value="1month">Within 1 Month</SelectItem>
                          <SelectItem value="3months">Within 3 Months</SelectItem>
                          <SelectItem value="6months">Within 6 Months</SelectItem>
                          <SelectItem value="1year">Within 1 Year</SelectItem>
                          <SelectItem value="planning">Planning Phase</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="existingSystems">Existing Flood Management Systems</Label>
                    <Textarea
                      id="existingSystems"
                      value={formData.existingSystems}
                      onChange={(e) => handleInputChange('existingSystems', e.target.value)}
                      placeholder="Describe any existing flood monitoring or warning systems in your area..."
                      rows={2}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message & Specific Requirements</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your specific monsoon flood management needs, coverage area, and any questions you have about Indian deployment..."
                      rows={4}
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                      <AlertCircle className="h-5 w-5" />
                      <span>{submitMessage}</span>
                    </div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      disabled={submitStatus === 'loading'}
                    >
                      {submitStatus === 'loading' ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Submit Request
                        </>
                      )}
                    </Button>
                  </motion.div>

                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}