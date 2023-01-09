import "../styles/globals.css";
import { Header } from "./components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-[#012f34]">
        <Header />
        {children}
      </body>
    </html>
  );
}
