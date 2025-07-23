'use client';

import { Shield, Mail, Phone, MapPin, Twitter, Linkedin, Github, Youtube, ChevronRight, Heart, ArrowUp, Zap, Users, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter', color: 'hover:text-blue-400' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', name: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: <Github className="h-5 w-5" />, href: '#', name: 'GitHub', color: 'hover:text-purple-400' },
    { icon: <Youtube className="h-5 w-5" />, href: '#', name: 'YouTube', color: 'hover:text-red-500' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Technology', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Research', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Blog', href: '#' }
  ];

  const services = [
    { name: 'Flood Prediction AI', href: '#' },
    { name: 'Early Warning Systems', href: '#' },
    { name: 'Community Alerts', href: '#' },
    { name: 'Emergency Response', href: '#' },
    { name: 'Data Analytics', href: '#' },
    { name: 'Climate Monitoring', href: '#' }
  ];

  const support = [
    { name: 'Help Center', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Community Forum', href: '#' },
    { name: 'Contact Support', href: '#' },
    { name: 'Emergency Hotline', href: '#' }
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: '2M+', label: 'People Protected' },
    { icon: <Shield className="h-6 w-6" />, value: '500+', label: 'Communities Served' },
    { icon: <Zap className="h-6 w-6" />, value: '99.8%', label: 'Accuracy Rate' },
    { icon: <Award className="h-6 w-6" />, value: '24/7', label: 'Monitoring' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = () => {
    // Handle newsletter subscription
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Stats Section */}
       
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    ClimmaTech
                  </h3>
                  <p className="text-xs text-gray-400">Flood Protection AI</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Revolutionizing flood protection in India with cutting-edge AI technology. 
                We provide real-time monitoring, predictive analytics, and early warning 
                systems to safeguard communities from monsoon flooding.
              </p>
              
              {/* Newsletter Signup */}
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">admin@climmatech.life</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">+91 74880 11618</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">Mandi, Himachal Pradesh, India</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Solutions</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <motion.a
                      href={service.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
              <ul className="space-y-3">
                {support.map((item) => (
                  <li key={item.name}>
                    <motion.a
                      href={item.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700/50 py-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="text-sm text-gray-400">
                © 2025 ClimmaTech.life. All rights reserved.
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <span className="text-gray-600">•</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <span className="text-gray-600">•</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-400 ${social.color} transition-all p-2 rounded-lg hover:bg-gray-800/50`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-800/50 text-gray-400 hover:text-white hover:bg-blue-500/20 rounded-lg transition-all flex items-center justify-center"
                aria-label="Back to top"
              >
                <ArrowUp className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
          
          {/* Made with love */}
          <div className="flex items-center justify-center mt-6 pt-6 border-t border-gray-700/30">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-red-500" />
              </motion.div>
              <span>in India</span>
              <Globe className="h-4 w-4 text-blue-400 ml-2" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}