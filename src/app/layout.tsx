import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import NavHeader from '@/components/nav-header';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'DevOps Portfolio',
  description: 'A portfolio for a DevOps engineer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body text-foreground antialiased'
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <NavHeader />
          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
