import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Metadata } from 'next';
import Image from 'next/image';
import { Target, TrendingUp, ShieldCheck } from 'lucide-react';


export const metadata: Metadata = {
    title: 'Case Studies | Climmatech',
    description: 'Read our deployment case studies, including the IIT Mandi early warning system.',
};

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen relative flex flex-col bg-slate-50 text-slate-900">
            <Navigation />

            <main className="flex-grow pt-24 pb-20">
                <section className="py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6">
                            Proven in the <span className="text-blue-600">Field</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                            Discover how Climmatech's deployment of our Radar + Vision non-contact monitoring systems provides critical early warnings to protect communities.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        {/* IIT Mandi Case Study */}
                        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-full p-8 md:p-12 flex flex-col justify-center">
                                    <div className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1 rounded-full text-sm mb-6 w-fit">
                                        Government Infrastructure
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">IIT Mandi Deployment</h2>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                        Partnered with local authorities, Climmatech installed a highly resilient Integrated River Monitoring Unit (Radar + Vision) at strategic choke points near IIT Mandi to provide 
                                        crucial real-time data for flood preparedness in mountainous terrain.
                                    </p>
                                    
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <Target className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-lg">The Challenge</h4>
                                                <p className="text-slate-600 mt-1">Flash floods in the region occur unpredictably, rendering manual monitoring impossible and traditional contact-sensors useless due to debris and extremely high flow turbulence.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-lg">The Solution</h4>
                                                <p className="text-slate-600 mt-1">We deployed a completely non-contact solution—integrating a 61GHz FMCW radar for level, a 24GHz Doppler for velocity, and a 1080p camera to validate debris loads. The system operates fully off-grid using solar power.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <TrendingUp className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-lg">The Result</h4>
                                                <p className="text-slate-600 mt-1">100% data uptime during the monsoon season. Real-time visual and numerical telemetry allowed authorities to correctly estimate discharge rates and successfully trigger downstream alerts 45 minutes prior to peak flood conditions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
