import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Climmatech - Smart Flood Prevention for India',
  description:
    'AI-powered real-time flood detection and early warning system designed for Indian monsoons and climate conditions.',

  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },

  keywords: [
    'flood monitoring system',
    'river water level sensor',
    'solar flood sensor',
    'radar based flood monitoring',
    'early warning system floods',
    'IoT flood monitoring India',
    'disaster warning siren',
    'AI flood prediction',
    'river flow monitoring sensor',
    'smart flood management system'
  ],
  
  openGraph: {
    title: 'Climmatech - Smart Flood Prevention for India',
    description:
      'AI-powered real-time flood detection and early warning system designed for Indian monsoons and climate conditions.',
    url: 'https://climmatech.com',
    siteName: 'Climmatech',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Climmatech Logo',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Climmatech - Smart Flood Prevention for India',
    description:
      'AI-powered real-time flood detection and early warning system',
    images: ['/icon.png'],
  },
};


// Organization Schema Markup
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Climmatech",
  "alternateName": "Climmatech India",
  "url": "https://climmatech.com",
  "logo": "https://www.climmatech.com/images/logo-removebg-preview.png", // Update with your actual logo URL
  "description": "AI-powered real-time flood detection and early warning system designed for Indian monsoons and climate conditions",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "sameAs": [
    // Add your social media profiles here when available
    // "https://twitter.com/climmatech",
    "https://www.linkedin.com/company/climmatech",
    // "https://www.facebook.com/climmatech"
  ]
};

// Website Schema Markup
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Climmatech",
  "url": "https://climmatech.com",
  "description": "Smart Flood Prevention Technology for India",
  "publisher": {
    "@type": "Organization",
    "name": "Climmatech"
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
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`${inter.className} ${poppins.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}