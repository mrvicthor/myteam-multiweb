import "swiper/swiper.min.css";
import "../styles/globals.css";
import { Header, Footer } from "./components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-[#014E56]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
