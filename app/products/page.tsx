
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { products } from '@/lib/products-data';
import { Zap, Activity, ChevronRight, Waves } from 'lucide-react';

export default function ProductsIndexPage() {
    return (
        <div className="min-h-screen relative flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-200">
            <Navigation />

            <main className="flex-grow pt-24 pb-16 relative overflow-hidden">
                {/* Background Decor */}
                <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] mix-blend-multiply" />
                    <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-[100px] mix-blend-multiply" />
                </div>

                {/* Hero Section */}
                <section className="relative z-10 pt-16 pb-24 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto space-y-6"
                    >
                        <div className="inline-flex items-center space-x-2 bg-white border border-blue-100 rounded-full px-4 py-1.5 text-sm font-medium text-blue-600 shadow-sm">
                            <Waves className="w-4 h-4 text-blue-500" />
                            <span className="tracking-wide uppercase text-xs">The Climmatech Ecosystem</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl  tracking-tight text-slate-900 font-sans">
                            Engineering <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Resilience</span>
                        </h1>

                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
                            Advanced sensors and early warning systems designed to protect communities and infrastructure from the unpredictable.
                        </p>
                    </motion.div>
                </section>

                {/* Products Grid */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    href={`/products/${product.slug}`}
                                    className="group block h-full relative"
                                >
                                    <div className="relative h-full bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col group-hover:-translate-y-1">

                                        {/* Image Area with Gradient */}
                                        <div className="relative h-72 bg-gradient-to-b from-blue-50 to-white p-8 flex items-center justify-center overflow-hidden">

                                            <div className="relative w-full h-full transform group-hover:scale-105 group-hover:-rotate-2 transition-all duration-500 ease-out">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-contain drop-shadow-xl"
                                                />
                                            </div>

                                            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md border border-white/50 px-3 py-1 rounded-full text-xs font-mono text-blue-600 shadow-sm">
                                                {product.deviceType}
                                            </div>
                                        </div>

                                        {/* Card Content */}
                                        <div className="p-8 flex flex-col flex-grow bg-white">
                                            <div className="mb-4">
                                                <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                    {product.name}
                                                </h2>
                                                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                                                    {product.tagline}
                                                </p>
                                            </div>

                                            <p className="text-slate-600 mb-8 line-clamp-3 text-sm leading-relaxed flex-grow border-t border-slate-100 pt-4">
                                                {product.description}
                                            </p>

                                            <div className="mt-auto">
                                                <div className="flex items-center justify-between text-sm group/btn">
                                                    <div className="flex space-x-4">
                                                        <div className="flex items-center space-x-1.5 text-slate-400">
                                                            <Zap className="w-4 h-4" />
                                                            <span className="text-xs">Solar</span>
                                                        </div>
                                                        <div className="flex items-center space-x-1.5 text-slate-400">
                                                            <Activity className="w-4 h-4" />
                                                            <span className="text-xs">Radar</span>
                                                        </div>
                                                    </div>

                                                    <span className="flex items-center text-blue-600 font-bold group-hover/btn:translate-x-1 transition-transform">
                                                        View Specs
                                                        <ChevronRight className="w-4 h-4 ml-1" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="relative z-10 py-16 text-center">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Built for scale. Deployed for impact.</h2>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
