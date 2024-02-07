import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nargetic 3D",
  description: "Proiect de atestat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
