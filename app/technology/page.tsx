import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Metadata } from 'next';
import { Radar, Activity, Video, Database } from 'lucide-react';


export const metadata: Metadata = {
    title: 'Technology | Climmatech',
    description: 'Learn about our non-contact radar sensing, 24GHz Doppler velocity measurement, and AI-integrated vision systems for river monitoring.',
};

export default function TechnologyPage() {
    return (
        <div className="min-h-screen relative flex flex-col bg-white text-slate-900">
            <Navigation />

            <main className="flex-grow pt-24 pb-20">
                <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                            Next-Generation <span className="text-blue-600">Sensing Technology</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                            Our integrated systems combine multi-frequency radar with advanced optical vision to provide the most reliable, non-contact monitoring data available.
                        </p>
                    </div>
                </section>

                <section className="py-20 px-4">
                    <div className="max-w-5xl mx-auto space-y-24">
                        
                        {/* Radar Sensing */}
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-full space-y-6">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                                    <Radar className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900">Radar Water Level Monitoring</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Our high-frequency 61 GHz FMCW radar ensures millimeter-level accuracy (±1 mm) in measuring water depths up to 30 meters. Operating entirely non-contact, it eliminates maintenance issues associated with submerged sensors, providing continuous measurement of river water level.
                                </p>
                            </div>
                        </div>

                        {/* Velocity Measurement */}
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-full space-y-6">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                                    <Activity className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900">Surface Flow Velocity Monitoring</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    By analyzing the Doppler shift of returning radar waves, our 24 GHz sensor accurately measures surface flow velocity from 0.02 to 20 m/s. This allows for reliable discharge calculations even during turbulent or debris-heavy floods, operating fully in non-contact mode.
                                </p>
                            </div>
                        </div>

                        {/* Vision Monitoring */}
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-full space-y-6">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                                    <Video className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900">Optical Vision Integration</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    An industrial 1080p Full-HD camera is built into the same housing as the radar sensors. It provides real-time visual confirmation, automated periodic image capture, and live streaming capabilities to document river flow patterns, debris movement, and flood events.
                                </p>
                            </div>
                        </div>

                        {/* Integrated Systems */}
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-full space-y-6">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                                    <Database className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900">Robust Data Telemetry & Logging</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Powered by an ARM Cortex-M7 embedded processor, our onboard data logger features local network buffering during outages. The system boasts fail-safe multi-network telemetry (4G LTE / GSM / LoRa / Wi-Fi), automatically switching networks to guarantee data transmission.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
