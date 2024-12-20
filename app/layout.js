import Navbar from "@/components/Navbar";
import connectMongo from "@/lib/connectMongo";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata = {
  title: "Austin Dental Care",
  description: "Dental healthcare heart of Austin",
};

export default async function RootLayout({ children }) {
  await connectMongo();
  console.log(process.env.NEXT_PUBLIC_BASE_URL);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="relative">
          <div className="relative z-">{children}</div>

          {/* Add another div for gradient background with a lower z-index, but still above the parent background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d9488_1px,transparent_1px),linear-gradient(to_bottom,#0d9488_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_70%_at_60%_40%,#000_70%,transparent_110%)] opacity-10 z-0" />
        </div>
      </body>
    </html>
  );
}
