import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Nargetic 3D",
  description: "Proiect de atestat",
};

import { cookies } from "next/headers";

import { CookiesProvider } from "next-client-cookies/server";

export default function RootLayout({ children }) {
  return (
    <CookiesProvider>
      <html>
        <body>{children}</body>
      </html>
    </CookiesProvider>
  );
}
