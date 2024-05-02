import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Diversa",
  description: "Accessibility Checker",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-custom-image bg-center bg-cover" lang="en">
      <body className=" bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,1))]" style={{ fontFamily: "Poppins, sans-serif" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
