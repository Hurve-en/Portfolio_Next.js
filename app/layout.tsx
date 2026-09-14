import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any"></link>
        </head>
        <body>
          <main className={plusJakarta.className}>{children}</main>
        </body>
      </html>
    </>
  );
}
