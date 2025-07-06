import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hijibiji Interim Committee Announcement',
  description: 'Latest update from the Hijibiji community on interim committee formation.',
  openGraph: {
    title: 'Hijibiji Interim Committee Announcement',
    description: 'Latest update from the Hijibiji community on interim committee formation.',
    images: ['https://i.ibb.co/CKB0fXtV/Screenshot-20250706-073149-Chrome.jpg'],
    url: 'https://hijibiji-interim-committee.netlify.app/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hijibiji Interim Committee Announcement',
    description: 'Latest update from the Hijibiji community on interim committee formation.',
    images: ['https://i.ibb.co/CKB0fXtV/Screenshot-20250706-073149-Chrome.jpg'],
  },
  icons: {
    icon: 'https://i.imghippo.com/files/LPI1470AGU.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
