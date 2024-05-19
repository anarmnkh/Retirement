import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { getServerSession } from "next-auth";
import SessionProvider from "../utils/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Тэтгэвэр төлөвлөлт",
  description: "Generated by create next app",
};

export default async function RootLayout({ 
  children
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <div >
            <Navbar />
            {children}
            <Footer/>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
