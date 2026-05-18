'use client';

import { Card, CardContent } from '@/components/ui/card';
import { 
  Cpu, 
  CircuitBoard, 
  Layers, 
  Code2, 
  Box, 
  Palette, 
  Mountain, 
  ShieldCheck, 
  Zap, 
  Users2, 
  Activity,
  Mail,
  Linkedin
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ParticleStars from './particle-stars';

export default function TeamSection() {

  const leadership = [
    {
      name: "Dharkan Anand",
      role: "CEO",
      expertise: "Vision · Strategy · Growth · Market · Business ",
      image: "/images/dharkan.png",
      icon: <Activity className="w-5 h-5 text-blue-500" />,
      description: "Alumni’25 - B.Tech in CE with specialization in Entrepreneurship IIT Mandi - India",
      email: "dharkan@climmatech.life",
      linkedin: "https://www.linkedin.com/in/dharkananand/"
    },
    {
      name: "Dr. Vivek Gupta",
      role: "CIO",
      expertise: "Research · Innovation · Domain Expertise",
      image: "/website/vivekgupta.png",
      icon: <Activity className="w-5 h-5 text-blue-500" />,
      description: "Co-Founder & CIO, Assistant Prof., SCEnE - IIT Mandi, India",
      email: "admin@climmatech.life",
      linkedin: "https://www.linkedin.com/in/dr-vivek-gupta/"
    },
    {
      name: "Om Maheshwari",
      role: "CTO",
      expertise: "AI Systems · Architecture · Technology",
      image: "/images/om.png",
      icon: <Activity className="w-5 h-5 text-blue-500" />,
      description: "Co-founder & CTO, BTech in VLSI, IIT Mandi - India",
      email: "om@climmatech.life",
      linkedin: "https://www.linkedin.com/in/om-maheshwari-8a4996299/"
    },
    {
      name: "Kunal Mittal",
      role: "Lead Electronics",
      expertise: "Embedded Systems · PCB Design · IoT Hardware",
      image: "/kunal.png",
      icon: <Activity className="w-5 h-5 text-blue-500" />,
      description: "Lead - Electronics, BTech in VLSI, IIT Mandi - India",
      email: "admin@climmatech.life",
      linkedin: "https://www.linkedin.com/in/thekunalmittal/"
    },
    {
      name: "Siddik Barbhuiya",
      role: "LEAD Hydrologist",
      expertise: "Flood Modeling · River Hydraulics · Computational Hydrology",
      image: "/website/siddik Barbhujya.png",
      icon: <Activity className="w-5 h-5 text-blue-500" />,
      description: "PhD in Hydrology leading river modeling and computational hydraulics.",
      email: "admin@climmatech.life",
      linkedin: "https://www.linkedin.com/in/siddik-barbhuiya-65888871/"
    },
    {
      name: "Shivam kumar",
      role: "SDE",
      expertise: "Full Stack Development",
      image: "/images/shivamimage.png",
      icon: <Activity className="w-5 h-5 text-blue-500" />,
      description: "SDE - Full Stack Development, specialized in scalable cloud architectures.",
      email: "admin@climmatech.life",
      linkedin: "https://www.linkedin.com/in/privacyismyth/"
    }
  ];

  const coreTeamStats = [
    { label: "Electronics Engineers", count: "2+", icon: <Cpu className="w-6 h-6" /> },
    { label: "PCB Design & Testing", count: "2+", icon: <CircuitBoard className="w-6 h-6" /> },
    { label: "Hardware & Design", count: "2+", icon: <Layers className="w-6 h-6" /> },
    { label: "Software Developers", count: "2+", icon: <Code2 className="w-6 h-6" /> },
    { label: "3D / Digital Twin Engineers", count: "1+", icon: <Box className="w-6 h-6" /> },
    { label: "Graphics Designer", count: "1+", icon: <Palette className="w-6 h-6" /> }
  ];

  const whyWeWin = [
    { title: "Built & deployed in the toughest terrains", icon: <Mountain className="w-5 h-5" /> },
    { title: "Cross-domain team: AI + Hydrology + Hardware", icon: <Layers className="w-5 h-5" /> },
    { title: "From research to real-world impact", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Execution-first mindset", icon: <Zap className="w-5 h-5" /> },
    { title: "Young, driven, high-ownership culture", icon: <Users2 className="w-5 h-5" /> }
  ];

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden text-white">
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 z-0"
      />
      <ParticleStars />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              The Team Behind <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Climate Intelligence</span>
            </h2>
            <div className="space-y-2 text-lg text-white/80 font-medium">
              <p>Engineers. Innovators. Problem solvers.</p>
              <p className="text-blue-400">One mission: Make communities climate-resilient.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 relative z-10">
              <span className="text-6xl text-white/10 absolute top-4 left-4 font-serif leading-none">“</span>
              <p className="text-xl text-white/90 leading-relaxed relative z-10 pt-4">
                We combine deep domain expertise with technology to build solutions that work <span className="text-blue-400 font-semibold italic">where it matters most.</span>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Leadership Section */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-px bg-white/10 flex-1" />
                <span className="text-sm font-bold uppercase tracking-wider text-white/40">Leadership</span>
                <div className="h-px bg-white/10 w-12" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {leadership.map((member, i) => (
                  <div
                    key={i}
                    className="group relative h-96 [perspective:1000px]"
                  >
                    <div
                      className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                    >
                      {/* Front Side */}
                      <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center flex flex-col justify-center items-center">
                        <div className="relative w-32 h-32 mb-6">
                          <div className="absolute inset-0 bg-blue-500/20 rounded-full scale-110" />
                          <img
                            src={member.image}
                            alt={member.name}
                            className="relative w-full h-full object-cover rounded-full border-4 border-white/20 shadow-inner"
                          />
                        </div>
                        <h3 className="text-lg font-bold text-white">{member.name}</h3>
                        <p className="text-blue-400 font-semibold text-sm mb-3 uppercase tracking-tighter">{member.role}</p>
                        <p className="text-xs text-white/40 font-medium">{member.expertise}</p>
                      </div>

                      {/* Back Side */}
                      <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-black p-6 rounded-2xl border border-white/10 text-center flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                          {member.description}
                        </p>
                        <div className="flex space-x-4">
                          <a 
                            href={`mailto:${member.email}`}
                            className="p-2 bg-white/10 rounded-full hover:bg-blue-600 transition-colors"
                          >
                            <Mail className="w-5 h-5 text-white" />
                          </a>
                          <a 
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/10 rounded-full hover:bg-blue-600 transition-colors"
                          >
                            <Linkedin className="w-5 h-5 text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Team Stats */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-px bg-white/10 flex-1" />
                <span className="text-sm font-bold uppercase tracking-wider text-white/40">Core Team</span>
                <div className="h-px bg-white/10 w-12" />
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {coreTeamStats.map((stat, i) => (
                    <div key={i} className="text-center group">
                      <div className="w-12 h-12 mx-auto mb-3 bg-white/5 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        {stat.icon}
                      </div>
                      <p className="text-xs font-bold text-white/40 mb-1 uppercase tracking-tighter">{stat.label}</p>
                      <div className="flex items-center justify-center space-x-1 text-blue-400 font-bold">
                        <Users2 className="w-3 h-3" />
                        <span>{stat.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
                    14+ team members across engineering, design & product
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 h-full"
            >
              <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Why This Team Wins
                <div className="h-1.5 w-12 bg-blue-500 mt-2" />
              </h3>
              
              <div className="space-y-8">
                {whyWeWin.map((item, i) => (
                  <div key={i} className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all shrink-0">
                      {item.icon}
                    </div>
                    <p className="text-white/80 font-medium pt-2 leading-tight">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 bg-blue-600/20 backdrop-blur-md rounded-2xl p-6 text-white overflow-hidden relative border border-white/10 shadow-2xl"
        >
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 px-4">
            <div className="flex items-center space-x-4">
              <Users2 className="w-8 h-8" />
              <span className="text-lg font-bold">One team. One mission.</span>
            </div>
            <div className="h-px md:h-8 md:w-px bg-white/20" />
            <p className="text-white/80 font-medium text-center md:text-left">
              Building the intelligence layer for a <span className="text-cyan-400 font-bold">climate-resilient future.</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}