import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Gourmet Restaurant",
  description: "Authentic Nigerian and Continental Cuisine",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <main className="pt-16 transition-all duration-300">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}