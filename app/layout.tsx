import { NavBar } from "./components/NavBar";
import "../styles/globals.css";
import { Poppins, Roboto } from "@next/font/google";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400", "300", "200", "100"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${poppins.className} w-1280 mx-auto`}>
      <head />
      <body>
        <NavBar />
        {children}
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}
