import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";

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
  title: "eBasket | Home",
  description: "eBasket Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <div className="md:w-[99%] mx-auto md:grid md:grid-cols-10">
          <div className="hidden md:block md:col-span-2 h-screen border overflow-y-scroll pt-20 overflow-x-hidden">
            <Sidebar/>
          </div>
          <div className="md:col-span-8 md:h-screen md:overflow-y-scroll pt-20">{children}</div>
        </div>
      </body>
    </html>
  );
}
