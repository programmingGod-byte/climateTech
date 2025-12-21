
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

// Fonts
const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'Climmatech – AI Flood Monitoring & Smart IoT Sensors',
    template: '%s | Climmatech',
  },
  description: 
    'Climmatech offers AI-powered flood prediction, real-time IoT flood monitoring, solar and radar water level sensors, and early warning systems tailored for India’s climate challenges.',
  robots: { index: true, follow: true },
  keywords: [
    'Climmatech',
    'Climmatech India',
    'Climmatech flood monitoring',
    'AI flood monitoring system',
    'river water level sensor India',
    'IoT flood monitoring India',
    'smart flood management system',
    'AI flood prediction',
    'early warning system floods',
    'solar flood sensors',
    'radar based flood monitoring',
    'disaster warning siren',
    'river flow monitoring sensor',
    'climate resilience tech',
    'flood prevention solutions',
    'monsoon flood prediction',
    // … keep or add other topical keywords here as required
  ],
  alternates: {
    canonical: 'https://climmatech.com/',
  },
  openGraph: {
    title: 'Climmatech – AI & IoT Flood Monitoring Solutions | Official Site',
    description:
      'Official Climmatech site – AI flood prediction, real-time IoT flood sensors, solar and radar monitoring, and early warning systems for India.',
    url: 'https://climmatech.com/',
    siteName: 'Climmatech',
    type: 'website',
    images: [
      {
        url: 'https://climmatech.com/images/social-share.png',
        width: 1200,
        height: 630,
        alt: 'Climmatech – Smart Flood Monitoring',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Climmatech – AI & IoT Flood Monitoring',
    description:
      'Official Climmatech site featuring advanced flood prediction & monitoring solutions for Indian monsoons.',
    images: ['https://climmatech.com/images/social-share.png'],
  },
};


const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Climmatech",
  alternateName: "Climmatech India",
  url: "https://climmatech.com/",
  logo: "https://climmatech.com/images/logo-removebg-preview.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7488011618",
    contactType: "customer support",
    areaServed: "IN",
    availableLanguage: "English"
  },
  sameAs: [
    "https://www.linkedin.com/company/climmatech",
    "https://twitter.com/climmatech"
  ],
  brand: {
    "@type": "Brand",
    name: "Climmatech",
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://climmatech.com/#website",
  name: "Climmatech",
  alternateName: "Climmatech India",
  url: "https://climmatech.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://climmatech.com/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};





export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        
        <div className={poppins.variable}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
