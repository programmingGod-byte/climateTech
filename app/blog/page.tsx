
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { blogPosts } from '@/lib/blog-data';
import { ArrowUpRight, Calendar, User } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Insights | Climmatech',
    description: 'Latest thinking on flood resilience, climate tech, and smart infrastructure.',
};

export default function BlogPage() {
    const featuredPost = blogPosts[0];
    const recentPosts = blogPosts.slice(1);

    return (
        <div className="min-h-screen relative flex flex-col bg-slate-50 relative selection:bg-blue-200">
            <Navigation />

            <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8">

                <div className="max-w-7xl mx-auto space-y-20">
                    {/* Header */}
                    <div className="border-b border-gray-200 pb-8 pt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h1 className="text-6xl font-bold tracking-tight text-slate-900 font-sans mb-4">
                                Insights<span className="text-blue-600">.</span>
                            </h1>
                            <p className="text-xl text-slate-600 max-w-lg">
                                Decoding the complexities of climate change and observing the future of water monitoring.
                            </p>
                        </div>
                        <div className="text-right hidden md:block">
                            <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">
                                {blogPosts.length} Articles Published
                            </p>
                        </div>
                    </div>

                    {/* Featured Post - Large Banner */}
                    <Link href={`/blog/${featuredPost.slug}`} className="group block relative rounded-3xl overflow-hidden aspect-[21/9] bg-slate-900">
                        <div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-700">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                            {/* Fallback pattern for now, imagine a high res image */}
                            <div className="w-full h-full bg-gradient-to-r from-blue-900 to-slate-900 flex items-center justify-center">
                                <span className="text-9xl opacity-10 blur-xl">🌊</span>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 max-w-4xl">
                            <div className="flex items-center space-x-3 text-cyan-400 text-sm font-medium mb-4">
                                <span className="bg-cyan-500/20 px-3 py-1 rounded-full uppercase tracking-wider text-xs border border-cyan-500/30">
                                    Featured Store
                                </span>
                                <span>{featuredPost.date}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 group-hover:underline decoration-cyan-400 underline-offset-8 decoration-2">
                                {featuredPost.title}
                            </h2>
                            <p className="text-lg text-slate-300 line-clamp-2 max-w-2xl mb-6">
                                {featuredPost.excerpt}
                            </p>
                            <div className="flex items-center text-white font-medium group-hover:text-cyan-400 transition-colors">
                                Read Full Story <ArrowUpRight className="ml-2 w-5 h-5" />
                            </div>
                        </div>
                    </Link>

                    {/* Recent Posts Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {recentPosts.map((post) => (
                            <div key={post.slug} className="group flex flex-col h-full">
                                <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-2xl aspect-video mb-6 bg-slate-200 relative">
                                    <div className="absolute inset-0 bg-slate-300 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
                                        {/* Placeholder for image */}
                                        <span className="text-4xl grayscale opacity-30">📰</span>
                                    </div>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                </Link>

                                <div className="flex items-center space-x-3 text-xs font-medium text-slate-500 mb-3 font-mono">
                                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                                    <span>•</span>
                                    <span className="flex items-center text-blue-600"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                                </div>

                                <Link href={`/blog/${post.slug}`} className="block group-hover:text-blue-600 transition-colors">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-snug">
                                        {post.title}
                                    </h3>
                                </Link>

                                <p className="text-slate-600 line-clamp-3 leading-relaxed mb-4 flex-grow">
                                    {post.excerpt}
                                </p>

                                <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-slate-900 border-b border-transparent hover:border-blue-600 hover:text-blue-600 transition-all w-max pb-0.5">
                                    Read Article
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
