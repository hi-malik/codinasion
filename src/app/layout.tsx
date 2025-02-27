import "./globals.css";

import Layout from "@/Layout";

import Favicon from "@/public/favicon/favicon.ico";
import Logo from "@/public/logo.png";
import Manifest from "@/public/favicon/manifest.json";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <meta charSet="utf-8" />
      <link rel="icon" href={`${Favicon.src}`} />
      <meta name="theme-color" content="#000000" />
      <link rel="apple-touch-icon" href={`${Logo.src}`} />
      <link rel="manifest" href={`${Manifest}`} />
      <head />
      <body className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
