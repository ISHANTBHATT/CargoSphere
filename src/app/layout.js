import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CargoSphere",
  description:
    "CargoSphere offers a digital cargo operating system (DCOS). By choosing our Digital Cargo Operating System, one can expect not only improved operational efficiencies but also a significant enhancement in customer satisfaction through faster, more reliable service. Join us in revolutionizing the cargo and logistics industry, setting new standards for what is possible in the digital age. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
