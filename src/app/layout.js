import { Poppins, LibreBaskerville } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppins = Poppins({
  variants: ["regular", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
  display: 'swap',
});

const libreBaskerville = LibreBaskerville({
  variants: ["regular", "italic", "700"],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-brand-beige-10" lang="en">
      <body style={{ fontFamily: "'Poppins', sans-serif" }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
