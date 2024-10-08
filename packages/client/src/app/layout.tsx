import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Sidebar } from "./_components/sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <>
          <Sidebar />
          <>
            {/* ========== MAIN CONTENT ========== */}
            <main id="content" className="lg:ps-[260px] pt-[59px] lg:pt-0">
              <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-5 bg-slate-50">
                {/* Card */}
                {/* <div className="p-4 flex flex-col justify-center h-72 md:h-96 min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-40px)] bg-white border border-gray-200 shadow-sm rounded-xl">
                  <div className="relative h-full  rounded-xl overflow-hidden">
                    <div className="absolute inset-0 size-full">{children}</div>
                  </div>
                </div> */}
                {/* End Card */}
                <div className="flex flex-col justify-center h-72 md:h-96 min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-40px)]">
                  <div className="relative h-full  rounded-xl overflow-hidden">
                    <div className="absolute inset-0 size-full">{children}</div>
                  </div>
                </div>
              </div>
            </main>
            {/* ========== END MAIN CONTENT ========== */}
          </>
        </>
      </body>
    </html>
  );
}
