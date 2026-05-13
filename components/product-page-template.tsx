'use client';

import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Product } from '@/lib/products-data';
import { CheckCircle2, Activity, Zap, Wifi, ArrowLeft, Download, MessageSquare, ChevronRight, FileText, HelpCircle, Layers, Settings2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation as SwiperNavigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


interface Props {
    product: Product;
}

const FeatureItem = ({ feature, idx }: { feature: string; idx: number }) => {
    const [isOpen, setIsOpen] = useState(idx === 0);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 flex items-center justify-between text-left group"
            >
                <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <span className="text-lg font-bold">{idx + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
                        {feature.split(':')[0] || `Key Feature ${idx + 1}`}
                    </h3>
                </div>
                <ChevronRight className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-90 text-blue-600' : ''}`} />
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="px-24 pb-8">
                            <p className="text-slate-600 leading-relaxed text-lg" style={{ fontFamily: 'sans-serif' }}>
                                {feature.includes(':') ? feature.split(':').slice(1).join(':') : feature}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function ProductPageTemplate({ product }: Props) {
    return (
        <div className="min-h-screen relative flex flex-col bg-white text-slate-900 selection:bg-blue-100">
            <Navigation />

            <main className="flex-grow pt-20">
                {/* Back Button */}
                <div className="fixed top-24 left-4 z-40 hidden xl:block">
                    <Link href="/products" className="p-3 rounded-full bg-white/80 backdrop-blur border border-slate-200 text-slate-500 hover:text-blue-600 hover:shadow-md transition-all group">
                        <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Hero / Overview Section */}
                <section className="relative min-h-[90vh] flex flex-col lg:flex-row">

                    {/* Visual Side (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative min-h-[50vh] lg:min-h-auto bg-gradient-to-br from-blue-50 to-cyan-50 border-r border-slate-100 flex items-center justify-center p-12 overflow-hidden"
                    >
                        {/* Background FX */}
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[80px] pointer-events-none mix-blend-overlay" />

                        <div className="relative w-full h-[60vh] lg:h-[70vh]">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain drop-shadow-2xl z-10"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Content Side (Right) */}
                    <div className="lg:w-1/2 flex items-center p-8 lg:p-20 relative bg-white">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-xl mx-auto lg:mx-0 space-y-10"
                        >
                            <div className="space-y-4">
                                <div className="inline-flex items-center space-x-2 text-blue-600 font-mono text-sm tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full w-fit">
                                    <Activity className="w-4 h-4" />
                                    <span style={{ fontFamily: 'sans-serif' }}>{product.deviceType}</span>
                                </div>
                                <h1 className="tracking-tighter bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400', fontSize: '60px' }}>
                                    {product.name}
                                </h1>
                                <p className="text-2xl text-slate-500 font-light" style={{ fontFamily: 'sans-serif' }}>
                                    {product.tagline}
                                </p>
                            </div>

                            <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-blue-100 pl-6" style={{ fontFamily: 'sans-serif' }}>
                                {product.description}
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link
                                    href="/contact"
                                    className="flex-1 sm:flex-none text-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-200"
                                >
                                    <MessageSquare className="w-5 h-5" />
                                    <span>Inquire Now</span>
                                </Link>
                                <button className="flex-1 sm:flex-none px-8 py-4 rounded-xl font-medium border-2 border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center space-x-2 text-slate-600">
                                    <Download className="w-5 h-5" />
                                    <span>Datasheet</span>
                                </button>
                            </div>

                            {/* Key Metrics Mini-Grid */}
                            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-100">
                                <div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1" style={{ fontFamily: 'sans-serif' }}>Power</div>
                                    <div className="text-lg font-medium text-slate-900 flex items-center space-x-2" style={{ fontFamily: 'sans-serif' }}>
                                        <Zap className="w-4 h-4 text-yellow-500" />
                                        <span>Solar</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1" style={{ fontFamily: 'sans-serif' }}>Comms</div>
                                    <div className="text-lg font-medium text-slate-900 flex items-center space-x-2" style={{ fontFamily: 'sans-serif' }}>
                                        <Wifi className="w-4 h-4 text-blue-500" />
                                        <span>LTE/LoRa</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1" style={{ fontFamily: 'sans-serif' }}>Build</div>
                                    <div className="text-lg font-medium text-slate-900" style={{ fontFamily: 'sans-serif' }}>IP67</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Slideshow Section */}
                {product.slideshow && product.slideshow.length > 0 && (
                    <section className="py-20 bg-white border-t border-slate-100">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="text-center mb-12">
                                <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400', fontSize: '42px' }}>
                                    How It Works
                                </h2>
                                <p className="text-slate-500" style={{ fontFamily: 'sans-serif' }}>Visual walkthrough of the system and its integration</p>
                            </div>
                            <div className="max-w-5xl mx-auto">
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, SwiperNavigation]}
                                    className="rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
                                >
                                    {product.slideshow.map((img, i) => (
                                        <SwiperSlide key={i}>
                                            <div className="relative h-[400px] md:h-[600px] w-full bg-white">
                                                <Image
                                                    src={img}
                                                    alt={`How it works ${i + 1}`}
                                                    fill
                                                    className="object-contain p-8"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </section>
                )}

                {/* Features (Bento Grid Style) */}
                <section className="py-32 px-4 relative bg-slate-50">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-16 text-center"
                            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400', fontSize: '48px' }}
                        >
                            Engineered for Mission Critical Reliability
                        </motion.h2>

                        <div className="max-w-4xl mx-auto space-y-4">
                            {product.features.map((feature, idx) => (
                                <FeatureItem key={idx} feature={feature} idx={idx} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400', fontSize: '42px' }}>Technical Specifications</h2>
                            <p className="text-slate-500 mt-4" style={{ fontFamily: 'sans-serif' }}>Detailed breakdown of {product.name}'s capabilities</p>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                            <div className="grid md:grid-cols-2">
                                {Object.entries(product.technicalSpecs).map(([key, value], idx) => (
                                    <div
                                        key={idx}
                                        className={`p-6 border-b border-slate-100 flex flex-col justify-center ${idx % 2 === 0 ? "md:border-r border-slate-100" : ""
                                            }`}
                                    >
                                        <span className="text-xs text-slate-400 uppercase tracking-widest font-mono mb-2" style={{ fontFamily: 'sans-serif' }}>{key}</span>
                                        <span className="text-xl text-slate-900 font-medium" style={{ fontFamily: 'sans-serif' }}>{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                {/* --- NEW SECTIONS APPENDED AUTOMATICALLY --- */}
                {/* Overview List */}
                {product.overviewList && (
                    <section className="py-16 bg-slate-50 border-t border-slate-100">
                        <div className="max-w-5xl mx-auto px-4">
                            <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400', fontSize: '42px' }}>System Overview</h2>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {product.overviewList.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                        <span className="text-slate-700 font-medium" style={{ fontFamily: 'sans-serif' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                )}

                {/* Detailed Specifications Tables */}
                {product.detailedSpecsTables && (
                    <section className="py-24 bg-white border-t border-slate-100">
                        <div className="max-w-5xl mx-auto px-4">
                            <div className="text-center mb-16">
                                <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400', fontSize: '42px' }}>Comprehensive Component Specifications</h2>
                            </div>
                            <div className="space-y-12">
                                {product.detailedSpecsTables.map((table, i) => (
                                    <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                                        <div className="bg-slate-50 px-6 py-4 flex items-center gap-3 border-b border-slate-200">
                                            <Settings2 className="w-6 h-6 text-blue-600 shrink-0" />
                                            <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>{table.category}</h3>
                                        </div>
                                        <div className="divide-y divide-slate-100">
                                            {Object.entries(table.specs).map(([key, value], idx) => (
                                                <div key={idx} className="flex flex-col md:flex-row px-6 py-4 hover:bg-slate-50 transition-colors">
                                                    <span className="md:w-1/3 text-sm font-bold text-slate-500 uppercase tracking-wide mb-1 md:mb-0" style={{ fontFamily: 'sans-serif' }}>{key}</span>
                                                    <span className="md:w-2/3 text-slate-800 text-lg" style={{ fontFamily: 'sans-serif' }}>{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Detailed Descriptions (Long text) */}
                {product.detailedDescriptions && (
                    <section className="py-24 bg-slate-50 border-t border-slate-100">
                        <div className="max-w-4xl mx-auto px-4 space-y-16">
                            <div className="text-center mb-16">
                                <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400', fontSize: '42px' }}>Detailed System Requirements</h2>
                            </div>
                            {product.detailedDescriptions.map((desc, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>{desc.title}</h3>
                                    <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                                        {desc.paragraphs.map((p, idx) => (
                                            <p key={idx} style={{ fontFamily: 'sans-serif' }}>{p}</p>
                                        ))}
                                    </div>
                                    {desc.listItems && (
                                        <ul className="mt-6 space-y-3">
                                            {desc.listItems.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                                    <span className="text-slate-700 text-lg" style={{ fontFamily: 'sans-serif' }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Unique Capabilities & Applications */}
                {(product.uniqueCapabilitiesList || product.applicationsList) && (
                    <section className="py-24 bg-white border-t border-slate-100">
                        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
                            {product.uniqueCapabilitiesList && (
                                <div>
                                    <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400', fontSize: '36px' }}>Unique Capabilities</h2>
                                    <ul className="space-y-4">
                                        {product.uniqueCapabilitiesList.map((cap, i) => (
                                            <li key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm">
                                                <Layers className="w-6 h-6 text-blue-500 shrink-0" />
                                                <span className="text-lg text-slate-700 font-medium" style={{ fontFamily: 'sans-serif' }}>{cap}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {product.applicationsList && (
                                <div>
                                    <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400', fontSize: '36px' }}>Applications</h2>
                                    <ul className="space-y-4">
                                        {product.applicationsList.map((app, i) => (
                                            <li key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm">
                                                <Activity className="w-6 h-6 text-emerald-500 shrink-0" />
                                                <span className="text-lg text-slate-700 font-medium" style={{ fontFamily: 'sans-serif' }}>{app}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* Downloads */}
                {product.downloadsSections && (
                    <section className="py-24 bg-slate-900 text-white border-t border-slate-800">
                        <div className="max-w-5xl mx-auto px-4 text-center">
                            <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-10" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400', fontSize: '42px' }}>Product Downloads</h2>
                            <div className="flex flex-wrap justify-center gap-6">
                                {product.downloadsSections.map((doc, i) => (
                                    <a key={i} href={doc.url} className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-8 py-5 rounded-2xl transition-all border border-white/20 backdrop-blur-sm">
                                        <FileText className="w-6 h-6 text-blue-400" />
                                        <span className="font-semibold text-lg" style={{ fontFamily: 'sans-serif' }}>{doc.name}</span>
                                        <Download className="w-5 h-5 ml-2 opacity-60" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* FAQs */}
                {product.faqSections && (
                    <section className="py-24 bg-white border-t border-slate-100">
                        <div className="max-w-4xl mx-auto px-4">
                            <div className="text-center mb-16">
                                <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400', fontSize: '42px' }}>Frequently Asked Questions</h2>
                            </div>
                            <div className="space-y-6">
                                {product.faqSections.map((faq, i) => (
                                    <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm">
                                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3 mb-4" style={{ fontFamily: 'sans-serif' }}>
                                            <HelpCircle className="w-6 h-6 text-blue-600 shrink-0" /> 
                                            {faq.q}
                                        </h3>
                                        <p className="text-slate-600 text-lg leading-relaxed pl-9" style={{ fontFamily: 'sans-serif' }}>{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
}
