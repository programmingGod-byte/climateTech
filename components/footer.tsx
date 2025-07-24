'use client';

import { Shield, Mail, Phone, MapPin, Twitter, Linkedin, Github, Youtube, ChevronRight, Heart, ArrowUp, Zap, Users, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const socialLinks = [
    { icon: <Linkedin className="h-4 w-4" />, href: 'https://www.linkedin.com/company/climmatech/?viewAsMember=true', name: 'LinkedIn', color: 'hover:text-blue-500' },
    
  ];

  const quickLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Imapct', href: '#impact' },
    { name: 'Partners', href: '#partners' },
    { name: 'Contact us', href: '#contact' },
    { name: 'Web Dashboard', href: 'https://visiflow-tech.vercel.app/' },
    
  ];

  const stats = [
   
    { icon: <Shield className="h-5 w-5" />, value: '100%', label: 'Durable' },
    { icon: <Zap className="h-5 w-5" />, value: '90%', label: 'Accuracy' },
    { icon: <Award className="h-5 w-5" />, value: '24/7', label: 'Monitoring' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = () => {
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-br font-sans from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Stats Section - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-b border-gray-700/30"
        >
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-3 rounded-lg bg-gray-800/20 backdrop-blur-sm border border-gray-700/30"
              >
                <div className="flex justify-center mb-2 text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-lg font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Footer Content - Reduced Padding */}
        <div className="py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info - More Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2  rounded-xl">
                  <img src='/images/logo-removebg-preview.png' alt="Logo" className="w-16 h-16" />
                </div>
                <div>
                  <h3 className="text-xl font-medium bg-gradient-to-r from-blue-400 font-sans to-cyan-400 bg-clip-text text-transparent">
                    ClimMaTech
                  </h3>
                  <p className="text-xs text-gray-400">Flood Protection AI</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed font-sans">
                Revolutionizing flood protection in India with cutting-edge AI technology. 
                Real-time monitoring, predictive analytics, and early warning systems.
              </p>
              
              {/* Newsletter Signup - Compact */}
              {/* <div className="mb-4">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-l-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-r-lg hover:from-blue-600 hover:to-cyan-600 transition-all"
                  >
                    Subscribe
                  </button>
                </div>
              </div> */}
              
              {/* Contact Info - Grid Layout for Better Space Usage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail className="h-3 w-3 text-blue-400 flex-shrink-0" />
                  <span className="truncate font-sans">admin@climmatech.life</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail className="h-3 w-3 text-blue-400 flex-shrink-0" />
                  <span className="truncate font-sans">om@climmatech.life</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail className="h-3 w-3 text-blue-400 flex-shrink-0" />
                  <span className="truncate font-sans">dharkan@climmatech.life</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Phone className="h-3 w-3 text-blue-400 flex-shrink-0" />
                  <span className='font-sans'>+91 74880 11618</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 sm:col-span-2">
                  <MapPin className="h-3 w-3 text-blue-400 flex-shrink-0" />
                  <span className='font-sans'>Mandi, Himachal Pradesh, India</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links - More Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 3 }}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-1"
            >
              <h4 className="text-lg font-semibold mb-4 text-white font-sans">Connect</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-400 ${social.color} transition-all p-2 rounded-lg hover:bg-gray-800/50 flex items-center space-x-2`}
                    aria-label={social.name}
                  >
                    {social.icon}
                    <span className="text-xs hidden sm:inline">{social.name}</span>
                  </motion.a>
                ))}
              </div>
              
              {/* Back to Top in this section */}
              
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700/50 py-4"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="text-sm text-gray-400 text-center sm:text-left">
              © 2025 ClimMaTech.life. All rights reserved.
            </div>
            
            {/* Made with love - Inline */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-red-500" />
              </motion.div>
              <span>in India</span>
              <Globe className="h-4 w-4 text-blue-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}