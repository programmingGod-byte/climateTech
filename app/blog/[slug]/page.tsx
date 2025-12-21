
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { blogPosts } from '@/lib/blog-data';
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin, ChevronRight } from 'lucide-react';

interface Props {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | Climmatech Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            url: `https://climmatech.com/blog/${post.slug}`,
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}

export default function BlogPostPage({ params }: Props) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen relative flex flex-col bg-white">
            <Navigation />

            <main className="flex-grow pt-16">

                {/* Hero Section */}
                <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC0yYy0xLjEgMC0yIC45LTIgMnYyYzAgMS4xLjkgMiAyIDJoMmMxLjEgMCAyLS45IDItMnYtMnptMCAwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>

                    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                        <Link href="/blog" className="inline-flex items-center text-blue-300 hover:text-white mb-8 transition-colors group">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Blog
                        </Link>

                        <div className="flex flex-wrap items-center gap-3 text-sm text-blue-200 mb-6 font-mono tracking-wide">
                            <span className="px-3 py-1 bg-blue-500/30 rounded-full font-medium border border-blue-400/20">{post.category}</span>
                            <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1.5" /> {post.date}
                            </span>
                            <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                            <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1.5" /> {post.readTime}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8 max-w-4xl tracking-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-4">
                            <div className="h-14 w-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold ring-4 ring-blue-500/30 shadow-lg shadow-blue-900/50">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <p className="font-bold text-lg text-white">{post.author}</p>
                                <p className="text-blue-300 text-sm font-medium">Climmatech Editor</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">

                    {/* Lead Paragraph */}
                    <div className="mb-12 pb-12 border-b border-gray-100">
                        <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed font-light text-center text-balance">
                            {post.excerpt}
                        </p>
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-lg md:prose-xl max-w-none prose-slate
                            prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
                            prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:mt-16 prose-h2:mb-6
                            prose-p:text-slate-700 prose-p:leading-8 prose-p:mb-8
                            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-blue-800
                            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-slate-800
                            prose-li:text-slate-700
                            prose-img:rounded-2xl prose-img:shadow-xl
                        "
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Share Section */}
                    <div className="mt-16 pt-10 border-t border-gray-200">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                            <span className="text-lg font-bold text-slate-900">Share this article</span>
                            <div className="flex items-center gap-3">
                                <button className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-all hover:scale-110">
                                    <Facebook className="w-5 h-5" />
                                </button>
                                <button className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-400 transition-all hover:scale-110">
                                    <Twitter className="w-5 h-5" />
                                </button>
                                <button className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 transition-all hover:scale-110">
                                    <Linkedin className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Author Bio */}
                    <div className="mt-16 p-8 bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl border border-blue-100/50">
                        <div className="flex flex-col sm:flex-row items-start gap-6">
                            <div className="h-20 w-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-3xl font-bold text-white flex-shrink-0 shadow-lg shadow-blue-200">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">About {post.author}</h4>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    {post.author} is a climate technology expert and technical writer at Climmatech. With over a decade of experience in environmental monitoring systems, they specialize in translating complex hydrological concepts into actionable insights for disaster management professionals.
                                </p>
                            </div>
                        </div>
                    </div>

                </article>

                {/* CTA Section */}
                <div className="bg-blue-600 text-white py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 mix-blend-overlay"></div>
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full blur-[100px] mix-blend-screen opacity-50"></div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Protect Your Community?</h3>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Learn more about how Climmatech's advanced flood monitoring sensors are saving lives and protecting infrastructure across India.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/products" className="w-full sm:w-auto inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                Explore Our Products
                            </Link>
                            <Link href="/contact" className="w-full sm:w-auto inline-block bg-blue-700 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition-all border border-blue-400 hover:border-blue-300">
                                Request a Demo
                            </Link>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
