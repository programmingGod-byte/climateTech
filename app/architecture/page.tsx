'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: 'sans-serif' }}>
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
              System Architecture
            </h1>
          </div>

          {/* Architecture Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[16/9] rounded-[40px] overflow-hidden border border-slate-100 shadow-2xl bg-slate-50 flex items-center justify-center"
          >
            <div className="relative w-full h-full p-4 md:p-8">
              <Image
                src="/images/image copy.webp"
                alt="System Architecture Diagram"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
