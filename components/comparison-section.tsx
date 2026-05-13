'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  X, 
  Check,
  AlertTriangle, 
  Satellite, 
  Waves, 
  Radio, 
  Landmark, 
  Shield, 
  Clock, 
  WifiOff, 
  Users,
  Cpu,
  Bell,
  Target
} from 'lucide-react';

export default function ComparisonSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const failures = [
    {
      title: "SATELLITE DATA",
      subtitle: "Delayed & Low Resolution",
      icon: Satellite,
      points: ["Low temporal resolution", "Cloud cover dependency", "Delayed by hours", "Not actionable in real-time"]
    },
    {
      title: "CONTACT SENSORS",
      subtitle: "Fail in Extreme Conditions",
      icon: Waves,
      points: ["Get damaged or washed away", "Require maintenance", "Prone to drift & failure", "Data gaps in critical moments"]
    },
    {
      title: "RADAR SYSTEMS",
      subtitle: "Single-Point & Inaccurate",
      icon: Radio,
      points: ["Limited coverage area", "Affected by terrain & clutter", "High false alarm rate", "Not reliable for local impact"]
    },
    {
      title: "GOVERNMENT SYSTEMS",
      subtitle: "Slow & Centralized",
      icon: Landmark,
      points: ["Centralized data processing", "6-24 hour delays", "Limited localization", "Alerts come too late"]
    }
  ];

  const solutionPillars = [
    {
      title: "SMART SENSING",
      desc: "Non-contact, rugged sensors capture real-time environmental data 24/7, in any condition.",
      icon: Waves
    },
    {
      title: "EDGE INTELLIGENCE",
      desc: "AI models run on-edge for instant processing and predictions, even offline.",
      icon: Cpu
    },
    {
      title: "DECISION INTELLIGENCE",
      desc: "Actionable alerts and dashboards empower faster, data-driven decisions.",
      icon: Bell
    }
  ];

  const sideBenefits = [
    { icon: Shield, title: "Always Operational", desc: "Built for extreme environments." },
    { icon: Clock, title: "Real-Time Insights", desc: "15-20 minutes of lead time." },
    { icon: WifiOff, title: "Offline-First", desc: "Works without internet or power." },
    { icon: Users, title: "Actionable Impact", desc: "Protects lives and infrastructure." }
  ];

  const comparisonTable = [
    { feature: "Measurement Method", current: "Contact-based / Satellite", climmatech: "Non-contact Radar + Vision" },
    { feature: "Data Latency", current: "6 - 24 Hours", climmatech: "Real-time (< 60 sec)" },
    { feature: "Early Warning Lead Time", current: "0 - 5 Minutes", climmatech: "15 - 20 Minutes" },
    { feature: "Offline Reliability", current: "Fails without network/grid", climmatech: "Fully autonomous (Solar + Edge AI)" },
    { feature: "Precision", current: "Low / Single-point", climmatech: "Millimeter-level accuracy" },
    { feature: "Deployment", current: "Heavy infrastructure needed", climmatech: "Rapid, non-invasive installation" }
  ];

  return (
    <div ref={containerRef} style={{ fontFamily: 'sans-serif' }} className="relative overflow-hidden">
      {/* Shared Background Parallax Layer */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 z-0"
      />
      {/* 1. WHY SYSTEMS FAIL SECTION */}
      <section className="py-20 relative text-white border-y border-white/10 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}
            >
              Why Current <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Systems Fail</span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/80"
            >
              Existing solutions weren't built for extreme conditions. <span className="font-semibold text-white">They fail when it matters most.</span>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {failures.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/10 rounded-lg text-blue-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h3>
                    <p className="text-xs text-white/50 font-medium">{item.subtitle}</p>
                  </div>
                </div>
                <div className="space-y-3 border-t border-white/10 pt-4">
                  {item.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70 leading-tight">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border-l-4 border-l-red-500 border-y border-r border-white/10 rounded-r-xl p-6 shadow-sm flex items-start gap-4"
          >
            <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-white">
                The result: Critical decisions are made hours too late.
              </h4>
              <p className="text-white/70 mt-1">When minutes matter, delays cost lives, property, and livelihoods.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR SOLUTION SECTION */}
      <section className="py-24 text-white border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div>
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}
                >
                  <span className="text-white">Our Solution:</span> <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Real-Time Climate Intelligence System</span>
                </motion.h2>
                <p className="text-lg text-white/80 leading-relaxed font-sans">
                  ClimMaTech delivers <span className="font-semibold text-white">always-on monitoring</span>, <span className="font-semibold text-white">instant intelligence</span>, and <span className="font-semibold text-white">actionable alerts</span> for water-driven climate risks.
                </p>
              </div>

              <div className="grid gap-8">
                {solutionPillars.map((pillar, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="p-3 bg-white/10 border border-white/10 rounded-xl text-blue-300 shrink-0">
                      <pillar.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{pillar.title}</h3>
                      <p className="text-white/70 leading-relaxed text-sm">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
               {sideBenefits.map((benefit, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 15 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   viewport={{ once: true }}
                   className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-center"
                 >
                   <div className="flex items-center gap-3 mb-2">
                     <benefit.icon className="w-5 h-5 text-blue-400 shrink-0" />
                     <span className="font-semibold text-white">{benefit.title}</span>
                   </div>
                   <p className="text-sm text-white/70">{benefit.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white/5 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 border border-white/10"
          >
            <div className="p-4 bg-white/10 rounded-xl text-blue-300 shrink-0 shadow-sm border border-white/10">
              <Target className="w-8 h-8" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 flex-1 items-center">
              <div>
                <h4 className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  We don't just monitor. <br /><span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">We enable action.</span>
                </h4>
              </div>
              <div className="border-l border-white/10 pl-8 hidden md:block">
                <p className="text-white/80 text-lg leading-relaxed">
                  From raw data to real-time decisions — <span className="font-semibold text-white">when every minute counts.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. COMPARISON TABLE SECTION */}
      <section className="py-24 text-white border-t border-white/10 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
              Strategic Comparison
            </h2>
            <p className="text-slate-600 mt-2" style={{color:"white"}}>Why the world's leading infrastructure trusts Climmatech</p>
          </div>

          <div className="bg-white/5 rounded-2xl border border-white/10 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/10 border-b border-white/10 text-white/70 text-sm uppercase tracking-wider">
                  <th className="p-6 font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>Capability</th>
                  <th className="p-6 font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>Current Systems</th>
                  <th className="p-6 font-semibold text-blue-300" style={{ fontFamily: 'Poppins, sans-serif' }}>ClimMaTech Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm md:text-base">
                {comparisonTable.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="p-6 font-medium text-white">{row.feature}</td>
                    <td className="p-6 text-white/50">
                      <div className="flex items-center gap-3">
                        <X className="w-4 h-4 text-white/30 shrink-0" />
                        <span>{row.current}</span>
                      </div>
                    </td>
                    <td className="p-6 text-white font-medium bg-blue-500/5">
                      <div className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>{row.climmatech}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
