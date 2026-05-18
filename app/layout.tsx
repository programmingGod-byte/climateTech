
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import CustomCursor from '@/components/custom-cursor';

// Fonts
const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://climmatech.com'),
  title: {
    default: 'ClimMaTech | AI Flood Monitoring & River Water Level Sensors India',
    template: '%s | ClimMaTech',
  },
  description:
    'ClimMaTech is India\'s leading AI flood monitoring system. We provide smart IoT flood monitoring, non-contact radar river water level sensors, and solar-powered early warning systems for extreme climate resilience.',
  robots: { 
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
    'radar water level sensor India',
    'river monitoring system India',
    'flood monitoring system India',
    'river monitoring system with camera',
    'non-contact discharge measurement system',
    'solar water level monitoring system',
  ],
  authors: [{ name: 'ClimMaTech India' }],
  creator: 'ClimMaTech',
  publisher: 'ClimMaTech',
  alternates: {
    canonical: 'https://climmatech.com/',
  },
  openGraph: {
    title: 'ClimMaTech | AI Flood Monitoring & River Water Level Sensors India',
    description:
      'ClimMaTech is India\'s leading AI flood monitoring system. We provide smart IoT flood monitoring, non-contact radar river water level sensors, and solar-powered early warning systems for extreme climate resilience.',
    url: 'https://climmatech.com/',
    siteName: 'ClimMaTech India',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/social-share.png',
        width: 1200,
        height: 630,
        alt: 'ClimMaTech – AI & IoT Smart Flood Monitoring System India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClimMaTech | AI Flood Monitoring & River Water Level Sensors India',
    description:
      'ClimMaTech is India\'s leading AI flood monitoring system. We provide smart IoT flood monitoring, non-contact radar river water level sensors, and solar-powered early warning systems for extreme climate resilience.',
    images: ['/images/social-share.png'],
    creator: '@climmatech',
  },
  verification: {
    google: 'your-google-site-verification-code', // Replace when you connect to Google Search Console
  },
};


const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ClimMaTech",
  alternateName: "ClimMaTech India",
  url: "https://climmatech.com/",
  logo: "https://climmatech.com/images/logo-removebg-preview.webp",
  description: "India's leading AI flood monitoring system, providing smart IoT flood monitoring, non-contact radar river water level sensors, and solar-powered early warning systems.",
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
    name: "ClimMaTech",
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://climmatech.com/#website",
  name: "ClimMaTech | AI Flood Monitoring",
  alternateName: "Climmatech India",
  url: "https://climmatech.com/",
  description: "India's leading AI flood monitoring system and IoT river water level sensors.",
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
            {/* <CustomCursor /> */}
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
