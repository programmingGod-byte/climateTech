// app/layout.tsx
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

// Metadata for Next.js
export const metadata: Metadata = {
  title: 'Climmatech - Smart Flood Prevention for India',
  description:
    'AI-powered real-time flood detection and early warning system designed for Indian monsoons and climate conditions.',
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
    'smart flood management system',
  ],
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.png', // standardized favicon
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Climmatech - Smart Flood Prevention for India',
    description:
      'AI-powered real-time flood detection and early warning system designed for Indian monsoons and climate conditions.',
    url: 'https://climmatech.com',
    siteName: 'Climmatech',
    images: [
      {
        url: 'https://www.climmatech.com/images/social-share.png', // optimized OG image
        width: 1200,
        height: 630,
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
    images: ['https://www.climmatech.com/images/social-share.png'],
  },
};

// Schema Markup
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Climmatech",
  alternateName: "Climmatech India",
  url: "https://climmatech.com",
  logo: "https://www.climmatech.com/images/logo-removebg-preview.png",
  description:
    "AI-powered real-time flood detection and early warning system designed for Indian monsoons and climate conditions",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/climmatech",
    // Add Twitter, Facebook when available
  ],
  contactPoint: {
    "@type": "Phone Number",
    telephone: "+91-7488011618", // replace with actual number
    contactType: "Customer Support",
    areaServed: "IN",
    availableLanguage: "English",
  },
};
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://climmatech.com/#website",
  name: "Climmatech",
  alternateName: "Climmatech India",
  url: "https://climmatech.com",
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
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        {/* Poppins variable font can be used selectively */}
        <div className={poppins.variable}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
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
