import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import LenisProvider from "@/components/lenis-provider";
import BackgroundGradient from "@/components/layout/background-gradient";
import Chatbot from "@/components/chatbot";

export const dynamic = "force-dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amplit.ai"),
  title: {
    default: "Amplit AI - AI That Amplifies Care",
    template: "%s | Amplit AI",
  },
  description:
    "Healthcare AI solutions that handle missed calls, scheduling, and repetitive tasks. Zero missed calls. Faster revenue. Better patient care.",
  keywords: [
    "dental AI software",
    "AI for dental clinics",
    "dental voice AI",
    "automated patient scheduling",
    "dental practice automation",
    "missed call AI dental",
    "AI receptionist dental",
    "dental AI United States",
    "dental AI UK",
    "dental AI Australia",
  ],
  authors: [{ name: "Amplit AI" }],
  openGraph: {
    title: "Amplit AI - AI That Amplifies Care",
    description: "Healthcare AI solutions for smarter dental operations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Amplit AI",
              description:
                "AI voice agent for dental clinics — handles missed calls, scheduling, and patient communication.",
              url: "https://www.amplit.ai",
              applicationCategory: "HealthcareApplication",
              audience: {
                "@type": "Audience",
                audienceType: "Dental Clinics",
              },
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3632920243527811');
            fbq('track', 'PageView');
          `,
        }}
      />
      <body className={`${inter.className}  text-[#000000] antialiased`}>
        <LenisProvider>
          <Navigation />
          <BackgroundGradient>
            <main className="min-h-screen">{children}</main>
          </BackgroundGradient>
          <Footer />
          <Chatbot />
        </LenisProvider>
      </body>
    </html>
  );
}
