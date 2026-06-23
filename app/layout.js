import { Inter, DM_Sans, Source_Serif_4 } from "next/font/google";
import SessionProvider from "@/config/Authentication/SessionProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/config/Authentication/authOptions";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--dm-sans" });
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--source-serif",
});

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={`${inter.className} ${dmSans.variable} ${sourceSerif.variable} bg-warm-cream`}
        >
          <Header />
          {children}
          <Footer />
        </body>
        <GoogleAnalytics gaId="G-5GSNTYQ0MZ" />
      </html>
    </SessionProvider>
  );
}
