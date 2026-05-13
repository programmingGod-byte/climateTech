'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Trophy, 
  Award, 
  BookOpen, 
  Building2, 
  Search, 
  Star,
  Users,
  Target,
  Rocket,
  Zap,
  Globe,
  Milestone,
  ShieldCheck,
  FileText,
  BadgeCheck,
  X
} from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function AchievementsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const topRecognitions = [
    {
      rank: 1,
      title: "Boeing BUILD 5.0",
      desc: "Selected for global aerospace innovation program.",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      rank: 2,
      title: "NVIDIA Inception Program",
      desc: "Selected & received NVIDIA startup supports.",
      icon: <CpuIcon className="w-6 h-6" />
    },
    {
      rank: 3,
      title: "AI4SG (UK-India Collaborative)",
      desc: "Top 2 Team – Winner.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      rank: 4,
      title: "NSRCEL – Campus Founders Cohort 5",
      desc: "Grant recipient & incubated at NSRCEL, IIM Bangalore.",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      rank: 5,
      title: "WISE Tech Pitchathon",
      desc: "Punjab Edition – 1st Position.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      rank: 6,
      title: "IITs Startup Cohort 14",
      desc: "Top Team – Completed accelerator program & demo day.",
      icon: <Star className="w-6 h-6" />
    }
  ];

  const stats = [
    { value: "16+", label: "Awards & Recognitions", icon: <Trophy className="w-8 h-8" /> },
    { value: "10+", label: "Accelerators & Programs", icon: <Rocket className="w-8 h-8" /> },
    { value: "5+", label: "Govt & Institutional Platforms", icon: <Building2 className="w-8 h-8" /> },
    { value: "Countless", label: "Investors & Believers", icon: <Users className="w-8 h-8" /> }
  ];

  const trademarks = [
    { id: "12818717", name: "ClimMaTech", desc: "Predicting the unpredictable" },
    { id: "12834757", name: "Aagah", desc: "Early warning app" },
    { id: "12852093", name: "Sachet", desc: "Flood early warning system" },
    { id: "12852068", name: "Tarang", desc: "Radar-based flow monitoring device" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: 'sans-serif' }}>
      <Navigation />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold tracking-tight"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}
              >
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Achievements.</span>
              </motion.h1>
              <p className="text-xl text-slate-500 font-medium">Recognition that drives our mission forward.</p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border-2 border-cyan-100 p-6 rounded-[32px] shadow-sm flex items-center gap-6"
            >
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center">
                <BadgeCheck className="w-10 h-10 text-cyan-600" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest font-bold text-cyan-600 mb-1">Global Standard</div>
                <div className="text-2xl font-bold text-slate-900">16+ Honors</div>
                <div className="text-sm text-slate-500">and counting worldwide</div>
              </div>
            </motion.div>
          </div>

          {/* Intellectual Property Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-[40px] p-8 md:p-10 border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold">Patents</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded-full">Granted</span>
                        <span className="text-sm font-mono text-slate-500">ID: 578346</span>
                      </div>
                      <h3 className="font-bold text-lg text-slate-900 leading-tight">
                        A SYSTEM AND A METHOD FOR NON CONTACT FLOOD MONITORING AND WARNING
                      </h3>
                      <p className="text-xs text-slate-500">
                        Granted to: IIT Mandi | Inventors: Dr. Vivek Gupta & team
                      </p>
                    </div>
                    {/* Patent Image Preview - Click to open modal */}
                    <div 
                      onClick={() => setIsModalOpen(true)}
                      className="w-full md:w-32 h-40 relative rounded-lg overflow-hidden border border-slate-100 shadow-inner group cursor-pointer"
                    >
                       <Image 
                         src="/website/image.png" 
                         alt="Patent Certificate - Climmatech"
                         fill
                         className="object-cover transition-transform duration-500 group-hover:scale-110"
                       />
                       <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <Search className="text-white w-6 h-6" />
                       </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-full">Published</span>
                    <span className="text-sm font-mono text-slate-500">ID: 202511078003</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 leading-tight">
                    METHOD AND SYSTEM FOR REAL-TIME RIVER DISCHARGE MONITORING AND FLOOD FORECASTING
                  </h3>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-[40px] p-8 md:p-10 border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-8">
                <Target className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold">Trademarks</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {trademarks.map((tm, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm group hover:border-blue-200 transition-all">
                    <div className="text-[10px] font-mono text-slate-400 mb-1">REG: {tm.id}</div>
                    <div className="font-bold text-blue-600 mb-1">{tm.name}</div>
                    <div className="text-xs text-slate-500 leading-tight">{tm.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-sm text-slate-400 italic">Total 4 Trademarks Registered</div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column: Top Recognitions */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-xl font-bold text-blue-600 flex items-center gap-2 mb-6">
                <Trophy className="w-5 h-5" /> Top Recognitions
              </h2>
              <div className="space-y-4">
                {topRecognitions.map((rec, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-md transition-all group"
                  >
                    <div className="text-2xl font-black text-blue-600/20 group-hover:text-blue-600 transition-colors">0{rec.rank}</div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-slate-900">{rec.title}</h3>
                      <p className="text-sm text-slate-500 leading-tight">{rec.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side: Grid of categories */}
            <div className="lg:col-span-2 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Competitions */}
                <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6 text-blue-600">
                    <Rocket className="w-6 h-6" />
                    <h3 className="text-lg font-bold">Competitions & Pitch Events</h3>
                  </div>
                  <ul className="space-y-4">
                    <AchievementItem title="BuildAI Pitch Event" status="Finalist" />
                    <AchievementItem title="BluePrint @ NLD Synapse 2026" status="Finalist" />
                    <AchievementItem title="YUVA AI – Impact Summit" status="Top 20" />
                    <AchievementItem title="iInventiv 2026 (IIT ISM)" status="Top Startup" />
                    <AchievementItem title="100 Startups Challenge" status="Winner" />
                  </ul>
                </div>

                {/* Grants */}
                <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6 text-blue-600">
                    <DollarSignIcon className="w-6 h-6" />
                    <h3 className="text-lg font-bold">Grants & Scholarships</h3>
                  </div>
                  <ul className="space-y-4">
                    <AchievementItem title="SAMRIDHI 4.0" status="₹2.5L Grant" />
                    <AchievementItem title="CPS Prayas Grant" status="IIT Mandi" />
                    <AchievementItem title="Hyundai Hope Scholarship" status="Winner" />
                    <AchievementItem title="Campus Founders Grant" status="NSRCEL" />
                    <AchievementItem title="MeitY Genesis EIR" status="Fellow" />
                  </ul>
                </div>

                {/* Exhibitions */}
                <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6 text-blue-600">
                    <Milestone className="w-6 h-6" />
                    <h3 className="text-lg font-bold">Government Engagement</h3>
                  </div>
                  <ul className="space-y-4">
                    <AchievementItem title="HIMMET 2025 (DGRE)" status="Top Startup" />
                    <AchievementItem title="SAMARTH 2025 (SDMA)" status="Top Startup" />
                    <AchievementItem title="iInventiv 2026" status="Exhibition" />
                    <AchievementItem title="NLD Synapse 2026" status="Showcase" />
                  </ul>
                </div>

                {/* Selections */}
                <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6 text-blue-600">
                    <Search className="w-6 h-6" />
                    <h3 className="text-lg font-bold">Shortlists & Selections</h3>
                  </div>
                  <ul className="space-y-4">
                    <AchievementItem title="C-CAMP Climate Solutions" status="Shortlisted" />
                    <AchievementItem title="Global Micro Accelerator" status="Top 25 Team" />
                    <AchievementItem title="Climate-KIC Program" status="Selected" />
                  </ul>
                </div>
              </div>

              {/* By The Numbers - Light Theme */}
              <div className="bg-slate-50 rounded-[40px] p-10 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 blur-[100px]" />
                <h3 className="text-2xl font-bold mb-10 flex items-center gap-3 text-slate-900">
                  <BarChartIcon className="w-6 h-6 text-blue-600" /> By The Numbers
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, i) => (
                    <div key={i} className="space-y-2 relative z-10">
                      <div className="text-blue-600/40 mb-2">{stat.icon}</div>
                      <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm text-slate-500 leading-tight font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center italic text-xl text-slate-600 font-medium"
          >
            "Validated by the best. Built to create the <span className="text-blue-600 font-bold not-italic">biggest impact.</span>"
          </motion.div>
        </div>
      </main>

      {/* Patent Certificate Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-md cursor-pointer"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-full aspect-[3/4] md:aspect-auto md:h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full h-full p-2">
                <Image 
                   src="/website/image.png" 
                   alt="Patent Certificate Full View"
                   fill
                   className="object-contain"
                   priority
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

function AchievementItem({ title, status }: { title: string, status: string }) {
  return (
    <li className="flex justify-between items-center group/item border-b border-slate-50 pb-3">
      <span className="text-sm font-medium text-slate-700 group-hover/item:text-blue-600 transition-colors">{title}</span>
      <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full group-hover/item:bg-blue-50 group-hover/item:text-blue-600 transition-all">{status}</span>
    </li>
  );
}

function CpuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  );
}

function DollarSignIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function BarChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}
