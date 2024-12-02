import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';
import '../styles/globals.css';

import { Providers } from './providers';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Navbar } from '@/components/navbar';
import { ToastContainer } from 'react-toastify';
import getCurrentUser from '@/services/auth/customer/getCurrentUser';
import { getMe } from '@/services/me';
import { TCustomer } from '@/models/customer';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/logo.svg',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ CurrentUser] = await Promise.all([ getCurrentUser()]);

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ToastContainer />
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <Navbar data={CurrentUser as TCustomer} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
