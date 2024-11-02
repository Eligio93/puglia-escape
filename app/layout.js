import { Inter } from "next/font/google";
import SessionProvider from '@/config/Authentication/SessionProvider'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import {GoogleAnalytics} from '@next/third-parties/google'
import './global.css'


const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
        <GoogleAnalytics gaId="G-5GSNTYQ0MZ" />
      </html>
    </SessionProvider>
  );
}
