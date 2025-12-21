
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Product } from '@/lib/products-data';
import { CheckCircle2, Activity, Zap, Wifi, ArrowLeft, Download, MessageSquare } from 'lucide-react';

interface Props {
    product: Product;
}

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
                                    <span>{product.deviceType}</span>
                                </div>
                                <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter text-slate-900">
                                    {product.name}
                                </h1>
                                <p className="text-2xl text-slate-500 font-light">
                                    {product.tagline}
                                </p>
                            </div>

                            <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-blue-100 pl-6">
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
                                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Power</div>
                                    <div className="text-lg font-medium text-slate-900 flex items-center space-x-2">
                                        <Zap className="w-4 h-4 text-yellow-500" />
                                        <span>Solar</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Comms</div>
                                    <div className="text-lg font-medium text-slate-900 flex items-center space-x-2">
                                        <Wifi className="w-4 h-4 text-blue-500" />
                                        <span>LTE/LoRa</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Build</div>
                                    <div className="text-lg font-medium text-slate-900">IP67</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features (Bento Grid Style) */}
                <section className="py-32 px-4 relative bg-slate-50">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold mb-16 text-center text-slate-900"
                        >
                            Engineered for <span className="text-blue-600">Mission Critical</span> Reliability
                        </motion.h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {product.features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`bg-white border border-slate-200 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 ${idx === 0 || idx === 3 ? "lg:col-span-2" : ""
                                        }`}
                                >
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-slate-900">Feature {idx + 1}</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg">{feature}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900">Technical Specifications</h2>
                            <p className="text-slate-500 mt-4">Detailed breakdown of {product.name}'s capabilities</p>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                            <div className="grid md:grid-cols-2">
                                {Object.entries(product.technicalSpecs).map(([key, value], idx) => (
                                    <div
                                        key={idx}
                                        className={`p-6 border-b border-slate-100 flex flex-col justify-center ${idx % 2 === 0 ? "md:border-r border-slate-100" : ""
                                            }`}
                                    >
                                        <span className="text-xs text-slate-400 uppercase tracking-widest font-mono mb-2">{key}</span>
                                        <span className="text-xl text-slate-900 font-medium">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
