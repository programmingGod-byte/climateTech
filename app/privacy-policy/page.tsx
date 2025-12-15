// app/privacy-policy/page.tsx

import type { Metadata } from 'next'
import PrivacyPolicySection from '@/components/privacy-policy-section'
import Navigation from '@/components/navigation'

export const metadata: Metadata = {
  title: 'Privacy Policy | Climmatech',
  description:
    'Read Climmatech’s Privacy Policy to understand how we collect, use, protect, and manage your personal data.',
  keywords: [
    'Climmatech privacy policy',
    'privacy policy Climmatech',
    'data protection India',
    'user data privacy',
    'cookies policy',
    'personal data usage',
    'IIT Mandi startup privacy',
    'website privacy policy India',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Privacy Policy | Climmatech',
    description:
      'Learn how Climmatech collects, uses, and safeguards your personal information.',
    url: 'https://www.climmatech.com/privacy-policy',
    siteName: 'Climmatech',
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <Navigation />
      <PrivacyPolicySection />
    </>
  )
}
